// import { Globe, ShieldCheck, Zap } from "lucide-react";
// import ZeroErrorCard from "./ZeroErrorCard";

// export default function ZeroError() {
//   return (
//     <div className="w-[1280px] h-[568.13px] pr-[40px] pl-[40px] pt-[50px] mt-15 mb-15 pb-[80px] bg-[#8B4513]/5">
//       <div className="w-full h-[408.13] flex flex-col gap-[48px] pl-[24px] pr-[24px]">
//         <div className="w-[800px] h-[114.13px] flex flex-col gap-[15.13px]">
//           <div className="w-full h-[40px]">
//             <span className="w-full h-full font-extrabold leading-[40px] text-[36px] text-[#0F172A]">
//               Engineered for Zero Errors
//             </span>
//           </div>
//           <div className="w-full h-[59px]">
//             <span className="w-full h-full text-[#475569] leading-[29.3px] text-[18px] font-normal">
//               Our &apos;Sync&apos; engine is designed to handle the heavy lifting of inventory management. Every time a room is booked, we update all your other channels before the next traveler can even click &apos;Book&apos;.
//             </span>
//           </div>
//         </div>
      
//         <div className="w-[1152px] h-[246px] flex gap-[40px]">
//           <ZeroErrorCard
//             icon={<Zap />}
//             title="Instant Updates"
//             description="Updates are pushed to Booking.com, Expedia, and Airbnb simultaneously the moment a change occurs."
//           />
//           <ZeroErrorCard
//             icon={<ShieldCheck />}
//             title="Reputation Guard"
//             description="Avoid the penalties and ranking drops associated with guest cancellations due to double bookings."
//           />
//           <ZeroErrorCard
//             icon={<Globe />}
//             title="Global Inventory"
//             description="Manage rates for different markets and currencies from one central cloud-based dashboard."
//           />
//         </div>
//       </div>
//     </div>
//   )
// }


// src/components/core-solutions/channel-manager/ZeroError.tsx
import { ShieldCheck, Zap, Globe, CheckCircle, Clock, TrendingUp } from "lucide-react";

export default function ZeroError() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Zero Double Bookings",
      description: "Our intelligent sync engine prevents overlapping reservations. When a room sells, availability is locked across all channels instantly.",
      highlight: "100% Guaranteed"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Sync",
      description: "Changes reflect across all connected OTAs in under 2 seconds. No delays, no manual updates, no errors.",
      highlight: "< 2 seconds"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "450+ Global Channels",
      description: "Connect to Booking.com, Expedia, Agoda, TripAdvisor, and hundreds more with a single click.",
      highlight: "One integration"
    }
  ];

  return (
    <div className="w-full bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-4">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700 tracking-wide">ZERO ERRORS GUARANTEED</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Eliminate Overbookings Forever
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join 15,000+ hoteliers who trust our Sync engine to manage their properties with 100% accuracy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition group">
              <div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-3">{benefit.description}</p>
              <div className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
                {benefit.highlight} →
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">0</p>
            <p className="text-sm text-slate-500">Overbookings reported</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">99.99%</p>
            <p className="text-sm text-slate-500">Uptime guaranteed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">24/7</p>
            <p className="text-sm text-slate-500">Monitoring & Support</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-800">15,000+</p>
            <p className="text-sm text-slate-500">Happy hoteliers</p>
          </div>
        </div>
      </div>
    </div>
  );
}