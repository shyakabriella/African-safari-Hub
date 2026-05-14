"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Globe, Repeat2, Headset, MonitorCog } from "lucide-react";

// ── swap this URL to use your own background video ───────────────────────────
const HERO_VIDEO_SRC =
  "/video/13439770_1920_1080_60fps.mp4";

const BRAND = {
  orange: "#AD6419",
  orangeDark: "#8E4F13",
  orangeLight: "#F6E9DD",
  green: "#599E1A",
  greenLight: "#EAF4DF",
  cream: "#F7F1E7",
  ink: "#0F172A",
};





export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden h-[80vh]"
    >
      {/* ── background video — change HERO_VIDEO_SRC above to swap ── */}
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* ── plain dark overlay for text readability ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 1, backgroundColor: "rgba(0,0,0,0.55)" }}
      />

      {/* ── main content ── */}
      <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-28 lg:pb-24" style={{ zIndex: 2 }}>
        <div
          className={[
            "flex flex-col items-center transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
        
          {/* headline */}
          <h1
            className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
            style={{ color: "#ffffff" }}
          >
            One Platform.{" "}
            <span style={{ color: BRAND.orange }}>All Bookings.</span>{" "}
            Zero{" "}
            <span
              className="relative inline-block"
              style={{ color: BRAND.orange }}
            >
              Overbookings.
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                style={{ backgroundColor: BRAND.orangeDark, opacity: 0.5 }}
              />
            </span>
          </h1>

          {/* sub-copy */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Website · Booking Engine · Channel Manager · PMS · 450+ OTAs ·
            Payments · Marketing — one connected stack{" "}
            <span className="font-semibold" style={{ color: BRAND.orange }}>
              built for nations hospitality.
            </span>
          </p>

          {/* CTA row */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              id="hero-cta-primary"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all active:scale-[0.98]"
              style={{ backgroundColor: BRAND.orange, boxShadow: "0 4px 24px rgba(173,100,25,0.40)" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BRAND.orangeDark; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = BRAND.orange; }}
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

           
          </div>
        </div>
      </div>

      {/* ── bottom fade-out edge ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04))" }}
      />
    </section>
  );
}
