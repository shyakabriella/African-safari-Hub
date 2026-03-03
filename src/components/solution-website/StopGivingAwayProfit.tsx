import InfoCard from "./StopGivingAwayCard";

import { ArrowDown, Monitor, CalendarX } from "lucide-react";

export default function StopGivingAwayProfit() {
  return (
    <section className="w-full">
      <div className="flex justify-center items-center">
        <div className="w-7xl min-h-150.5 pt-12 mb-10 bg-[#F5E6D3]/20 rounded-xl">
          <div className="w-7xl min-h-114.5 pr-10 pl-10">
            {/* Header */}
            <div className="w-300 h-28 flex flex-col gap-4">
              <div className="w-300 h-10 flex justify-center items-center">
                <span className="font-extrabold text-[36px] text-[#5C3317]">
                  Stop Giving Away Your Profits
                </span>
              </div>
              <div className="w-full h-14 flex justify-center items-center">
                <span className="text-[#8B4513]/80 text-[18px] text-center">
                  High commissions and outdated processes are silent revenue
                  killers. Are you <br />
                  falling victim to these common industry pitfalls?
                </span>
              </div>
            </div>

            {/* Info Cards */}
            <div className="w-full h-28 flex justify-center items-center gap-7 mt-29">
              <InfoCard
                icon={<ArrowDown className="w-5 h-5 text-[#8B4513]" />}
                title="High OTA Commissions"
                description="
    Stop losing 15-30% of every booking to 
    third-party platforms. Those are your
    hard-earned margins disappearing.
  "
                className="border border-[#F5E6D3]/40 shadow-sm"
                classNameIcon="bg-[#F5E6D3]/50"
              />

              <InfoCard
                icon={<Monitor className="w-5 h-5 text-[#A0522D]" />}
                title="Outdated Website Design"
                description="
    Slow, non-mobile friendly sites turn
    potential guests away. If your site looks
    like it's from 2010, guests won't trust your
    luxury rooms.
  "
                className="border border-[#F5E6D3]/40 shadow-sm"
                classNameIcon="bg-[#F5E6D3]/50"
              />

              <InfoCard
                icon={<CalendarX className="w-5 h-5 text-[#8B4513]/80" />}
                title="Manual Booking Errors"
                description="
    Eliminate double-bookings and late-night
    reservation headaches caused by manual
    spreadsheets and phone-only bookings.
  "
                className="border border-[#F5E6D3]/40 shadow-sm"
                classNameIcon="bg-[#F5E6D3]/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
