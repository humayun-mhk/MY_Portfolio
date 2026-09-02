---
title: Humayun Portfolio Chatbot Backend
emoji: 🤖
colorFrom: blue
colorTo: gray
sdk: docker
app_port: 7860
pinned: false
--- 

#  Humayun Portfolio Chatbot Backend

FastAPI backend for the portfolio RAG chatbot.


## Endpoints

- `GET /` - service status
- `GET /health` - health check and Gemini configuration status
- `POST /chat` - portfolio chatbot endpoint

## Hugging Face Secrets

Add these in the Space settings:

```env
GOOGLE_API_KEY=your_google_api_key
GEMINI_MODEL=gemini-3.6-flash
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app,http://localhost:5173
```

`GEMINI_MODEL` and `ALLOWED_ORIGINS` are optional.
