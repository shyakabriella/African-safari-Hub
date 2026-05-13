import { 
  CheckCircle2, 
  PlayCircle, 
  RefreshCw, 
  Globe, 
  BarChart3
} from 'lucide-react';

export default function Otas() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#AD6419]/30 selection:text-[#AD6419]">
      <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AD6419]/5 blur-3xl rounded-full -mr-64 -mt-32"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-[1.2] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-100 bg-white text-gray-600 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Integration
            </div>
            <h1 className="text-6xl lg:text-[84px] font-bold text-gray-900 leading-[0.95] tracking-tight mb-8">
              Maximize Your Hotels <span className="text-[#AD6419]">Visibility</span>
            </h1>
            <p className="text-xl text-gray-500/80 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Automate your distribution across 450+ OTAs including Booking.com, Airbnb, and Agoda. Eliminate overbookings and increase revenue by 30% instantly.
            </p>
           
            
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] p-8 border border-gray-50 w-full max-w-lg mx-auto">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Total Revenue</p>
                  <p className="text-4xl font-black text-gray-900 tracking-tight">$124,592.00</p>
                </div>
                <div className="bg-green-50 text-green-600 text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-green-100">
                  +12.5%
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  { name: 'Booking.com', bookings: '42 Bookings', color: 'bg-blue-600', short: 'B.' },
                  { name: 'Airbnb', bookings: '28 Bookings', color: 'bg-red-500', short: 'Ab' },
                  { name: 'Expedia', bookings: '15 Bookings', color: 'bg-yellow-500', short: 'Ex' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-gray-50/50 rounded-3xl border border-gray-100/50">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white font-black shadow-lg shadow-gray-200`}>{item.short}</div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm tracking-tight">{item.name}</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-700 text-sm">{item.bookings}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="py-20 border-t border-b border-gray-50 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-16">
          Trusted by 10,000+ properties & connected to top platforms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12">
          <div className="text-2xl font-black text-blue-900  transition-all cursor-default tracking-tighter italic">Booking.com</div>
          <div className="text-2xl font-black text-red-500  transition-all cursor-default tracking-tighter italic">Airbnb</div>
          <div className="text-2xl font-black text-yellow-600  transition-all cursor-default tracking-tighter italic">Expedia</div>
          <div className="text-2xl font-black text-green-600  transition-all cursor-default tracking-tighter italic">TripAdvisor</div>
          <div className="text-2xl font-black text-orange-600  transition-all cursor-default tracking-tighter italic">Agoda</div>
        </div>
      </div>
    </div>

    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#AD6419] font-bold text-xs uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Powerful Features for Modern Hoteliers</h2>
          <p className="text-gray-500 leading-relaxed">
            Streamline your operations and grow your bookings with our comprehensive suite of tools designed for efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <RefreshCw className="w-6 h-6 text-[#AD6419]" />,
              title: "Real-time Synchronization",
              desc: "Instantly update availability and rates across all channels simultaneously. Say goodbye to double bookings and manual errors forever."
            },
            {
              icon: <Globe className="w-6 h-6 text-[#AD6419]" />,
              title: "Global Reach",
              desc: "Connect to over 450 online travel agencies worldwide. Reach guests in niche markets and expand your property's visibility globally."
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-[#AD6419]" />,
              title: "Analytics Dashboard",
              desc: "Track performance, revenue, and occupancy with comprehensive reports. Make data-driven decisions to optimize your pricing strategy."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-[#AD6419]/10 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-gray-900 text-center mb-24 tracking-tight">Simple 3-Step Setup</h2>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 order-2 lg:order-1">
            <div className="bg-[#1a1a1a] rounded-3xl shadow-3xl overflow-hidden border border-gray-800 relative max-w-xl mx-auto">
               <div className="p-4 bg-gray-900/50 flex items-center justify-between border-b border-gray-800">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                 </div>
                 <div className="w-32 h-2.5 bg-gray-800 rounded-full"></div>
                 <div className="w-4 h-4 rounded-full bg-gray-800"></div>
               </div>
               <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-1/4 bg-gray-800 rounded-lg"></div>
                    <div className="h-4 w-1/6 bg-gray-800 rounded-lg"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-gray-800/40 rounded-2xl border border-gray-800"></div>
                    <div className="h-24 bg-gray-800/40 rounded-2xl border border-gray-800"></div>
                  </div>
                  <div className="p-8 bg-white rounded-3xl flex flex-col items-center justify-center text-center shadow-xl translate-y-4">
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <p className="font-black text-gray-900 text-xl mb-1 tracking-tight">Channels Connected</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Sync complete across 12 platforms</p>
                  </div>
                  <div className="space-y-4 pt-4 opacity-30">
                    <div className="h-2.5 w-full bg-gray-800 rounded-full"></div>
                    <div className="h-2.5 w-5/6 bg-gray-800 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="space-y-16">
              {[
                {
                  step: "1",
                  title: "Connect Your Property",
                  desc: "Import your room details and existing bookings with one click. Our system maps your inventory automatically."
                },
                {
                  step: "2",
                  title: "Optimize Distribution",
                  desc: "Select from our list of 450+ OTAs. Set distinct pricing rules and restrictions for each channel if needed."
                },
                {
                  step: "3",
                  title: "Grow Revenue",
                  desc: "Watch bookings flow in. Our system handles the inventory updates 24/7 so you can focus on guest experience."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gray-50 shadow-sm text-[#AD6419] rounded-full flex items-center justify-center font-black text-2xl transition-all group-hover:scale-110 group-hover:border-[#AD6419]">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[60px] p-12 md:p-32 border border-gray-800 text-center shadow-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AD6419]/10 blur-[120px] rounded-full -mr-64 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#AD6419]/10 blur-[120px] rounded-full -ml-64 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Ready to maximize your bookings?</h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
              Join thousands of hoteliers who are saving time and increasing revenue with African safari.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
             <button className="w-full sm:w-auto px-12 py-6 border border-gray-700 rounded-2xl font-black text-white hover:bg-white/5 transition-all text-xl backdrop-blur-sm">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}