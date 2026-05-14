import React from "react";

const navigation = [
  "Benefits",
  "How It Works",
  "Dashboard",
];

const stats = {
  rating: "4.8 / 5.0",
  label: "Average Rating",
};

function Hero() {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-white to-amber-50/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
        <div className="flex-1 space-y-6">
          <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#AD6419]">
            Elevate Your Reputation
          </p>
          <h1 className="max-w-xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Boost Your Hotel&apos;s Reputation <br /> <span className="text-[#AD6419]"> with </span> <br /> Expert Review Management
          </h1>
          <p className="max-w-lg text-[12px] leading-relaxed text-slate-500">
            Build guest trust, increase bookings, and master your online presence
            with our all-in-one reputation platform.
          </p>
        
         
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="h-80 rounded-3xl bg-teal-700 p-8 shadow-xl shadow-teal-900/20">
              <div className="mx-auto mt-4 h-40 w-full max-w-xs rounded-xl bg-white p-4 shadow-lg">
                <div className="mb-3 h-3 w-24 rounded-full bg-slate-100" />
                <div className="space-y-2">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="flex items-center justify-between">
                      <div className="h-2 w-16 rounded-full bg-slate-100" />
                      <div className="h-2 w-10 rounded-full bg-emerald-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 rounded-2xl bg-white p-3 shadow-lg">
              <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
                {stats.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {stats.rating}
              </p>
            </div>
            <div className="absolute -top-4 -right-4 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-semibold text-emerald-950 shadow">
              Live Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const featureCards = [
  {
    title: "Increase Trust",
    description:
      "Display verified reviews to build immediate confidence with potential guests before they book.",
    iconBg: "bg-[#AD6419]/10",
  },
  {
    title: "Higher Rankings",
    description:
      "Improve your visibility on major OTA search results through consistent, positive sentiment and volume.",
    iconBg: "bg-emerald-50",
  },
  {
    title: "Automated Responses",
    description:
      "Save hours of manual work with AI-powered, personalized response suggestions tailored to each guest.",
    iconBg: "bg-sky-50",
  },
];

function WhyHotels() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Why Leading Hotels Choose Us
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Drive more direct bookings by managing your reputation effectively
            across all major platforms.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-left shadow-sm shadow-slate-100"
            >
              <div
                className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full ${card.iconBg}`}
              >
                <span className="text-sm text-[#AD6419]">●</span>
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const workflowSteps = [
  {
    title: "Monitor",
    description:
      "Track reviews from TripAdvisor, Google, and Booking.com in one centralized real-time feed.",
  },
  {
    title: "Analyze",
    description:
      "Identify trends and sentiment to understand guest needs deeper and improve service quality.",
  },
  {
    title: "Respond",
    description:
      "Respond professionally to every guest with ease using intelligent templates and AI assistants.",
  },
];

function Workflow() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1 space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Streamlined Workflow
          </h2>
          <div className="space-y-6">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#AD6419]/10 text-[11px] font-semibold text-[#AD6419]">
                  {index +1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/60">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Reputation Dashboard</span>
              <span>Updated 5m ago</span>
            </div>
            <div className="mt-4 space-y-3">
              {["TripAdvisor", "Google Reviews", "Booking.com"].map((source, i) => (
                <div
                  key={source}
                  className="rounded-xl bg-slate-50 p-3 text-[11px] text-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <span>{source}</span>
                    <span className="font-semibold">{4.5 + i * 0.2} / 5.0</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: `${70 + i * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-transparent py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center text-white shadow-xl sm:px-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rotate-12 rounded-2xl border border-[#AD6419]/20" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to Master Your Reputation?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-slate-300">
            Join hundreds of hotels that have already boosted their occupancy
            rates through better reviews.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-[#AD6419] px-6 py-3 text-xs font-semibold text-white shadow-md shadow-[#AD6419]/20 transition hover:bg-[#9a5a17]">
              Request a Demo
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        <Hero />
        <WhyHotels />
        <Workflow />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
