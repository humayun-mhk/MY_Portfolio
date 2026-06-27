---
title: Humayun Portfolio Chatbot Backend
emoji: 🤖
colorFrom: blue
colorTo: gray
sdk: docker
app_port: 7860
pinned: false
---

# Humayun Portfolio Chatbot Backend

FastAPI backend for the portfolio RAG chatbot.

## Endpoints

- `GET /` - service status
- `GET /health` - health check and OpenAI configuration status
- `POST /chat` - portfolio chatbot endpoint

## Hugging Face Secrets

Add these in the Space settings:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app,http://localhost:5173
```

`OPENAI_MODEL` and `ALLOWED_ORIGINS` are optional.
