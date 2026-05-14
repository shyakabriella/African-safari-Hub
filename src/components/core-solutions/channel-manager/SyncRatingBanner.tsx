// import Image from "next/image";

// export default function SyncRatingBanner() {
//   return (
//     <div className="w-[1120px] h-[416px] flex gap-[20%] mt-15 mb-10">
//       <div className="w-[579px] h-[416px] flex flex-col gap-[32px]">
//         <div className="w-[536px] h-[320px] flex flex-col gap-[16px]">
//           <div className="w-[250.45px] h-[24px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10 flex items-center justify-center">
//             <span className="font-bold text-[10px] leading-[17px] text-[#8B4513] whitespace-nowrap">
//               REAL-TIME CHANNEL MANAGER
//             </span>
//           </div>

//           <div className="w-[536px] h-[180px]">
//             <span className="w-full h-full font-extrabold text-[55px] leading-[48px]">
//               <span className="text-[#0F172A]">Sync Rates &</span>{" "}
//               <span className="text-[#0F172A]">Availability to</span> <br />
//               <span className="text-[#8B4513]">Stop Overthinkings</span>
//             </span>
//           </div>

//           <div className="w-full h-[84px]">
//             <span className="text-[20px] leading-[28px] font-normal text-[#475569]">
//               Professional-grade synchronization across 400+ booking channels. Eliminate manual entry errors and protect your hotel&apos;s reputation instantly.
//             </span>
//           </div>
//         </div>

//         <div className="w-full h-[64px] flex gap-[16px]">
//           <button className="cursor-pointer w-[264.67px] h-[64px] pr-[32px] pl-[32px] pt-[18px] pb-[18px] rounded-[12px] bg-[#8B4513]">
//             <span className="w-[120px] h-[28px] font-bold text-[16px] text-white leading-[28px]">
//               Start 14-Day Free Trial
//             </span>
//           </button>
//           <button className="cursor-pointer w-[199.2px] h-[64px] pr-[32px] pl-[32px] pt-[16px] pb-[16px] rounded-[12px] border border-[#8B4513]/20">
//             <span className="w-[88px] h-[28px] font-bold text-[16px] leading-[28px] text-[#8B4513]">
//               Watch Demo
//             </span>
//           </button>
//         </div>
//       </div>

//       <div className="relative w-[636px] h-[401.5px] rounded-[20px] overflow-hidden">
//         <Image
//           src={"/sync-rating-banner.png"}
//           alt="Guest House Banner"
//           fill
//           className="object-cover rounded-[20px]"
//         />
//       </div>
//     </div>
//   );
// }







// src/components/core-solutions/channel-manager/SyncRatingBanner.tsx
import { ArrowRight, Play, CheckCircle2, Zap } from "lucide-react";

export default function SyncRatingBanner() {
  return (
    <div className="w-full bg-white pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-6">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">Real-time Channel Manager</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Sync Rates & Availability to{" "}
              <span className="text-amber-600">Stop Overbookings</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Professional-grade synchronization across 450+ booking channels including Booking.com, 
              Expedia, Agoda, and TripAdvisor. Eliminate manual entry errors and protect your 
              hotel&apos;s reputation instantly.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition flex items-center gap-2">
                Start 14-Day Free Trial <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition flex items-center gap-2">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </div>

            {/* Features list */}
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600">24/7 support</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Professional Card */}
          <div className="flex-1">
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              {/* Card Header */}
              <div className="border-b border-slate-200 px-5 py-3 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs text-slate-500 ml-2">dashboard.sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">Total Bookings</p>
                    <p className="text-2xl font-bold text-slate-800">12,847</p>
                    <p className="text-xs text-green-600 mt-1">↑ +23%</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">Revenue</p>
                    <p className="text-2xl font-bold text-slate-800">$2.4M</p>
                    <p className="text-xs text-green-600 mt-1">↑ +18%</p>
                  </div>
                </div>

                {/* Channel List */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Booking.com</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">2s ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Expedia</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">5s ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Agoda</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">3s ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Direct Website</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">1s ago</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500 text-center">
                    15,000+ hotels trust our sync engine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}