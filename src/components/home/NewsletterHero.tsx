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
        href: "/solutions/website",
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
        <div className="mx-auto max-w-[1480px] px-4 py-14 sm:px-6 lg:px-8">
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
                  African Safari and Hotel Booking Hub • Official Certified Partner
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
                Connect your property to 450+ OTAs, automate bookings, manage operations seamlessly, and unlock real revenue growth. Hotels using our platform see 60%+ more direct bookings within 90 days.
                <span className="ml-2 font-semibold" style={{ color: C.green }}>
                  Proven results
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
                  href="/pricing/monthly-plans"
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

                {/*growth image*/}
          <img src="/images/chart.png" alt="" />
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