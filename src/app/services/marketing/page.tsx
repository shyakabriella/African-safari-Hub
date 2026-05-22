import { 
  BarChart3, 
  Search, 
  Globe, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  LayoutGrid,
  Users
} from 'lucide-react';


const Hero = () => (
  <section className="relative pt-12 pb-14 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 mt-10 gap-12 items-center">
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100">
        <div className="w-2 h-2 rounded-full bg-[#AD6419]" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Digital Marketing for Hotels</span>
      </div>
      <h1 className="text-2xl lg:text-3xl font-extrabold text-[#1a202c] leading-[1.1]">
        Drive More Direct Bookings with <br/>
        <span className="text-[#AD6419]">Meta & Search Ads</span>
      </h1>
      <p className="text-[13px] text-gray-500 max-w-lg leading-relaxed">
        African Safari and Hotel Booking Hub manages Google Ads, Meta (Facebook/Instagram) Ads, and OTA Sponsored Listings to capture demand and lower your overall distribution costs.
      </p>
      
      <div className="flex gap-6 text-sm text-gray-500 font-medium">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#AD6419]" />
          Dedicated Account Manager
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#AD6419]" />
          Transparent Reporting
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -inset-4 bg-[#AD6419]/5 rounded-[40px] -z-10" />
      <div className="bg-white rounded-[32px] shadow-2xl p-8 border border-gray-100">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Real-time ROAS</p>
            <h3 className="text-4xl font-bold text-gray-900">8.5x</h3>
          </div>
          <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold">
            +2.1x vs last month
          </div>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Google Hotel Ads', conversions: '142', amount: '$18,450', roas: '9.2x', icon: Search, color: 'bg-blue-50 text-blue-600' },
            { name: 'Meta Ads', conversions: '86', amount: '$9,200', roas: '6.8x', icon: Users, color: 'bg-emerald-50 text-emerald-600' },
            { name: 'Metasearch', conversions: '54', amount: '$5,120', roas: '8.1x', icon: Globe, color: 'bg-indigo-50 text-indigo-600' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors group">
              <div className={`p-3 rounded-xl ${item.color}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.conversions} Conversions</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-gray-800">{item.amount}</p>
                <p className={`text-xs font-bold ${item.color.split(' ')[1]}`}>{item.roas} ROAS</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);



const Pillars = () => (
  <section className="py-12 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-10 space-y-4">
      <p className="text-[10px] font-bold uppercase tracking-widest text-[#AD6419]">Our Advertising Pillars</p>
      <h2 className="text-3xl font-extrabold text-gray-900">Omnichannel Marketing Solutions</h2>
      <p className="text-gray-500 max-w-3xl mx-auto">
        We build tailored advertising strategies that connect with guests at every stage of their booking journey.
      </p>
    </div>

    <div className="grid md:grid-cols-3 text-center gap-8">
      {[
        {
          title: 'Google Hotel Ads',
          desc: 'Win back direct bookings by displaying your "Direct Site" price right in Google Search results alongside OTAs.',
          preview: (
            <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm text-[10px] space-y-2">
              <div className="flex justify-between items-center pb-2 border-bottom border-gray-50">
                <span className="font-bold">The Grand Hotel</span>
                <span className="text-gray-400 uppercase">Ads</span>
              </div>
              <div className="flex justify-between items-center text-blue-600 font-bold">
                <div className="flex items-center gap-1">
                   <div className="w-2 h-2 rounded-full bg-blue-600" />
                   Official Site
                </div>
                <span>$199</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>OTA Partner</span>
                <span>$215</span>
              </div>
            </div>
          )
        },
        {
          title: 'Social Media Remarketing',
          desc: 'Re-engage visitors who left your site without booking through highly targeted Facebook and Instagram dynamic ads.',
          preview: (
            <div className="bg-[#1a202c] rounded-lg p-0 overflow-hidden shadow-sm aspect-video relative">
              <div className="p-2 flex items-center gap-2 border-b border-white/10">
                <div className="w-4 h-4 rounded-full bg-[#AD6419]" />
                <div className="text-[8px] text-white">
                  <p className="font-bold">The Grand Hotel</p>
                  <p className="opacity-50">Sponsored</p>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center justify-center gap-2 h-full">
                <div className="w-full h-1 bg-white/20 rounded-full" />
                <div className="w-2/3 h-1 bg-white/20 rounded-full" />
                <div className="mt-2 w-full bg-blue-600 py-1.5 rounded-sm text-center text-[8px] text-white font-bold">Book Now</div>
              </div>
            </div>
          )
        },
        {
          title: 'Metasearch Management',
          desc: 'Optimize your bids across Trivago, Tripadvisor, and Kayak to ensure your direct rates are always highly visible.',
          preview: (
            <div className="flex justify-center items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-blue-500 shadow-lg" />
              <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-white shadow-xl" />
              <div className="w-8 h-8 rounded-md bg-blue-800 shadow-lg" />
            </div>
          )
        }
      ].map((pillar, i) => (
        <div key={i} className="bg-gray-50/50 rounded-[32px] p-2 flex flex-col border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-300 group">
          <div className="bg-gray-100/30 rounded-[24px] h-48 flex items-center justify-center p-6 mb-6">
            {pillar.preview}
          </div>
          <div className="px-6 pb-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-12 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-20">The Benefits of Managed Digital Marketing</h2>
    <div className="grid md:grid-cols-3 gap-16 text-center">
      {[
        { 
          title: 'Higher Direct Share', 
          desc: 'Shift your distribution mix towards more profitable direct bookings by capturing high-intent search traffic.',
          icon: TrendingUp 
        },
        { 
          title: 'Lower Commissions', 
          desc: 'Reduce your reliance on OTAs and decrease overall acquisition costs, improving your bottom line.',
          icon: ShieldCheck 
        },
        { 
          title: 'Targeted Global Reach', 
          desc: 'Reach the right guests, at the right time, in the right markets with highly optimized audience targeting.',
          icon: Globe 
        }
      ].map((benefit, i) => (
        <div key={i} className="space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#AD6419]/10 text-[#AD6419]">
            <benefit.icon className="w-8 h-8" />
          </div>
          <h3 className="text-[15px] font-bold text-gray-900">{benefit.title}</h3>
          <p className="text-[10px] text-gray-500 leading-relaxed px-4">{benefit.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const CTA = () => (
  <section className="py-12 px-6">
    <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-br from-[#AD6419]/10 via-[#AD6419]/5 to-transparent p-12 lg:p-24 text-center">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
        Ready to boost your direct bookings?
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-[13px]">
        Let our experts design a tailored digital marketing strategy for your property. Get a free audit of your current online presence.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href='/contact' target='_blank' className="bg-[#AD6419] text-white px-8 py-3 rounded-2xl font-bold text-base hover:bg-[#9a5a17] transition-colors shadow-xl shadow-orange-100">
          Request a Demo
        </a>
      </div>
    </div>
  </section>
);


export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#AD6419]/30 selection:text-[#AD6419]">
      <Hero />
      <Pillars />
      <Benefits />
      <CTA />
    </div>
  );
}
