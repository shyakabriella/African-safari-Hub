import Link from 'next/link';
import { Handshake, Shield, Check, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

const PARTNER_BRANDS = [
  'HILTON',
  'MARRIOTT',
  'HYATT',
  'FOUR SEASONS',
  'ACCOR',
  'MANDARIN',
];

const COMPLIANCE_ITEMS = [
  {
    icon: Check,
    title: 'PCI DSS',
    description: 'Level 1 Compliant Service Provider',
  },
  {
    icon: ShieldCheck,
    title: 'ISO 27001',
    description: 'Certified Information Security',
  },
  {
    icon: Shield,
    title: 'GDPR',
    description: 'Global Privacy Standard Adherent',
    filled: true,
  },
  {
    icon: Lock,
    title: 'SOC 2 TYPE II',
    description: 'Enterprise Security Control',
  },
] as const;

export default function page() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      
      {/* Hero Section - Who We Are */}
      <section id="who-we-are" className="pt-20 pb-24 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-[#f6efe9] text-[#AD6419] text-[10px] font-bold uppercase tracking-wider rounded mb-6">
            Our Legacy 
          </div>
          <h1 className="text-3xl lg:text-3xl font-bold text-slate-900 leading-tight mb-6">
            Bridging Luxury Hospitality & Seamless Technology
          </h1>
          <p className="text-slate-500 text-[14px] mb-6 leading-relaxed">
            HotelSafari was founded with a singular vision: to bridge the gap between luxury hospitality and seamless technology. We empower B2B partners to deliver excellence through innovation.
          </p>
          <p className="text-slate-500 text-[14px] mb-12 leading-relaxed">
            Our journey began with a simple observation—the most prestigious hotels in the world were often held back by fragmented systems. We set out to create a unified ecosystem that prioritizes guest experience without compromising on operational security.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div>
              <div className="text-3xl font-bold text-[#AD6419] mb-1">150+</div>
              <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Luxury Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#AD6419] mb-1">24/7</div>
              <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Global Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#AD6419] mb-1">12ms</div>
              <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Avg. Latency</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-[#AD6419]/5 rounded-3xl transform rotate-1 hidden lg:block"></div>
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200" 
            alt="Luxury Hotel Lobby" 
            className="relative rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] object-cover h-[500px] lg:h-[700px] w-full" 
          />
        </div>
      </section>

      {/* Our Leadership Team */}
      <section id="team" className="py-24 bg-[#f9fafb] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Our Leadership Team</h2>
            <p className="text-slate-500 text-[15px] max-w-2xl mx-auto">
              Guided by industry veterans across technology and luxury hospitality, we are committed to redefining the guest journey.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="gap-8 justify-items-center">
              {[
                {
                  name: 'Diocles',
                  role: 'CEO & Founder',
                  img: 'https://scontent-ham3-1.cdninstagram.com/v/t51.75761-15/503851182_18369602845134298_1634138455075772440_n.webp?stp=c216.0.648.648a_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=fiSTwEvcXqsQ7kNvwHcEdmu&_nc_oc=AdkqGnL1LxomnIO__8zwDKqtpUs_1Q5CUH4_t9WnT9TUpfp03qPQU5epCuI1nd74du4&_nc_zt=23&_nc_ht=scontent-ham3-1.cdninstagram.com&_nc_gid=50UwRpEpVa5HSMIDfU7JPg&_nc_ss=8&oh=00_AfyGyWbkKmjkiZ-fCSv6wGz99tk84TbkMtGNSWpjwIxTvg&oe=69B25E02'
                }
              ].map(person => (
                <div key={person.name} className="flex flex-col items-center text-center max-w-[280px]">
                  <img src={person.img} alt={person.name} className="rounded-2xl mb-5 object-cover aspect-square shadow-sm w-full h-auto max-w-[320px]" />
                  <h3 className="text-base font-bold text-slate-900">{person.name}</h3>
                  <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mt-1">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section id="partners" className="border-y border-slate-100 bg-white py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f6efe9] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#AD6419]">
              <Handshake className="h-3.5 w-3.5" />
              Partnerships
            </div>
            <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
              Trusted Industry Partners
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-500">
              We collaborate with global hospitality leaders to deliver reliable,
              enterprise-grade booking and operations technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {PARTNER_BRANDS.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center rounded-xl border border-slate-100 bg-[#f9fafb] px-4 py-10 transition-colors hover:border-[#AD6419]/30 hover:bg-[#f6efe9]"
              >
                <span className="text-center text-[10px] font-bold tracking-[0.2em] text-slate-600">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section
        id="certifications"
        className="bg-slate-900 py-24 px-6 text-white lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e8c9a8]">
                <Shield className="h-3.5 w-3.5" />
                Trust & Safety
              </div>
              <h2 className="text-2xl font-bold lg:text-3xl">
                Security & Compliance
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-400">
                Your guest data and payments are protected by industry-leading
                certifications and continuous security monitoring.
              </p>
            </div>
            <p className="max-w-sm text-[13px] leading-relaxed text-slate-500 lg:text-right">
              Audited annually. Built for hotels that cannot compromise on privacy
              or uptime.
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
                      className={`h-5 w-5 text-[#e8c9a8] ${'filled' in item && item.filled ? 'fill-current' : ''}`}
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-white">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f6efe9] px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.18)] md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#AD6419]">
              Get started
            </p>
            <h2 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl lg:text-4xl">
              Ready to elevate your hospitality standards?
            </h2>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-slate-500">
              Join the world&apos;s most prestigious hotel brands in creating
              unforgettable digital experiences for every guest.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl bg-gradient-to-br from-[#AD6419] to-[#965716] p-8 text-white">
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
