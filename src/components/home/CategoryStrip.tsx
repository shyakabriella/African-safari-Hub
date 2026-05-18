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
    href: "/core-solutions/website",
  },
  {
    category: "450+ OTA DISTRIBUTION",
    title: "Online visibility on 450+ OTAs\n(Booking.com, Expedia, Airbnb…)",
    description: "Boost visibility by syncing to major OTAs automatically.",
    avatarSrc:
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=70",
    badge: "450+",
    href: "/core-solutions/otas",
  },
  {
    category: "CHANNEL MANAGER",
    title: "Sync rates & availability\nto stop overbookings",
    description: "One dashboard to update rooms, rates, and availability everywhere.",
    avatarSrc:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=70",
    badge: "SYNC",
    href: "/core-solutions/channel-manager",
  },
  {
    category: "PMS + MARKETING",
    title: "Front desk, invoicing, reports\n+ SEO, Ads & Reviews",
    description: "Run operations smoothly and grow demand with marketing tools.",
    avatarSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=70",
    badge: "GROW",
    href: "/core-solutions/digital-marketing",
  },
  {
    category: "AI INTEGRATIONS",
    title: "Connect your hotel to AI\n(chatbots, smart replies, insights)",
    description:
      "Integrate OpenAI / Gemini / Claude to automate support, generate content, and get smarter performance insights.",
    avatarSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&q=70",
    badge: "AI",
    href: "/core-solutions/ai",
  },
];

function Avatar({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-semibold text-zinc-700 shadow-sm ring-2 ring-white sm:h-12 sm:w-12">
        {alt.slice(0, 1)}
      </div>
    );
  }

  return (
    <div className="h-11 w-11 overflow-hidden rounded-full shadow-sm ring-2 ring-white sm:h-12 sm:w-12">
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

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = null;
  };

  const resumeLater = (ms = 3500) => {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimeoutRef.current = null;
    }, ms);
  };

  const next = () => setActive((p) => (p + 1) % count);
  const prev = () => setActive((p) => (p - 1 + count) % count);

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

  useEffect(() => {
    scrollToIndex(active, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

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

    const onResize = () => {
      scrollToIndex(active, false);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C2D12]/10 via-white/35 to-[#14532D]/10" />

        {/* balanced container: wider than max-w-7xl, but not too wide */}
        <div className="relative mx-auto w-full max-w-[1480px] px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-[0.16em] text-zinc-600">
                CORE SOLUTIONS
              </p>

              <div className="mt-2 h-[4px] w-16 rounded-full bg-[#F59E0B]" />
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={() => {
                  pauseNow();
                  prev();
                  resumeLater(3500);
                }}
                className="rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-zinc-800 ring-1 ring-black/10 transition hover:bg-white"
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
                className="rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-zinc-800 ring-1 ring-black/10 transition hover:bg-white"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="overflow-x-hidden">
            <div
              ref={scrollerRef}
              className="no-scrollbar flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-4 lg:gap-6"
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
                    "snap-start flex-none",
                    "w-[82vw] min-w-[270px] max-w-[380px]",
                    "lg:w-[285px] xl:w-[300px] 2xl:w-[315px]",
                    "stripItemIn transition-transform duration-500 will-change-transform",
                    idx === active
                      ? "ring-2 ring-[#F59E0B]/25 -translate-y-0.5"
                      : "",
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
                              "absolute -right-2 -top-2 inline-flex h-6 items-center justify-center rounded-full px-2 sm:h-7",
                              "text-[11px] font-semibold text-white shadow-sm ring-2 ring-white sm:text-[12px]",
                              badgeClass(it.badge),
                            ].join(" ")}
                          >
                            {String(it.badge)}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[10px] tracking-[0.16em] text-zinc-500 sm:text-[11px] sm:tracking-[0.18em]">
                          {it.category}
                        </p>

                        <h3 className="mt-1 whitespace-pre-line text-[15px] font-semibold leading-[1.2] text-zinc-900 transition-colors group-hover:text-[#B45309] sm:text-[16px]">
                          {it.title}
                        </h3>

                        {it.description && (
                          <p className="mt-1.5 text-[12px] leading-snug text-zinc-600 sm:text-[13px]">
                            {it.description}
                          </p>
                        )}

                        <div className="mt-3 h-[3px] w-9 rounded-full bg-[#F59E0B] transition-all group-hover:w-16 sm:w-10" />
                      </div>
                    </div>
                  </div>
                </CardShell>
              ))}
            </div>
          </div>

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