import Link from "next/link";
import { Check } from "lucide-react";

export const dynamic = "force-dynamic";

type Tier = {
  title: string;
  description: string;
  price: string;
  button_text?: string;
  buttonText?: string;
  is_recommended?: boolean;
  isRecommended?: boolean;
  features: string[];
};

type ComparisonRow = {
  feature: string;
  foundation: string;
  horizon: string;
  elite: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type MonthlyPlanPageData = {
  hero_kicker?: string;
  hero_title?: string;
  hero_subtitle?: string;

  tiers?: Tier[];

  banner_image?: string;
  banner_title?: string;
  banner_subtitle?: string;

  compare_title?: string;
  comparison_rows?: ComparisonRow[];

  faq_title?: string;
  faqs?: FAQ[];

  is_active?: boolean;
};

type ApiResponse<T> = {
  success?: boolean;
  message?: string;
  data?: T;
};

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

const RAW_API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api";

const API_BASE_URL = RAW_API_BASE.replace(/\/$/, "");

const DEFAULT_DATA: MonthlyPlanPageData = {
  hero_kicker: "Investment Tiers",
  hero_title: "Investment in Excellence",
  hero_subtitle: "Scalable growth solutions for hospitality brands.",

  tiers: [
    {
      title: "Heritage Foundation",
      description: "AI guest support + booking engine for independent properties.",
      price: "2,450",
      button_text: "Begin",
      is_recommended: false,
      features: [
        "AI Guest Support",
        "Booking Engine",
        "Marketing Automations",
        "Reports",
      ],
    },
    {
      title: "Horizon Suite",
      description: "Full AI concierge + analytics suite.",
      price: "5,900",
      button_text: "Upgrade",
      is_recommended: true,
      features: [
        "Multilingual AI",
        "CRM Integration",
        "Revenue Analytics",
        "Automation",
        "Priority Support",
      ],
    },
    {
      title: "Elite",
      description: "Bespoke AI + global management.",
      price: "12,500",
      button_text: "Contact",
      is_recommended: false,
      features: [
        "Custom AI Models",
        "Global Panel",
        "24/7 Concierge",
        "Brand AI",
        "Strategy",
      ],
    },
  ],

  banner_image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
  banner_title: "Standards",
  banner_subtitle: "Engineering hospitality systems that scale.",

  compare_title: "Compare",

  comparison_rows: [
    {
      feature: "AI Support",
      foundation: "Standard",
      horizon: "Multi",
      elite: "Bespoke",
    },
    {
      feature: "Marketing",
      foundation: "Email",
      horizon: "CRM",
      elite: "Omnichannel",
    },
    {
      feature: "Integration",
      foundation: "Self",
      horizon: "Guided",
      elite: "White-glove",
    },
    {
      feature: "Analytics",
      foundation: "Monthly",
      horizon: "Real-time",
      elite: "Predictive",
    },
    {
      feature: "Brand",
      foundation: "—",
      horizon: "Basic",
      elite: "Global",
    },
  ],

  faq_title: "FAQ",

  faqs: [
    {
      question: "Upgrade?",
      answer: "Yes, anytime.",
    },
    {
      question: "Setup time?",
      answer: "72h–10 days.",
    },
    {
      question: "AI custom?",
      answer: "Yes, trained per brand.",
    },
  ],

  is_active: true,
};

function getSiteBaseUrl() {
  return API_BASE_URL.replace(/\/api$/, "");
}

function getFullImageUrl(imagePath?: string) {
  if (!imagePath) return "";

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  const siteBaseUrl = getSiteBaseUrl();

  if (imagePath.startsWith("/storage/")) {
    return `${siteBaseUrl}${imagePath}`;
  }

  if (imagePath.startsWith("storage/")) {
    return `${siteBaseUrl}/${imagePath}`;
  }

  if (imagePath.startsWith("/")) {
    return `${siteBaseUrl}${imagePath}`;
  }

  return imagePath;
}

function normalizePageData(data?: MonthlyPlanPageData | null): MonthlyPlanPageData {
  if (!data) return DEFAULT_DATA;

  return {
    hero_kicker: data.hero_kicker || DEFAULT_DATA.hero_kicker,
    hero_title: data.hero_title || DEFAULT_DATA.hero_title,
    hero_subtitle: data.hero_subtitle || DEFAULT_DATA.hero_subtitle,

    tiers:
      Array.isArray(data.tiers) && data.tiers.length > 0
        ? data.tiers
        : DEFAULT_DATA.tiers,

    banner_image: data.banner_image || DEFAULT_DATA.banner_image,
    banner_title: data.banner_title || DEFAULT_DATA.banner_title,
    banner_subtitle: data.banner_subtitle || DEFAULT_DATA.banner_subtitle,

    compare_title: data.compare_title || DEFAULT_DATA.compare_title,

    comparison_rows:
      Array.isArray(data.comparison_rows) && data.comparison_rows.length > 0
        ? data.comparison_rows
        : DEFAULT_DATA.comparison_rows,

    faq_title: data.faq_title || DEFAULT_DATA.faq_title,

    faqs:
      Array.isArray(data.faqs) && data.faqs.length > 0
        ? data.faqs
        : DEFAULT_DATA.faqs,

    is_active:
      typeof data.is_active === "boolean"
        ? data.is_active
        : DEFAULT_DATA.is_active,
  };
}

async function getMonthlyPlanPageData(): Promise<MonthlyPlanPageData> {
  try {
    const response = await fetch(`${API_BASE_URL}/monthly-plan-page`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return DEFAULT_DATA;
    }

    const result = (await response.json()) as ApiResponse<MonthlyPlanPageData>;

    return normalizePageData(result.data);
  } catch {
    return DEFAULT_DATA;
  }
}

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

      <h3 className="mb-2 font-serif text-xl text-slate-900">{title}</h3>

      <p className="mb-4 h-9 text-[11px] leading-relaxed text-gray-600">
        {description}
      </p>

      <div className="mb-6 flex items-baseline">
        <span className="font-serif text-3xl text-slate-900">${price}</span>
        <span className="ml-2 text-[9px] tracking-widest text-gray-400 uppercase">
          / Month
        </span>
      </div>

      <ul className="mb-6 grow space-y-2">
        {features.map((feature, index) => (
          <li
            key={`${feature}-${index}`}
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
            ? "border-[#AD6419] bg-[#AD6419] text-white hover:border-slate-900 hover:bg-slate-900"
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
      <div className="text-[11px] font-medium text-slate-900">{feature}</div>
      <div className="text-center text-[11px] text-gray-500">{foundation}</div>
      <div className="text-center text-[11px] font-semibold text-[#AD6419]">
        {horizon}
      </div>
      <div className="text-center text-[11px] text-gray-500">{elite}</div>
    </div>
  );
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <h4 className="mb-1 text-[9px] font-bold uppercase tracking-widest text-slate-900">
        {question}
      </h4>
      <p className="max-w-2xl text-[11px] leading-relaxed text-gray-600">
        {answer}
      </p>
    </div>
  );
}

export default async function MonthlyPlansPage() {
  const page = await getMonthlyPlanPageData();

  const tiers = page.tiers || [];
  const comparisonRows = page.comparison_rows || [];
  const faqs = page.faqs || [];
  const bannerImage = getFullImageUrl(page.banner_image);

  if (page.is_active === false) {
    return (
      <div className="min-h-screen bg-white px-4 pt-28 text-center font-sans">
        <h1 className="font-serif text-3xl text-slate-900">
          Monthly Plans Unavailable
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
          This page is currently not active. Please check again later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#AD6419]/20">
      {/* HERO */}
      <section className="mt-12 px-4 pb-10 pt-14">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.35em] text-gray-400">
            {page.hero_kicker}
          </span>

          <h1 className="mb-4 font-serif text-3xl text-slate-900 md:text-4xl">
            {page.hero_title}
          </h1>

          <p className="mx-auto max-w-xl text-[12px] leading-relaxed text-gray-600">
            {page.hero_subtitle}
          </p>
        </div>
      </section>

      {/* TIERS */}
      <section className="px-4 py-6">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <TierCard
              key={`${tier.title}-${index}`}
              title={tier.title}
              description={tier.description}
              price={tier.price}
              buttonText={tier.button_text || tier.buttonText || "Contact"}
              isRecommended={
                Boolean(tier.is_recommended) || Boolean(tier.isRecommended)
              }
              features={Array.isArray(tier.features) ? tier.features : []}
            />
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="px-4 py-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden">
          {bannerImage ? (
            <img
              src={bannerImage}
              className="h-[260px] w-full object-cover"
              alt={page.banner_title || "Luxury hotel interior"}
            />
          ) : (
            <div className="h-[260px] w-full bg-[#f6efe9]" />
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-3">
            <div className="max-w-lg bg-white/95 px-5 py-6 text-center shadow-md">
              <h2 className="mb-3 font-serif text-2xl italic text-slate-900">
                {page.banner_title}
              </h2>

              <div className="mx-auto mb-3 h-px w-10 bg-[#AD6419]" />

              <p className="text-[9px] uppercase tracking-widest text-gray-600">
                {page.banner_subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="bg-[#f6efe9]/50 py-10">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-center font-serif text-2xl italic text-slate-900">
            {page.compare_title}
          </h2>

          <div className="hidden md:block">
            <div className="grid grid-cols-4 border-b border-gray-300 pb-3 text-[9px] font-bold uppercase tracking-widest text-gray-400">
              <div>Feature</div>
              <div className="text-center">Foundation</div>
              <div className="text-center">Horizon</div>
              <div className="text-center">Elite</div>
            </div>

            {comparisonRows.map((row, index) => (
              <CapabilityRow
                key={`${row.feature}-${index}`}
                feature={row.feature}
                foundation={row.foundation}
                horizon={row.horizon}
                elite={row.elite}
              />
            ))}
          </div>

          <div className="space-y-3 md:hidden">
            {comparisonRows.map((row, index) => (
              <div
                key={`${row.feature}-mobile-${index}`}
                className="border border-gray-200 bg-white p-4"
              >
                <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-slate-900">
                  {row.feature}
                </h3>

                <div className="space-y-2 text-[11px] text-gray-600">
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold text-slate-900">
                      Foundation
                    </span>
                    <span>{row.foundation}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold text-[#AD6419]">
                      Horizon
                    </span>
                    <span>{row.horizon}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-semibold text-slate-900">Elite</span>
                    <span>{row.elite}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-serif text-2xl italic text-slate-900">
            {page.faq_title}
          </h2>

          {faqs.map((faq, index) => (
            <FAQItem
              key={`${faq.question}-${index}`}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
}