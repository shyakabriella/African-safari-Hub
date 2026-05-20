'use client';

import Image from 'next/image';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#2a1e17]" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>

      {/* Hero */}
      <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-lobby.jpg"
            alt="Grand hotel lobby"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a0f08]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-[40px] md:text-[48px] lg:text-[52px] leading-[1.1] mb-5 max-w-3xl" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 400 }}>
            Our Global Partner Ecosystem
          </h1>
          <p className="text-white/85 text-[14px] md:text-[15px] leading-relaxed max-w-[560px] font-light">
            At African Safari and Booking Hub, we believe that the pinnacle of hospitality is reached through the seamless convergence of heritage service and horizon-defining technology. Our collaborations drive the next era of institutional innovation.
          </p>
          <button className="mt-10 text-white/70 hover:text-white transition-colors" aria-label="Scroll down">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="bg-[#fcf9f7] py-[72px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[28px] leading-tight mb-4 text-[#AD6419]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Technology Partners
              </h2>
              <p className="text-[13.5px] leading-[1.7] text-[#6b5a52] max-w-[300px]">
                Our integrated API framework connects with the world's leading travel platforms to ensure real-time inventory management, automated guest relations, and flawless transactional integrity.
              </p>
              <a href="#" className="inline-flex items-center gap-2 mt-7 text-[11px] font-semibold tracking-widest uppercase text-[#AD6419] hover:text-[#8f5214] transition-colors group">
                EXPLORE INTEGRATION DOCS
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M2 7h9M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </a>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[18px]">
                {[
                  { name: 'Booking.com', icon: 'booking' },
                  { name: 'Expedia', icon: 'expedia' },
                  { name: 'Airbnb', icon: 'airbnb' },
                  { name: 'Salesforce', icon: 'salesforce' },
                  { name: 'Stripe', icon: 'stripe' },
                  { name: 'Okta', icon: 'okta' },
                ].map((partner) => (
                  <div
                    key={partner.name}
                    className="bg-white border border-[#f0e8e0] h-[132px] flex flex-col items-center justify-center gap-3 hover:border-[#AD6419]/30 hover:shadow-sm transition-all group"
                  >
                    <div className="text-[#c4a484] group-hover:text-[#AD6419] transition-colors">
                      <PartnerIcon type={partner.icon} />
                    </div>
                    <span className="text-[11.5px] text-[#5a4a42] font-medium">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="bg-[#f5ede6]/70 py-[80px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-[32px] text-[#AD6419] mb-3" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>
              Strategic Alliances
            </h2>
            <p className="text-[13.5px] leading-relaxed text-[#6b5a52]">
              Beyond software, we cultivate intellectual partnerships with industry titans and global associations to define the standards of modern luxury hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-[1080px] mx-auto">
            {[
              {
                icon: 'association',
                title: 'Global Hotel Association',
                desc: 'Collaborating on standardized protocols for digital guest experiences and privacy management across 45 countries.',
                footer: 'STRATEGIC MEMBER SINCE 2016',
              },
              {
                icon: 'consultant',
                title: 'Luxury Consultant Circle',
                desc: 'An elite advisory board of former luxury hotel GMs providing constant feedback loop for product development.',
                footer: 'EXCLUSIVE ADVISORY PARTNERSHIP',
              },
              {
                icon: 'datatrust',
                title: 'Hospitality Data Trust',
                desc: 'Joint research initiatives focused on ethical AI deployment and data sovereignty within the hospitality vertical.',
                footer: 'FOUNDING PARTNER',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#efe5db] p-8 flex flex-col min-h-[300px]">
                <div className="text-[#AD6419] mb-6">
                  <AllianceIcon type={item.icon} />
                </div>
                <h3 className="text-[19px] leading-snug mb-3 text-[#2a1e17]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-[#6b5a52] flex-1">
                  {item.desc}
                </p>
                <div className="mt-8 pt-5 border-t border-[#f0e8e0]">
                  <span className="text-[10px] tracking-widest uppercase text-[#9a8475] font-medium">
                    {item.footer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build the Future */}
      <section className="py-[72px] bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="bg-[#AD6419] overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="px-10 lg:px-14 py-14 lg:py-16 text-white">
                <h2 className="text-[34px] md:text-[38px] leading-[1.15] mb-6 max-w-[320px]" style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 400 }}>
                  Build the Future of Hospitality with Us
                </h2>
                <p className="text-white/80 text-[14px] leading-relaxed mb-10 max-w-[360px]">
                  Whether you are a disruptive technology provider or a heritage service consultant, we are always looking for partners who share our obsession with excellence.
                </p>

                <div className="space-y-3.5">
                  {[
                    'Priority API Access',
                    'Joint Marketing Opportunities',
                    'Global Distribution Network',
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center flex-shrink-0">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          <path d="M2 4.5l2 2 3-3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-[13px] text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-[380px] bg-white p-8 shadow-xl">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-[#AD6419] mb-1.5 font-medium">
                        ORGANIZATION NAME
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        placeholder="Your Organization Name"
                        className="w-full h-11 px-0 border-0 border-b border-[#e2d5c8] focus:border-[#AD6419] focus:ring-0 text-[14px] text-[#2a1e17] bg-transparent placeholder:text-[#b8a99e] outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-[#AD6419] mb-1.5 font-medium">
                        PARTNERSHIP TYPE
                      </label>
                      <div className="relative">
                        <select className="w-full h-11 px-0 pr-6 border-0 border-b border-[#e2d5c8] focus:border-[#AD6419] focus:ring-0 text-[14px] text-[#2a1e17] bg-transparent appearance-none outline-none cursor-pointer">
                          <option>Technology & Integration</option>
                          <option>Strategic Alliance</option>
                          <option>Consulting Partner</option>
                          <option>Distribution Partner</option>
                        </select>
                        <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#AD6419]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3.5 5.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] tracking-widest uppercase text-[#AD6419] mb-1.5 font-medium">
                        PROFESSIONAL EMAIL
                      </label>
                      <input
                        type="email"
                        placeholder="partnership@africansafarihub.com"
                        className="w-full h-11 px-0 border-0 border-b border-[#e2d5c8] focus:border-[#AD6419] focus:ring-0 text-[14px] text-[#2a1e17] bg-transparent placeholder:text-[#b8a99e] outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-[44px] bg-[#AD6419] text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-[#8f5214] transition-colors mt-3"
                    >
                      SUBMIT APPLICATION
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PartnerIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactElement> = {
    booking: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.3" opacity="0.7"/>
        <path d="M10 14c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="11.5" cy="12" r="1.2" fill="currentColor"/>
        <circle cx="16.5" cy="12" r="1.2" fill="currentColor"/>
        <path d="M8 18c1.5-1 3.5-1.5 6-1.5s4.5.5 6 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    expedia: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14l6-2 3-5 1 4 7-3-4 6 2 3-5-1-2 6-3-7-5 1 2-2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    airbnb: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 12l8-6 8 6v8c0 1.1-.9 2-2 2h-3v-6H11v6H8c-1.1 0-2-.9-2-2v-8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M14 9v3M12 13h4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    salesforce: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 16c-2 0-3-1-3-2.5S6 11 8 11h1c0-2.5 2-4.5 4.5-4.5 2 0 3.5 1 4.2 2.5 0.5-0.3 1.1-0.5 1.8-0.5 2 0 3.5 1.5 3.5 3.5 0 1.5-1 2.8-2.3 3.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="12" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
        <circle cx="17" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M12 20c0 1.5 1 2.5 2.5 2.5S17 21.5 17 20" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
    stripe: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="8" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 11h18" stroke="currentColor" strokeWidth="1.3"/>
        <rect x="8" y="14.5" width="5" height="2.5" rx="0.5" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    okta: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5l6 2v5c0 4.5-2.5 7-6 9-3.5-2-6-4.5-6-9V7l6-2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M14 9v5M11.5 12.5h5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.8"/>
      </svg>
    ),
  };
  return icons[type] || icons.booking;
}

function AllianceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactElement> = {
    association: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 9l8-4 8 4M4 10v7h2v-6h10v6h2v-7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M8 13v4M11 13v4M14 13v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <rect x="2" y="17" width="18" height="1.5" fill="currentColor"/>
      </svg>
    ),
    consultant: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2.5 17c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="15" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M12 17.5c0-2 1.5-3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="17.5" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.8"/>
      </svg>
    ),
    datatrust: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="4" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 14v-3M11 14v-5M15 14v-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M3 8h16" stroke="currentColor" strokeWidth="1.1" opacity="0.5"/>
      </svg>
    ),
  };
  return icons[type] || icons.association;
}