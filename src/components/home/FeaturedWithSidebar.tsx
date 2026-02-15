"use client";

import Link from "next/link";
import SidebarPosts from "@/components/home/SidebarPosts";
import {
  Globe,
  CreditCard,
  Repeat2,
  CalendarDays,
  Megaphone,
  Headset,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type Post = {
  title: string;
  href: string;
  image: string;
  tag?: string;
  description?: string;
};

/** ✅ Brand colors (from your PMS slide) */
const BRAND = {
  orange: "#AD6419",
  orangeDark: "#8E4F13",
  orangeSoft: "rgba(173,100,25,0.10)",
  green: "#599E1A",
  greenSoft: "rgba(89,158,26,0.12)",
};

const featuredPost: Post = {
  tag: "All-in-one hospitality platform",
  title: "Transform Your Hotel Online. Boost Direct Bookings. Grow Revenue.",
  description:
    "A modern website + direct booking engine + payments + SEO + reviews — built to convert visitors into guests 24/7.",
  href: "/solutions/website-booking",
  image: "/img1.png",
};

const topStory: Post = {
  tag: "Channel Manager + 450+ OTAs",
  title: "Stop Overbookings: Sync Rates & Availability Across 450+ OTAs.",
  description:
    "Connect Booking.com, Expedia, Airbnb, Agoda and more. Real-time updates, monitoring, retry queue, and clean reporting.",
  href: "/solutions/channel-manager",
  image: "/img3.jpeg",
};

const sidebarTop: Post = {
  tag: "Direct Booking Engine",
  title: "Turn Your Website Into a 24/7 Booking Machine (Payments + Confirmations).",
  description:
    "Guests search dates, choose rooms, add extras, pay online, and receive instant confirmation — while inventory updates everywhere.",
  href: "/solutions/booking-engine",
  image: "/img2.png",
};

const sidebarList: Post[] = [
  {
    tag: "PMS (Front Desk)",
    title: "PMS Made Simple: Check-in/out, Calendar, Invoicing & Reports.",
    description:
      "Front desk operations in one place — reservations, room assignment, billing, and performance dashboards.",
    href: "/solutions/pms",
    image:
      "https://images.unsplash.com/photo-1551887373-6aa6c26f98bd?auto=format&fit=crop&w=1000&q=70",
  },
  {
    tag: "Marketing + Reputation",
    title: "Digital Marketing + Reviews: Grow Trust & Increase Bookings.",
    description:
      "Monthly content, ads tracking, review inbox, response templates, and reputation growth that drives demand.",
    href: "/solutions/marketing",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=70",
  },
  {
    tag: "Local Support",
    title: "Dedicated Support + Monitoring: Catch Sync/Payment Failures Fast.",
    description:
      "Ticketing + SLA, alerts for channel sync issues, payment failures, and proactive help to keep sales running.",
    href: "/support",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=70",
  },
];

function FeaturedMain({ post }: { post: Post }) {
  return (
    <Link
      href={post.href}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-100 hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-[16/10] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 pb-4 sm:pb-6">
          {post.tag ? (
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur"
              style={{ backgroundColor: "rgba(173,100,25,0.25)" }}
            >
              <Sparkles className="h-4 w-4" />
              {post.tag}
            </div>
          ) : null}

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight text-white drop-shadow">
            {post.title}
          </h2>

          {post.description ? (
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed">
              {post.description}
            </p>
          ) : null}

          <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15"
              style={{ backgroundColor: "rgba(89,158,26,0.18)" }}
            >
              <Globe className="h-4 w-4" />
              Website + SEO
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15"
              style={{ backgroundColor: "rgba(173,100,25,0.18)" }}
            >
              <CreditCard className="h-4 w-4" />
              Online Payments
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15"
              style={{ backgroundColor: "rgba(89,158,26,0.18)" }}
            >
              <Repeat2 className="h-4 w-4" />
              OTA Sync
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15"
              style={{ backgroundColor: "rgba(173,100,25,0.18)" }}
            >
              <CalendarDays className="h-4 w-4" />
              PMS + Reports
            </span>
          </div>

          <div className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Explore Solution
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>

          {/* ✅ green accent bar like slide */}
          <div
            className="mt-3 sm:mt-4 h-[5px] w-24 rounded-full"
            style={{ backgroundColor: BRAND.green }}
          />
        </div>
      </div>
    </Link>
  );
}

function TopStoryRow({ post }: { post: Post }) {
  return (
    <div className="mt-8 rounded-2xl bg-zinc-50 p-4 sm:p-6 ring-1 ring-zinc-100">
      <div className="flex items-center gap-4">
        <h3 className="text-lg sm:text-xl font-semibold" style={{ color: BRAND.orange }}>
          Top Highlight
        </h3>
        <div className="h-px flex-1 bg-zinc-200" />

        <span
          className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1"
          style={{
            backgroundColor: BRAND.greenSoft,
            color: BRAND.green,
            borderColor: "rgba(89,158,26,0.25)",
          }}
        >
          <Repeat2 className="h-4 w-4" />
          Real-time sync + monitoring
        </span>
      </div>

      <Link
        href={post.href}
        className="mt-6 grid gap-6 md:grid-cols-[360px_1fr] items-center group"
      >
        <div className="relative w-full overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200 shadow-sm">
          <div className="relative h-[200px] sm:h-[240px] w-full md:h-[260px]">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="min-w-0">
          {post.tag ? (
            <div
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1"
              style={{
                backgroundColor: BRAND.orangeSoft,
                color: BRAND.orange,
                borderColor: "rgba(173,100,25,0.25)",
              }}
            >
              {post.tag}
            </div>
          ) : null}

          <h4 className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight text-zinc-900 transition-colors duration-300 group-hover:text-[#AD6419]">
            {post.title}
          </h4>

          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            {post.description ??
              "Connect OTAs, sync rates/availability, prevent overbookings, and track performance from one hub."}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-4 ring-1 ring-zinc-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                <Repeat2 className="h-4 w-4" style={{ color: BRAND.green }} />
                Prevent overbookings
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                Inventory updates propagate to all channels quickly.
              </p>
              <div
                className="mt-3 h-[4px] w-16 rounded-full"
                style={{ backgroundColor: BRAND.green }}
              />
            </div>

            <div className="rounded-xl bg-white p-4 ring-1 ring-zinc-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                <Headset className="h-4 w-4" style={{ color: BRAND.orange }} />
                Sync health monitoring
              </div>
              <p className="mt-1 text-sm text-zinc-600">
                Alerts + retries when OTA updates fail.
              </p>
              <div
                className="mt-3 h-[4px] w-16 rounded-full"
                style={{ backgroundColor: BRAND.orange }}
              />
            </div>
          </div>

          <div
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: BRAND.orange }}
          >
            Read details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function FeaturedWithSidebar() {
  return (
    <section className="w-full overflow-x-hidden">
      {/* ✅ Component-only responsiveness overrides */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ✅ FORCE 1 column on mobile/touch devices (even if it renders "desktop-like") */
        @media (pointer: coarse) {
          [data-fws-grid="1"] {
            grid-template-columns: 1fr !important;
          }
          [data-fws-sidebarwrap="1"] {
            position: static !important;
            top: auto !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold" style={{ color: BRAND.orange }}>
              <a
                href="https://www.ashbhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ textDecorationColor: BRAND.orange }}
              >
                ashbhub.com
              </a>
            </p>

            <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-zinc-900">
              Everything hotels need to sell more rooms
            </h2>

            <div
              className="mt-2 h-[5px] w-24 rounded-full"
              style={{ backgroundColor: BRAND.orange }}
            />

            <p className="mt-3 max-w-2xl text-sm sm:text-base text-zinc-600">
              Website + booking engine + payments + SEO + OTA distribution +
              channel manager + PMS + marketing + local support — one connected
              system.
              <span className="ml-2 font-semibold" style={{ color: BRAND.green }}>
                Built for bookings ✅
              </span>
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition"
              style={{ backgroundColor: BRAND.orange }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = BRAND.orangeDark)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = BRAND.orange)
              }
            >
              View Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold transition ring-1"
              style={{
                color: BRAND.orange,
                borderColor: "rgba(173,100,25,0.25)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(173,100,25,0.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              Talk to us
            </Link>
          </div>
        </div>

        {/* ✅ Grid: desktop 2 columns, mobile forced 1 column via CSS above */}
        <div
          data-fws-grid="1"
          className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr] lg:items-stretch"
        >
          <div className="opacity-0 animate-[fadeUp_650ms_ease-out_forwards]">
            <FeaturedMain post={featuredPost} />
            <TopStoryRow post={topStory} />
          </div>

          <div className="opacity-0 animate-[fadeUp_650ms_ease-out_forwards] [animation-delay:120ms] h-full">
            <div data-fws-sidebarwrap="1" className="h-full lg:sticky lg:top-[110px]">
              <SidebarPosts top={sidebarTop} list={sidebarList} />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-zinc-200">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <Globe className="h-5 w-5" style={{ color: BRAND.orange }} />
              Fast website + SEO
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Mobile-first pages designed to rank and convert visitors to bookings.
            </p>
            <div
              className="mt-3 h-[5px] w-20 rounded-full"
              style={{ backgroundColor: BRAND.green }}
            />
          </div>

          <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-zinc-200">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <Megaphone className="h-5 w-5" style={{ color: BRAND.green }} />
              Marketing + reviews
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Content, ads tracking, review management, and monthly reports.
            </p>
            <div
              className="mt-3 h-[5px] w-20 rounded-full"
              style={{ backgroundColor: BRAND.orange }}
            />
          </div>

          <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-zinc-200">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <Headset className="h-5 w-5" style={{ color: BRAND.orange }} />
              Support + monitoring
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Ticketing + SLA + alerts for sync/payment failures — so nothing breaks.
            </p>
            <div
              className="mt-3 h-[5px] w-20 rounded-full"
              style={{ backgroundColor: BRAND.green }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}