"use client";

import Link from "next/link";
import { 
  MonitorCog, 
  Globe, 
  Repeat2, 
  CreditCard, 
  Megaphone, 
  Search, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const BRAND = {
  orange: "#AD6419",
  orangeDark: "#8E4F13",
  orangeLight: "#rgba(173,100,25,0.06)",
  green: "#599E1A",
  greenLight: "rgba(89,158,26,0.06)",
  cream: "#F7F1E7",
  ink: "#0F172A",
};

const solutions = [
  {
    icon: MonitorCog,
    title: "Website Development",
    desc: "Fast, modern, mobile-friendly websites built specifically for hotels, lodges, and apartments to convert visitors into direct bookings.",
    href: "/solutions/website",
    color: BRAND.orange,
    bgLight: "rgba(173,100,25,0.06)",
  },
  {
    icon: Globe,
    title: "Visibility on 450+ OTAs",
    desc: "Distribute your rooms globally across Booking.com, Expedia, Airbnb, and hundreds more with seamless inventory syncing.",
    href: "/solutions/otas",
    color: BRAND.green,
    bgLight: "rgba(89,158,26,0.06)",
  },
  {
    icon: Repeat2,
    title: "Channel Management",
    desc: "Real-time updates to rates and availability across all connected platforms to eliminate overbookings instantly.",
    href: "/solutions/otas", // Or channel-manager if you have it
    color: BRAND.orange,
    bgLight: "rgba(173,100,25,0.06)",
  },
  {
    icon: MonitorCog,
    title: "Property Management System (PMS)",
    desc: "Streamline front desk operations, manage reservations, check-ins/check-outs, billing, and access performance analytics all in one place.",
    href: "/solutions/pms",
    color: BRAND.green,
    bgLight: "rgba(89,158,26,0.06)",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    desc: "Secure, integrated online payment gateways so guests can pay securely using local and international methods.",
    href: "/solutions/payments",
    color: BRAND.orange,
    bgLight: "rgba(173,100,25,0.06)",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Grow your brand with targeted ad campaigns, engaging social media content, and active guest review management.",
    href: "/solutions/marketing",
    color: BRAND.green,
    bgLight: "rgba(89,158,26,0.06)",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Rank higher on Google and other search engines to drive organic, high-intent traffic directly to your own booking engine.",
    href: "/solutions/seo",
    color: BRAND.orange,
    bgLight: "rgba(173,100,25,0.06)",
  },
];

export default function SolutionsPage() {
  return (
    <div className="w-full overflow-hidden bg-white pb-24">
      {/* ── Hero ── */}
      <section 
        className="relative flex min-h-[50vh] flex-col items-center justify-center bg-zinc-50 px-4 py-20 text-center sm:px-6 lg:px-8"
        style={{
          background: `linear-gradient(to bottom, ${BRAND.cream}, #ffffff)`,
        }}
      >
        <div className="relative z-10 max-w-4xl pt-10">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 ring-1"
            style={{
              backgroundColor: "rgba(173,100,25,0.08)",
              borderColor: "rgba(173,100,25,0.25)",
            }}
          >
            <Sparkles className="h-4 w-4" style={{ color: BRAND.orange }} />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: BRAND.orange }}>
              Our Solutions
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Everything You Need to{" "}
            <span style={{ color: BRAND.orange }}>Grow Your Hotel</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            From seamless direct bookings and PMS management to robust marketing and OTA distribution. 
            Discover how our comprehensive suite of tools helps African hospitality thrive.
          </p>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section className="mx-auto max-w-[1480px] px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {solutions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 ring-1 ring-zinc-200 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:ring-zinc-300"
            >
              <div>
                <div 
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors"
                  style={{ backgroundColor: item.bgLight }}
                >
                  <item.icon className="h-7 w-7" style={{ color: item.color }} />
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-900 transition-colors group-hover:text-[#AD6419]">
                  {item.title}
                </h3>
                
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center font-semibold" style={{ color: BRAND.orange }}>
                Explore Strategy
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="mx-auto mt-24 max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div 
          className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 px-6 py-20 text-center shadow-2xl sm:px-12 sm:py-24"
          style={{ background: `linear-gradient(135deg, ${BRAND.ink} 0%, #1a2a14 100%)` }}
        >
          {/* Subtle glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" style={{ backgroundColor: "rgba(173,100,25,0.15)" }} />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to streamline your operations?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              Join hundreds of successful properties maximizing their bookings and revenue with our unified platform.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px] font-semibold text-white transition-all hover:scale-[1.02]"
                style={{ backgroundColor: BRAND.orange }}
              >
                Schedule a Demo
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-[15px] font-semibold text-white ring-1 ring-white/20 transition-all hover:bg-white/20"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
