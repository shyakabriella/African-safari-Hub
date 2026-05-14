import {
  CheckCircle2,
  PlayCircle,
  RefreshCw,
  Globe,
  BarChart3,
} from "lucide-react";

export default function Otas() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#AD6419]/30 selection:text-[#AD6419]">
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AD6419]/5 blur-3xl rounded-full -mr-64 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-[1.2] text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-100 bg-white text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Live Integration
              </div>
              <h1 className="text-3xl lg:text-[38px] font-bold text-gray-900 leading-[1.10] tracking-tight mb-8">
                Maximize Your Hotels <br />
                <span className="text-[#AD6419]">Visibility</span>
              </h1>
              <p className="text-[12px] text-gray-500/80 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Automate your distribution across 450+ OTAs including
                Booking.com, Airbnb, and Agoda. Eliminate overbookings and
                increase revenue by 30% instantly.
              </p>
            </div>

            <div className="flex-1 relative">
              <div className="bg-white rounded-[28px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.10)] p-6 border border-gray-50 w-full max-w-[420px] mx-auto">
                <div className="flex justify-between items-center mb-7">
                  <div>
                    <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.18em] mb-1">
                      Total Revenue
                    </p>

                    <p className="text-3xl font-black text-gray-900 tracking-tight">
                      $124,592.00
                    </p>
                  </div>

                  <div className="bg-green-50 text-green-600 text-[10px] font-black px-2 py-1 rounded-md border border-green-100">
                    +12.5%
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Booking.com",
                      bookings: "42 Bookings",
                      color: "bg-blue-600",
                      short: "B.",
                    },
                    {
                      name: "Airbnb",
                      bookings: "28 Bookings",
                      color: "bg-red-500",
                      short: "Ab",
                    },
                    {
                      name: "Expedia",
                      bookings: "15 Bookings",
                      color: "bg-yellow-500",
                      short: "Ex",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100/50"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white text-xs font-black shadow-md shadow-gray-200`}
                        >
                          {item.short}
                        </div>

                        <div>
                          <p className="font-bold text-gray-900 text-xs tracking-tight">
                            {item.name}
                          </p>
                        </div>
                      </div>

                      <p className="font-bold text-gray-700 text-xs">
                        {item.bookings}
                      </p>
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
          <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-16">
            Trusted by 10,000+ properties & connected to top platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12">
            <div className="text-xl font-black text-blue-900  transition-all cursor-default tracking-tighter italic">
              Booking.com
            </div>
            <div className="text-xl font-black text-red-500  transition-all cursor-default tracking-tighter italic">
              Airbnb
            </div>
            <div className="text-xl font-black text-yellow-600  transition-all cursor-default tracking-tighter italic">
              Expedia
            </div>
            <div className="text-xl font-black text-green-600  transition-all cursor-default tracking-tighter italic">
              TripAdvisor
            </div>
            <div className="text-xl font-black text-orange-600  transition-all cursor-default tracking-tighter italic">
              Agoda
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-[#AD6419] font-bold text-xs uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Hoteliers
            </h2>
            <p className="text-gray-500 leading-relaxed text-[12px]">
              Streamline your operations and grow your bookings with our
              comprehensive suite of tools designed for efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <RefreshCw className="w-6 h-6 text-[#AD6419]" />,
                title: "Real-time Synchronization",
                desc: "Instantly update availability and rates across all channels simultaneously. Say goodbye to double bookings and manual errors forever.",
              },
              {
                icon: <Globe className="w-6 h-6 text-[#AD6419]" />,
                title: "Global Reach",
                desc: "Connect to over 450 online travel agencies worldwide. Reach guests in niche markets and expand your property's visibility globally.",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-[#AD6419]" />,
                title: "Analytics Dashboard",
                desc: "Track performance, revenue, and occupancy with comprehensive reports. Make data-driven decisions to optimize your pricing strategy.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-[#AD6419]/10 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[12px]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-24 tracking-tight">
            Simple 3-Step Setup
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Card */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden border border-gray-800 relative max-w-[420px] mx-auto">
                <div className="p-3 bg-gray-900/50 flex items-center justify-between border-b border-gray-800">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>

                  <div className="w-24 h-2 bg-gray-800 rounded-full"></div>

                  <div className="w-3.5 h-3.5 rounded-full bg-gray-800"></div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-1/4 bg-gray-800 rounded-md"></div>
                    <div className="h-3 w-1/6 bg-gray-800 rounded-md"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-gray-800/40 rounded-xl border border-gray-800"></div>
                    <div className="h-16 bg-gray-800/40 rounded-xl border border-gray-800"></div>
                  </div>

                  <div className="p-5 bg-white rounded-2xl flex flex-col items-center justify-center text-center shadow-lg translate-y-2">
                    <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-3 shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <p className="font-black text-gray-900 text-lg mb-1 tracking-tight">
                      Channels Connected
                    </p>

                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                      Sync complete across 12 platforms
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 opacity-30">
                    <div className="h-2 w-full bg-gray-800 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="space-y-10">
                {[
                  {
                    step: "1",
                    title: "Connect Your Property",
                    desc: "Import your room details and existing bookings with one click.",
                  },
                  {
                    step: "2",
                    title: "Optimize Distribution",
                    desc: "Set pricing rules and manage channels with ease.",
                  },
                  {
                    step: "3",
                    title: "Grow Revenue",
                    desc: "Automated inventory sync lets you focus on guests.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border border-gray-100 shadow-sm text-[#AD6419] rounded-full flex items-center justify-center font-black text-lg transition-all group-hover:scale-105">
                      {item.step}
                    </div>

                    <div className="pt-1">
                      <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 leading-relaxed font-medium text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[36px] p-8 md:p-16 border border-gray-800 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#AD6419]/10 blur-[100px] rounded-full -mr-32 -mt-20"></div>

            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#AD6419]/10 blur-[100px] rounded-full -ml-32 -mb-20"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-5 tracking-tight leading-tight">
                Ready to maximize your bookings?
              </h2>

              <p className="text-gray-400 mb-10 max-w-xl mx-auto text-base md:text-[13px] leading-relaxed font-medium">
                Join thousands of hoteliers who are saving time and increasing
                revenue with African Safari.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full cursor-pointer sm:w-auto px-8 py-4 border border-gray-700 rounded-xl font-black text-white hover:bg-white/5 transition-all text-base backdrop-blur-sm">
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
