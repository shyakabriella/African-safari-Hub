import Link from "next/link";
import {
  Handshake,
  Shield,
  Check,
  Lock,
  ShieldCheck,
  ArrowRight,
  Users,
  Award,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200";

const EXPLORE_LINKS = [
  {
    href: "/about/ourteam",
    label: "Our Team",
    description: "Meet the leadership behind the platform.",
    icon: Users,
  },
  {
    href: "/about/partners",
    label: "Partners",
    description: "Technology and global alliances.",
    icon: Handshake,
  },
] as const;

const COMPLIANCE_ITEMS = [
  { icon: Check, title: "PCI DSS", description: "Level 1 compliant" },
  { icon: ShieldCheck, title: "ISO 27001", description: "Security certified" },
  { icon: Shield, title: "GDPR", description: "Privacy aligned", filled: true },
  { icon: Lock, title: "SOC 2", description: "Enterprise ready" },
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-24 pb-16 lg:grid-cols-2">

        <div>
          <span className="mb-4 inline-block rounded bg-[#f6efe9] px-3 py-1 text-[10px] font-semibold tracking-wider text-[#AD6419] uppercase">
            Our Legacy
          </span>

          <h1 className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl leading-snug">
            Bridging Luxury Hospitality & Technology
          </h1>

          <p className=" text-sm text-slate-500 leading-relaxed">
            African Safari Hub connects luxury hospitality with modern digital systems.
          </p>

          <p className="mb-8 text-sm text-slate-500 leading-relaxed">
            We unify fragmented hotel systems into one seamless ecosystem focused on guest experience.
          </p>

          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-bold text-[#AD6419]">150+</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400">
                Partners
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#AD6419]">24/7</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400">
                Support
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#AD6419]">12ms</div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400">
                Latency
              </div>
            </div>
          </div>
        </div>

        <img
          src={HERO_IMAGE}
          alt="Luxury hotel"
          className="h-[320px] w-full rounded-2xl object-cover shadow-lg lg:h-[400px]"
        />
      </section>

      {/* EXPLORE */}
      <section className="bg-[#f9fafb] py-14">
        <div className="mx-auto max-w-5xl px-5">

          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            Explore
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {EXPLORE_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex gap-4 rounded-xl border bg-white p-5 transition hover:border-[#AD6419]/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f6efe9] text-[#AD6419]">
                    <Icon className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.label}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold">Security & Compliance</h2>
            <p className="mt-2 text-sm text-slate-400">
              Enterprise-grade protection built in.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMPLIANCE_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#AD6419]/20">
                    <Icon className="h-4 w-4 text-[#e8c9a8]" />
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6efe9] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-6 rounded-2xl bg-white p-8 shadow-md md:grid-cols-2">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Ready to get started?
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Join leading hospitality brands building better guest experiences.
              </p>
            </div>

            <div className="flex items-center justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#AD6419] px-5 py-3 text-sm font-semibold text-white hover:bg-[#8f5214]"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}