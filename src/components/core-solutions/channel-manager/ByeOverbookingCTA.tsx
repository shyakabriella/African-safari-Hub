// import { CircleCheck } from "lucide-react";

// export default function ByeOverbookingCTA() {
//   return (
//     <div className="w-[1200px] h-[554px] pl-[24px] pr-[24px] pb-[96px]">
//       <div className="w-[1152px] h-[458px] text-center justify-center items-center flex flex-col gap-[32px] p-[64px] rounded-[32px] bg-[#8B4513]">
//         <div className="w-[800px] h-[96px] pr-[65.77px] pl-[65.77px]">
//           <span className="w-[568.46px] h-full font-extrabold leading-[48px] text-[48px] text-white">
//             Ready to say goodbye to overbookings forever?
//           </span>
//         </div>
        
//         <div className="w-[600px] h-[56px] pr-[3.14px] pl-[3.14px]">
//           <span className="w-[593.72px] h-full font-normal text-[#FFFFFF]/80 text-[20px] leading-[28px]">
//             Join 15,000+ hoteliers who trust our Sync engine to manage their properties.
//           </span>
//         </div>
        
//         <div className="w-[412.97px] h-[62px] flex gap-[16px]">
//           <button className="w-[207.53px] h-[62px] pr-[32px] pl-[32px] pt-[17px] pb-[17px] bg-white rounded-[12px]">
//             <span className="w-[143.53px] h-[28px] font-bold text-[18px] leading-[28px] text-[#8B4513]">
//               Get Started Free
//             </span>
//           </button>
//           <button className="w-[189.44px] h-[62px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] bg-[#8B4513]/20 rounded-[12px] border border-[#FFFFFF]/30">
//             <span className="w-[123.44px] h-[28px] font-bold text-white text-[18px] leading-[28px]">
//               Contact Sales
//             </span>
//           </button>
//         </div>
        
//         <div className="w-[170.31px] h-[20px] flex items-center gap-[8px]">
//           <div className="w-[15px] h-[15px]">
//             <CircleCheck className="text-[#FFFFFF]/70 w-full h-full" />
//           </div>
//           <span className="w-[147.31px] h-[20px] font-normal text-[14px] leading-[20px] text-[#FFFFFF]/70">
//             No credit card required
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }
















// src/components/core-solutions/channel-manager/ByeOverbookingCTA.tsx
import { CheckCircle, ArrowRight, Clock, CreditCard, Headphones } from "lucide-react";

export default function ByeOverbookingCTA() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="rounded-2xl bg-linear-to-r from-[#AD6419] to-[#8A4F12] p-8 text-center shadow-xl md:p-12">
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
          Ready to say goodbye to overbookings forever?
        </h2>
        
        <p className="mx-auto mb-8 max-w-2xl text-[14px] text-white/85">
          Join 15,000+ hoteliers who trust our Sync engine to manage their properties. 
          Start your 14-day free trial today.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#f6efe9]" />
            <span className="text-sm text-white">14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-[#f6efe9]" />
            <span className="text-sm text-white">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-[#f6efe9]" />
            <span className="text-sm text-white">24/7 support included</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button className="group px-8 py-3.5 rounded-xl bg-white text-amber-700 font-semibold hover:bg-amber-50 transition shadow-md flex items-center justify-center gap-2">
            Get Started Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </button> */}
          <a
          href="/contact"
          target="_blank"
          className="rounded-xl border border-white/30 bg-white px-8 py-3.5 font-semibold text-[#AD6419] transition hover:bg-[#f6efe9]">
            Talk to Sales
          </a>
        </div>
        
        <p className="mt-6 text-xs text-white/70">
          Free trial includes full access to all features. Cancel anytime.
        </p>
      </div>
    </div>
  );
}