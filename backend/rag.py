import re
from dataclasses import dataclass


@dataclass(frozen=True)
class PortfolioChunk:
    id: str
    title: str
    content: str
    tags: tuple[str, ...]
    score: int = 0


PORTFOLIO_CHUNKS = [
    PortfolioChunk(
        id="profile",
        title="Profile",
        content=(
            "Muhammad Humayun is an AI/ML Engineer based in Pakistan. He builds "
            "production-minded AI systems, RAG applications, LLM-powered products, "
            "computer vision tools, automation workflows, and backend APIs. He is "
            "open to AI engineering roles and collaborations."
        ),
        tags=("profile", "summary", "ai engineer", "ml engineer"),
    ),
    PortfolioChunk(
        id="contact",
        title="Contact",
        content=(
            "Contact Muhammad Humayun by email at humayunkhann47@gmail.com, GitHub "
            "at https://github.com/humayun-mhk, LinkedIn at "
            "https://linkedin.com/in/humayun-mhk-927407251, or phone at +92 314 081 8147."
        ),
        tags=("contact", "email", "github", "linkedin", "phone"),
    ),
    PortfolioChunk(
        id="education",
        title="Education",
        content=(
            "Muhammad Humayun is pursuing a Bachelor of Science in Computer Science "
            "at the University of Engineering and Technology Mardan from 2023 to 2027."
        ),
        tags=("education", "uet mardan", "computer science"),
    ),
    PortfolioChunk(
        id="skills-ai",
        title="AI and Machine Learning Skills",
        content=(
            "Core skills include Python, JavaScript, SQL, Dart, PyTorch, TensorFlow, "
            "Scikit-learn, NumPy, Pandas, NLP, deep learning, computer vision, "
            "LangChain, LangGraph, CrewAI, RAG, Agentic RAG, prompt engineering, "
            "LoRA, model quantization, embeddings, semantic search, and LLM evaluation."
        ),
        tags=("skills", "ai", "machine learning", "generative ai", "rag"),
    ),
    PortfolioChunk(
        id="skills-platform",
        title="Backend, Data, and Cloud Skills",
        content=(
            "Backend and platform skills include FastAPI, Flask, REST APIs, React, "
            "Tailwind CSS, PostgreSQL, MySQL, SQLite, MongoDB, Pinecone, ChromaDB, "
            "FAISS, AWS, Azure, Docker, CI/CD, GitHub Actions, infrastructure as code, "
            "LLMOps, n8n, API integrations, Linux, VS Code, Jupyter, Google Colab, and Kaggle."
        ),
        tags=("skills", "backend", "cloud", "databases", "devops"),
    ),
    PortfolioChunk(
        id="careerpilot",
        title="CareerPilot AI",
        content=(
            "CareerPilot AI is a full-stack agentic AI career assistant built with React, "
            "FastAPI, LangGraph, PostgreSQL, and ChromaDB. It analyzes resumes, compares "
            "job fit, verifies evidence, generates tailored career assets, tracks applications, "
            "scans GitHub evidence, versions resumes, supports human approval, logs agent traces, "
            "shows analytics, and includes export-ready workflows. GitHub: "
            "https://github.com/humayun-mhk/CareerPilot-AI. Live demo: "
            "https://careerpilot-ai-frontend-h9kh.onrender.com/."
        ),
        tags=("project", "careerpilot", "langgraph", "rag", "full stack"),
    ),
    PortfolioChunk(
        id="healthcare-triage",
        title="AI Healthcare Appointment and Safe Triage Platform",
        content=(
            "AI Healthcare Appointment and Safe Triage Platform is a full-stack healthcare "
            "product with appointment booking, SMTP email notifications, safe AI triage, "
            "specialty routing, RAG-based policy knowledge, doctor dashboards, admin analytics, "
            "human review, audit logs, PostgreSQL, pgvector, React, and FastAPI. GitHub: "
            "https://github.com/humayun-mhk/medical-appointment-triage-ai. Live demo: "
            "https://medical-appointment-triage-ai.vercel.app/."
        ),
        tags=("project", "healthcare", "triage", "appointments", "smtp", "rag"),
    ),
    PortfolioChunk(
        id="multimodal-rag",
        title="Multimodal Vision RAG",
        content=(
            "Multimodal Vision RAG is a multimodal retrieval platform that combines GPT-4o "
            "Vision, FAISS semantic search, FastAPI, and a React chat interface to query PDFs, "
            "images, and text documents. GitHub: https://github.com/humayun-mhk/multimodal-vision-rag."
        ),
        tags=("project", "multimodal", "vision", "rag", "faiss"),
    ),
    PortfolioChunk(
        id="campus-marketplace",
        title="Campus Marketplace",
        content=(
            "Campus Marketplace is a Flutter and Firebase buy-and-sell app for students. "
            "It supports real-time listings, image uploads, authentication, item management, "
            "search, user profiles, WhatsApp integration, phone call integration, and Firebase Storage. "
            "GitHub: https://github.com/humayun-mhk/campus-marketplace."
        ),
        tags=("project", "flutter", "firebase", "mobile"),
    ),
    PortfolioChunk(
        id="traffic-iq",
        title="TrafficIQ Traffic Detection System",
        content=(
            "TrafficIQ is a real-time vehicle detection, tracking, and counting system using "
            "YOLOv8, OpenCV, FastAPI, WebSocket video streams, Python, and a multi-lane analytics dashboard. "
            "GitHub: https://github.com/humayun-mhk/TrafficIQ-End-to-End-Traffic-Detection-System."
        ),
        tags=("project", "computer vision", "yolov8", "opencv", "fastapi"),
    ),
    PortfolioChunk(
        id="medical-rag",
        title="Medical RAG Chatbot",
        content=(
            "Medical RAG Chatbot is a medical QA chatbot using LangChain, OpenAI, Pinecone "
            "vector search, Docker, and AWS EC2/ECR deployment preparation. GitHub: "
            "https://github.com/humayun-mhk/Medical-Chatbot-RAG-LLM."
        ),
        tags=("project", "medical", "rag", "langchain", "pinecone"),
    ),
    PortfolioChunk(
        id="fraudshield",
        title="FraudShield Fraud Detection",
        content=(
            "FraudShield is a real-time credit card fraud detection pipeline with SMOTE class "
            "balancing, model drift monitoring, FastAPI services, Random Forest, Streamlit, and Plotly. "
            "GitHub: https://github.com/humayun-mhk/-FraudShield-Real-Time-Credit-Card-Fraud-Detection."
        ),
        tags=("project", "fraud detection", "machine learning", "fastapi"),
    ),
    PortfolioChunk(
        id="face-recognition",
        title="Real-Time Face Recognition",
        content=(
            "Real-Time Face Recognition is an end-to-end face detection and recognition system "
            "using YOLOv8, FaceNet, MTCNN, Flask-SocketIO, WebSockets, and REST APIs for identity management. "
            "GitHub: https://github.com/humayun-mhk/-Real-Time-Face-Recognition-System."
        ),
        tags=("project", "face recognition", "computer vision", "websockets"),
    ),
    PortfolioChunk(
        id="digital-twin",
        title="AI Digital Twin System",
        content=(
            "AI Digital Twin System is a memory-enhanced LLM system on AWS Bedrock that replicates "
            "personality patterns with FastAPI services, Terraform infrastructure, Next.js, and CloudFront. "
            "GitHub: https://github.com/humayun-mhk/my-ai-twin-orchestrator."
        ),
        tags=("project", "aws bedrock", "digital twin", "fastapi"),
    ),
    PortfolioChunk(
        id="best-fit",
        title="Best Fit Roles",
        content=(
            "Muhammad Humayun is a strong fit for AI Engineer, ML Engineer, Generative AI Engineer, "
            "RAG Engineer, LLM Application Engineer, Computer Vision Engineer, AI Automation Engineer, "
            "and full-stack AI product roles."
        ),
        tags=("roles", "recruiting", "hiring"),
    ),
]


