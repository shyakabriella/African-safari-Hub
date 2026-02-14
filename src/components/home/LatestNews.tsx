"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Handshake,
  Globe,
  CreditCard,
  Megaphone,
  BarChart3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

type PartnerItem = {
  name: string;
  category: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const C = {
  orange: "#AD6419",
  green: "#599E1A",
  cream: "#F7F1E7",
};

export default function LatestNews() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  const partners: PartnerItem[] = useMemo(
    () => [
      {
        name: "Global OTAs Distribution",
        category: "Distribution",
        description:
          "Your property connected to major OTAs with real-time availability & rate sync.",
        href: "/solutions/otas",
        icon: Globe,
      },
      {
        name: "Channel Manager Sync",
        category: "Automation",
        description:
          "Instant updates across channels to reduce manual work and prevent overbookings.",
        href: "/solutions/channel-manager",
        icon: Handshake,
      },
      {
        name: "Secure Payments",
        category: "Payments",
        description:
          "Online payments + confirmations to increase direct bookings on your website.",
        href: "/solutions/payments",
        icon: CreditCard,
      },
      {
        name: "Digital Marketing",
        category: "Marketing",
        description:
          "Google/Meta campaigns + content + reviews to turn visibility into bookings.",
        href: "/solutions/marketing",
        icon: Megaphone,
      },
      {
        name: "Analytics & Performance",
        category: "Insights",
        description:
          "Track revenue, occupancy, channel performance, and conversion improvements.",
        href: "/solutions/analytics",
        icon: BarChart3,
      },
      {
        name: "Trust & Support",
        category: "Reliability",
        description:
          "Professional onboarding + training + responsive support to keep operations smooth.",
        href: "/support",
        icon: ShieldCheck,
      },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);

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

  function scrollByCard(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>("[data-card='partner']");
    const cardWidth = card ? card.offsetWidth : 360;
    const gap = 24; // gap-6
    const delta = cardWidth + gap;

    el.scrollBy({
      left: direction === "left" ? -delta : delta,
      behavior: "smooth",
    });
  }

  return (
    <section
      ref={wrapRef}
      className="w-full overflow-x-hidden"
      style={{ backgroundColor: C.cream }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Header row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div
            className={[
              "transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" style={{ color: C.green }} />
              <span
                className="text-[12px] font-bold tracking-[0.22em] uppercase"
                style={{ color: C.orange }}
              >
                Trust & Partnerships
              </span>
            </div>

            <h2
              className="mt-2 text-4xl font-extrabold tracking-tight"
              style={{ color: C.orange }}
            >
              Trusted Partners & Recognition
            </h2>

            <div
              className="mt-3 h-[5px] w-28 rounded-full"
              style={{ backgroundColor: C.orange }}
            />

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-800/90">
              Hotels choose HotelSafari because we build with{" "}
              <span className="font-semibold" style={{ color: C.green }}>
                reliable integrations
              </span>{" "}
              and proven systems. We partner with key platforms so your business
              runs smoothly — from distribution and operations to marketing and payments.
            </p>
          </div>

          {/* arrows */}
          <div
            className={[
              "flex items-center gap-3 transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "120ms" }}
          >
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              className="grid h-11 w-11 place-items-center rounded-full border transition"
              style={{ borderColor: `${C.orange}80`, color: C.orange }}
              aria-label="Previous"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.orange;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = C.orange;
              }}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollByCard("right")}
              className="grid h-11 w-11 place-items-center rounded-full border transition"
              style={{ borderColor: `${C.orange}80`, color: C.orange }}
              aria-label="Next"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = C.orange;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = C.orange;
              }}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-zinc-300/60" />

        {/* Trust story + awards image */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* left trust copy */}
          <div
            className={[
              "rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/10 transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
            style={{ transitionDelay: "140ms" }}
          >
            <h3 className="text-2xl font-extrabold text-zinc-900">
              Why partners matter for your hotel ✅
            </h3>

            <div
              className="mt-3 h-[5px] w-24 rounded-full"
              style={{ backgroundColor: C.green }}
            />

            <ul className="mt-5 space-y-3 text-zinc-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: C.orange }} />
                <span>
                  <b>More trust:</b> Guests feel safe when your system uses reliable tools.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: C.green }} />
                <span>
                  <b>Less errors:</b> Real-time sync reduces overbooking and manual mistakes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: C.orange }} />
                <span>
                  <b>More bookings:</b> Better visibility + smoother payments increases conversion.
                </span>
              </li>
            </ul>

            <div
              className="mt-6 inline-flex rounded-2xl bg-white px-6 py-4 ring-1"
              style={{ borderColor: `${C.green}55` }}
            >
              <span className="text-lg font-semibold text-zinc-900">
                We turn visibility into{" "}
                <span style={{ color: C.green }}>real bookings</span>.
              </span>
            </div>
          </div>

          {/* right awards image */}
          <div
            className={[
              "relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10 transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
            style={{ transitionDelay: "220ms" }}
          >
            {/* ✅ Put your downloaded badge image here:
                public/images/trust/hoteltech-awards.png
             */}
            <img
              src="/images/trust/hoteltech-awards.png"
              alt="Industry awards and recognition"
              className="h-[340px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-extrabold text-white shadow-sm"
                style={{ backgroundColor: C.orange }}
              >
                <Award className="h-4 w-4" />
                Awards & Recognition
              </div>

              <p className="mt-3 max-w-md text-sm font-medium text-white/90">
                These badges help customers trust that the technology behind your hotel
                is modern, reliable, and recognized in the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Partners carousel (ONE LINE) */}
        <div className="mt-12">
          <div className="flex items-end justify-between">
            <h3 className="text-3xl font-extrabold" style={{ color: C.orange }}>
              Our Partners & Integrations
            </h3>
            <div
              className="hidden sm:block text-sm font-semibold"
              style={{ color: C.green }}
            >
              Built for stability + growth ✅
            </div>
          </div>

          <div className="mt-5 h-px w-full bg-zinc-300/60" />

          <div
            ref={scrollerRef}
            className="mt-8 flex gap-6 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory"
          >
            {partners.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Link
                  key={idx}
                  href={p.href}
                  data-card="partner"
                  className={[
                    "group flex-none w-[320px] sm:w-[360px] lg:w-[420px] snap-start",
                    "rounded-2xl bg-white ring-1 ring-black/10 overflow-hidden",
                    "transition hover:-translate-y-1 hover:shadow-sm",
                  ].join(" ")}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="grid h-12 w-12 place-items-center rounded-xl"
                          style={{ backgroundColor: `${C.green}1A` }}
                        >
                          <Icon className="h-6 w-6" style={{ color: C.green }} />
                        </div>

                        <div>
                          <div
                            className="text-[12px] font-bold tracking-[0.18em] uppercase"
                            style={{ color: C.orange }}
                          >
                            {p.category}
                          </div>
                          <div className="mt-1 text-xl font-extrabold text-zinc-900">
                            {p.name}
                          </div>
                        </div>
                      </div>

                      <ArrowUpRight
                        className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-700"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-zinc-700">
                      {p.description}
                    </p>

                    <div
                      className="mt-5 h-[5px] w-24 rounded-full"
                      style={{ backgroundColor: C.orange }}
                    />
                    <div className="mt-3 text-sm font-extrabold" style={{ color: C.green }}>
                      Learn more →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* bottom accent line like slides */}
        <div className="mt-12 flex w-full items-center gap-3">
          <div className="h-[6px] w-full rounded-full" style={{ backgroundColor: C.orange }} />
          <div className="h-[6px] w-1/3 rounded-full" style={{ backgroundColor: C.green }} />
        </div>
      </div>
    </section>
  );
}