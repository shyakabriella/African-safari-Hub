import { Banknote, TrendingDown, Users2 } from "lucide-react";
import BreakFromPressureCard from "./BreakFromPressureCard";

export default function BreakFromPressure() {
  return (
    <section className="w-full flex justify-center items-center bg-[#8B4513]/5">
      <div className="w-[1280px] h-[522px] flex flex-col gap-[48px] justify-center items-center text-center pt-[64px] pb-[64px] pr-[160px] pl-[160px]">
        
        <div className="w-[960px] h-[76px] flex flex-col justify-center items-center">
          <div className="w-full h-[36px]">
            <span className="w-[533.09px] h-[36px] text-[14px] font-bold leading-[20px] text-[#8B4513]">
              The Challenges
            </span>
          </div>
          <div className="w-[672px] h-[24px]">
            <span className="w-[627.03px] h-full font-semibold font-normal text-[40px] leading-[40px] text-[#0F172A]">
              Break Free From Market Pressures
            </span>
          </div>
        </div>

        <div className="w-[1120px] h-[282px] flex gap-[32px]">
          <BreakFromPressureCard
            icon={<TrendingDown />}
            title="Big Chain Competition"
            description="Independent properties often struggle to match the marketing budgets and loyalty reach of massive global hotel chains."
          />
          <BreakFromPressureCard
            icon={<Banknote />}
            title="High OTA Fees"
            description="Third-party platforms eat up to 25% of your revenue. Reclaim your margins by driving more direct guest bookings."
          />
          <BreakFromPressureCard
            icon={<Users2 />}
            title="Limited Resources"
            description="Small teams are often overwhelmed with manual admin tasks. We automate the routine so your staff can focus on the guest."
          />
        </div>
      </div>
    </section>
  );
}
