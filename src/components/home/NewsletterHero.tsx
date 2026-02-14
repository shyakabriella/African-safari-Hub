"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  Repeat2,
  MonitorCog,
  Megaphone,
  Headset,
  Check,
} from "lucide-react";

const C = {
  orange: "#AD6419",
  green: "#599E1A",
  cream: "#F7F1E7",
  ink: "#0F172A",
  orangeTint: "#F6E9DD",
  greenTint: "#EAF4DF",
};

type Pillar = {
  icon: React.ElementType;
  title: string;
  desc: string;
  href: string;
};

export default function NewsletterHero() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  const pillars: Pillar[] = useMemo(
    () => [
      {
        icon: MonitorCog,
        title: "Professional Website Development",
        desc: "Fast, modern, mobile-friendly website built to convert.",
        href: "/solutions/website-booking",
      },
      {
        icon: Globe,
        title: "Visibility on 450+ OTAs",
        desc: "Reach travelers worldwide and increase occupancy.",
        href: "/solutions/otas",
      },
      {
        icon: Repeat2,
        title: "Channel Management",
        desc: "Instant sync of rates & availability to prevent overbookings.",
        href: "/solutions/channel-manager",
      },
      {
        icon: MonitorCog,
        title: "Property Management System (PMS)",
        desc: "Front office tools: calendar, check-in/out, billing, analytics.",
        href: "/solutions/pms",
      },
      {
        icon: Megaphone,
        title: "Digital Marketing + Graphic Design",
        desc: "Ads, content, reviews, branding, and guest engagement.",
        href: "/solutions/marketing",
      },
      {
        icon: Headset,
        title: "Dedicated Local Support",
        desc: "Onboarding, training, and ongoing help for your team.",
        href: "/support",
      },
    ],
    []
  );

  const websiteFeatures = useMemo(
    () => [
      "Booking engine",
      "Online payments",
      "SEO optimization",
      "Professional photos & branding",
      "Guest review integration",
    ],
    []
  );

  const marketingFeatures = useMemo(
    () => [
      "Professional graphic design",
      "Social media setup (Instagram, Facebook, TikTok)",
      "Monthly content creation",
      "Ad Campaign Management (Google, Meta)",
      "Review management",
      "Brand identity & storytelling",
      "Guest engagement strategies",
    ],
    []
  );

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={wrapRef} className="w-full overflow-x-hidden">
      <div className="w-full" style={{ backgroundColor: C.cream }}>
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div
              className={[
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5" style={{ color: C.green }} />
                <span
                  className="text-[12px] font-bold tracking-[0.22em] uppercase"
                  style={{ color: C.orange }}
                >
                  Hotel Booking Hub • Official Certified Partner
                </span>
              </div>

              <h1
                className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl"
                style={{ color: C.orange }}
              >
                Transform Your Hotel To Online Presence.
              </h1>

              <div
                className="mt-3 h-[5px] w-24 rounded-full"
                style={{ backgroundColor: C.orange }}
              />

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-800/90">
                Boost bookings. Save time. Grow revenue — with one complete digital
                solution for hotels, apartments, lodges, resorts, B&amp;Bs and Airbnbs.
                <span className="ml-2 font-semibold" style={{ color: C.green }}>
                  Built for growth ✅
                </span>
              </p>

              {/* CTA buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white shadow-sm transition active:scale-[0.99]"
                  style={{ backgroundColor: C.orange }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = C.green;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = C.orange;
                  }}
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition"
                  style={{
                    color: C.orange,
                    border: `1px solid ${C.orange}80`,
                    backgroundColor: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.6)";
                  }}
                >
                  View pricing
                </Link>
              </div>

              {/* Pillars grid */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {pillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.title}
                      href={p.href}
                      className={[
                        "group rounded-2xl bg-white/70 p-5 ring-1 ring-black/5",
                        "shadow-[0_1px_0_rgba(0,0,0,0.04)] transition",
                        "hover:bg-white hover:shadow-sm",
                        "transition-all duration-700 ease-out",
                        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                      ].join(" ")}
                      style={{ transitionDelay: `${120 + i * 70}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="grid h-11 w-11 place-items-center rounded-xl"
                          style={{ backgroundColor: `${C.green}18` }}
                        >
                          <Icon className="h-6 w-6" style={{ color: C.green }} />
                        </div>

                        <div className="min-w-0">
                          <div className="font-extrabold text-zinc-900">
                            {p.title}
                          </div>
                          <div className="mt-1 text-sm leading-6 text-zinc-700">
                            {p.desc}
                          </div>
                          <div className="mt-2 text-sm font-extrabold" style={{ color: C.orange }}>
                            Learn more →
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div
              className={[
                "lg:flex lg:justify-end transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              ].join(" ")}
              style={{ transitionDelay: "160ms" }}
            >
              <div className="relative w-full lg:w-[560px]">
                {/* soft decorative glow */}
                <div
                  className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: C.orange }}
                />
                <div
                  className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full blur-3xl opacity-18"
                  style={{ backgroundColor: C.green }}
                />

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
                  <div className="relative h-[260px] w-full sm:h-[300px]">
                    <img
                      src="https://images.unsplash.com/photo-1551887373-6aa6c26f98bd?auto=format&fit=crop&w=1800&q=70"
                      alt="HotelSafari Services"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>

                  <div className="absolute left-5 top-5">
                    <span
                      className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold text-white shadow-sm"
                      style={{ backgroundColor: C.orange }}
                    >
                      Boost Bookings • Save Time • Grow Revenue
                    </span>
                  </div>

                  {/* Two professional service cards (PDF-style) */}
                  <div className="grid gap-4 p-6 sm:grid-cols-2">
                    {/* Website + OTA Visibility */}
                    <div
                      className="rounded-2xl p-5 ring-1 ring-black/5"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${C.orangeTint}, rgba(255,255,255,0.92) 60%)`,
                      }}
                    >
                      <div
                        className="text-sm font-extrabold tracking-[0.12em] uppercase"
                        style={{ color: C.orange }}
                      >
                        Website + OTA Visibility
                      </div>
                      <div className="mt-3 space-y-2">
                        {websiteFeatures.map((t) => (
                          <div key={t} className="flex items-center gap-2 text-sm" style={{ color: C.ink }}>
                            <span
                              className="grid h-6 w-6 place-items-center rounded-lg"
                              style={{ backgroundColor: `${C.orange}18` }}
                            >
                              <Check className="h-4 w-4" style={{ color: C.orange }} />
                            </span>
                            <span className="font-semibold">{t}</span>
                          </div>
                        ))}
                      </div>
                      <div
                        className="mt-4 h-[5px] w-20 rounded-full"
                        style={{ backgroundColor: C.orange }}
                      />
                    </div>

                    {/* Digital Marketing */}
                    <div
                      className="rounded-2xl p-5 ring-1 ring-black/5"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${C.greenTint}, rgba(255,255,255,0.92) 60%)`,
                      }}
                    >
                      <div
                        className="text-sm font-extrabold tracking-[0.12em] uppercase"
                        style={{ color: C.orange }}
                      >
                        Digital Marketing
                      </div>
                      <div className="mt-3 space-y-2">
                        {marketingFeatures.slice(0, 5).map((t) => (
                          <div key={t} className="flex items-center gap-2 text-sm" style={{ color: C.ink }}>
                            <span
                              className="grid h-6 w-6 place-items-center rounded-lg"
                              style={{ backgroundColor: `${C.green}18` }}
                            >
                              <Check className="h-4 w-4" style={{ color: C.green }} />
                            </span>
                            <span className="font-semibold">{t}</span>
                          </div>
                        ))}
                      </div>
                      <div
                        className="mt-4 h-[5px] w-20 rounded-full"
                        style={{ backgroundColor: C.green }}
                      />
                      <div className="mt-3 text-xs text-zinc-700">
                        + more (reviews, storytelling, guest engagement)
                      </div>
                    </div>
                  </div>
                </div>

                {/* small trust note */}
                <div
                  className={[
                    "mt-5 rounded-2xl bg-white/70 px-5 py-4 ring-1 ring-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04)]",
                    "transition-all duration-700 ease-out",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                  ].join(" ")}
                  style={{ transitionDelay: "420ms" }}
                >
                  <div className="text-sm font-semibold text-zinc-900">
                    Get listed on{" "}
                    <span style={{ color: C.green }}>450+ OTAs worldwide</span> — more
                    exposure = more bookings = more revenue ✅
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom accent line like your PDF */}
          <div className="mt-12 flex w-full items-center gap-3">
            <div className="h-[6px] w-full rounded-full" style={{ backgroundColor: C.orange }} />
            <div className="h-[6px] w-1/3 rounded-full" style={{ backgroundColor: C.green }} />
          </div>
        </div>
      </div>
    </section>
  );
}