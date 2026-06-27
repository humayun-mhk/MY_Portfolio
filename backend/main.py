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


OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses"
DEFAULT_MODEL = "gpt-4o-mini"


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
    mode: Literal["openai", "fallback"]
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
    version="1.0.0",
    description="FastAPI backend for the portfolio chatbot with lightweight RAG and OpenAI.",
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


def extract_output_text(payload: dict) -> str:
    if isinstance(payload.get("output_text"), str) and payload["output_text"].strip():
        return payload["output_text"].strip()

    parts = []
    for item in payload.get("output", []):
        for content in item.get("content", []):
            text = content.get("text") or content.get("output_text")
            if isinstance(text, str):
                parts.append(text)
    return "\n".join(parts).strip()


async def call_openai(messages: list[ChatMessage], context: str) -> str | None:
    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    if not api_key:
        return None

    model = os.getenv("OPENAI_MODEL", DEFAULT_MODEL).strip() or DEFAULT_MODEL
    input_messages = [
        {
            "role": "developer",
            "content": (
                "You are Humayun's portfolio assistant. Answer recruiters and visitors using only "
                "the retrieved portfolio context. Be concise, specific, honest, and professional. "
                "If the answer is not in the context, say you do not have that detail and suggest "
                "contacting Humayun. Mention links only when relevant.\n\n"
                f"Retrieved portfolio context:\n{context}"
            ),
        },
        *[message.model_dump() for message in messages],
    ]

    async with httpx.AsyncClient(timeout=35) as client:
        response = await client.post(
            OPENAI_RESPONSES_URL,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": model,
                "input": input_messages,
                "max_output_tokens": 500,
                "temperature": 0.35,
                "store": False,
            },
        )

    data = response.json()
    if response.status_code >= 400:
        message = data.get("error", {}).get("message", "OpenAI request failed.")
        raise RuntimeError(message)

    return extract_output_text(data)


@app.get("/")
def root() -> dict[str, str]:
    return {
        "service": "Humayun Portfolio RAG Chatbot",
        "status": "ok",
    }


@app.get("/health")
def health() -> dict[str, str | bool]:
    return {
        "status": "ok",
        "openai_configured": bool(os.getenv("OPENAI_API_KEY", "").strip()),
    }


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest) -> ChatResponse:
    question = latest_user_message(request.messages)
    if not question:
        raise HTTPException(status_code=400, detail="A user message is required.")

    chunks = retrieve_context(question)
    context = build_context_prompt(chunks)
    mode: Literal["openai", "fallback"] = "openai"

    try:
        answer = await call_openai(request.messages, context)
    except Exception as exc:
        print(f"OpenAI call failed: {exc}")
        answer = None

    if not answer:
        mode = "fallback"
        answer = build_fallback_answer(chunks)

    return ChatResponse(
        answer=answer,
        mode=mode,
        sources=[Source(id=chunk.id, title=chunk.title, score=chunk.score) for chunk in chunks],
    )
