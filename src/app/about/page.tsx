import { Handshake, Shield, Check, Lock, ShieldCheck } from 'lucide-react';

export default function page() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      
      {/* Hero Section - Who We Are */}
      <section id="who-we-are" className="pt-20 pb-24 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-[#f6efe9] text-[#AD6419] text-[10px] font-bold uppercase tracking-wider rounded mb-6">
            Our Legacy 
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Bridging Luxury Hospitality & Seamless Technology
          </h1>
          <p className="text-slate-500 text-[15px] mb-6 leading-relaxed">
            HotelSafari was founded with a singular vision: to bridge the gap between luxury hospitality and seamless technology. We empower B2B partners to deliver excellence through innovation.
          </p>
          <p className="text-slate-500 text-[15px] mb-12 leading-relaxed">
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
  <div className=" gap-8 justify-items-center">
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

      {/* Partners & Security */}
      <section id="partners" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Trusted Partners */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Handshake className="text-[#AD6419] w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900">Trusted Industry Partners</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['HILTON', 'MARRIOTT', 'HYATT', 'FOUR SEASONS', 'ACCOR', 'MANDARIN'].map(brand => (
                <div key={brand} className="border border-slate-100 rounded-lg py-8 flex items-center justify-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] bg-white">
                  <span className="text-[11px] font-bold text-slate-600 tracking-widest">{brand}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Security & Compliance */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Shield className="text-[#AD6419] w-5 h-5" />
              <h2 className="text-xl font-bold text-slate-900">Security & Compliance</h2>
            </div>
            <div className="bg-[#fbf9f4] rounded-2xl p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
              <div className="text-center flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Check className="text-[#AD6419] w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-slate-900 mb-1 tracking-wider uppercase">PCI DSS</div>
                <div className="text-[11px] text-slate-400">Level 1 Compliant Service Provider</div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <ShieldCheck className="text-[#AD6419] w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-slate-900 mb-1 tracking-wider uppercase">ISO 27001</div>
                <div className="text-[11px] text-slate-400">Certified Information Security</div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Shield className="text-[#AD6419] w-5 h-5 fill-current" />
                </div>
                <div className="text-[11px] font-bold text-slate-900 mb-1 tracking-wider uppercase">GDPR</div>
                <div className="text-[11px] text-slate-400">Global Privacy Standard Adherent</div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Lock className="text-[#AD6419] w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-slate-900 mb-1 tracking-wider uppercase">SOC 2 TYPE II</div>
                <div className="text-[11px] text-slate-400">Enterprise Security Control</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#AD6419] to-[#965716] rounded-[2rem] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Elevate Your Hospitality Standards?</h2>
            <p className="mb-10 max-w-2xl mx-auto text-white/90 text-[15px]">
              Join the world most prestigious hotel brands in creating unforgettable digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border border-white/40 text-white px-8 py-3.5 rounded font-semibold hover:bg-white/10 transition-colors text-sm">
                Request a Demo 
              </button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
