"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = {
  category: string;
  title: string;
  description?: string;
  avatarSrc: string;
  badge?: string | number;
  href?: string;
};

const ITEMS: Item[] = [
  {
    category: "WEBSITE + BOOKING ENGINE",
    title: "Transform your website into a\n24/7 booking machine",
    description: "Direct bookings, payments, and a modern high-converting website.",
    avatarSrc:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=70",
    badge: "24/7",
    href: "/solutions/website",
  },
  {
    category: "450+ OTA DISTRIBUTION",
    title: "Online visibility on 450+ OTAs\n(Booking.com, Expedia, Airbnb…)",
    description: "Boost visibility by syncing to major OTAs automatically.",
    avatarSrc:
      "https://images.unsplash.com/photo-1551887373-6e07aa1e7b47?auto=format&fit=crop&w=200&q=70",
    badge: "450+",
    href: "/solutions/otas",
  },
  {
    category: "CHANNEL MANAGER",
    title: "Sync rates & availability\nto stop overbookings",
    description: "One dashboard to update rooms, rates, and availability everywhere.",
    avatarSrc:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=70",
    badge: "SYNC",
    href: "/solutions/channel-manager",
  },
  {
    category: "PMS + MARKETING",
    title: "Front desk, invoicing, reports\n+ SEO, Ads & Reviews",
    description: "Run operations smoothly and grow demand with marketing tools.",
    avatarSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=70",
    badge: "GROW",
    href: "/services/digital-marketing",
  },

  // ✅ NEW CARD: AI integrations
  {
    category: "AI INTEGRATIONS",
    title: "Connect your hotel to AI\n(chatbots, smart replies, insights)",
    description:
      "Integrate OpenAI / Gemini / Claude to automate support, generate content, and get smarter performance insights.",
    avatarSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&q=70",
    badge: "AI",
    href: "/solutions/ai",
  },
];

function Avatar({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white ring-2 ring-white grid place-items-center text-zinc-700 text-sm font-semibold shadow-sm">
        {alt.slice(0, 1)}
      </div>
    );
  }

  return (
    <div className="h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function badgeClass(badge?: string | number) {
  const b = String(badge ?? "").toUpperCase();
  if (b === "AI") return "bg-indigo-600";
  return "bg-[#2E7D32]";
}

function CardShell({
  children,
  href,
  className = "",
  style,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const base =
    "group block rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_22px_rgba(0,0,0,0.10)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition-all duration-300";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <div className={`${base} ${className}`} style={style}>
      {children}
    </div>
  );
}

