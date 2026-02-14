"use client";

import Link from "next/link";
import { Mail, Phone, MessageCircle, CalendarCheck } from "lucide-react";

const PHONE = "+250788471880";
const EMAIL = "hotelandsafari@gmail.com";
const WHATSAPP = "+250788471880"; 
const BOOKING_URL = "/contact";

export default function TopBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full bg-black text-white">
      <div
        className={[
          "mx-auto flex w-full max-w-7xl items-center gap-4 px-4 transition-all duration-300",
          compact ? "py-1.5" : "py-2",
        ].join(" ")}
      >
        {/* Left: Contact */}
        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={`tel:${PHONE.replace(/\s+/g, "")}`}
            className={[
              "inline-flex items-center gap-2 text-white/90 hover:text-white transition",
              compact ? "text-xs" : "text-sm",
            ].join(" ")}
          >
            <Phone className="h-4 w-4" />
            <span className="whitespace-nowrap">{PHONE}</span>
          </a>

          <span className="h-4 w-px bg-white/20" />

          <a
            href={`mailto:${EMAIL}`}
            className={[
              "inline-flex items-center gap-2 text-white/90 hover:text-white transition",
              compact ? "text-xs" : "text-sm",
            ].join(" ")}
          >
            <Mail className="h-4 w-4" />
            <span className="whitespace-nowrap">{EMAIL}</span>
          </a>
        </div>

        {/* Middle: scrolling announcement */}
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black to-transparent" />

          <div
            className={[
              "marquee flex items-center gap-3 text-white/85",
              compact ? "text-xs" : "text-sm",
            ].join(" ")}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              ✨
            </span>
            <span className="whitespace-nowrap">
              Boost your direct bookings — Website + OTA distribution + Digital marketing in one place.
            </span>

            <span className="mx-4 h-4 w-px bg-white/20" />

            <span className="whitespace-nowrap">
              Free demo available this week — contact us to get started.
            </span>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className={[
              "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-xs font-semibold text-white/90 transition",
              compact ? "py-1" : "py-1.5",
              "hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <Link
            href={BOOKING_URL}
            className={[
              "inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 text-xs font-semibold text-white transition hover:bg-blue-700",
              compact ? "py-1" : "py-1.5",
            ].join(" ")}
          >
            <CalendarCheck className="h-4 w-4" />
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}