STOP_WORDS = {
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "by",
    "can",
    "for",
    "from",
    "has",
    "he",
    "his",
    "how",
    "i",
    "in",
    "is",
    "it",
    "of",
    "on",
    "or",
    "tell",
    "that",
    "the",
    "this",
    "to",
    "what",
    "with",
    "you",
}


def normalize_text(value: str) -> str:
    cleaned = re.sub(r"https?://\S+", " ", str(value).lower())
    cleaned = re.sub(r"[^a-z0-9+#.\s-]", " ", cleaned)
    return re.sub(r"\s+", " ", cleaned).strip()


def tokenize(value: str) -> list[str]:
    return [
        token
        for token in normalize_text(value).split(" ")
        if len(token) > 2 and token not in STOP_WORDS
    ]


def retrieve_context(query: str, limit: int = 5) -> list[PortfolioChunk]:
    query_tokens = set(tokenize(query))
    phrase = normalize_text(query)
    ranked = []

    for chunk in PORTFOLIO_CHUNKS:
        searchable = f"{chunk.title} {chunk.content} {' '.join(chunk.tags)}"
        normalized_searchable = normalize_text(searchable)
        chunk_tokens = set(tokenize(searchable))
        title = normalize_text(chunk.title)
        score = 0

        for token in query_tokens:
            if token in chunk_tokens:
                score += 3
            if token in title:
                score += 2
            if any(token in normalize_text(tag) for tag in chunk.tags):
                score += 2

        if phrase and phrase in normalized_searchable:
            score += 8

        ranked.append(
            PortfolioChunk(
                id=chunk.id,
                title=chunk.title,
                content=chunk.content,
                tags=chunk.tags,
                score=score,
            )
        )

    selected = [chunk for chunk in sorted(ranked, key=lambda item: item.score, reverse=True) if chunk.score > 0]
    return selected[:limit] if selected else PORTFOLIO_CHUNKS[:limit]


def build_context_prompt(chunks: list[PortfolioChunk]) -> str:
    return "\n\n".join(
        f"[{index}] {chunk.title}\n{chunk.content}"
        for index, chunk in enumerate(chunks, start=1)
    )


def build_fallback_answer(chunks: list[PortfolioChunk]) -> str:
    context_lines = "\n".join(f"- {chunk.title}: {chunk.content}" for chunk in chunks[:3])
    return (
        "I can answer from the portfolio knowledge base, but the OpenAI API key is not configured yet.\n\n"
        f"Relevant context:\n{context_lines}\n\n"
        "To enable full AI answers, add OPENAI_API_KEY as a Hugging Face Space Secret."
    )
