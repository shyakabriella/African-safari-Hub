import Link from "next/link";
import { ArrowLeft, CheckCircle2, Quote, Building2, BarChart3, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database.
const CASE_STUDY_DETAILS: Record<string, any> = {
  "serengeti-luxury-camp": {
    title: "Serengeti Luxury Camp",
    category: "Safari Lodge",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1600",
    overview: "Serengeti Luxury Camp, an exclusive 15-tent property, was struggling with high OTA commission fees and a fragmented booking process that frustrated high-net-worth guests.",
    challenge: "Despite offering a premium experience, their online booking engine was clunky, non-responsive on mobile, and failed to integrate with their property management system, leading to double bookings and lost revenue.",
    solution: "We deployed our unified booking engine and integrated it directly with their PMS. The new interface offered a seamless, mobile-optimized experience with real-time inventory synchronization.",
    results: [
      "45% increase in direct bookings within the first 6 months",
      "60% improvement in profit margins by bypassing OTA fees",
      "Zero overbookings since implementation",
      "Streamlined guest communication and payment processing"
    ],
    testimonial: {
      quote: "The switch to ASHBHub was seamless. We finally have a booking system that matches the luxury of our camp. The ROI was evident in the first quarter alone.",
      author: "Grace M., General Manager",
    }
  },
  "kigali-horizon-hotel": {
    title: "Kigali Horizon Hotel",
    category: "City Hotel",
    heroImage: "https://images.unsplash.com/photo-1551882547-ff40c0d5e9af?auto=format&fit=crop&q=80&w=1600",
    overview: "A bustling 120-room hotel in the heart of Kigali catering primarily to business travelers and corporate events.",
    challenge: "The front desk staff spent excessive hours manually updating availability across various platforms, leading to burnout, data entry errors, and a poor check-in experience for guests.",
    solution: "We implemented our integrated Property Management System (PMS) and Channel Manager, automating daily front-desk operations and instantly synchronizing rates across all corporate booking portals.",
    results: [
      "Saved over 30 hours per week in administrative tasks",
      "Maintained a 92% occupancy rate year-round",
      "Reduced check-in time by 40%",
      "Improved staff morale and guest satisfaction scores"
    ],
    testimonial: {
      quote: "Automation changed everything for us. Our staff can now focus on what really matters—welcoming our guests—instead of staring at spreadsheets all day.",
      author: "David K., Operations Director",
    }
  },
  "zanzibar-ocean-resort": {
    title: "Zanzibar Ocean Resort",
    category: "Beach Resort",
    heroImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1600",
    overview: "A premium 85-room beachfront property seeking to expand its reach beyond traditional European markets.",
    challenge: "The resort was invisible to travelers from emerging markets because their legacy channel manager only supported a handful of regional OTAs. Their static pricing model left money on the table during peak seasons.",
    solution: "We connected them to our advanced distribution network (450+ OTAs) and introduced dynamic pricing tools that automatically adjust rates based on demand, seasonality, and competitor analysis.",
    results: [
      "28% growth in RevPAR (Revenue Per Available Room)",
      "Successfully penetrated 3 new international markets",
      "Increased off-season occupancy by 15%",
      "Centralized management of all distribution channels"
    ],
    testimonial: {
      quote: "The global reach we achieved with ASHBHub is phenomenal. Our occupancy is more stable year-round, and our revenues have never been stronger.",
      author: "Elena S., Revenue Manager",
    }
  }
};

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = CASE_STUDY_DETAILS[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 pb-20">
      {/* HERO */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-slate-900">
        <img
          src={study.heroImage}
          alt={study.title}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="mx-auto max-w-4xl">
            <Link href="/case-studies" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#e8c9a8] hover:text-white transition">
              <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
            <div className="mb-4 inline-block rounded-full bg-[#AD6419] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              {study.category}
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{study.title}</h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-5 pt-16">
        
        {/* OVERVIEW */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-[#AD6419]" />
            Overview
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            {study.overview}
          </p>
        </section>

        <div className="grid gap-12 md:grid-cols-2 mb-16">
          {/* CHALLENGE */}
          <div className="rounded-2xl bg-[#f9fafb] p-8 border border-slate-100">
            <h3 className="mb-4 text-xl font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-red-500" />
              The Challenge
            </h3>
            <p className="leading-relaxed text-slate-600">
              {study.challenge}
            </p>
          </div>

          {/* SOLUTION */}
          <div className="rounded-2xl bg-[#f6efe9]/50 p-8 border border-[#AD6419]/20">
            <h3 className="mb-4 text-xl font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#AD6419]" />
              Our Solution
            </h3>
            <p className="leading-relaxed text-slate-600">
              {study.solution}
            </p>
          </div>
        </div>

        {/* RESULTS */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 text-center">The Results</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {study.results.map((result: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4 rounded-xl border border-slate-100 p-6 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#AD6419]" />
                <span className="font-medium text-slate-700 leading-snug">{result}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
            <Quote className="h-48 w-48" />
          </div>
          <div className="relative z-10">
            <Quote className="mb-6 h-10 w-10 text-[#AD6419]" />
            <p className="mb-8 text-xl leading-relaxed text-slate-300 italic">
              "{study.testimonial.quote}"
            </p>
            <div className="font-semibold text-white">
              — {study.testimonial.author}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">Ready to achieve similar results?</h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#AD6419] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8f5214]"
          >
            Request a Free Demo
          </Link>
        </div>

      </div>
    </div>
  );
}
