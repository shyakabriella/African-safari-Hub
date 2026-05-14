import InfoCard from "./StopGivingAwayCard";
import { ArrowDown, Monitor, CalendarX } from "lucide-react";

export default function StopGivingAwayProfit() {
  return (
    <section className="w-full py-14">
      
      <div className="max-w-6xl mx-auto px-4 bg-[#F5E6D3]/20 rounded-2xl py-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          
          <h2 className="font-extrabold text-[28px] text-[#5C3317] mb-3">
            Stop Giving Away Your Profits
          </h2>

          <p className="text-[#8B4513]/80 text-[15px] max-w-2xl mx-auto leading-relaxed">
            High commissions and outdated processes are silent revenue killers.
            Are you falling victim to these common industry pitfalls?
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
          
          <InfoCard
            icon={<ArrowDown className="w-4 h-4 text-[#8B4513]" />}
            title="High OTA Commissions"
            description="Stop losing 15–30% of every booking to third-party platforms."
          />

          <InfoCard
            icon={<Monitor className="w-4 h-4 text-[#A0522D]" />}
            title="Outdated Website Design"
            description="Slow, non-mobile friendly sites turn guests away fast."
          />

          <InfoCard
            icon={<CalendarX className="w-4 h-4 text-[#8B4513]/80" />}
            title="Manual Booking Errors"
            description="Eliminate double bookings and spreadsheet chaos."
          />
        </div>
      </div>
    </section>
  );
}