import { ArrowRight } from "lucide-react";

export default function TheIntelligentConcierge() {
  return (
    <div className="w-[1280px] h-[679px] py-[96px] px-[140px]">
      <div className="w-[1000px] h-[487px] rounded-[24px] bg-[#020617] flex justify-between items-center">
        <div className="w-[500px] flex flex-col gap-8 p-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#22C55E] rounded-full"></div>
            <span className="text-sm tracking-[1.4px] text-[#94A3B8]">
              AI ENGINE ACTIVE
            </span>
          </div>

          <h2 className="text-[30px] leading-[36px] font-bold text-white">
            The Intelligent Concierge
          </h2>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 rounded-xl bg-white/5 border border-white/10 p-4">
              <span className="text-xs font-bold text-[#8B4513]">
                Guest Query
              </span>
              <p className="text-base text-[#CBD5E1] leading-relaxed">
                &quot;Is the rooftop bar open tonight?&quot;
              </p>
            </div>

            <div className="flex flex-col gap-3 p-4 rounded-xl bg-[#8B4513]/20 border border-[#8B4513]/30">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#8B4513]">
                  AI Smart Reply
                </span>

                <span className="text-[10px] text-white bg-[#8B4513]/40 px-2 py-[2px] rounded">
                  Confidence 98%
                </span>
              </div>

              <p className="text-[16px] leading-relaxed text-[#F1F5F9]">
                &quot;Yes, our rooftop bar is open from 6 PM to 12 AM today.
                Enjoy our signature cocktails with the city view!&quot;
              </p>
            </div>
          </div>

          <button className="cursor-pointer flex items-center gap-2 font-bold text-[#8B4513]">
            See how it works
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-[500px] h-[487px] bg-[#0F172A]">
          <div className="w-[500px] h-[457px] relative flex items-center justify-center">

            <div className="absolute -bottom-4 w-[436px] h-[77px] p-[16px] rounded-[12px] bg-[#000000]/60 border border-[#FFFFFF]/10">
              <div className="w-[402px] h-[43px] flex justify-between items-center">
                
                <div className="w-[93.2px] h-[43px] flex flex-col">
                  <div className="w-[93.2px] h-[15px]">
                    <span className="font-normal text-[10px] text-[#94A3B8] leading-[15px]">
                      PROCESSING SPEED
                    </span>
                  </div>
                  <div className="w-[93.2px] h-[28px] mt-2">
                    <span className="text-white font-bold text-[18px] leading-[28px]">
                      140ms
                    </span>
                  </div>
                </div>
                
                <div className="justify-end items-end w-[96px] h-[32px] flex gap-[4px]">
                  <div className="bg-[#8B4513]/40 w-[16px] h-[8px] rounded-tr-[4px] rounded-tl-[4px]"></div>
                  <div className="bg-[#8B4513]/60 w-[16px] h-[16px] rounded-tr-[4px] rounded-tl-[4px]"></div>
                  <div className="bg-[#8B4513]/80 w-[16px] h-[12px] rounded-tr-[4px] rounded-tl-[4px]"></div>
                  <div className="bg-[#8B4513] w-[16px] h-[24px] rounded-tr-[4px] rounded-tl-[4px]"></div>
                  <div className="bg-[#8B4513]/50 w-[16px] h-[16px] rounded-tr-[4px] rounded-tl-[4px]"></div>
                </div>
              </div>
            </div>

            <div className="absolute w-[420px] h-[420px] rounded-full bg-[#8B4513]/20 blur-[120px]" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-[#8B4513]/30"></div>
            <div className="absolute w-[220px] h-[220px] rounded-full border border-[#8B4513]/40"></div>
            <div className="w-[90px] h-[90px] rounded-full bg-[#8B4513] shadow-[0_0_60px_#8B4513]"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
