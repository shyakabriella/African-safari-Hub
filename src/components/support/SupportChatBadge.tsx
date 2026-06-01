"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Mail,
  Phone,
  Headphones,
  Send,
  Bot,
  User,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  Sparkles,
  MessageSquareText,
  AlertCircle,
} from "lucide-react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://d.ashbhub.com/api";

const SUPPORT_SESSION_STORAGE_KEY = "ashbhub_support_ai_session_id";
const HUMAN_SUPPORT_SCORE_LIMIT = 5;

type ChatMode = "menu" | "bot" | "live";

type ChatMessage = {
  id: string;
  role: "bot" | "user" | "system";
  text: string;
  score?: number;
  matchedTitle?: string | null;
};

type LiveChatForm = {
  full_name: string;
  hotel_name: string;
  work_email: string;
  message: string;
};

type SupportAiApiResponse = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
  data?: {
    session_id?: string;
    answer?: string;
    matched_knowledge_id?: number | null;
    matched_title?: string | null;
    score?: number;
    suggestions?: string[];
    requires_human?: boolean;
  };
};

const defaultQuickQuestions = [
  "What is AshBHub?",
  "Do you build hotel websites?",
  "Do you support booking engine?",
  "Do you help with digital marketing?",
  "How can I list my hotel?",
];

const thinkingMessages = [
  "Reading your question...",
  "Checking AshBHub knowledge...",
  "Thinking with Gemini...",
  "Preparing a helpful answer...",
];

function normalizeApiUrl(url: string) {
  return String(url || "").replace(/\/+$/, "");
}

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

async function readJsonResponse(response: Response): Promise<SupportAiApiResponse> {
  const text = await response.text();

  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text) as SupportAiApiResponse;
  } catch {
    return {};
  }
}

function getValidationErrorMessage(result: SupportAiApiResponse) {
  if (result?.errors) {
    return Object.values(result.errors).flat().join(" ");
  }

  return result?.message || "Something went wrong. Please try again.";
}

function isHumanSupportRequest(message: string) {
  const q = message.toLowerCase();

  return (
    q.includes("human") ||
    q.includes("agent") ||
    q.includes("admin") ||
    q.includes("live support") ||
    q.includes("support team") ||
    q.includes("talk to someone") ||
    q.includes("call me") ||
    q.includes("contact me")
  );
}

function ThinkingBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-start gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#AD6419]/10 text-[#AD6419]">
        <Bot className="h-4 w-4" />
      </div>

      <div className="max-w-[82%] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">
            {text}
          </span>

          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#AD6419]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#AD6419] [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#AD6419] [animation-delay:300ms]" />
          </div>
        </div>

        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-[#AD6419]/60" />
        </div>
      </div>
    </div>
  );
}

