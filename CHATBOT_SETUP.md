# Portfolio RAG Chatbot Setup

This portfolio uses:

- Vercel for the static frontend.
- Hugging Face Docker Space for the FastAPI backend.
- OpenAI API for generation.
- A lightweight portfolio RAG knowledge base in `backend/rag.py`.

## Files

- `frontend/index.html` - portfolio and chatbot UI.
- `backend/main.py` - FastAPI backend with `/chat`.
- `backend/rag.py` - portfolio RAG chunks and retrieval.
- `backend/requirements.txt` - Python dependencies.
- `backend/Dockerfile` - Hugging Face Docker Space image.
- `backend/README.md` - README metadata template for the Hugging Face Space.

## Hugging Face Space

Create a new Hugging Face Space:

1. Select **Docker** as the SDK.
2. Upload/push the contents of the `backend/` folder to the Space repo.
3. Add these Space secrets/variables:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini
ALLOWED_ORIGINS=https://your-vercel-domain.vercel.app,http://localhost:5173
```

`OPENAI_MODEL` and `ALLOWED_ORIGINS` are optional.

## Frontend

After the Space is live, update this line in `frontend/index.html`:

```js
const CHAT_API_URL = "https://humayun-mhk-humayun-portfolio-chatbot.hf.space/chat";
```

Replace it with your real Hugging Face Space URL.

## Local Backend Test

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 7860
```

From the repo root, use:

```bash
curl -X POST http://localhost:7860/chat \
  -H "Content-Type: application/json" \
  -d "{\"messages\":[{\"role\":\"user\",\"content\":\"What is CareerPilot AI?\"}]}"
```

## Notes

If `OPENAI_API_KEY` is missing, the backend still returns a RAG fallback answer instead of breaking.
