"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  Clock,
  Eye,
  MessageCircle,
  Share2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Post = {
  category: string;
  title: string;
  href: string;
  image: string;
  author?: string;
  readTime?: string;
  views?: string;
  comments?: string;
  shares?: string;
  excerpt?: string;
};

const TABS = ["Website + Booking", "Channel Manager", "PMS", "Marketing", "Pricing"];

/**
 * ✅ Colors inspired by your PMS slide
 * - Orange/Brown title + underline
 * - Green highlight line/button
 */
const C = {
  orange: "#AD6419",
  green: "#599E1A",
};

export default function WhatsNewMain() {
  const [active, setActive] = useState<string>("Website + Booking");

  const data = useMemo(() => {
    const featuredByTab: Record<string, Post> = {
      "Website + Booking": {
        category: "WEBSITE + OTA VISIBILITY",
        title: "Get a World-Class Hotel Website that becomes a 24/7 booking machine.",
        href: "/solutions/website-booking",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=70",
        readTime: "Fast + mobile-friendly",
        views: "Booking engine + payments",
        comments: "SEO + reviews",
        shares: "Designed to convert",
        excerpt:
          "We build fast, modern, mobile-friendly hotel websites fully integrated with a booking engine, online payments, SEO optimization, professional photos & branding, and guest review integration.",
      },

      "Channel Manager": {
        category: "CHANNEL MANAGEMENT SERVICE",
        title:
          "All your channels connected: 450+ OTAs with instant sync to avoid overbookings.",
        href: "/solutions/channel-manager",
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=70",
        readTime: "Instant sync",
        views: "450+ OTAs",
        comments: "Overbooking: 0 goal",
        shares: "PMS + booking engine",
        excerpt:
          "Connect to 450+ OTAs (Booking.com, Expedia, Airbnb, Agoda, Hotels.com and more). Get instant sync of prices & availability, automated rate updates, multi-currency support, dynamic pricing tools, and integration with PMS & booking engine.",
      },

      PMS: {
        category: "PROPERTY MANAGEMENT SYSTEM",
        title:
          "Manage your front office: check-ins/out, calendar, invoicing & real-time availability.",
        href: "/solutions/pms",
        image:
          "https://images.unsplash.com/photo-1551887373-6aa6c26f98bd?auto=format&fit=crop&w=1800&q=70",
        readTime: "Front desk ready",
        views: "Real-time availability",
        comments: "Billing + invoices",
        shares: "Reports + analytics",
        excerpt:
          "Your complete PMS for medium properties and luxury hotels: front desk check-ins & check-outs, unified reservation calendar, automatic guest messages, invoice & billing management, real-time room availability updates, and reporting & performance analytics.",
      },

      Marketing: {
        category: "DIGITAL MARKETING",
        title:
          "Convert online visibility into real bookings with marketing + reviews + branding.",
        href: "/solutions/marketing",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=70",
        readTime: "Monthly execution",
        views: "Google + Meta",
        comments: "Review management",
        shares: "Brand storytelling",
        excerpt:
          "We help you convert visibility into bookings through professional graphic design, social media setup (Instagram/Facebook/TikTok), monthly content creation, ad campaign management (Google/Meta), review management, brand identity & storytelling, and guest engagement strategies.",
      },

      Pricing: {
        category: "PRICING STRATEGY",
        title: "Choose a plan: Basic 800k, Standard 1.2M, Premium 2M RWF per month.",
        href: "/pricing",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=70",
        readTime: "Monthly subscription",
        views: "Basic / Standard / Premium",
        comments: "Optional setup fees",
        shares: "Commission option",
        excerpt:
          "Basic (800,000 RWF/month) for small apartments & Airbnbs. Standard (1,200,000 RWF/month) adds 150+ OTAs, SEO & social media management. Premium (2,000,000 RWF/month) includes full website, 450+ OTAs, channel manager setup, PMS setup, reviews, and priority support with 24/7 assistance.",
      },
    };

    const listByTab: Record<string, Post[]> = {
      "Website + Booking": [
        {
          category: "Booking Engine",
          title: "Integrated booking engine for direct reservations on your website.",
          href: "/solutions/booking-engine",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Online Payments",
          title: "Accept online payments and confirm bookings instantly.",
          href: "/solutions/payments",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "SEO + Reviews",
          title: "SEO optimization + guest review integration for more trust and visibility.",
          href: "/solutions/website-booking",
          image:
            "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=70",
        },
      ],

      "Channel Manager": [
        {
          category: "450+ OTAs",
          title: "Connect to Booking.com, Expedia, Airbnb, Agoda, Hotels.com and more.",
          href: "/solutions/otas",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Instant Sync",
          title: "Instant sync of prices & availability across all channels.",
          href: "/solutions/channel-manager",
          image:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Avoid Overbookings",
          title: "Eliminate manual work and avoid overbookings with automation.",
          href: "/solutions/channel-manager",
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=70",
        },
      ],

      PMS: [
        {
          category: "Front Desk",
          title: "Front desk system for check-ins & check-outs.",
          href: "/solutions/pms",
          image:
            "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Calendar",
          title: "Unified reservation calendar + room assignment.",
          href: "/solutions/pms",
          image:
            "https://images.unsplash.com/photo-1520975693411-b62613c8d4c0?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Billing + Analytics",
          title: "Invoice & billing management with reporting & performance analytics.",
          href: "/solutions/pms",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70",
        },
      ],

      Marketing: [
        {
          category: "Social Media Setup",
          title: "Instagram, Facebook & TikTok setup + monthly content creation.",
          href: "/solutions/marketing",
          image:
            "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Ads",
          title: "Ad campaign management (Google + Meta) to drive bookings.",
          href: "/solutions/marketing",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Reputation",
          title: "Review management + brand identity & storytelling.",
          href: "/solutions/marketing",
          image:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=70",
        },
      ],

      Pricing: [
        {
          category: "Basic Plan",
          title: "800,000 RWF/month — website + key OTA setup + basic support.",
          href: "/pricing#basic",
          image:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Standard Plan",
          title: "1,200,000 RWF/month — 150+ OTAs + SEO + social media management.",
          href: "/pricing#standard",
          image:
            "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=900&q=70",
        },
        {
          category: "Premium Plan",
          title: "2,000,000 RWF/month — full website + 450+ OTAs + PMS + priority support.",
          href: "/pricing#premium",
          image:
            "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=900&q=70",
        },
      ],
    };

    const mostViews: Post[] = [
      {
        category: "Premium Package",
        title:
          "Full Hotel Digital Management — 2,000,000 RWF per month (we manage everything).",
        href: "/pricing#premium",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70",
        author: "HotelSafari Team",
      },
      {
        category: "Channel Manager",
        title:
          "Connect 450+ OTAs with instant sync of prices & availability to avoid overbookings.",
        href: "/solutions/channel-manager",
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=70",
        author: "HotelSafari Team",
      },
      {
        category: "Marketing",
        title:
          "Digital marketing + graphic design + ad campaigns + reviews to turn followers into customers.",
        href: "/solutions/marketing",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
        author: "HotelSafari Team",
      },
    ];

    const lifestyle: Post[] = [
      {
        category: "Website + OTA Visibility",
        title:
          "Transform your hotel to online presence: boost bookings, save time, grow revenue.",
        href: "/solutions/website-booking",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=70",
        author: "HotelSafari Team",
      },
      {
        category: "PMS (Front Office)",
        title:
          "Manage your entire property: front desk, calendar, billing, guest messages, analytics.",
        href: "/solutions/pms",
        image:
          "https://images.unsplash.com/photo-1551887373-6aa6c26f98bd?auto=format&fit=crop&w=1600&q=70",
        author: "HotelSafari Team",
      },
    ];

    return { featuredByTab, listByTab, mostViews, lifestyle };
  }, []);

  const featured = data.featuredByTab[active];
  const list = data.listByTab[active] ?? [];

  const mvRef = useRef<HTMLDivElement | null>(null);

  function scrollMostViews(dir: "left" | "right") {
    const el = mvRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-mv='card']");
    const w = card ? card.offsetWidth : 360;
    el.scrollBy({ left: dir === "left" ? -(w + 24) : w + 24, behavior: "smooth" });
  }

  return (
    <div className="w-full">
      {/* Header + tabs */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2
            className="text-4xl font-semibold tracking-tight"
            style={{ color: C.orange }}
          >
            What&apos;s New
          </h2>

          <div
            className="mt-2 h-[5px] w-24 rounded-full"
            style={{ backgroundColor: C.orange }}
          />

          <p className="mt-3 text-sm text-zinc-600">
            Updates across Website, OTAs, PMS, Marketing & Pricing.
            <span className="ml-2 font-semibold" style={{ color: C.green }}>
              Built for bookings ✅
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {TABS.map((t) => {
            const on = t === active;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={[
                  "rounded-full px-6 py-2 text-sm font-medium transition",
                  on
                    ? "text-white shadow-sm"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
                ].join(" ")}
                style={on ? { backgroundColor: C.orange } : undefined}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-zinc-200" />

      {/* Main block: big + list */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.85fr]">
        {/* Big card */}
        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-100">
          <div className="relative aspect-[16/10] w-full">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            <span
              className="absolute right-5 top-5 rounded-full px-6 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: C.orange }}
            >
              {featured.category}
            </span>
          </div>

          <div className="p-6">
            <h3 className="text-3xl font-semibold leading-tight text-zinc-900">
              {featured.title}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-zinc-500" />
                {featured.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <Eye className="h-4 w-4 text-zinc-500" />
                {featured.views}
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-zinc-500" />
                {featured.comments}
              </span>
              <span className="inline-flex items-center gap-2">
                <Share2 className="h-4 w-4 text-zinc-500" />
                {featured.shares}
              </span>
            </div>

            <p className="mt-5 leading-7 text-zinc-700">
              <span className="font-semibold" style={{ color: C.green }}>
                {active === "PMS" ? "Your complete PMS: " : "Key benefit: "}
              </span>
              {featured.excerpt}
            </p>
          </div>
        </div>

        {/* Right list */}
        <div className="space-y-6">
          {list.map((p, i) => (
            <Link key={i} href={p.href} className="group flex gap-4">
              <div className="relative h-[70px] w-[96px] shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="min-w-0">
                <div className="text-[12px] tracking-[0.18em] text-zinc-500">
                  {p.category.toUpperCase()}
                </div>

                <div className="mt-1 font-semibold leading-snug text-zinc-900 transition-colors duration-200 group-hover:text-[#AD6419]">
                  {p.title}
                </div>

                <div className="mt-2 text-sm font-semibold" style={{ color: C.green }}>
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Most Views ✅ NOW ALWAYS IN ONE LINE */}
      <div className="mt-12">
        <div className="flex items-center justify-between">
          <h3
            className="text-4xl font-semibold tracking-tight"
            style={{ color: C.orange }}
          >
            Most Viewed Services
          </h3>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollMostViews("left")}
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
              onClick={() => scrollMostViews("right")}
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

        <div className="mt-6 h-px w-full bg-zinc-200" />

        <div
          ref={mvRef}
          className="mt-8 flex gap-6 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory"
        >
          {data.mostViews.map((p, i) => (
            <Link
              key={i}
              href={p.href}
              data-mv="card"
              className="group flex-none w-[320px] sm:w-[360px] lg:w-[420px] snap-start overflow-hidden rounded-2xl bg-zinc-50 ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="h-[260px] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6">
                <div className="text-2xl font-semibold leading-snug text-zinc-900">
                  {p.title}
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-zinc-500">
                  <span>by {p.author}</span>
                  <span className="font-semibold" style={{ color: C.green }}>
                    Read →
                  </span>
                </div>

                <div
                  className="mt-4 h-[5px] w-24 rounded-full"
                  style={{ backgroundColor: C.green }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Growth & Visibility */}
      <div className="mt-14">
        <h3
          className="text-5xl font-semibold tracking-tight"
          style={{ color: C.orange }}
        >
          Growth & Visibility
        </h3>
        <div
          className="mt-2 h-[5px] w-28 rounded-full"
          style={{ backgroundColor: C.orange }}
        />
        <div className="mt-6 h-px w-full bg-zinc-200" />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {data.lifestyle.map((p, i) => (
            <Link key={i} href={p.href} className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[360px] w-full">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-2xl font-semibold leading-snug text-white">
                    {p.title}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-white/85">
                    <span>By {p.author}</span>
                    <span className="font-semibold text-white">Learn more →</span>
                  </div>

                  <div
                    className="mt-4 h-[5px] w-28 rounded-full"
                    style={{ backgroundColor: C.green }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}