"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { CalendarDays, Repeat2 } from "lucide-react";

type PopularItem = {
  category: string;
  title: string;
  date: string;
  badge: number;
  image: string;
  href: string;
};

type OtaItem = {
  name: string;
  accent: string; // tailwind bg class
  href?: string;
};

/* ✅ sample list (you can add more). UI represents 450+ connections */
const OTAS: OtaItem[] = [
  { name: "Booking.com", accent: "bg-blue-600", href: "/solutions/otas" },
  { name: "Expedia", accent: "bg-indigo-600", href: "/solutions/otas" },
  { name: "Airbnb", accent: "bg-rose-600", href: "/solutions/otas" },
  { name: "Agoda", accent: "bg-red-500", href: "/solutions/otas" },
  { name: "Hotels.com", accent: "bg-amber-500", href: "/solutions/otas" },
  { name: "Trip.com", accent: "bg-sky-600", href: "/solutions/otas" },
  { name: "Priceline", accent: "bg-blue-700", href: "/solutions/otas" },
  { name: "Travelocity", accent: "bg-emerald-600", href: "/solutions/otas" },
  { name: "Orbitz", accent: "bg-orange-600", href: "/solutions/otas" },
  { name: "Hotwire", accent: "bg-zinc-800", href: "/solutions/otas" },
  { name: "Vrbo", accent: "bg-teal-700", href: "/solutions/otas" },
  { name: "Hostelworld", accent: "bg-fuchsia-600", href: "/solutions/otas" },
  { name: "KAYAK", accent: "bg-red-600", href: "/solutions/otas" },
  { name: "trivago", accent: "bg-zinc-700", href: "/solutions/otas" },
  { name: "Wotif", accent: "bg-purple-600", href: "/solutions/otas" },
  { name: "lastminute.com", accent: "bg-lime-600", href: "/solutions/otas" },
  { name: "HRS", accent: "bg-slate-700", href: "/solutions/otas" },
  { name: "eDreams", accent: "bg-violet-600", href: "/solutions/otas" },
  { name: "Opodo", accent: "bg-cyan-700", href: "/solutions/otas" },
  { name: "Traveloka", accent: "bg-sky-700", href: "/solutions/otas" },
  { name: "MakeMyTrip", accent: "bg-orange-500", href: "/solutions/otas" },
  { name: "Cleartrip", accent: "bg-emerald-500", href: "/solutions/otas" },
  { name: "Despegar", accent: "bg-yellow-500", href: "/solutions/otas" },
  { name: "Rakuten Travel", accent: "bg-rose-700", href: "/solutions/otas" },
  { name: "Jalan", accent: "bg-indigo-700", href: "/solutions/otas" },
  { name: "ZenHotels", accent: "bg-zinc-900", href: "/solutions/otas" },
  { name: "Ostrovok", accent: "bg-amber-600", href: "/solutions/otas" },
];

/* ✅ Updated popular content to match your HotelSafari business idea */
const POPULAR: PopularItem[] = [
  {
    category: "DIRECT BOOKINGS",
    title: "How a booking engine increases revenue (and reduces OTA costs).",
    date: "December 9, 2024",
    badge: 1,
    image:
      "https://images.unsplash.com/photo-1551887373-6aa6c26f98bd?auto=format&fit=crop&w=300&q=70",
    href: "/post/pop-1",
  },
  {
    category: "CHANNEL MANAGER",
    title: "Prevent overbookings with real-time rate & availability sync.",
    date: "December 9, 2024",
    badge: 2,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=70",
    href: "/post/pop-2",
  },
  {
    category: "PMS + OPERATIONS",
    title: "Front desk workflow: check-in/out, billing, housekeeping status.",
    date: "December 9, 2024",
    badge: 3,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=300&q=70",
    href: "/post/pop-3",
  },
];

const TAGS = [
  "Website + SEO",
  "Booking Engine",
  "Online Payments",
  "450+ OTAs",
  "Channel Manager",
  "PMS",
  "Revenue",
  "Marketing",
  "Reviews",
  "Analytics",
  "Support",
];