export default function SupportChatBadge() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("menu");

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [botInput, setBotInput] = useState("");
  const [botLoading, setBotLoading] = useState(false);
  const [thinkingIndex, setThinkingIndex] = useState(0);
  const [botError, setBotError] = useState("");
  const [humanSupportSuggested, setHumanSupportSuggested] = useState(false);
  const [humanSupportReason, setHumanSupportReason] = useState("");

  const [quickQuestions, setQuickQuestions] =
    useState<string[]>(defaultQuickQuestions);

  const [botMessages, setBotMessages] = useState<ChatMessage[]>([
    {
      id: createMessageId(),
      role: "bot",
      text: "Hello 👋 I am AshBHub assistant. Ask me about hotel websites, booking engine, digital marketing, safaris, pricing, or how to contact our team.",
    },
  ]);

  const [liveForm, setLiveForm] = useState<LiveChatForm>({
    full_name: "",
    hotel_name: "",
    work_email: "",
    message: "",
  });

  const [liveLoading, setLiveLoading] = useState(false);
  const [liveSuccess, setLiveSuccess] = useState("");
  const [liveError, setLiveError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedSessionId = window.localStorage.getItem(
      SUPPORT_SESSION_STORAGE_KEY
    );

    if (savedSessionId) {
      setSessionId(savedSessionId);
    }
  }, []);

  useEffect(() => {
    if (!botLoading) {
      setThinkingIndex(0);
      return;
    }

    const interval = window.setInterval(() => {
      setThinkingIndex((prev) => (prev + 1) % thinkingMessages.length);
    }, 1400);

    return () => window.clearInterval(interval);
  }, [botLoading]);

  useEffect(() => {
    if (mode === "bot") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [botMessages, botLoading, thinkingIndex, mode]);

  const resetToMenu = () => {
    setMode("menu");
    setLiveSuccess("");
    setLiveError("");
    setBotError("");
  };

  const openBot = () => {
    setMode("bot");
    setBotError("");
  };

  const openLiveSupport = (message?: string) => {
    setMode("live");
    setLiveSuccess("");
    setLiveError("");

    if (message) {
      setLiveForm((prev) => ({
        ...prev,
        message,
      }));
    }
  };

  const handleLiveChange = (field: keyof LiveChatForm, value: string) => {
    setLiveForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setLiveError("");
    setLiveSuccess("");
  };

  const sendBotMessage = async (text?: string) => {
    const message = (text || botInput).trim();

    if (!message || botLoading) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      text: message,
    };

    setBotMessages((prev) => [...prev, userMessage]);
    setBotInput("");
    setBotError("");
    setHumanSupportSuggested(false);

    if (isHumanSupportRequest(message)) {
      const botReply: ChatMessage = {
        id: createMessageId(),
        role: "bot",
        text: "No problem 👍 Please send your name, email, hotel/company name, and message. Our support team will follow up with you.",
      };

      setBotMessages((prev) => [...prev, botReply]);
      setHumanSupportSuggested(true);
      setHumanSupportReason(message);
      openLiveSupport(message);
      return;
    }

    setBotLoading(true);

    try {
      const response = await fetch(
        `${normalizeApiUrl(API_BASE_URL)}/support-ai/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            message,
            session_id: sessionId,
            visitor_name: liveForm.full_name || undefined,
            visitor_email: liveForm.work_email || undefined,
            visitor_hotel: liveForm.hotel_name || undefined,
            source: "support_badge",
          }),
        }
      );

      const result = await readJsonResponse(response);

      if (!response.ok || result?.success === false) {
        throw new Error(getValidationErrorMessage(result));
      }

      const data = result?.data || {};
      const newSessionId = data.session_id || null;
      const answer =
        data.answer ||
        "Thank you for your question. Please request human support so our team can help you better.";
      const score = Number(data.score || 0);
      const matchedTitle = data.matched_title || null;
      const suggestions = Array.isArray(data.suggestions)
        ? data.suggestions.filter(Boolean)
        : [];

      if (newSessionId) {
        setSessionId(newSessionId);
        window.localStorage.setItem(
          SUPPORT_SESSION_STORAGE_KEY,
          newSessionId
        );
      }

      if (suggestions.length > 0) {
        setQuickQuestions(suggestions.slice(0, 5));
      }

      const shouldSuggestHuman =
        Boolean(data.requires_human) || score < HUMAN_SUPPORT_SCORE_LIMIT;

      const botReply: ChatMessage = {
        id: createMessageId(),
        role: "bot",
        text: answer,
        score,
        matchedTitle,
      };

      setBotMessages((prev) => [...prev, botReply]);

      if (shouldSuggestHuman) {
        setHumanSupportSuggested(true);
        setHumanSupportReason(message);

        setBotMessages((prev) => [
          ...prev,
          {
            id: createMessageId(),
            role: "system",
            text: "This question may need a human support team member. You can send your details and our team will follow up.",
          },
        ]);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Network error. Please check API connection.";

      setBotError(errorMessage);
      setHumanSupportSuggested(true);
      setHumanSupportReason(message);

      setBotMessages((prev) => [
        ...prev,
        {
          id: createMessageId(),
          role: "bot",
          text: "Sorry, I could not connect to the AI support server right now. You can still send a support request and our team will contact you.",
        },
      ]);
    } finally {
      setBotLoading(false);
    }
  };

  const submitLiveChat = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLiveLoading(true);
    setLiveSuccess("");
    setLiveError("");

    try {
      const response = await fetch(
        `${normalizeApiUrl(API_BASE_URL)}/contact-messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(liveForm),
        }
      );

      const result = await readJsonResponse(response);

      if (!response.ok || result?.success === false) {
        throw new Error(getValidationErrorMessage(result));
      }

      setLiveSuccess(
        result?.message ||
          "Your message has been sent. Our support team will contact you soon."
      );

      setBotMessages((prev) => [
        ...prev,
        {
          id: createMessageId(),
          role: "system",
          text: "Live support request sent successfully ✅",
        },
      ]);

      setLiveForm({
        full_name: "",
        hotel_name: "",
        work_email: "",
        message: "",
      });

      setHumanSupportSuggested(false);
      setHumanSupportReason("");
    } catch (error) {
      setLiveError(
        error instanceof Error
          ? error.message
          : "Network error. Please check API connection."
      );
    } finally {
      setLiveLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      {open && (
        <div className="mb-4 w-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl sm:w-[380px]">
          <div className="bg-[#AD6419] px-5 py-4 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-5 w-5" />
                  <h3 className="text-sm font-bold">ASHBHUB Support</h3>
                </div>

                <p className="mt-1 text-xs text-white/85">
                  AI assistant and human support for customers 👋
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white/15 p-1.5 transition hover:bg-white/25"
                aria-label="Close support chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {mode !== "menu" && (
            <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
              <button
                type="button"
                onClick={resetToMenu}
                className="flex items-center gap-2 text-xs font-bold text-slate-600 transition hover:text-[#AD6419]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to support menu
              </button>
            </div>
          )}

          {mode === "menu" && (
            <div className="space-y-3 p-4">
              <button
                type="button"
                onClick={openBot}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition hover:border-[#AD6419] hover:bg-orange-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AD6419]/10 text-[#AD6419]">
                  <Bot className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Chat with AI Assistant
                  </p>
                  <p className="text-xs text-slate-500">
                    Ask about AshBHub services
                  </p>
                </div>
              </button>

              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#AD6419] hover:bg-orange-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AD6419]/10 text-[#AD6419]">
                  <Send className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Contact form
                  </p>
                  <p className="text-xs text-slate-500">
                    Open full contact page
                  </p>
                </div>
              </Link>

              <a
                href="mailto:hotelandsafari@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#AD6419] hover:bg-orange-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AD6419]/10 text-[#AD6419]">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Email support
                  </p>
                  <p className="text-xs text-slate-500">
                    hotelandsafari@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+250788471880"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#AD6419] hover:bg-orange-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AD6419]/10 text-[#AD6419]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">Call us</p>
                  <p className="text-xs text-slate-500">+250 788 471 880</p>
                </div>
              </a>

              <a
                href="https://wa.me/250788471880"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl bg-green-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>
            </div>
          )}

          {mode === "bot" && (
            <div className="flex h-[500px] flex-col">
              <div className="border-b border-slate-100 bg-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#AD6419]" />
                  <p className="text-sm font-bold text-slate-900">
                    ASHBHUB Support
                  </p>
                </div>
               
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
                {botMessages.map((message) => (
                  <div key={message.id}>
                    <div
                      className={`flex gap-2 ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      {message.role !== "user" && (
                        <div
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                            message.role === "system"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-[#AD6419]/10 text-[#AD6419]"
                          }`}
                        >
                          {message.role === "system" ? (
                            <AlertCircle className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                      )}

                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-2 text-sm leading-6 ${
                          message.role === "user"
                            ? "bg-[#AD6419] text-white"
                            : message.role === "system"
                            ? "border border-blue-100 bg-blue-50 text-blue-700"
                            : "border border-slate-200 bg-white text-slate-700"
                        }`}
                      >
                        <p>{message.text}</p>

                        {message.role === "bot" && message.matchedTitle && (
                          <p className="mt-2 text-[11px] font-semibold text-slate-400">
                            Matched: {message.matchedTitle}
                          </p>
                        )}
                      </div>

                      {message.role === "user" && (
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {botLoading && (
                  <ThinkingBubble text={thinkingMessages[thinkingIndex]} />
                )}

                {botError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                    {botError}
                  </div>
                )}

                {humanSupportSuggested && (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50 p-3">
                    <p className="text-xs leading-5 text-orange-800">
                      Need more help? Send this question to the human support
                      team.
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        openLiveSupport(
                          humanSupportReason ||
                            "I need help from human support."
                        )
                      }
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#AD6419] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#b98a35]"
                    >
                      <MessageSquareText className="h-4 w-4" />
                      Talk to human support
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-slate-100 bg-white p-3">
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => sendBotMessage(question)}
                      disabled={botLoading}
                      className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-[#AD6419] hover:text-[#AD6419] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {question}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <input
                    type="text"
                    value={botInput}
                    onChange={(e) => setBotInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        sendBotMessage();
                      }
                    }}
                    placeholder="Ask about AshBHub..."
                    disabled={botLoading}
                    className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
                  />

                  <button
                    type="button"
                    onClick={() => sendBotMessage()}
                    disabled={botLoading || !botInput.trim()}
                    className="rounded-full bg-[#AD6419] p-2 text-white transition hover:bg-[#b98a35] disabled:cursor-not-allowed disabled:opacity-60"
                    aria-label="Send chatbot message"
                  >
                    {botLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {mode === "live" && (
            <div className="p-4">
              <div className="mb-4 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">
                  Send message to support team
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  This message will be saved in your Laravel Contact Messages
                  table, then admin can check it from dashboard.
                </p>
              </div>

              {liveSuccess && (
                <div className="mb-3 flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4" />
                  <span>{liveSuccess}</span>
                </div>
              )}

              {liveError && (
                <div className="mb-3 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {liveError}
                </div>
              )}

              <form onSubmit={submitLiveChat} className="space-y-3">
                <input
                  type="text"
                  value={liveForm.full_name}
                  onChange={(e) =>
                    handleLiveChange("full_name", e.target.value)
                  }
                  placeholder="Full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#AD6419] focus:bg-white"
                />

                <input
                  type="text"
                  value={liveForm.hotel_name}
                  onChange={(e) =>
                    handleLiveChange("hotel_name", e.target.value)
                  }
                  placeholder="Hotel / Company name"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#AD6419] focus:bg-white"
                />

                <input
                  type="email"
                  value={liveForm.work_email}
                  onChange={(e) =>
                    handleLiveChange("work_email", e.target.value)
                  }
                  placeholder="Work email"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#AD6419] focus:bg-white"
                />

                <textarea
                  value={liveForm.message}
                  onChange={(e) => handleLiveChange("message", e.target.value)}
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#AD6419] focus:bg-white"
                />

                <button
                  type="submit"
                  disabled={liveLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#AD6419] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#b98a35] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {liveLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Support Request
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#AD6419] text-white shadow-2xl shadow-orange-900/25 transition hover:scale-105 hover:bg-[#b98a35]"
        aria-label="Open support chat"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-7 w-7 transition group-hover:rotate-6" />
        )}

        {!open && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500" />
          </span>
        )}
      </button>
    </div>
  );
}