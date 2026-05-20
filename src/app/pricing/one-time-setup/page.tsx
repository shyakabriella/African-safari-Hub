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
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
      "Deep-dive audit of current workflows, brand voice mapping, and technical environment scoping.",
  },
  {
    week: "2",
    label: "Week 2: Integration",
    description:
      "API connectivity establishment, data migration execution, and AI model hyper-parameter tuning.",
  },
  {
    week: "3",
    label: "Week 3: Training",
    description:
      "Live staff simulations, performance testing, and full production deployment of the platform.",
  },
] as const;

const btnPrimary =
  "inline-flex items-center justify-center bg-[#AD6419] px-8 py-3.5 text-[11px] font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#8A4F12]";
const btnOutline =
  "inline-flex items-center justify-center border border-white/30 px-10 py-3.5 text-[11px] font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-white/10";

export default function OneTimeSetupPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[620px] items-center overflow-hidden lg:min-h-[700px]">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Luxury hotel lobby with arches"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/70 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-8">
          <div className="max-w-xl">
            <p className="mb-4 text-[10px] font-medium tracking-[0.3em] text-[#AD6419]/70 uppercase">
              The Onboarding Experience
            </p>
            <h1 className="mb-6 font-serif text-5xl leading-[1.1] font-normal text-[#1a1a1a] md:text-6xl lg:text-7xl">
              A Foundation for
              <br />
              Excellence
            </h1>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-600">
              Precision is the hallmark of luxury. Our meticulous onboarding process ensures a
              seamless digital transition, preserving your legacy while empowering your future
              through institutional-grade integration and AI refinement.
            </p>
            <Link href="/contact" className={btnPrimary}>
              Start Your Transition
            </Link>
          </div>
        </div>
      </section>

      <section id="setup-fees" className="bg-white py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-normal text-[#1a1a1a] md:text-5xl">
              Initial Investment Tiers
            </h2>
            <div className="mx-auto h-px w-12 bg-[#1a1a1a]" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-gray-200/50 bg-[#F5F3F1] p-8">
              <p className="mb-3 text-[10px] tracking-[0.2em] text-gray-400 uppercase">Tier I</p>
              <h3 className="mb-4 font-serif text-2xl text-[#1a1a1a]">Foundation Setup</h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-500">
                Standard integration for boutique properties looking to digitize their legacy
                operations.
              </p>
              <div className="mb-2">
                <span className="font-serif text-4xl text-[#1a1a1a]">$4,500</span>
              </div>
              <p className="text-[10px] tracking-wider text-gray-400 uppercase">One-Time Fee</p>
            </div>

            <div className="relative bg-[#AD6419] p-8 text-white">
              <div className="absolute top-6 right-6 opacity-20">
                <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                </svg>
              </div>
              <p className="mb-3 text-[10px] tracking-[0.2em] text-white/60 uppercase">
                Tier II — Most Popular
              </p>
              <h3 className="mb-4 font-serif text-2xl">Horizon Implementation</h3>
              <p className="mb-8 text-sm leading-relaxed text-white/80">
                Comprehensive scaling for multi-unit properties requiring deep AI training and
                system synchronization.
              </p>
              <div className="mb-2">
                <span className="font-serif text-4xl">$8,750</span>
              </div>
              <p className="text-[10px] tracking-wider text-white/50 uppercase">One-Time Fee</p>
            </div>

            <div className="border border-gray-200/50 bg-[#F5F3F1] p-8">
              <p className="mb-3 text-[10px] tracking-[0.2em] text-gray-400 uppercase">Tier III</p>
              <h3 className="mb-4 font-serif text-2xl text-[#1a1a1a]">Elite Migration</h3>
              <p className="mb-8 text-sm leading-relaxed text-gray-500">
                White-glove concierge onboarding for institutional portfolios with complex legacy
                data needs.
              </p>
              <div className="mb-2">
                <span className="font-serif text-4xl text-[#1a1a1a]">$15,000+</span>
              </div>
              <p className="text-[10px] tracking-wider text-gray-400 uppercase">One-Time Fee</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl leading-tight font-normal text-[#1a1a1a] md:text-5xl">
                The Setup
                <br />
                Ecosystem
              </h2>
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-500">
                Every activation is handled by a dedicated deployment team to ensure zero downtime
                and absolute data integrity.
              </p>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={ECOSYSTEM_IMAGE}
                  alt="Server room"
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {SETUP_FEATURES.map((feature) => (
                <div key={feature.title} className="border border-gray-200 bg-white p-6">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50">
                    <svg
                      className="h-4 w-4 text-[#AD6419]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <h4 className="mb-2 font-serif text-base text-[#1a1a1a]">{feature.title}</h4>
                  <p className="text-xs leading-relaxed text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-serif text-4xl font-normal text-[#1a1a1a] md:text-5xl">
              The 21-Day Transition
            </h2>
            <p className="text-sm text-gray-400">
              Predictable milestones for a world-class activation.
            </p>
          </div>

          <div className="relative grid gap-8 md:grid-cols-3">
            <div className="absolute top-5 right-[20%] left-[20%] hidden h-px bg-gray-200 md:block" />

            {TRANSITION_WEEKS.map((item) => (
              <div key={item.week} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-10 w-10 items-center justify-center bg-[#AD6419]">
                  <span className="text-sm text-white">{item.week}</span>
                </div>
                <p className="mb-3 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                  {item.label}
                </p>
                <p className="mx-auto max-w-[220px] text-xs leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#2a2a2a] py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="mb-6 font-serif text-4xl font-normal text-white md:text-5xl">
            Ready to Elevate Your Standard?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-white/60">
            Secure your place in the future of hospitality. Our implementation experts are standing
            by to curate your onboarding experience.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className={btnPrimary}>
              Start Your Transition
            </Link>
            <Link href="/contact" className={btnOutline}>
              Download Methodology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
