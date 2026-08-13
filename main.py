import os
from typing import Literal

import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

try:
    from .rag import build_context_prompt, build_fallback_answer, retrieve_context
except ImportError:
    from rag import build_context_prompt, build_fallback_answer, retrieve_context


GEMINI_API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models"
DEFAULT_GEMINI_MODEL = "gemini-3.6-flash"


class ChatMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str = Field(..., min_length=1, max_length=1200)


class ChatRequest(BaseModel):
    messages: list[ChatMessage] = Field(..., min_length=1, max_length=8)


class Source(BaseModel):
    id: str
    title: str
    score: int


class ChatResponse(BaseModel):
    answer: str
    mode: Literal["gemini", "fallback"]
    sources: list[Source]


def get_allowed_origins() -> list[str]:
    configured = os.getenv("ALLOWED_ORIGINS", "").strip()
    if configured:
        return [origin.strip() for origin in configured.split(",") if origin.strip()]
    return [
        "http://localhost:5173",
        "http://localhost:3000",
        "https://*.vercel.app",
    ]


app = FastAPI(
    title="Humayun Portfolio RAG Chatbot",
    version="1.1.0",
    description="FastAPI backend for the portfolio chatbot with lightweight RAG and Gemini.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


def latest_user_message(messages: list[ChatMessage]) -> str:
    for message in reversed(messages):
        if message.role == "user":
            return message.content.strip()
    return ""


def gemini_role(role: str) -> str:
    return "model" if role == "assistant" else "user"


def extract_gemini_text(payload: dict) -> str:
    parts: list[str] = []
    for candidate in payload.get("candidates", []):
        content = candidate.get("content", {})
        for part in content.get("parts", []):
            text = part.get("text")
            if isinstance(text, str) and text.strip():
                parts.append(text.strip())
    return "\n".join(parts).strip()


async def call_gemini(messages: list[ChatMessage], context: str) -> str | None:
    api_key = os.getenv("GOOGLE_API_KEY", "").strip()
    if not api_key:
        return None

    model = os.getenv("GEMINI_MODEL", DEFAULT_GEMINI_MODEL).strip() or DEFAULT_GEMINI_MODEL
    url = f"{GEMINI_API_BASE_URL}/{model}:generateContent"
    system_prompt = (
        "You are Humayun's portfolio assistant. Answer recruiters and visitors using only "
        "the retrieved portfolio context. Be concise, specific, honest, and professional. "
        "Write in plain text only. Do not use Markdown formatting, asterisks, bold text, "
        "headings, tables, or decorative symbols. Use short paragraphs or simple numbered "
        "lines when structure helps. If the answer is not in the context, say you do not "
        "have that detail and suggest contacting Humayun. Mention links only when relevant.\n\n"
        f"Retrieved portfolio context:\n{context}"
    )
    contents = [
        {
            "role": gemini_role(message.role),
            "parts": [{"text": message.content}],
        }
        for message in messages
    ]

    async with httpx.AsyncClient(timeout=35) as client:
        response = await client.post(
            url,
            params={"key": api_key},
            headers={"Content-Type": "application/json"},
            json={
                "systemInstruction": {"parts": [{"text": system_prompt}]},
                "contents": contents,
                "generationConfig": {
                    "temperature": 0.35,
                    "maxOutputTokens": 500,
                },
            },
        )

    try:
        data = response.json()
    except ValueError:
        data = {}

    if response.status_code >= 400:
        message = data.get("error", {}).get("message", "Gemini request failed.")
        raise RuntimeError(message)

    return extract_gemini_text(data)


@app.get("/")
def root() -> dict[str, str]:
    return {
        "service": "Humayun Portfolio RAG Chatbot",
        "status": "ok",
    }


@app.get("/health")
def health() -> dict[str, str | bool]:
    model = os.getenv("GEMINI_MODEL", DEFAULT_GEMINI_MODEL).strip() or DEFAULT_GEMINI_MODEL
    return {
        "status": "ok",
        "gemini_configured": bool(os.getenv("GOOGLE_API_KEY", "").strip()),
        "gemini_model": model,
    }


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    question = latest_user_message(request.messages)
    if not question:
        raise HTTPException(status_code=400, detail="A user message is required.")

    chunks = retrieve_context(question)
    context = build_context_prompt(chunks)
    mode: Literal["gemini", "fallback"] = "gemini"

    try:
        answer = await call_gemini(request.messages, context)
    except Exception as exc:
        print(f"Gemini call failed: {exc}")
        answer = None

    if not answer:
        mode = "fallback"
        answer = build_fallback_answer(chunks)

    return ChatResponse(
        answer=answer,
        mode=mode,
        sources=[Source(id=chunk.id, title=chunk.title, score=chunk.score) for chunk in chunks],
    )