import { ClipboardCheck, Flag, PenTool, Rocket } from "lucide-react";
import OurProcessCard from "./OurProcessCard";

export default function OurProcess() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[440px] pr-[160px] pl-[160px] flex flex-col justify-center items-center gap-[40px]">
        
        <div className="w-[960px] h-[88px] text-center flex flex-col">
          <div className="w-[960px] h-[48px]">
            <span className="w-[285.84px] h-[48px] text-[#4A3B2A] text-[28px] font-extrabold">Our Process</span>
          </div>
          <div className="w-[960px] h-[24px]">
            <span className="w-[368.33px] h-[24px] text-[#7B6B5A] text-[12px] font-normal">
              From audit to ongoing growth in four proven steps.
            </span>
          </div>
        </div>

        <div className="w-[960px] h-[180px] flex justify-between items-center gap-[32px]">
          <OurProcessCard
            icon={<ClipboardCheck className="text-[#4A3B2A]" />}
            title="1. Audit"
            description="Deep analysis of current rankings & site health."
          />
          <OurProcessCard
            icon={<Flag className="text-[#4A3B2A]" />}
            title="2. Strategy"
            description="Custom roadmap for keyword dominance."
          />
          <OurProcessCard
            icon={<PenTool className="text-[#4A3B2A]" />}
            title="3. Implementation"
            description="Full on-page and technical execution."
          />
          <OurProcessCard
            icon={<Rocket className="text-[#4A3B2A]" />}
            title="4. Growth"
            description="Monthly reporting and strategy refinement."
          />
        </div>
    
      </div>
    </section>
  )
}