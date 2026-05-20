import Link from "next/link";
import { Check } from "lucide-react";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600";

type TierCardProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  buttonText: string;
};

type CapabilityRowProps = {
  feature: string;
  foundation: string;
  horizon: string;
  elite: string;
};

type FAQItemProps = {
  question: string;
  answer: string;
};

function TierCard({
  title,
  description,
  price,
  features,
  isRecommended = false,
  buttonText,
}: TierCardProps) {
  return (
    <div
      className={[
        "relative flex flex-col border bg-[#f6efe9] p-10",
        isRecommended
          ? "z-10 scale-105 border-[#AD6419] ring-1 ring-[#AD6419]"
          : "border-gray-200",
      ].join(" ")}
    >
      {isRecommended ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#AD6419] px-4 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase">
          Recommended
        </div>
      ) : null}
      <h3 className="mb-4 font-serif text-3xl text-slate-900">{title}</h3>
      <p className="mb-8 h-12 text-sm leading-relaxed text-gray-600">{description}</p>
      <div className="mb-10 flex items-baseline">
        <span className="font-serif text-5xl text-slate-900">${price}</span>
        <span className="ml-2 text-xs tracking-widest text-gray-400 uppercase">/ Month</span>
      </div>
      <ul className="mb-12 grow space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start text-xs leading-tight tracking-wide text-gray-600"
          >
            <Check className="mr-3 h-4 w-4 shrink-0 text-[#AD6419]" strokeWidth={3} />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={[
          "w-full border py-4 text-center text-xs font-bold tracking-widest uppercase transition-all",
          isRecommended
            ? "border-[#AD6419] bg-[#AD6419] text-white hover:border-slate-900 hover:bg-slate-900"
            : "border-gray-300 text-gray-600 hover:border-slate-900 hover:text-slate-900",
        ].join(" ")}
      >
        {buttonText}
      </Link>
    </div>
  );
}

function CapabilityRow({ feature, foundation, horizon, elite }: CapabilityRowProps) {
  return (
    <div className="grid grid-cols-4 border-b border-gray-100 py-8 text-sm">
      <div className="font-medium text-slate-900">{feature}</div>
      <div className="text-center text-gray-500">{foundation}</div>
      <div className="text-center font-semibold text-[#AD6419]">{horizon}</div>
      <div className="text-center text-gray-500">{elite}</div>
    </div>
  );
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 py-8 last:border-0">
      <h4 className="mb-4 text-xs font-bold tracking-widest text-slate-900 uppercase">
        {question}
      </h4>
      <p className="max-w-2xl text-sm leading-relaxed text-gray-600">{answer}</p>
    </div>
  );
}

export default function MonthlyPlansPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#AD6419]/20">
      <section className="px-6 pt-28 pb-20">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-6 block text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">
            Investment Tiers
          </span>
          <h1 className="mb-8 font-serif text-6xl text-slate-900 md:text-7xl">
            Investment in Excellence
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Scalable growth solutions tailored for the world&apos;s most distinguished
            properties. From boutique stays to global hospitality groups.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          <TierCard
            title="The Heritage Foundation"
            description="Essential AI guest support and booking engine for independent properties."
            price="2,450"
            buttonText="Begin Foundation"
            features={[
              "24/7 AI Guest Support Agent",
              "Direct Booking Engine Integration",
              "Basic Marketing Automations",
              "Monthly Performance Reports",
            ]}
          />
          <TierCard
            isRecommended
            title="The Horizon Suite"
            description="Full AI concierge, advanced marketing integrations, and performance insights."
            price="5,900"
            buttonText="Upgrade to Horizon"
            features={[
              "Multilingual AI Concierge",
              "CRM & PMS Deep Integration",
              "Predictive Revenue Analytics",
              "Social Media Auto-Pilot",
              "Priority Technical Support",
            ]}
          />
          <TierCard
            title="The Institutional Elite"
            description="Bespoke AI modeling and global brand management for luxury groups."
            price="12,500"
            buttonText="Inquire for Elite"
            features={[
              "Custom-Trained AI Brand Models",
              "Global Fleet Management Panel",
              "24/7 Dedicated Human Concierge",
              "Influencer & Brand Partnership AI",
              "Quarterly Strategy Consultation",
            ]}
          />
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="group relative mx-auto h-[600px] max-w-7xl overflow-hidden">
          <img
            src={BANNER_IMAGE}
            className="h-full w-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-105"
            alt="Luxury hotel interior"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6">
            <div className="max-w-2xl bg-white/95 px-12 py-16 text-center shadow-2xl backdrop-blur">
              <h2 className="mb-6 font-serif text-4xl tracking-tight text-slate-900 italic md:text-5xl">
                Uncompromising Standards
              </h2>
              <div className="mx-auto mb-6 h-px w-16 bg-[#AD6419]" />
              <p className="text-sm leading-relaxed tracking-widest text-gray-600 uppercase">
                We do not just provide software; we engineer experiences that uphold the
                legacy of your institution while paving the way for its digital horizon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="compare" className="bg-[#f6efe9]/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-20 text-center font-serif text-4xl text-slate-900 italic">
            Compare Capabilities
          </h2>

          <div className="hidden md:block">
            <div className="grid grid-cols-4 border-b border-gray-300 pb-6 text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              <div>Feature</div>
              <div className="text-center">Foundation</div>
              <div className="text-center">Horizon</div>
              <div className="text-center">Elite</div>
            </div>

            <CapabilityRow
              feature="AI Guest Support"
              foundation="Standard"
              horizon="Premium + Multi-Lang"
              elite="Bespoke Modeling"
            />
            <CapabilityRow
              feature="Marketing Tools"
              foundation="Basic Email"
              horizon="Social + CRM Suite"
              elite="Omnichannel Strategy"
            />
            <CapabilityRow
              feature="Integration Support"
              foundation="Self-Service"
              horizon="Guided Setup"
              elite="White-Glove Migration"
            />
            <CapabilityRow
              feature="Analytics"
              foundation="Monthly"
              horizon="Real-time Dashboard"
              elite="Predictive Forecasting"
            />
            <CapabilityRow
              feature="Brand Management"
              foundation="—"
              horizon="Basic Controls"
              elite="Global Governance"
            />
          </div>

          <div className="space-y-4 md:hidden">
            <p className="text-center text-gray-500 italic">
              Full comparison available on desktop.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center font-serif text-4xl text-slate-900 italic">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            <FAQItem
              question="Can we upgrade our plan at any time?"
              answer="Yes, transitions between Heritage and Horizon tiers are seamless. Elite migrations require a consultation to ensure model continuity."
            />
            <FAQItem
              question="How long is the implementation process?"
              answer="Foundation setups take 72 hours. Horizon integration usually completes within 10 business days including PMS mapping."
            />
            <FAQItem
              question="Is the AI trained on our specific property?"
              answer="Horizon and Elite tiers include training on your specific brand voice, local amenities, and historical guest interaction data."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
