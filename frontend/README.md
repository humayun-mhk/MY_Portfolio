# Portfolio Frontend

React + Vite portfolio frontend for Vercel.

## Local Development

```bash
npm install
npm run dev
```

## Deploy on Vercel

1. Import the GitHub repository into Vercel.
2. Set the project root directory to `frontend`.
3. Use framework preset `Vite`.
4. Build command: `npm run build`
5. Output directory: `dist`

The chatbot uses this backend by default:

```text
https://humayun-mhk-humayun-portfolio-chatbot.hf.space/chat
```

You can override it with:

```env
VITE_CHAT_API_URL=https://your-space-url.hf.space/chat
```
