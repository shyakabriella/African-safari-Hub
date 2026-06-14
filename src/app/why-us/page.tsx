import Link from "next/link";
import {
  CheckCircle2,
  Globe,
  TrendingUp,
  HeadphonesIcon,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

const HERO_IMAGE = "https://images.unsplash.com/photo-1542314831-c6a4d14d8c53?auto=format&fit=crop&q=80&w=1200";

const REASONS = [
  {
    icon: Globe,
    title: "Global Reach, Local Expertise",
    description: "We understand the nuances of the African hospitality market while connecting you to over 450+ OTAs globally.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Our dynamic pricing and channel management tools are designed to maximize your direct bookings and revenue.",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description: "A unified platform that brings your PMS, booking engine, and marketing tools together in one place.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Dedicated Support",
    description: "Our hospitality experts are always on standby to ensure your operations run without a hitch.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-slate-900 px-5 py-24 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Luxury African Safari"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-[#AD6419]/20 border border-[#AD6419]/50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#e8c9a8] uppercase backdrop-blur-sm">
            Why Choose Us
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Elevating African Hospitality to the World Stage
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            We are more than just a technology provider. We are your strategic partner in growth, empowering hotels and lodges to thrive in a competitive digital landscape.
          </p>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900">The ASHBHub Advantage</h2>
            <p className="mt-4 text-slate-500">Discover why top properties trust us with their business.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx} className="group rounded-2xl border border-slate-100 bg-[#f9fafb] p-8 transition-all hover:-translate-y-1 hover:border-[#AD6419]/30 hover:shadow-xl hover:shadow-[#AD6419]/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f6efe9] text-[#AD6419] transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METRICS / TRUST */}
      <section className="bg-[#f6efe9] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Built for Reliability and Scale</h2>
              <p className="mb-8 text-slate-600 leading-relaxed">
                Whether you manage a boutique safari lodge or a multi-property hotel chain, our infrastructure is built to scale with your ambitions while maintaining military-grade security and uptime.
              </p>
              
              <ul className="space-y-4">
                {[
                  "99.99% Guaranteed Uptime",
                  "Real-time Inventory Sync",
                  "Automated Guest Communications",
                  "PCI-DSS Compliant Transactions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#AD6419]" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#AD6419]/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-2xl">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                  <ShieldCheck className="h-10 w-10 text-[#AD6419]" />
                  <div>
                    <h3 className="font-bold text-slate-900">Enterprise Security</h3>
                    <p className="text-sm text-slate-500">Your data is always protected</p>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">System Uptime</span>
                    <span className="font-bold text-[#AD6419]">99.99%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-full w-[99.99%] rounded-full bg-[#AD6419]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to transform your property?</h2>
          <p className="mb-10 text-slate-400">Join the growing community of hospitality leaders choosing African Safari and Hotel Booking Hub.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#AD6419] px-8 py-4 font-semibold text-white transition-all hover:bg-[#8f5214] hover:shadow-lg hover:shadow-[#AD6419]/20"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
