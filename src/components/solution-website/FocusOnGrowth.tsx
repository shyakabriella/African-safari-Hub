import FocusOnGrowthCard from "./FocusOnGrowthCard";
import FocusOnGrowthGrid from "./FocusOnGrowthGrid";

import { BarChart2, PiggyBank, Zap } from "lucide-react";

export default function FocusOnGrowth() {
  return (
    <section className="w-full py-14 flex justify-center">
      
      <div className="max-w-6xl w-full px-4 bg-[#8B4513]/5 rounded-2xl py-10">
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left */}
          <div className="flex-1 flex flex-col gap-6">
            
            <h2 className="text-[26px] md:text-[32px] font-extrabold text-[#5C3317]">
              Focus on Growth, Not Fees
            </h2>

            <div className="flex flex-col gap-4">
              
              <FocusOnGrowthCard
                icon={<BarChart2 className="w-5 h-5 text-[#8B4513]" />}
                title="40% More Direct Bookings"
                description="Shift from OTAs to commission-free reservations."
              />

              <FocusOnGrowthCard
                icon={<PiggyBank className="w-5 h-5 text-[#A0522D]" />}
                title="Lower Operational Costs"
                description="Automate admin tasks and reduce workload."
              />

              <FocusOnGrowthCard
                icon={<Zap className="w-5 h-5 text-[#8B4513]/90" />}
                title="24/7 Automation"
                description="Capture bookings while you sleep."
              />
            </div>
          </div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-[420px]">
            
            <FocusOnGrowthGrid
              title="Zero"
              description="Overbooking incidents"
              bgClassName="bg-[#8B4513]"
              titleClassName="text-2xl font-extrabold text-[#F5E6D3]"
              textClassName="text-[#F5E6D3]/80 text-xs"
            />

            <FocusOnGrowthGrid
              title="99.9%"
              description="System uptime"
              bgClassName="bg-white"
              titleClassName="text-2xl font-extrabold text-[#5C3317]"
              textClassName="text-[#8B4513]/70 text-xs"
            />

            <FocusOnGrowthGrid
              title="15M+"
              description="Revenue processed"
              bgClassName="bg-white"
              titleClassName="text-2xl font-extrabold text-[#5C3317]"
              textClassName="text-[#8B4513]/70 text-xs"
            />

            <FocusOnGrowthGrid
              title="2x"
              description="Conversion rate"
              bgClassName="bg-[#8B4513]/10"
              titleClassName="text-2xl font-extrabold text-[#8B4513]"
              textClassName="text-[#5C3317]/80 text-xs"
            />
          </div>

        </div>
      </div>
    </section>
  );
}