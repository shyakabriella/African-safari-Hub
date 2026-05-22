// import { ArrowRight } from "lucide-react";

// export default function TheIntelligentConcierge() {
//   return (
//     <div className="w-[1280px] h-[679px] py-[96px] px-[140px]">
//       <div className="w-[1000px] h-[487px] rounded-[24px] bg-[#020617] flex justify-between items-center">
//         <div className="w-[500px] flex flex-col gap-8 p-12">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-[#22C55E] rounded-full"></div>
//             <span className="text-sm tracking-[1.4px] text-[#94A3B8]">
//               AI ENGINE ACTIVE
//             </span>
//           </div>

//           <h2 className="text-[30px] leading-[36px] font-bold text-white">
//             The Intelligent Concierge
//           </h2>

//           <div className="flex flex-col gap-6">
//             <div className="flex flex-col gap-2 rounded-xl bg-white/5 border border-white/10 p-4">
//               <span className="text-xs font-bold text-[#8B4513]">
//                 Guest Query
//               </span>
//               <p className="text-base text-[#CBD5E1] leading-relaxed">
//                 &quot;Is the rooftop bar open tonight?&quot;
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 p-4 rounded-xl bg-[#8B4513]/20 border border-[#8B4513]/30">
//               <div className="flex justify-between items-center">
//                 <span className="text-xs font-bold text-[#8B4513]">
//                   AI Smart Reply
//                 </span>

//                 <span className="text-[10px] text-white bg-[#8B4513]/40 px-2 py-[2px] rounded">
//                   Confidence 98%
//                 </span>
//               </div>

//               <p className="text-[16px] leading-relaxed text-[#F1F5F9]">
//                 &quot;Yes, our rooftop bar is open from 6 PM to 12 AM today.
//                 Enjoy our signature cocktails with the city view!&quot;
//               </p>
//             </div>
//           </div>

//           <button className="cursor-pointer flex items-center gap-2 font-bold text-[#8B4513]">
//             See how it works
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="w-[500px] h-[487px] bg-[#0F172A]">
//           <div className="w-[500px] h-[457px] relative flex items-center justify-center">

//             <div className="absolute -bottom-4 w-[436px] h-[77px] p-[16px] rounded-[12px] bg-[#000000]/60 border border-[#FFFFFF]/10">
//               <div className="w-[402px] h-[43px] flex justify-between items-center">
                
//                 <div className="w-[93.2px] h-[43px] flex flex-col">
//                   <div className="w-[93.2px] h-[15px]">
//                     <span className="font-normal text-[10px] text-[#94A3B8] leading-[15px]">
//                       PROCESSING SPEED
//                     </span>
//                   </div>
//                   <div className="w-[93.2px] h-[28px] mt-2">
//                     <span className="text-white font-bold text-[18px] leading-[28px]">
//                       140ms
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="justify-end items-end w-[96px] h-[32px] flex gap-[4px]">
//                   <div className="bg-[#8B4513]/40 w-[16px] h-[8px] rounded-tr-[4px] rounded-tl-[4px]"></div>
//                   <div className="bg-[#8B4513]/60 w-[16px] h-[16px] rounded-tr-[4px] rounded-tl-[4px]"></div>
//                   <div className="bg-[#8B4513]/80 w-[16px] h-[12px] rounded-tr-[4px] rounded-tl-[4px]"></div>
//                   <div className="bg-[#8B4513] w-[16px] h-[24px] rounded-tr-[4px] rounded-tl-[4px]"></div>
//                   <div className="bg-[#8B4513]/50 w-[16px] h-[16px] rounded-tr-[4px] rounded-tl-[4px]"></div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute w-[420px] h-[420px] rounded-full bg-[#8B4513]/20 blur-[120px]" />
//             <div className="absolute w-[300px] h-[300px] rounded-full border border-[#8B4513]/30"></div>
//             <div className="absolute w-[220px] h-[220px] rounded-full border border-[#8B4513]/40"></div>
//             <div className="w-[90px] h-[90px] rounded-full bg-[#8B4513] shadow-[0_0_60px_#8B4513]"></div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }






// src/components/core-solutions/ai/TheIntelligentConcierge.tsx
import { ArrowRight, Zap, CheckCircle, MessageCircle, Sparkles } from "lucide-react";

export default function TheIntelligentConcierge() {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Content - Light background for better readability */}
            <div className="flex-1 p-8 md:p-10 bg-white">
              {/* Status Badge - Clean design */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-green-700 tracking-wide">
                  LIVE DEMO
                </span>
                <span className="text-xs text-green-600">• Ready to test</span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                The Intelligent Concierge
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                See how our AI handles real guest conversations instantly, 24/7.
              </p>

              {/* Conversation Example - Clean cards */}
              <div className="space-y-5 mb-8">
                {/* Guest Query */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Guest asks
                    </span>
                  </div>
                  <p className="text-slate-800 font-medium">
                    &quot;Is the rooftop bar open tonight?&quot;
                  </p>
                </div>

                {/* AI Reply - Highlighted */}
                <div className="bg-amber-50 rounded-xl p-4 border-l-4 border-l-amber-600 border border-amber-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                        AI Responds
                      </span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100">
                      <Zap className="w-3 h-3 text-amber-600" />
                      <span className="text-xs font-medium text-amber-700">98% confidence</span>
                    </div>
                  </div>
                  <p className="text-slate-700">
                    &quot;Yes, our rooftop bar is open from 6 PM to 12 AM today. 
                    Enjoy our signature cocktails with the city view! Would you like me to reserve a table for you?&quot;
                  </p>
                </div>
              </div>

              {/* Stats Row - Clean and readable */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Response Time</p>
                    <p className="text-lg font-bold text-slate-800">&lt; 140ms</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Accuracy</p>
                    <p className="text-lg font-bold text-slate-800">98.7%</p>
                  </div>
                </div>
              </div>

              {/* <button className="inline-flex items-center gap-2 font-semibold text-amber-700 hover:text-amber-800 transition-all group">
                See how it works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button> */}
            </div>

            {/* Right Visual - Clean and modern */}
            <div className="flex-1 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="relative w-full max-w-[380px] aspect-square">
                
                {/* AI Core Visual - Clean circles without blur */}
                <div className="absolute inset-0 rounded-full border border-amber-200"></div>
                <div className="absolute inset-[15%] rounded-full border border-amber-200 border-dashed"></div>
                <div className="absolute inset-[30%] rounded-full border border-amber-300"></div>
                
                {/* Center core */}
                <div className="absolute inset-[42%] rounded-full bg-gradient-to-br from-amber-600 to-amber-700 shadow-lg"></div>
                
                {/* Pulse animation ring */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/50 animate-ping opacity-75"></div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-xl p-3 shadow-lg border border-slate-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[11px] font-semibold text-amber-600 uppercase tracking-wide">
                        Processing Speed
                      </p>
                      <p className="text-xl font-bold text-slate-800">140ms</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-4 bg-amber-200 rounded-sm"></div>
                        <div className="w-3 h-6 bg-amber-400 rounded-sm"></div>
                        <div className="w-3 h-8 bg-amber-600 rounded-sm"></div>
                        <div className="w-3 h-5 bg-amber-300 rounded-sm"></div>
                        <div className="w-3 h-3 bg-amber-100 rounded-sm"></div>
                      </div>
                      <span className="text-xs text-green-600 font-medium ml-2">Active</span>
                    </div>
                  </div>
                </div>

                {/* Small label */}
                <div className="absolute -top-2 right-0 bg-white rounded-full px-3 py-1 shadow-sm border border-slate-200">
                  <span className="text-xs font-medium text-slate-600">AI Core</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}