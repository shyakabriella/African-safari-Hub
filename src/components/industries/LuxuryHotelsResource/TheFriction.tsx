import { Share2, Star, TrendingUp } from "lucide-react";
import TheFrictionCard from "./TheFrictionCard";

export default function TheFriction() {
  return (
    <section className="w-full flex justify-center items-center bg-[#8B4513]/5">
      <div className="w-[1280px] h-[522px] flex flex-col gap-[48px] justify-center items-center text-center pt-[64px] pb-[64px] pr-[160px] pl-[160px]">
        
        <div className="w-[960px] h-[76px] flex flex-col justify-center items-center">
          <div className="w-full h-[36px]">
            <span className="w-[533.09px] h-[36px] text-[14px] font-bold leading-[20px] text-[#8B4513]">
              THW CHALLENGE
            </span>
          </div>
          <div className="w-[672px] h-[24px]">
            <span className="w-[627.03px] h-full font-semibold font-normal text-[40px] leading-[40px] text-[#0F172A]">
              The Friction in Elite Hospitality
            </span>
          </div>
        </div>

        <div className="w-[1120px] h-[282px] flex gap-[32px]">
          <TheFrictionCard
            icon={<TrendingUp />}
            title="Scale vs. Standards"
            description="Maintaining 5-star excellence across global properties requires more than effort; it requires intelligent automation that never rests."
          />
          <TheFrictionCard
            icon={<Share2 />}
            title="Complex Integrations"
            description="Siloed systems lead to guest frustration. Unify your spa, dining, and stay management into one seamless source of truth."
          />
          <TheFrictionCard
            icon={<Star />}
            title="High Expectations"
            description="High-net-worth guests demand anticipation, not just service. Meet their unique needs with data-driven personalization."
          />
        </div>
      </div>
    </section>
  );
}
