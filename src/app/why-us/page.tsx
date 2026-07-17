import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Globe2,
  Megaphone,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us | African Safari & Hotel Booking Hub",
  description:
    "Discover how African Safari & Hotel Booking Hub helps hotels increase occupancy, maximize revenue, improve operations, and grow direct bookings.",
};

const services = [
  {
    title: "OTA Optimization",
    description:
      "We optimize your hotel presence across Booking.com, Expedia, Agoda, Airbnb and more than 450 global booking platforms.",
    icon: Globe2,
  },
  {
    title: "Channel Management",
    description:
      "Keep room rates, availability and inventory synchronized across every connected booking platform.",
    icon: CalendarCheck2,
  },
  {
    title: "PMS Setup & Management",
    description:
      "Simplify reservations, guest management, hotel operations, reporting and daily front-desk activities.",
    icon: Building2,
  },
  {
    title: "Hotel Website Development",
    description:
      "Get a fast, professional and mobile-friendly hotel website with an integrated online booking engine.",
    icon: MonitorSmartphone,
  },
  {
    title: "Social Media Management",
    description:
      "Improve brand visibility and guest engagement through professional content creation and social media management.",
    icon: Megaphone,
  },
  {
    title: "Digital Marketing, SEO & GEO",
    description:
      "Increase your online visibility, reach the right travelers and generate more direct hotel bookings.",
    icon: Search,
  },
  {
    title: "Revenue Management",
    description:
      "Maximize profitability through strategic pricing, demand analysis, performance reports and market intelligence.",
    icon: BarChart3,
  },
  {
    title: "CONNECT AI Technology",
    description:
      "Use intelligent hospitality technology to improve communication, automation, guest service and business decisions.",
    icon: BrainCircuit,
  },
];

const benefits = [
  "Increase hotel occupancy and booking conversion",
  "Generate more direct bookings with lower commission costs",
  "Improve room-rate and inventory accuracy",
  "Strengthen your hotel’s digital presence",
  "Make better decisions using reports and market insights",
  "Receive professional onboarding and continued support",
];

const reasons = [
  {
    title: "Hospitality-Focused Expertise",
    description:
      "Our solutions are designed specifically for hotels, apartments, lodges, resorts and other hospitality businesses.",
    icon: Building2,
  },
  {
    title: "Complete Growth Solution",
    description:
      "Website, booking engine, OTAs, PMS, channel management, marketing and consultancy are managed in one place.",
    icon: TrendingUp,
  },
  {
    title: "Reliable Partnership",
    description:
      "We work closely with hotel management teams and provide solutions based on each property’s goals and challenges.",
    icon: Users,
  },
];

export default function WhyUsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-[#AD6419]/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#599E1A]/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85">
              <ShieldCheck className="h-4 w-4 text-[#599E1A]" />
              Your hospitality growth partner
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Why choose African Safari & Hotel Booking Hub?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              We provide specialized hospitality solutions that help hotels
              increase occupancy, maximize revenue, strengthen their online
              presence and improve operational efficiency.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#AD6419] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#599E1A]"
              >
                Request a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/pricing/monthly-plans"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                View our plans
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#AD6419]">
              Our mission
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
              Helping hospitality businesses grow sustainably
            </h2>

            <p className="mt-5 leading-7 text-white/70">
              Our mission is to help hotels attract more guests, increase
              bookings, improve operational performance and achieve sustainable
              business growth through modern technology, professional management
              and expert support.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <Stat value="450+" label="Global OTA platforms" />
              <Stat value="24/7" label="Online booking access" />
              <Stat value="1" label="Integrated growth partner" />
              <Stat value="100%" label="Hospitality focused" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AD6419]">
            Complete hospitality solutions
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your hotel needs to compete and grow
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At AFRICAN SAFARI & HOTEL BOOKING HUB LTD, we combine hotel
            technology, digital marketing, distribution, revenue management and
            operational support into one complete service.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#AD6419]/40 hover:shadow-xl"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#AD6419]/10 text-[#AD6419] transition group-hover:bg-[#AD6419] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#599E1A]">
                Why hotels work with us
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                More bookings, better operations and stronger revenue
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We do more than provide software. We work with your management
                team to understand your hotel, identify growth opportunities and
                implement the right solutions.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#599E1A]" />
                    <span className="leading-7 text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <article
                    key={reason.title}
                    className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-black text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#AD6419]">
                        0{index + 1}
                      </div>

                      <h3 className="mt-1 text-xl font-bold">
                        {reason.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#AD6419] to-[#7f450d] px-7 py-12 text-white shadow-2xl sm:px-12 lg:px-16 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                Let us support your hotel
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Let us build a solution around your hotel’s objectives
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                We would be honored to meet with your management team and discuss
                how our services can be tailored to support your hotel’s goals,
                challenges and growth plans.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#AD6419] transition hover:bg-black hover:text-white"
              >
                Contact our team
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#AD6419]"
              >
                View our resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs leading-5 text-white/55">{label}</div>
    </div>
  );
}
