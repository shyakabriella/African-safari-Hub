import {
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Globe,
  Link,
} from "lucide-react";



function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F3]/50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <Globe className="h-4 w-4 text-[#AD6419]" />
              <span className="text-xs font-semibold tracking-wider text-slate-700">
                24/7 GLOBAL OPERATIONS
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Round-the-Clock Support{" "}
              <span className="text-[#AD6419]">for Global Hospitality</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-lg text-base leading-relaxed text-slate-600">
              We're here when you need us most. Our dedicated technical experts are
              available 24/7 to ensure your operations never miss a beat.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center rounded-md bg-[#AD6419] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#8E5214]">
                CONTACT SUPPORT
              </a>
             
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#FAEDDC]/40 to-transparent blur-2xl" />
            <img
              src="/images/hero-support.jpg"
              alt="Hotel concierge providing support"
              className="relative w-full rounded-xl shadow-2xl ring-1 ring-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportChannels() {
  const channels = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Live Chat",
      description: "Instant response for urgent technical needs and quick troubleshooting.",
      linkText: "START SESSION",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Support",
      description: "Direct access to our senior engineering team for critical escalations.",
      linkText: "VIEW NUMBERS",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email & Ticketing",
      description: "For detailed inquiries, implementation requests, and non-urgent matters.",
      linkText: "SUBMIT TICKET",
    },
  ];

  return (
    <section className="bg-gray-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Direct Access to Expertise
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Choose the channel that best suits your immediate operational needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-slate-600 group-hover:bg-[#FDF8F3] group-hover:text-[#AD6419] transition-colors">
                {channel.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                {channel.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                {channel.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-700 transition-colors hover:text-[#AD6419]"
              >
                {channel.linkText}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UptimeSection() {
  const features = [
    "Proactive system monitoring 24/7/365",
    "Tier 3 engineering escalation protocol",
    "Guaranteed response times based on severity",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-5xl font-bold tracking-tight text-slate-900">99.9%</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                Uptime Commitment
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-slate-500">
              Our infrastructure is designed for the rigorous demands of elite hospitality.
              Backed by expert-led assistance and proactive monitoring, we guarantee
              enterprise-grade reliability.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#AD6419]" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-blue-50/60 to-transparent blur-2xl" />
            <img
              src="/images/glass-building.jpg"
              alt="Modern enterprise infrastructure"
              className="relative w-full rounded-xl shadow-2xl ring-1 ring-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
          Need immediate help?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxe">
          Start a chat or call our global hotline. Our elite support team is standing by
          to assist you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/contact" className="inline-flex items-center rounded-md bg-[#AD6419] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#C4771F]">
            CONTACT US
          </a>
         
        </div>
      </div>
    </section>
  );
}



export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">

      <HeroSection />
      <SupportChannels />
      <UptimeSection />
      <CTASection />
    </div>
  );
}
