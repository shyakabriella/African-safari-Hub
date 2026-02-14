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
      <div className="h-12 w-12 rounded-full bg-white ring-2 ring-white grid place-items-center text-zinc-700 text-sm font-semibold shadow-sm">
        {alt.slice(0, 1)}
      </div>
    );
  }

  return (
    <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow-sm">
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

function CardShell({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const base =
    "group block rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/5 shadow-[0_10px_22px_rgba(0,0,0,0.10)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition-all duration-300";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
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
      {/* ✅ Normal flow (no absolute “band” that causes weird layout) */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C2D12]/10 via-white/35 to-[#14532D]/10" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
          {/* ✅ Mobile: scroll cards | Desktop: grid cards */}
          <div className="lg:hidden">
            <div className="-mx-4 px-4">
              <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
                {items.map((it, idx) => (
                  <CardShell
                    key={`${it.category}-${idx}`}
                    href={it.href}
                    className="snap-start min-w-[285px] sm:min-w-[330px] stripItemIn"
                    // ✅ uses your existing animation class
                    style={{ animationDelay: `${idx * 120}ms` } as any}
                  >
                    <div className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="relative shrink-0">
                          <Avatar src={it.avatarSrc} alt={it.category} />
                          {!!it.badge && (
                            <span className="absolute -top-2 -right-2 inline-flex h-7 items-center justify-center rounded-full bg-[#2E7D32] px-2 text-[12px] font-semibold text-white ring-2 ring-white shadow-sm">
                              {String(it.badge)}
                            </span>
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="text-[11px] tracking-[0.18em] text-zinc-500 whitespace-nowrap">
                            {it.category}
                          </p>

                          <h3 className="mt-1 whitespace-pre-line text-[16px] font-semibold leading-[1.2] text-zinc-900 group-hover:text-[#B45309] transition-colors">
                            {it.title}
                          </h3>

                          <div className="mt-3 h-[3px] w-10 rounded-full bg-[#F59E0B] group-hover:w-16 transition-all" />
                        </div>
                      </div>
                    </div>
                  </CardShell>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            {items.map((it, idx) => (
              <CardShell
                key={`${it.category}-${idx}`}
                href={it.href}
                className="stripItemIn"
                style={{ animationDelay: `${idx * 120}ms` } as any}
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <Avatar src={it.avatarSrc} alt={it.category} />
                      {!!it.badge && (
                        <span className="absolute -top-2 -right-2 inline-flex h-7 items-center justify-center rounded-full bg-[#2E7D32] px-2 text-[12px] font-semibold text-white ring-2 ring-white shadow-sm">
                          {String(it.badge)}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] tracking-[0.18em] text-zinc-500 whitespace-nowrap">
                        {it.category}
                      </p>

                      <h3 className="mt-1 whitespace-pre-line text-[16px] font-semibold leading-[1.2] text-zinc-900 group-hover:text-[#B45309] transition-colors">
                        {it.title}
                      </h3>

                      <div className="mt-3 h-[3px] w-10 rounded-full bg-[#F59E0B] group-hover:w-16 transition-all" />
                    </div>
                  </div>
                </div>
              </CardShell>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}