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
        "relative flex flex-col border bg-[#f6efe9] p-4",
        isRecommended
          ? "z-10 scale-[1.01] border-[#AD6419] ring-1 ring-[#AD6419]"
          : "border-gray-200",
      ].join(" ")}
    >
      {isRecommended ? (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#AD6419] px-2 py-0.5 text-[8px] font-bold tracking-widest text-white uppercase">
          Recommended
        </div>
      ) : null}

      <h3 className="mb-2 font-serif text-xl text-slate-900">
        {title}
      </h3>

      <p className="mb-4 h-9 text-[11px] leading-relaxed text-gray-600">
        {description}
      </p>

      <div className="mb-6 flex items-baseline">
        <span className="font-serif text-3xl text-slate-900">
          ${price}
        </span>
        <span className="ml-2 text-[9px] tracking-widest text-gray-400 uppercase">
          / Month
        </span>
      </div>

      <ul className="mb-6 grow space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start text-[10px] leading-tight tracking-wide text-gray-600"
          >
            <Check className="mr-2 h-3 w-3 shrink-0 text-[#AD6419]" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={[
          "w-full border py-2.5 text-center text-[10px] font-bold tracking-widest uppercase transition-all",
          isRecommended
            ? "border-[#AD6419] bg-[#AD6419] text-white hover:bg-slate-900 hover:border-slate-900"
            : "border-gray-300 text-gray-600 hover:border-slate-900 hover:text-slate-900",
        ].join(" ")}
      >
        {buttonText}
      </Link>
    </div>
  );
}

function CapabilityRow({
  feature,
  foundation,
  horizon,
  elite,
}: CapabilityRowProps) {
  return (
    <div className="grid grid-cols-4 border-b border-gray-100 py-3 text-[11px]">
      <div className="font-medium text-slate-900 text-[11px]">
        {feature}
      </div>
      <div className="text-center text-gray-500 text-[11px]">
        {foundation}
      </div>
      <div className="text-center font-semibold text-[#AD6419] text-[11px]">
        {horizon}
      </div>
      <div className="text-center text-gray-500 text-[11px]">
        {elite}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <h4 className="mb-1 text-[9px] font-bold tracking-widest text-slate-900 uppercase">
        {question}
      </h4>
      <p className="max-w-2xl text-[11px] leading-relaxed text-gray-600">
        {answer}
      </p>
    </div>
  );
}

export default function MonthlyPlansPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#AD6419]/20">

      {/* HERO */}
      <section className="px-4 pt-14 pb-10 mt-12">
        <div className="mx-auto max-w-5xl text-center">

          <span className="mb-3 block text-[8px] font-bold tracking-[0.35em] text-gray-400 uppercase">
            Investment Tiers
          </span>

          <h1 className="mb-4 font-serif text-3xl text-slate-900 md:text-4xl">
            Investment in Excellence
          </h1>

          <p className="mx-auto max-w-xl text-[12px] leading-relaxed text-gray-600">
            Scalable growth solutions for hospitality brands.
          </p>

        </div>
      </section>

      {/* TIERS */}
      <section className="px-4 py-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">

          <TierCard
            title="Heritage Foundation"
            description="AI guest support + booking engine for independent properties."
            price="2,450"
            buttonText="Begin"
            features={[
              "AI Guest Support",
              "Booking Engine",
              "Marketing Automations",
              "Reports",
            ]}
          />

          <TierCard
            isRecommended
            title="Horizon Suite"
            description="Full AI concierge + analytics suite."
            price="5,900"
            buttonText="Upgrade"
            features={[
              "Multilingual AI",
              "CRM Integration",
              "Revenue Analytics",
              "Automation",
              "Priority Support",
            ]}
          />

          <TierCard
            title="Elite"
            description="Bespoke AI + global management."
            price="12,500"
            buttonText="Contact"
            features={[
              "Custom AI Models",
              "Global Panel",
              "24/7 Concierge",
              "Brand AI",
              "Strategy",
            ]}
          />

        </div>
      </section>

      {/* BANNER */}
      <section className="px-4 py-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden">

          <img
            src={BANNER_IMAGE}
            className="h-[260px] w-full object-cover"
            alt="Luxury hotel interior"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-3">

            <div className="max-w-lg bg-white/95 px-5 py-6 text-center shadow-md">

              <h2 className="mb-3 font-serif text-2xl italic text-slate-900">
                Standards
              </h2>

              <div className="mx-auto mb-3 h-px w-10 bg-[#AD6419]" />

              <p className="text-[9px] tracking-widest text-gray-600 uppercase">
                Engineering hospitality systems that scale.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="bg-[#f6efe9]/50 py-10">

        <div className="mx-auto max-w-5xl px-4">

          <h2 className="mb-6 text-center font-serif text-2xl text-slate-900 italic">
            Compare
          </h2>

          <div className="hidden md:block">

            <div className="grid grid-cols-4 border-b border-gray-300 pb-3 text-[9px] font-bold tracking-widest text-gray-400 uppercase">
              <div>Feature</div>
              <div className="text-center">Foundation</div>
              <div className="text-center">Horizon</div>
              <div className="text-center">Elite</div>
            </div>

            <CapabilityRow
              feature="AI Support"
              foundation="Standard"
              horizon="Multi"
              elite="Bespoke"
            />

            <CapabilityRow
              feature="Marketing"
              foundation="Email"
              horizon="CRM"
              elite="Omnichannel"
            />

            <CapabilityRow
              feature="Integration"
              foundation="Self"
              horizon="Guided"
              elite="White-glove"
            />

            <CapabilityRow
              feature="Analytics"
              foundation="Monthly"
              horizon="Real-time"
              elite="Predictive"
            />

            <CapabilityRow
              feature="Brand"
              foundation="—"
              horizon="Basic"
              elite="Global"
            />

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="px-4 py-10">

        <div className="mx-auto max-w-3xl">

          <h2 className="mb-6 text-center font-serif text-2xl text-slate-900 italic">
            FAQ
          </h2>

          <FAQItem
            question="Upgrade?"
            answer="Yes, anytime."
          />

          <FAQItem
            question="Setup time?"
            answer="72h–10 days."
          />

          <FAQItem
            question="AI custom?"
            answer="Yes, trained per brand."
          />

        </div>

      </section>

    </div>
  );
}