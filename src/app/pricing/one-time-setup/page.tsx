import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920";
const ECOSYSTEM_IMAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800";

const SETUP_FEATURES = [
  {
    title: "Data Integrity Check",
    description:
      "Thorough audit and cleansing of legacy guest profiles and booking history to ensure a pristine database migration.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Custom AI Training",
    description:
      "Fine-tuning our generative models to reflect your specific property brand voice, history, and service standards.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 002-2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "PMS Synchronization",
    description:
      "Bidirectional real-time integration with Opera, Mews, or Cloudbeds to maintain a single source of truth.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    ),
  },
  {
    title: "Staff Training Workshops",
    description:
      "Hands-on certification for your front-of-house and management teams on the platform dashboard.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
] as const;

const TRANSITION_WEEKS = [
  {
    week: "1",
    label: "Week 1: Discovery",
    description:
      "Deep-dive audit of workflows, brand voice mapping, and system scoping.",
  },
  {
    week: "2",
    label: "Week 2: Integration",
    description:
      "API setup, data migration, and AI tuning.",
  },
  {
    week: "3",
    label: "Week 3: Training",
    description:
      "Staff simulations, testing, and deployment.",
  },
] as const;

const btnPrimary =
  "inline-flex items-center justify-center bg-[#AD6419] px-6 py-2.5 text-[10px] font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#8A4F12]";
const btnOutline =
  "inline-flex items-center justify-center border border-white/30 px-6 py-2.5 text-[10px] font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-white/10";

export default function OneTimeSetupPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden lg:min-h-[600px]">

        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-24 pb-12">

          <div className="max-w-lg">

            <p className="mb-3 text-[9px] tracking-[0.25em] text-[#AD6419]/70 uppercase">
              Onboarding Experience
            </p>

            <h1 className="mb-4 font-serif text-4xl md:text-5xl font-normal text-[#1a1a1a] leading-tight">
              A Foundation for Excellence
            </h1>

            <p className="mb-6 text-xs leading-relaxed text-gray-600">
              Precision is the hallmark of luxury. Our onboarding ensures seamless transition
              and system integrity.
            </p>

            <Link href="/contact" className={btnPrimary}>
              Start Transition
            </Link>

          </div>

        </div>
      </section>

      {/* SETUP TIERS */}
      <section className="py-16">

        <div className="mx-auto max-w-5xl px-5">

          <h2 className="mb-10 text-center font-serif text-3xl font-normal text-[#1a1a1a]">
            Initial Investment Tiers
          </h2>

          <div className="grid gap-5 md:grid-cols-3">

            {/* Tier 1 */}
            <div className="border border-gray-200/50 bg-[#F5F3F1] p-5">
              <p className="mb-2 text-[9px] tracking-widest text-gray-400 uppercase">Tier I</p>
              <h3 className="mb-3 font-serif text-xl">Foundation Setup</h3>
              <p className="mb-5 text-xs text-gray-500">
                Standard integration for boutique properties.
              </p>
              <span className="font-serif text-3xl">$4,500</span>
              <p className="text-[9px] text-gray-400 uppercase">One-Time</p>
            </div>

            {/* Tier 2 */}
            <div className="relative bg-[#AD6419] p-5 text-white">
              <p className="mb-2 text-[9px] text-white/60 uppercase tracking-widest">
                Tier II
              </p>
              <h3 className="mb-3 font-serif text-xl">Horizon Setup</h3>
              <p className="mb-5 text-xs text-white/80">
                Full AI integration and scaling.
              </p>
              <span className="font-serif text-3xl">$8,750</span>
              <p className="text-[9px] text-white/60 uppercase">One-Time</p>
            </div>

            {/* Tier 3 */}
            <div className="border border-gray-200/50 bg-[#F5F3F1] p-5">
              <p className="mb-2 text-[9px] tracking-widest text-gray-400 uppercase">Tier III</p>
              <h3 className="mb-3 font-serif text-xl">Elite Migration</h3>
              <p className="mb-5 text-xs text-gray-500">
                Enterprise onboarding for large groups.
              </p>
              <span className="font-serif text-3xl">$15,000+</span>
              <p className="text-[9px] text-gray-400 uppercase">One-Time</p>
            </div>

          </div>

        </div>

      </section>

      {/* ECOSYSTEM */}
      <section className="py-16">

        <div className="mx-auto max-w-5xl px-5 grid gap-10 lg:grid-cols-2">

          <div>
            <h2 className="mb-4 font-serif text-3xl font-normal">
              Setup Ecosystem
            </h2>

            <p className="mb-6 text-xs text-gray-500">
              Dedicated onboarding team ensures smooth deployment.
            </p>

            <img
              src={ECOSYSTEM_IMAGE}
              className="h-44 w-full object-cover"
              alt=""
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {SETUP_FEATURES.map((f) => (
              <div key={f.title} className="border p-4">

                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-gray-50">
                  <svg className="h-4 w-4 text-[#AD6419]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {f.icon}
                  </svg>
                </div>

                <h4 className="mb-2 text-sm font-serif">{f.title}</h4>

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {f.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TRANSITION */}
      <section className="py-16">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="mb-10 font-serif text-3xl font-normal">
            21-Day Transition
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {TRANSITION_WEEKS.map((w) => (
              <div key={w.week}>

                <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center bg-[#AD6419] text-white text-xs">
                  {w.week}
                </div>

                <p className="mb-2 text-[9px] uppercase tracking-widest text-gray-400">
                  {w.label}
                </p>

                <p className="text-[11px] text-gray-500">
                  {w.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#2a2a2a] py-16">

        <div className="mx-auto max-w-3xl px-5 text-center text-white">

          <h2 className="mb-4 font-serif text-3xl font-normal">
            Ready to Elevate?
          </h2>

          <p className="mb-6 text-xs text-white/60">
            Start your onboarding journey today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className={btnPrimary}>
              Start Transition
            </Link>

            <Link href="/contact" className={btnOutline}>
              Download Guide
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}