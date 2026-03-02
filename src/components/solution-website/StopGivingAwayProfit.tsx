import InfoCard from "./StopGivingAwayCard";

export default function StopGivingAwayProfit() {
  return (
    <section className="w-full">
      <div className="flex justify-center items-center">
        <div className="w-7xl min-h-150.5 pt-12 bg-[#F6F6F8]/35 rounded-xl">
          <div className="w-7xl min-h-114.5 pr-10 pl-10">
            
            <div className="w-300 h-28 flex flex-col gap-4">
              <div className="w-300 h-10 flex justify-center items-center">
                <span className="font-extrabold text-[36px] text-[#0F172A]">
                  Stop Giving Away Your Profits
                </span>
              </div>
              <div className="w-full h-14 flex justify-center items-center">
                <span className="text-[#475569] text-[18px] text-center">
                  High commissions and outdated processes are silent revenue killers. Are you <br />
                  falling victim to these common industry pitfalls?
                </span>
              </div>
            </div>

            <div className="w-full h-28 flex justify-center items-center gap-7 mt-29">
              <InfoCard 
              icon={<img src="/icons/Container-1.png" alt="icon-1" className="w-4 h-4" />} 
              title="High OTA Commissions" 
              description="
                Stop losing 15-30% of every booking to 
                third-party platforms. Those are your
                hard-earned margins disappearing.
              " 
              className="border border-gray-100 shadow-sm"
              classNameIcon="bg-[#FEF2F2]"
              />
              <InfoCard 
              icon={<img src="/icons/Container-2.png" alt="icon-2" className="w-4 h-4" />}
              title="Outdated Website Design" 
              description="
                Slow, non-mobile friendly sites turn
                potential guests away. If your site looks
                like it's from 2010, guests won't trust your
                luxury rooms.
              " 
              className="border border-gray-100 shadow-sm"
              classNameIcon="bg-[#FEF2F2]"
              />
              <InfoCard 
              icon={<img src="/icons/Container-3.png" alt="icon-3" className="w-4 h-4" />}
              title="Manual Booking Errors" 
              description="
                Eliminate double-bookings and late-night
                reservation headaches caused by manual
                spreadsheets and phone-only bookings.
              " 
              className="border border-gray-100 shadow-sm"
              classNameIcon="bg-[#FEF2F2]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
