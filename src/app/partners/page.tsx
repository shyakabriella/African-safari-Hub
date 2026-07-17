import Link from "next/link";
import { Handshake, ArrowRight, Star, Globe2, ShieldCheck, Zap } from "lucide-react";

const PARTNER_CATEGORIES = [
  {
    title: "Technology Partners",
    description: "Integrations with leading PMS, CRM, and payment gateways.",
    icon: Zap,
  },
  {
    title: "Distribution Channels",
    description: "Connect to 450+ OTAs, GDS, and metasearch engines globally.",
    icon: Globe2,
  },
  {
    title: "Agency Partners",
    description: "Collaborations with marketing agencies to drive direct bookings.",
    icon: Handshake,
  },
];

const TRUST_BADGES = [
  "PCI DSS Certified",
  "GDPR Compliant",
  "ISO 27001",
  "SOC 2 Type II"
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="bg-slate-900 px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-[#AD6419]/20 border border-[#AD6419]/50 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#e8c9a8] uppercase">
            Partners & Trust
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            A Network You Can Trust
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            We collaborate with industry leaders and maintain the highest security standards to ensure your business operations are seamless, secure, and globally connected.
          </p>
        </div>
      </section>

      {/* PARTNER ECOSYSTEM */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our Partner Ecosystem</h2>
            <p className="mt-4 text-slate-500">A robust ecosystem designed to supercharge your hospitality tech stack.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {PARTNER_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-[#AD6419]/20">
                  <div className="mb-6 inline-flex rounded-xl bg-[#f6efe9] p-4 text-[#AD6419]">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{category.title}</h3>
                  <p className="text-slate-500">{category.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST AND COMPLIANCE */}
      <section className="bg-[#f9fafb] py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="mb-12">
            <ShieldCheck className="mx-auto mb-6 h-16 w-16 text-[#AD6419]" />
            <h2 className="text-3xl font-bold text-slate-900">Enterprise-Grade Trust</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Security isn't an afterthought. It's the foundation of everything we build. We adhere to the strictest global standards to protect your data and your guests' privacy.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-100">
                <Star className="h-4 w-4 text-[#AD6419]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6efe9] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Become a Partner</h2>
          <p className="mb-8 text-slate-600">Interested in joining our partner network? Let's build the future of African hospitality together.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#AD6419] px-8 py-4 font-semibold text-white transition hover:bg-[#8f5214]"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
