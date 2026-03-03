import FocusOnGrowthCard from "./FocusOnGrowthCard";
import FocusOnGrowthGrid from "./FocusOnGrowthGrid";

import { BarChart2, PiggyBank, Zap } from "lucide-react";

export default function FocusOnGrowth() {
  return (
    <section className="w-full mt-[7.5%] flex justify-center">
      <div className="w-[1280px] h-[708px] pt-[96px] pb-[96px] pr-[40px] pl-[40px] bg-[#8B4513]/5 rounded-2xl">
        <div className="flex justify-center items-center gap-[64px] w-[1200px] h-[516px]">
          {/* Left Side */}
          <div className="w-[568px] h-[444px] flex flex-col gap-15">
            <div className="w-[568px] h-[96px]">
              <span className="text-[#5C3317] text-[48px] font-extrabold">
                Focus on Growth, Not Fees
              </span>
            </div>

            <div className="w-[568px] h-[316px] flex flex-col gap-[32px]">
              <FocusOnGrowthCard
                icon={<BarChart2 className="w-6 h-6 text-[#8B4513]" />}
                title="40% Increase in Direct Bookings"
                description="Our clients see a massive shift from OTA bookings to direct, commission-free reservations."
              />

              <FocusOnGrowthCard
                icon={<PiggyBank className="w-6 h-6 text-[#A0522D]" />}
                title="Reduced Operational Costs"
                description="Automate your administrative tasks and spend more time focusing on guest satisfaction."
              />

              <FocusOnGrowthCard
                icon={<Zap className="w-6 h-6 text-[#8B4513]/90" />}
                title="24/7 Automation"
                description="Your booking engine works while you sleep, capturing guests from every time zone instantly."
              />
            </div>
          </div>

          {/* Right Side Grid */}
          <div className="w-[568px] h-[516px] gap-[16px] grid grid-cols-2">
            <FocusOnGrowthGrid
              title="Zero"
              description="Overbooking incidents reported by our clients"
              bgClassName="bg-[#8B4513]"
              titleClassName="font-extrabold text-[36px] text-[#F5E6D3]"
              textClassName="text-[#F5E6D3]/80"
            />

            <FocusOnGrowthGrid
              title="99.9%"
              description="Uptime during peak tourist seasons"
              bgClassName="bg-white"
              titleClassName="font-extrabold text-[36px] text-[#5C3317]"
              textClassName="text-[#8B4513]/70"
            />

            <FocusOnGrowthGrid
              title="15M+"
              description="Direct revenue processed last year"
              bgClassName="bg-white"
              titleClassName="font-extrabold text-[36px] text-[#5C3317]"
              textClassName="text-[#8B4513]/70"
            />

            <FocusOnGrowthGrid
              title="2x"
              description="Conversion rate vs generic templates"
              bgClassName="bg-[#8B4513]/10"
              titleClassName="font-extrabold text-[36px] text-[#8B4513]"
              textClassName="text-[#5C3317]/80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
