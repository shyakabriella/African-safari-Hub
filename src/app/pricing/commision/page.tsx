"use client";

import type { FormEvent, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const heroImage =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600";

const formFieldClass =
  "mt-2 w-full border-b border-[#e5d5c4] bg-transparent px-0 py-3 text-[0.96rem] text-[#4f3623] outline-none transition focus:border-[#ad6419]";

const advantageCards = [
  {
    title: "Zero Upfront Risk",
    description:
      "Eliminate heavy initial investments. Our partnership begins with trust, focusing on results before costs. You preserve capital for property improvements while we drive the bookings.",
    icon: ShieldIcon,
  },
  {
    title: "Incentive-Driven",
    description:
      "Our marketing teams are compensated based on your occupancy. This drives a relentless focus on high-conversion channels and premium guest acquisition strategies.",
    icon: TrendIcon,
  },
  {
    title: "Scalable Tech",
    description:
      "Access our full proprietary suite of AI-driven booking engines and guest management tools, built to scale alongside your portfolio growth seamlessly.",
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
      "Includes Global Marketing Spend",
      "Priority Concierge Tech",
      "Advanced CRM Integration",
      "Real-time Analytics Dashboard",
    ],
    cta: "Select Accelerator",
    featured: true,
    badge: "Most Popular",
  },
  {
    eyebrow: "Strategic",
    title: "Enterprise Tier",
    price: "Custom",
    suffix: "Percentage",
    features: [
      "Portfolio Management",
      "White-label Solutions",
      "Dedicated Strategic Advisor",
    ],
    cta: "Contact Sales",
    featured: false,
    badge: undefined,
  },
] as const;

const comparisonRows = [
  {
    label: "Financial Predictability",
    subscription: "High (Fixed Cost)",
    commission: "Variable (Performance-linked)",
  },
  {
    label: "Upfront Commitment",
    subscription: "Monthly Fee",
    commission: "Zero Fee",
  },
  {
    label: "Marketing Alignment",
    subscription: "Standard Support",
    commission: "Maximum Incentive",
  },
  {
    label: "Best For",
    subscription: "Established Brands",
    commission: "Growth & Launch Phases",
  },
] as const;

