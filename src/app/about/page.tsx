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
    description: "Meet the leadership driving hospitality innovation.",
    icon: Users,
  },
  {
    href: "/about/partners",
    label: "Partners & Ecosystem",
    description: "Technology partners and global distribution alliances.",
    icon: Handshake,
  },
] as const;

const COMPLIANCE_ITEMS = [
  {
    icon: Check,
    title: "PCI DSS",
    description: "Level 1 Compliant Service Provider",
  },
  {
    icon: ShieldCheck,
    title: "ISO 27001",
    description: "Certified Information Security",
  },
  {
    icon: Shield,
    title: "GDPR",
    description: "Global Privacy Standard Adherent",
    filled: true,
  },
  {
    icon: Lock,
    title: "SOC 2 TYPE II",
    description: "Enterprise Security Control",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <section
        id="who-we-are"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-24 lg:grid-cols-2 lg:px-12"
      >
        <div>
          <div className="mb-6 inline-block rounded bg-[#f6efe9] px-3 py-1 text-[10px] font-bold tracking-wider text-[#AD6419] uppercase">
            Our Legacy
          </div>
          <h1 className="mb-6 text-3xl leading-tight font-bold text-slate-900 lg:text-4xl">
            Bridging Luxury Hospitality & Seamless Technology
          </h1>
          <p className="mb-6 text-[14px] leading-relaxed text-slate-500">
            African Safari Hub was founded with a singular vision: to bridge the gap
            between luxury hospitality and seamless technology. We empower hotel and
            safari partners to deliver excellence through innovation.
          </p>
          <p className="mb-12 text-[14px] leading-relaxed text-slate-500">
            Our journey began with a simple observation—the most prestigious
            properties in the world were often held back by fragmented systems. We
            set out to create a unified ecosystem that prioritizes guest experience
            without compromising operational security.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div>
              <div className="mb-1 text-3xl font-bold text-[#AD6419]">150+</div>
              <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Luxury Partners
              </div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold text-[#AD6419]">24/7</div>
              <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Global Support
              </div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold text-[#AD6419]">12ms</div>
              <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Avg. Latency
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 hidden rotate-1 rounded-3xl bg-[#AD6419]/5 lg:block" />
          <img
            src={HERO_IMAGE}
            alt="Luxury hotel lobby"
            className="relative h-[500px] w-full rounded-2xl object-cover shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] lg:h-[700px]"
          />
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#f9fafb] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl">
              Explore Our Story
            </h2>
            <p className="mx-auto max-w-2xl text-[15px] text-slate-500">
              Learn more about the people and partnerships behind African Safari Hub.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {EXPLORE_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-[#AD6419]/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f6efe9] text-[#AD6419] transition group-hover:bg-[#AD6419] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-[#AD6419]">
                      {item.label}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#AD6419]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="bg-slate-900 px-6 py-24 text-white lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wider text-[#e8c9a8] uppercase">
                <Award className="h-3.5 w-3.5" />
                Trust & Safety
              </div>
              <h2 className="text-2xl font-bold lg:text-3xl">Security & Compliance</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
                Your guest data and payments are protected by industry-leading
                certifications and continuous security monitoring.
              </p>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-slate-500 lg:text-right">
              Audited annually. Built for hotels that cannot compromise on privacy or
              uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {COMPLIANCE_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#AD6419]/20">
                    <Icon
                      className={`h-5 w-5 text-[#e8c9a8] ${"filled" in item && item.filled ? "fill-current" : ""}`}
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-wider text-white uppercase">
                      {item.title}
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about/partners"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#e8c9a8] transition hover:text-white"
            >
              View partner ecosystem
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f6efe9] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-4xl bg-white p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)] md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-wider text-[#AD6419] uppercase">
              Get started
            </p>
            <h2 className="text-2xl leading-tight font-bold text-slate-900 md:text-3xl lg:text-4xl">
              Ready to elevate your hospitality standards?
            </h2>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-slate-500">
              Join the world&apos;s most prestigious hotel brands in creating unforgettable
              digital experiences for every guest.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl bg-linear-to-br from-[#AD6419] to-[#965716] p-8 text-white">
            <p className="text-[14px] text-white/90">
              Speak with our team about demos, onboarding, and enterprise plans.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#AD6419] transition-colors hover:bg-[#f6efe9]"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
