"use client";

import type { FormEvent, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600";

const formFieldClass =
  "mt-2 w-full border-b border-[#e5d5c4] bg-transparent px-0 py-2 text-[0.85rem] text-[#4f3623] outline-none transition focus:border-[#ad6419]";

const advantageCards = [
  {
    title: "Zero Upfront Risk",
    description:
      "Eliminate heavy initial investments. We focus on results before costs while you preserve capital and grow bookings.",
    icon: ShieldIcon,
  },
  {
    title: "Incentive-Driven",
    description:
      "Marketing teams are compensated based on occupancy, pushing maximum performance and conversions.",
    icon: TrendIcon,
  },
  {
    title: "Scalable Tech",
    description:
      "AI-driven tools designed to scale with your property portfolio seamlessly and efficiently.",
    icon: LayersIcon,
  },
] as const;

const tierCards = [
  {
    eyebrow: "Essential",
    title: "Growth Tier",
    price: "10%",
    suffix: "Commission",
    features: [
      "Direct Booking Engine",
      "24/7 Guest Support",
      "Monthly Performance Audit",
    ],
    cta: "Select Growth",
    featured: false,
    badge: undefined,
  },
  {
    eyebrow: "Performance",
    title: "Accelerator Tier",
    price: "15%",
    suffix: "Commission",
    features: [
      "Global Marketing Spend",
      "Priority Tech Support",
      "Advanced CRM Integration",
      "Real-time Analytics",
    ],
    cta: "Select Accelerator",
    featured: true,
    badge: "Most Popular",
  },
  {
    eyebrow: "Strategic",
    title: "Enterprise Tier",
    price: "Custom",
    suffix: "Rate",
    features: [
      "Portfolio Management",
      "White-label Solutions",
      "Strategic Advisor",
    ],
    cta: "Contact Sales",
    featured: false,
    badge: undefined,
  },
] as const;

const comparisonRows = [
  {
    label: "Financial Predictability",
    subscription: "Fixed Cost",
    commission: "Performance-based",
  },
  {
    label: "Upfront Commitment",
    subscription: "Monthly Fee",
    commission: "No Fee",
  },
  {
    label: "Marketing Alignment",
    subscription: "Standard",
    commission: "Fully Incentivized",
  },
  {
    label: "Best For",
    subscription: "Established Brands",
    commission: "Growth Phase",
  },
] as const;

export default function CommissionPricingPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#4f3623]">
      {/* HERO */}
      <section className="overflow-hidden bg-[#fbf6ef]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">
          <div className="flex items-center px-6 py-12 lg:py-20">
            <div className="max-w-xl">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#9b8370]">
                Performance Growth
              </p>

              <h1 className="mt-4 text-[2.6rem] leading-tight text-[#ad6419] sm:text-[3.4rem]">
                Success-Aligned
                <br />
                Partnerships
              </h1>

              <p className="mt-5 text-[0.9rem] leading-7 text-[#7b6657]">
                Commission-based model aligned with your revenue growth. We win
                when you win.
              </p>

              <div className="mt-7 flex gap-3">
                <a className="bg-[#ad6419] px-5 py-3 text-[0.65rem] uppercase tracking-widest text-white">
                  Apply
                </a>
                <a className="border border-[#e0c9b2] px-5 py-3 text-[0.65rem] uppercase tracking-widest text-[#ad6419]">
                  View Tiers
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[520px]">
            <img
              src={heroImage}
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ef] via-[#fbf6ef]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-[2rem] text-[#ad6419]">
            Performance Advantage
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {advantageCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="border p-6">
                  <Icon className="h-5 w-5 text-[#ad6419]" />
                  <h3 className="mt-4 text-[1.2rem]">{card.title}</h3>
                  <p className="mt-2 text-[0.85rem] text-gray-500">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="bg-[#fff8f2] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-[2rem] text-[#ad6419]">
            Commission Tiers
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tierCards.map((tier) => (
              <div
                key={tier.title}
                className={`border p-6 bg-white ${
                  tier.featured ? "scale-105 border-[#ad6419]" : ""
                }`}
              >
                <p className="text-[0.6rem] uppercase tracking-widest">
                  {tier.eyebrow}
                </p>

                <h3 className="mt-2 text-[1.4rem]">{tier.title}</h3>

                <div className="mt-4 text-[#ad6419] text-[1.6rem]">
                  {tier.price}
                </div>

                <ul className="mt-4 space-y-2 text-[0.85rem]">
                  {tier.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <button className="mt-6 w-full bg-[#ad6419] py-2 text-[0.7rem] text-white">
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-[2rem] text-[#ad6419]">Comparison</h2>

          <div className="mt-8 space-y-4 text-[0.85rem]">
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b py-3">
                <div>{row.label}</div>
                <div>{row.subscription}</div>
                <div className="text-[#ad6419]">{row.commission}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#ad6419] px-6 py-10 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[1.6rem]">Apply Now</h2>

          <p className="mt-2 text-[0.8rem] text-white/80">
            Start your partnership journey today.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 grid gap-3">
            <input
              className={`${formFieldClass} py-2 text-[0.8rem]`}
              placeholder="Name"
            />

            <input
              className={`${formFieldClass} py-2 text-[0.8rem]`}
              placeholder="Hotel"
            />

            <input
              className={`${formFieldClass} py-2 text-[0.8rem]`}
              placeholder="Email"
            />

            <button className="mt-2 bg-white px-4 py-2 text-[0.65rem] uppercase tracking-wider text-[#ad6419]">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

/* ICONS */
function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M12 3 5.5 5.5v6.2c0 4.2 2.8 8.1 6.5 9.8 3.7-1.7 6.5-5.6 6.5-9.8V5.5L12 3Z" />
    </svg>
  );
}

function TrendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M4 16.5 10 10.5l3.8 3.8L20 8" />
    </svg>
  );
}

function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="m7 7 5-3 5 3-5 3-5-3Z" />
    </svg>
  );
}