export default function CommissionPricingPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="min-h-screen bg-[#fffaf7] text-[#4f3623]">
      
      <main id="top">
        <section className="overflow-hidden bg-[#fbf6ef]">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="relative z-10 flex items-center px-6 py-16 sm:px-8 md:py-20 lg:px-6 lg:py-28 xl:pr-18">
              <div className="max-w-xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-[#9b8370]">
                  Performance-Driven Growth
                </p>
                <h1 className="font-display mt-5 text-[3.3rem] leading-[0.9] text-[#ad6419] sm:text-[4.4rem] lg:text-[5.4rem]">
                  Success-Aligned
                  <br />
                  Partnerships
                </h1>
                <p className="mt-6 max-w-lg text-[1rem] leading-8 text-[#7b6657] sm:text-[1.02rem]">
                  Transition from predictable overhead to dynamic performance. At Heritage &amp;
                  Horizon, we believe in skin in the game. Our commission-based model ensures our
                  incentives align perfectly with your hotel&apos;s revenue goals. We only win when you
                  win.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#apply"
                    className="inline-flex items-center justify-center rounded-sm bg-[#ad6419] px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_12px_28px_rgba(173,100,25,0.28)] transition hover:bg-[#8e5114]"
                  >
                    Apply for a Partnership
                  </a>
                  <a
                    href="#tiers"
                    className="inline-flex items-center justify-center rounded-sm border border-[#e0c9b2] bg-white/70 px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#ad6419] transition hover:border-[#ad6419] hover:bg-white"
                  >
                    View Tiers
                  </a>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[760px]">
              <img
                src={heroImage}
                alt="Elegant hospitality reception interior"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#fbf6ef] via-[#fbf6ef]/45 to-[#4b2d12]/18" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,246,235,0.95),transparent_36%)]" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fbf6ef] to-transparent lg:hidden" />
            </div>
          </div>
        </section>

        <section id="advantages" className="bg-white px-6 py-22 sm:py-26">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="font-display text-[2.7rem] leading-none text-[#ad6419] sm:text-[3.6rem]">
                The Performance Advantage
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {advantageCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-sm border border-[#efe4d8] bg-[#fff9f2] p-8 shadow-[0_20px_50px_rgba(173,100,25,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(173,100,25,0.1)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f9ead6] text-[#ad6419]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display mt-6 text-[2rem] leading-none text-[#8d5114]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-[0.96rem] leading-7 text-[#816b5d]">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="tiers" className="bg-[#fff8f2] px-6 py-22 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="font-display text-[2.8rem] leading-none text-[#ad6419] sm:text-[3.7rem]">
                Optimized Commission Tiers
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#8d7667]">
                Select the model that aligns with your operational strategy and growth ambitions.
              </p>
            </div>

            <div className="mt-16 grid gap-7 lg:grid-cols-3 lg:items-end">
              {tierCards.map((tier) => (
                <article
                  key={tier.title}
                  className={[
                    "relative flex h-full flex-col rounded-sm border bg-white p-8",
                    tier.featured
                      ? "border-[#ddb082] shadow-[0_24px_70px_rgba(173,100,25,0.17)] lg:-translate-y-5"
                      : "border-[#eddfd2] shadow-[0_16px_45px_rgba(173,100,25,0.07)]",
                  ].join(" ")}
                >
                  {tier.badge ? (
                    <span className="absolute right-5 top-0 -translate-y-1/2 rounded-sm bg-[#ad6419] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white">
                      {tier.badge}
                    </span>
                  ) : null}

                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#9b8270]">
                    {tier.eyebrow}
                  </p>
                  <h3 className="font-display mt-4 text-[2.3rem] leading-none text-[#8d5114] sm:text-[2.7rem]">
                    {tier.title}
                  </h3>
                  <div className="mt-6 flex items-end gap-2 text-[#ad6419]">
                    <span className="font-display text-[2.6rem] leading-none sm:text-[3rem]">
                      {tier.price}
                    </span>
                    <span className="pb-1 text-sm uppercase tracking-[0.2em] text-[#8f7768]">
                      {tier.suffix}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4 text-[0.96rem] text-[#7f695b]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 leading-7">
                        <span className="mt-1 text-[#ad6419]">
                          <CheckIcon className="h-4 w-4" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <a
                      href="#apply"
                      className={[
                        "inline-flex w-full items-center justify-center rounded-sm border px-5 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition",
                        tier.featured
                          ? "border-[#ad6419] bg-[#ad6419] text-white hover:bg-[#8e5114]"
                          : "border-[#e0c9b2] text-[#ad6419] hover:border-[#ad6419] hover:bg-[#fff6ec]",
                      ].join(" ")}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="bg-white px-6 py-22 sm:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="font-display text-[2.8rem] leading-none text-[#ad6419] sm:text-[3.7rem]">
                The Choice is Yours
              </h2>
            </div>

            <div className="mt-14 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse border-y border-[#eddfd2]">
                <thead>
                  <tr className="text-left">
                    <th className="w-[34%] py-5 pr-6 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9d8574]">
                      Features
                    </th>
                    <th className="w-[33%] py-5 pr-6 font-display text-[2rem] leading-none font-medium text-[#ad6419] sm:text-[2.35rem]">
                      Monthly
                      <br />
                      Subscription
                    </th>
                    <th className="w-[33%] py-5 font-display text-[2rem] leading-none font-medium text-[#ad6419] sm:text-[2.35rem]">
                      Commission
                      <br />
                      Model
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-t border-[#f1e6dc] align-top">
                      <td className="py-5 pr-6 text-[0.96rem] font-medium text-[#7f695b]">{row.label}</td>
                      <td className="py-5 pr-6 text-[0.96rem] text-[#6e594c]">{row.subscription}</td>
                      <td className="py-5 text-[0.96rem] font-semibold text-[#ad6419]">{row.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="apply" className="relative isolate overflow-hidden bg-[#ad6419] px-6 py-20 text-white sm:py-24">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-12 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(122,71,18,0.97),rgba(173,100,25,0.9))]" />

          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="font-display text-[3rem] leading-none text-white sm:text-[4rem]">
                Apply for a Partnership
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] leading-8 text-[#f7e2cf]">
                Our selection process is rigorous. We look for properties that share our commitment
                to exceptional service and heritage preservation. Tell us about your property, and
                let&apos;s discuss how we can grow together.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-[#fff2e8]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <StarIcon className="h-4 w-4" />
                </span>
                Elite Member of Global Hospitality Alliance
              </div>
            </div>

            <div className="justify-self-end rounded-sm bg-[#fffdfb] p-7 text-[#4f3623] shadow-[0_28px_70px_rgba(64,29,5,0.3)] sm:p-9 lg:min-w-[34rem]">
              <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
                <label className="block text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#9c816f]">
                  Your Name
                  <input type="text" className={formFieldClass} placeholder="Alex Carter" />
                </label>
                <label className="block text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#9c816f]">
                  Hotel Name
                  <input type="text" className={formFieldClass} placeholder="The Beaumont House" />
                </label>
                <label className="block text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#9c816f] sm:col-span-2">
                  Email Address
                  <input type="email" className={formFieldClass} placeholder="owner@hotel.com" />
                </label>
                <label className="block text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#9c816f] sm:col-span-2">
                  Preferred Tier
                  <select className={`${formFieldClass} appearance-none`}>
                    <option>Growth Tier</option>
                    <option>Accelerator Tier</option>
                    <option>Enterprise Tier</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex w-full items-center justify-center rounded-sm bg-[#ad6419] px-6 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_14px_26px_rgba(173,100,25,0.28)] transition hover:bg-[#8e5114]"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3 5.5 5.5v6.2c0 4.2 2.8 8.1 6.5 9.8 3.7-1.7 6.5-5.6 6.5-9.8V5.5L12 3Z" />
      <path d="M9.2 11.8 11 13.6l3.8-4" />
    </svg>
  );
}

function TrendIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 16.5 10 10.5l3.8 3.8L20 8" />
      <path d="M15 8h5v5" />
    </svg>
  );
}

function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m7 7 5-3 5 3-5 3-5-3Z" />
      <path d="m5 12 7 4 7-4" />
      <path d="m5 16 7 4 7-4" />
    </svg>
  );
}

function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 3.8 2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 15.8l-4.7 2.45.9-5.23-3.8-3.7 5.25-.76L12 3.8Z" />
    </svg>
  );
}
