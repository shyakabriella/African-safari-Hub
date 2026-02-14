"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Item = {
  category: string;
  title: string;
  avatarSrc: string;
  badge?: string | number;
  href?: string;
};

const ITEMS: Item[] = [
  {
    category: "WEBSITE + BOOKING ENGINE",
    title: "Transform your website into a\n24/7 booking machine",
    avatarSrc:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=70",
    badge: "24/7",
    href: "/solutions/website",
  },
  {
    category: "450+ OTA DISTRIBUTION",
    title: "Online visibility on 450+ OTAs\n(Booking.com, Expedia, Airbnb…)",
    avatarSrc:
      "https://images.unsplash.com/photo-1551887373-6e07aa1e7b47?auto=format&fit=crop&w=200&q=70",
    badge: "450+",
    href: "/solutions/otas",
  },
  {
    category: "CHANNEL MANAGER",
    title: "Sync rates & availability\nto stop overbookings",
    avatarSrc:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=200&q=70",
    badge: "SYNC",
    href: "/solutions/channel-manager",
  },
  {
    category: "PMS + MARKETING",
    title: "Front desk, invoicing, reports\n+ SEO, Ads & Reviews",
    avatarSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=200&q=70",
    badge: "GROW",
    href: "/services/digital-marketing",
  },
];

function Avatar({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-[56px] w-[56px] rounded-full bg-white/90 ring-2 ring-white grid place-items-center text-zinc-700 text-sm font-semibold shadow-sm">
        {alt.slice(0, 1)}
      </div>
    );
  }

  return (
    <div className="h-[56px] w-[56px] overflow-hidden rounded-full ring-2 ring-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
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
  return (
    <section className={`w-full ${className}`}>
      {/* ✅ FULL WIDTH STRIP (edge-to-edge) */}
      <div
        className="relative w-full h-[205px] overflow-hidden bg-[#FFF7ED]"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ✅ warm overlay so your strip always matches brand and stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C2D12]/10 via-white/30 to-[#14532D]/10" />

        {/* ✅ strong readable band (white/cream like your branding slides) */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[90px] bg-white/90 backdrop-blur-md ring-1 ring-black/5 shadow-[0_12px_35px_rgba(0,0,0,0.18)]" />

        {/* ✅ Content aligned (but background still full width) */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="flex items-center gap-14 overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible">
              {items.map((it, idx) => {
                const block = (
                  <div
                    className="min-w-[320px] snap-start lg:min-w-0 stripItemIn"
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div className="group flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
                      {/* avatar + badge */}
                      <div className="relative shrink-0">
                        <Avatar src={it.avatarSrc} alt={it.category} />

                        {!!it.badge && (
                          <span className="absolute -top-2 -right-2 inline-flex h-7 items-center justify-center rounded-full bg-[#2E7D32] px-2 text-[12px] font-semibold text-white ring-2 ring-white shadow-sm">
                            {String(it.badge)}
                          </span>
                        )}
                      </div>

                      {/* text */}
                      <div className="min-w-0">
                        <p className="text-[12px] tracking-[0.18em] text-zinc-900/55 whitespace-nowrap transition-colors duration-300 group-hover:text-[#B45309]">
                          {it.category}
                        </p>

                        <h3 className="mt-1 whitespace-pre-line text-[18px] font-semibold leading-[1.15] text-zinc-900 transition-colors duration-300 group-hover:text-[#B45309]">
                          {it.title}
                        </h3>

                        {/* ✅ orange underline like your branding */}
                        <div className="mt-3 h-[3px] w-0 rounded-full bg-[#F59E0B] transition-all duration-300 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                );

                return it.href ? (
                  <Link key={`${it.category}-${idx}`} href={it.href} className="block">
                    {block}
                  </Link>
                ) : (
                  <div key={`${it.category}-${idx}`}>{block}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}