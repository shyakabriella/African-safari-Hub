import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Calendar } from "lucide-react";

const CASE_STUDIES = [
  {
    title: "Serengeti Luxury Camp",
    slug: "serengeti-luxury-camp",
    category: "Safari Lodge",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Direct Bookings", value: "+45%" },
      { label: "Profit Margin", value: "+60%" },
    ],
    description: "By migrating to our unified booking engine, Serengeti Luxury Camp completely broke free from costly third-party commissions. We delivered a seamless, mobile-optimized booking experience that drove an immediate 45% surge in direct guest reservations, drastically increasing their bottom-line profitability.",
  },
  {
    title: "Kigali Horizon Hotel",
    slug: "kigali-horizon-hotel",
    category: "City Hotel",
    image: "https://images.unsplash.com/photo-1551882547-ff40c0d5e9af?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Occupancy Rate", value: "92%" },
      { label: "Admin Time Saved", value: "30+ hrs/wk" },
    ],
    description: "Faced with operational bottlenecks and overbookings, Kigali Horizon deployed our integrated PMS and Channel Manager. Automation of daily front-desk tasks eliminated manual entry errors, saving the team over 30 hours a week while sustaining an impressive 92% year-round occupancy from corporate clients.",
  },
  {
    title: "Zanzibar Ocean Resort",
    slug: "zanzibar-ocean-resort",
    category: "Beach Resort",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Distribution Reach", value: "450+ Channels" },
      { label: "RevPAR Growth", value: "+28%" },
    ],
    description: "Zanzibar Ocean Resort needed to capture international holidaymakers across diverse geographic markets. Our advanced distribution platform instantly connected them to over 450 OTAs globally, leveraging dynamic pricing strategies to optimize room rates and achieve a record 28% growth in RevPAR.",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}
      <section className="bg-slate-900 px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Customer Success Stories</h1>
          <p className="text-lg text-slate-400">
            See how leading properties across Africa are using our platform to drive revenue, streamline operations, and elevate the guest experience.
          </p>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-xl hover:border-[#AD6419]/20 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#AD6419]">
                    {study.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{study.title}</h3>
                  <p className="mb-6 text-sm text-slate-500 flex-grow">{study.description}</p>
                  
                  <div className="mb-6 grid grid-cols-2 gap-4 rounded-xl bg-[#f9fafb] p-4">
                    {study.stats.map((stat, sIdx) => (
                      <div key={sIdx}>
                        <div className="text-xl font-bold text-[#AD6419]">{stat.value}</div>
                        <div className="text-xs font-semibold text-slate-500 uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#AD6419] hover:text-[#8f5214]">
                    Read Full Story <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#f6efe9] py-24 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Be Our Next Success Story</h2>
          <p className="mb-10 text-slate-600">
            Join hundreds of properties that have transformed their digital presence and booking processes with African Safari and Hotel Booking Hub.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#AD6419] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8f5214]"
          >
            Request a Demo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
