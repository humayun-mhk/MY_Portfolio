import { useRef, useState } from "react";

const initialMessage = {
  role: "assistant",
  content:
    "Hi, I can answer questions about Humayun's projects, skills, experience, and fit for AI engineering roles."
};

const quickPrompts = [
  "What is CareerPilot AI?",
  "Which projects show RAG experience?",
  "How can I contact Humayun?"
];

export default function Chatbot({ apiUrl }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  }

  async function sendMessage(value) {
    const content = value.trim();
    if (!content || loading) return;

    const userMessage = { role: "user", content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setStatus("Retrieving portfolio context...");
    scrollToBottom();

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => ["user", "assistant"].includes(message.role))
            .slice(-8)
            .map(({ role, content: messageContent }) => ({ role, content: messageContent }))
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || data.error || "Chat request failed.");
      }

      const assistantMessage = {
        role: "assistant",
        content: data.answer || "I could not generate an answer for that.",
        sources: data.sources || []
      };

      setMessages((current) => [...current, assistantMessage]);
      setStatus(data.mode === "fallback" ? "Backend RAG fallback active. Add OPENAI_API_KEY in Hugging Face for model answers." : "");
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I could not reach the chatbot backend. Check that the Hugging Face Space is running and that the frontend uses the correct /chat URL."
        }
      ]);
      setStatus(error.message);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <button
        className="chat-launcher"
        type="button"
        aria-controls="portfolioChat"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="chat-launcher-mark">AI</span>
        <span>Ask Humayun AI</span>
      </button>

      <aside className={`chat-widget ${open ? "is-open" : ""}`} id="portfolioChat" aria-label="Portfolio AI chatbot" aria-hidden={!open}>
        <div className="chat-header">
          <div>
            <p className="chat-title">Humayun AI Assistant</p>
            <p className="chat-subtitle">Portfolio RAG chatbot</p>
          </div>
          <button className="chat-close" type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>

        <div className="quick-prompts" aria-label="Suggested questions">
          {quickPrompts.map((prompt) => (
            <button type="button" key={prompt} onClick={() => sendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <div className="chat-messages" aria-live="polite">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className="chat-message-wrap">
              <div className={`chat-message ${message.role}`}>{message.content}</div>
              {message.sources?.length ? (
                <div className="chat-sources">
                  {message.sources.slice(0, 4).map((source) => (
                    <span className="chat-source" key={source.id || source.title}>
                      {source.title}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>

        <div className="chat-status" aria-live="polite">
          {loading ? "Thinking..." : status}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <textarea
            className="chat-input"
            rows="1"
            maxLength="1200"
            placeholder="Ask about projects, skills, experience..."
            value={input}
            disabled={loading}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage(input);
              }
            }}
            required
          />
          <button className="button button-primary button-small chat-send" type="submit" disabled={loading}>
            Send
          </button>
        </form>
      </aside>
    </>
  );
}