export default function WhatsNewSidebar() {
  return (
    <aside className="w-full space-y-8">
      {/* ✅ 450+ OTAs Connected (scrolling list) */}
      <div className="rounded-2xl bg-white p-6 ring-1 ring-zinc-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-zinc-900">
              450+ OTAs Connected
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              We connect your property to major OTAs and keep rates & availability
              synced automatically — to avoid overbookings.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200">
            <Repeat2 className="h-4 w-4" />
            Live sync
          </div>
        </div>

        <div className="mt-6">
          <OtaMarquee items={OTAS} />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="text-xs text-zinc-500">
            Showing popular OTAs • plus hundreds more
          </div>

          <Link
            href="/solutions/otas"
            className="text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            View OTAs →
          </Link>
        </div>
      </div>

      {/* Popular News */}
      <div className="rounded-2xl bg-white p-6 ring-1 ring-zinc-100">
        <h3 className="text-3xl font-semibold text-zinc-900">Popular News</h3>

        <div className="mt-6 space-y-6">
          {POPULAR.map((p, i) => (
            <Link key={i} href={p.href} className="group flex items-start gap-4">
              <div className="relative shrink-0">
                <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-zinc-200">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-sm font-semibold text-white ring-2 ring-white">
                  {p.badge}
                </span>
              </div>

              <div className="min-w-0">
                <div className="text-[12px] tracking-[0.18em] text-zinc-500">
                  {p.category}
                </div>

                <div className="mt-1 font-semibold leading-snug text-zinc-900 transition group-hover:text-blue-700">
                  {p.title}
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                  <CalendarDays className="h-4 w-4" />
                  {p.date}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-7">
          <button
            type="button"
            className="w-full rounded-full border border-blue-500/70 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
          >
            View More
          </button>
        </div>
      </div>

      {/* Trending Tags */}
      <div className="rounded-2xl bg-white p-6 ring-1 ring-zinc-100">
        <h3 className="text-3xl font-semibold text-zinc-900">Trending Tags</h3>
        <div className="mt-6 flex flex-wrap gap-4">
          {TAGS.map((t) => (
            <Link
              key={t}
              href={`/tag/${t.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full bg-zinc-100 px-5 py-2 text-sm text-zinc-700 transition hover:bg-zinc-200"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

      {/* Ad card */}
      <div className="rounded-2xl bg-white p-6 ring-1 ring-zinc-100">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=70"
            alt="Ad"
            className="h-[180px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/35" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="text-lg font-semibold text-white">
              Boost Direct Bookings <br /> With HotelSafari.com
            </div>
            <button
              type="button"
              className="mt-4 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get Demo
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ---------------- OTA MARQUEE (Smooth upward scroll) ---------------- */
function OtaMarquee({ items }: { items: OtaItem[] }) {
  // Duplicate to create seamless infinite loop
  const loop = [...items, ...items];

  return (
    <div className="relative rounded-2xl bg-zinc-50 ring-1 ring-zinc-200 overflow-hidden">
      {/* soft fade top/bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-zinc-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-zinc-50 to-transparent z-10" />

      {/* viewport */}
      <div className="h-[320px] overflow-hidden px-4 py-4">
        {/* animation track */}
        <div className="ota-track motion-reduce:!animate-none">
          {loop.map((ota, idx) => (
            <OtaRow
              key={`${ota.name}-${idx}`}
              name={ota.name}
              accent={ota.accent}
              href={ota.href}
            />
          ))}
        </div>
      </div>

      {/* CSS animation (slow + smooth) */}
      <style jsx>{`
        .ota-track {
          display: grid;
          gap: 12px;
          will-change: transform;
          animation: otaUp 42s linear infinite;
        }
        /* pause on hover (nice UX) */
        .ota-track:hover {
          animation-play-state: paused;
        }
        @keyframes otaUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function OtaRow({
  name,
  accent,
  href,
}: {
  name: string;
  accent: string;
  href?: string;
}) {
  const content = (
    <div
      className={`w-full ${accent} rounded-2xl px-5 py-4 text-left text-white transition hover:opacity-95`}
    >
      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-black font-bold">
          {getInitials(name)}
        </div>

        <div className="min-w-0">
          <div className="font-semibold truncate">{name}</div>
          <div className="text-xs text-white/85">Connected OTA</div>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    <button type="button" className="w-full">
      {content}
    </button>
  );
}

function getInitials(name: string) {
  const parts = name
    .replace(".com", "")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .trim()
    .split(/\s+/);

  const a = parts[0]?.[0] ?? "O";
  const b = parts[1]?.[0] ?? (parts[0]?.[1] ?? "");
  return (a + b).toUpperCase();
}