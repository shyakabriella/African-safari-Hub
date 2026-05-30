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
  MessageSquareText,
  Sparkles,
} from "lucide-react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://d.ashbhub.com/api";

type ChatMode = "menu" | "bot" | "live";

type ChatMessage = {
  id: number;
  role: "bot" | "user" | "system";
  text: string;
};

type LiveChatForm = {
  full_name: string;
  hotel_name: string;
  work_email: string;
  message: string;
};

const quickQuestions = [
  "What is AshBHub?",
  "Do you build hotel websites?",
  "Do you support booking engine?",
  "Do you help with digital marketing?",
  "How can I list my hotel?",
];

function normalizeApiUrl(url: string) {
  return String(url || "").replace(/\/+$/, "");
}

function getBotAnswer(question: string): string {
  const q = question.toLowerCase();

  if (
    q.includes("what is") ||
    q.includes("about") ||
    q.includes("ashbhub") ||
    q.includes("ash hub")
  ) {
    return "AshBHub means African Safari and Hotel Booking Hub. We help hotels, lodges, apartments, and safari businesses grow online through hotel websites, direct booking, digital marketing, booking support, and travel technology.";
  }

  if (
    q.includes("website") ||
    q.includes("web") ||
    q.includes("site") ||
    q.includes("design")
  ) {
    return "Yes, AshBHub helps hotels and hospitality businesses get professional websites with room pages, gallery, contact forms, booking links, SEO structure, and mobile-friendly design.";
  }

  if (
    q.includes("booking") ||
    q.includes("engine") ||
    q.includes("reservation") ||
    q.includes("direct")
  ) {
    return "Yes, we support direct booking solutions. The goal is to help hotels receive more direct reservations and reduce full dependence on OTAs.";
  }

  if (
    q.includes("marketing") ||
    q.includes("seo") ||
    q.includes("social") ||
    q.includes("ads") ||
    q.includes("google")
  ) {
    return "Yes, AshBHub supports hotel digital marketing, including SEO, social media content, Google visibility, campaigns, and strategies to increase bookings.";
  }

  if (
    q.includes("pms") ||
    q.includes("channel") ||
    q.includes("ota") ||
    q.includes("expedia") ||
    q.includes("booking.com")
  ) {
    return "AshBHub can support hospitality technology integrations such as PMS, OTA visibility, channel management guidance, and booking workflow improvement depending on the property needs.";
  }

  if (
    q.includes("safari") ||
    q.includes("tour") ||
    q.includes("travel") ||
    q.includes("package")
  ) {
    return "AshBHub also focuses on African safari and travel experiences. We help connect hospitality and safari services so travelers can discover hotels, tours, and travel solutions more easily.";
  }

  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("how much")
  ) {
    return "Pricing depends on what you need: website, booking setup, digital marketing, support, or full hotel technology package. Please send your hotel name and needs, then our team will advise.";
  }

  if (
    q.includes("contact") ||
    q.includes("phone") ||
    q.includes("email") ||
    q.includes("whatsapp")
  ) {
    return "You can contact AshBHub by email at hotelandsafari@gmail.com, phone at +250 788 471 880, or WhatsApp using the chat button.";
  }

  if (
    q.includes("list") ||
    q.includes("register") ||
    q.includes("join") ||
    q.includes("hotel")
  ) {
    return "To list or register your hotel with AshBHub, please send your hotel name, location, contact email, and what support you need. Our team will follow up.";
  }

  return "Thank you for your question. AshBHub supports hotels, safaris, travel businesses, websites, booking tools, and digital marketing. You can ask about hotel websites, booking engine, pricing, digital marketing, or request live support.";
}

export default function SupportChatBadge() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("menu");

  const [botInput, setBotInput] = useState("");
  const [botMessages, setBotMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: "bot",
      text: "Hello 👋 I am AshBHub assistant. Ask me about hotel websites, booking engine, digital marketing, safaris, or how to contact our team.",
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
    if (mode === "bot") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [botMessages, mode]);

  const resetToMenu = () => {
    setMode("menu");
    setLiveSuccess("");
    setLiveError("");
  };

  const sendBotMessage = (text?: string) => {
    const message = (text || botInput).trim();

    if (!message) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      text: message,
    };

    const botReply: ChatMessage = {
      id: Date.now() + 1,
      role: "bot",
      text: getBotAnswer(message),
    };

    setBotMessages((prev) => [...prev, userMessage, botReply]);
    setBotInput("");
  };

  const handleLiveChange = (field: keyof LiveChatForm, value: string) => {
    setLiveForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setLiveError("");
    setLiveSuccess("");
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

      const result = await response.json();

      if (!response.ok) {
        const errors = result?.errors
          ? Object.values(result.errors).flat().join(" ")
          : "";

        throw new Error(
          errors || result?.message || "Failed to send live chat message."
        );
      }

      setLiveSuccess(
        result?.message ||
          "Your message has been sent. Our support team will contact you soon."
      );

      setLiveForm({
        full_name: "",
        hotel_name: "",
        work_email: "",
        message: "",
      });
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
                  <h3 className="text-sm font-bold">AshBHub Support</h3>
                </div>

                <p className="mt-1 text-xs text-white/85">
                  Chatbot and live support for customers 👋
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
                onClick={() => setMode("bot")}
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

              <button
                type="button"
                onClick={() => setMode("live")}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition hover:border-[#AD6419] hover:bg-orange-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AD6419]/10 text-[#AD6419]">
                  <MessageSquareText className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Live chat request
                  </p>
                  <p className="text-xs text-slate-500">
                    Send message to support team
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
            <div className="flex h-[460px] flex-col">
              <div className="border-b border-slate-100 bg-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#AD6419]" />
                  <p className="text-sm font-bold text-slate-900">
                    AshBHub AI Assistant
                  </p>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Trained with basic AshBHub service information.
                </p>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
                {botMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.role === "bot" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#AD6419]/10 text-[#AD6419]">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[82%] rounded-2xl px-4 py-2 text-sm leading-6 ${
                        message.role === "user"
                          ? "bg-[#AD6419] text-white"
                          : "border border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      {message.text}
                    </div>

                    {message.role === "user" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>

              <div className="border-t border-slate-100 bg-white p-3">
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => sendBotMessage(question)}
                      className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-[#AD6419] hover:text-[#AD6419]"
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
                    className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    onClick={() => sendBotMessage()}
                    className="rounded-full bg-[#AD6419] p-2 text-white transition hover:bg-[#b98a35]"
                    aria-label="Send chatbot message"
                  >
                    <Send className="h-4 w-4" />
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#AD6419] focus:bg-white"
                />

                <textarea
                  value={liveForm.message}
                  onChange={(e) => handleLiveChange("message", e.target.value)}
                  placeholder="How can we help you?"
                  rows={4}
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
                      Send Live Chat Request
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