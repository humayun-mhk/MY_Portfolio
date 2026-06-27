import { useRef, useState } from "react";

const initialMessage = {
  role: "assistant",
  content:
    "Hi, I am Humayun's portfolio assistant. Ask me about his AI projects, RAG work, tech stack, experience, or hiring fit."
};

const quickPrompts = [
  "Summarize Humayun for an AI Engineer role",
  "Which projects prove RAG experience?",
  "What is his strongest full-stack AI project?",
  "How can I contact him?"
];

export default function Chatbot({ apiUrl }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);
  const modeRef = useRef("Portfolio RAG");
  const canSend = input.trim().length > 0 && !loading;

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
      modeRef.current = data.mode === "fallback" ? "RAG fallback" : "OpenAI + RAG";
      setStatus(data.mode === "fallback" ? "Using backend RAG fallback because the model key is not active." : "");
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

  function clearChat() {
    setMessages([initialMessage]);
    setInput("");
    setStatus("");
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
        <span className="chat-launcher-mark" aria-hidden="true">AI</span>
        <span className="chat-launcher-copy">
          <strong>Ask Humayun AI</strong>
          <small>Portfolio RAG assistant</small>
        </span>
      </button>

      <aside
        className={`chat-widget ${open ? "is-open" : ""}`}
        id="portfolioChat"
        aria-label="Portfolio AI chatbot"
        aria-hidden={!open}
      >
        <div className="chat-header">
          <div className="chat-identity">
            <span className="chat-avatar" aria-hidden="true">AI</span>
            <div>
            <p className="chat-title">Humayun AI Assistant</p>
            <p className="chat-subtitle">
              <span className="status-dot" aria-hidden="true" />
              {modeRef.current}
            </p>
            </div>
          </div>
          <button className="chat-icon-button" type="button" onClick={clearChat}>
            Clear
          </button>
          <button className="chat-close" type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}>
            x
          </button>
        </div>

        <div className="chat-context">
          Answers are grounded in this portfolio, GitHub projects, skills, education, and contact details.
        </div>

        <div className="quick-prompts" aria-label="Suggested recruiter questions">
          {quickPrompts.map((prompt) => (
            <button type="button" key={prompt} onClick={() => sendMessage(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <div className="chat-messages" aria-live="polite">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`chat-message-wrap ${message.role}`}>
              <span className="chat-message-label">{message.role === "assistant" ? "Assistant" : "You"}</span>
              <div className={`chat-message ${message.role}`}>{message.content}</div>
              {message.sources?.length ? (
                <div className="chat-sources">
                  <span>Sources</span>
                  {message.sources.slice(0, 4).map((source) => (
                    <span className="chat-source" key={source.id || source.title}>
                      {source.title}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          {loading ? (
            <div className="chat-message-wrap assistant">
              <span className="chat-message-label">Assistant</span>
              <div className="chat-message assistant typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          ) : null}
          <div ref={messageEndRef} />
        </div>

        <div className="chat-status" aria-live="polite">
          {loading ? "Retrieving relevant portfolio evidence..." : status}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <textarea
            className="chat-input"
            rows="1"
            maxLength="1200"
            placeholder="Ask about projects, skills, experience..."
            value={input}
            aria-label="Ask Humayun AI a question"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                if (!loading) {
                  sendMessage(input);
                }
              }
            }}
            required
          />
          <button className="button button-primary button-small chat-send" type="submit" disabled={!canSend}>
            {loading ? "Wait" : "Send"}
          </button>
        </form>
        <p className="chat-disclaimer">For final hiring decisions, review the linked GitHub repositories and live demos.</p>
      </aside>
    </>
  );
}