export default function CategoryStrip({
  backgroundSrc = "/images/strip-bg.png",
  items = ITEMS,
  className = "",
}: {
  backgroundSrc?: string;
  items?: Item[];
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = items.length;

  // --- helpers (measure step = card width + gap) ---
  const getStep = () => {
    const el = scrollerRef.current;
    if (!el) return 0;

    const first = el.querySelector<HTMLElement>("[data-strip-card]");
    if (!first) return 0;

    const styles = window.getComputedStyle(el);
    const gap =
      parseFloat(styles.columnGap || "") ||
      parseFloat(styles.gap || "") ||
      16;

    return first.offsetWidth + gap;
  };

  const scrollToIndex = (idx: number, smooth = true) => {
    const el = scrollerRef.current;
    if (!el) return;

    const step = getStep();
    if (!step) return;

    const target = step * idx;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);

    el.scrollTo({
      left: Math.min(target, max),
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const pauseNow = () => {
    setPaused(true);
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = null;
  };

  const resumeLater = (ms = 3500) => {
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimeoutRef.current = null;
    }, ms);
  };

  const next = () => setActive((p) => (p + 1) % count);
  const prev = () => setActive((p) => (p - 1 + count) % count);

  // ✅ Auto-slide (mobile + desktop)
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;
    if (count <= 1) return;

    const id = window.setInterval(() => {
      if (paused) return;
      setActive((p) => (p + 1) % count);
    }, 3200);

    return () => window.clearInterval(id);
  }, [count, paused]);

  // When active changes, scroll there (all sizes)
  useEffect(() => {
    scrollToIndex(active, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Keep active index in sync when user scrolls manually
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let t: number | null = null;

    const onScroll = () => {
      pauseNow();
      resumeLater(4000);

      if (t) window.clearTimeout(t);
      t = window.setTimeout(() => {
        const step = getStep();
        if (!step) return;

        const nextIdx = Math.round(el.scrollLeft / step);
        const clamped = Math.max(0, Math.min(count - 1, nextIdx));
        setActive(clamped);
      }, 80);
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      scrollToIndex(active, false);
    };
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (t) window.clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, active]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <section className={`w-full overflow-x-hidden ${className}`}>
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C2D12]/10 via-white/35 to-[#14532D]/10" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
          {/* Top row: title + controls */}
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.16em] text-zinc-600">
                CORE SOLUTIONS
              </p>
              <div className="mt-2 h-[4px] w-16 rounded-full bg-[#F59E0B]" />
            </div>

            {/* ✅ Desktop controls */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  pauseNow();
                  prev();
                  resumeLater(3500);
                }}
                className="rounded-xl bg-white/90 ring-1 ring-black/10 px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-white transition"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() => {
                  pauseNow();
                  next();
                  resumeLater(3500);
                }}
                className="rounded-xl bg-white/90 ring-1 ring-black/10 px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-white transition"
              >
                Next →
              </button>
            </div>
          </div>

          {/* ✅ One slider for ALL sizes */}
          <div className="-mx-4 px-4 overflow-x-hidden">
            <div
              ref={scrollerRef}
              className="flex gap-4 lg:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 pr-4 touch-pan-x"
              onPointerDown={() => pauseNow()}
              onPointerUp={() => resumeLater(3000)}
              onPointerCancel={() => resumeLater(3000)}
              onTouchStart={() => pauseNow()}
              onTouchEnd={() => resumeLater(3000)}
            >
              {items.map((it, idx) => (
                <CardShell
                  key={`${it.category}-${idx}`}
                  href={it.href}
                  className={[
                    // ✅ width rules: mobile big, desktop compact (shows ~4 cards)
                    "snap-start flex-none w-[82vw] max-w-[360px] min-w-[260px]",
                    "lg:w-[260px] xl:w-[280px]",
                    "stripItemIn transition-transform duration-500 will-change-transform",
                    idx === active ? "ring-2 ring-[#F59E0B]/25 -translate-y-0.5" : "",
                  ].join(" ")}
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <div data-strip-card className="p-4 lg:p-5">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <Avatar src={it.avatarSrc} alt={it.category} />
                        {!!it.badge && (
                          <span
                            className={[
                              "absolute -top-2 -right-2 inline-flex h-6 sm:h-7 items-center justify-center rounded-full px-2",
                              "text-[11px] sm:text-[12px] font-semibold text-white ring-2 ring-white shadow-sm",
                              badgeClass(it.badge),
                            ].join(" ")}
                          >
                            {String(it.badge)}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] text-zinc-500 truncate">
                          {it.category}
                        </p>

                        <h3 className="mt-1 whitespace-pre-line text-[15px] sm:text-[16px] font-semibold leading-[1.2] text-zinc-900 group-hover:text-[#B45309] transition-colors">
                          {it.title}
                        </h3>

                        {it.description && (
                          <p className="mt-1.5 text-[12px] sm:text-[13px] leading-snug text-zinc-600">
                            {it.description}
                          </p>
                        )}

                        <div className="mt-3 h-[3px] w-9 sm:w-10 rounded-full bg-[#F59E0B] group-hover:w-16 transition-all" />
                      </div>
                    </div>
                  </div>
                </CardShell>
              ))}
            </div>
          </div>

          {/* ✅ Dots indicator */}
          <div className="mt-2 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  pauseNow();
                  setActive(i);
                  resumeLater(3500);
                }}
                className={[
                  "h-2.5 rounded-full transition-all",
                  i === active ? "w-8 bg-[#F59E0B]" : "w-2.5 bg-zinc-300",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}