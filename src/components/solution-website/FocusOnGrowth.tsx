import FocusOnGrowthCard from "./FocusOnGrowthCard";
import FocusOnGrowthGrid from "./FocusOnGrowthGrid";

export default function FocusOnGrowth() {
  return (
    <section className="w-full mt-[7.5%] flex justify-center">
      <div className="w-[1280px] h-[708px] pt-[96px] pb-[96px] pr-[40px] pl-[40px] bg-[#F6F6F8]">
        
        <div className="flex justify-center items-center gap-[64px] w-[1200px] h-[516px]">
          
          <div className="w-[568px] h-[444px] flex flex-col gap-15">
            <div className="w-[568px] h-[96px]">
              <span className="text-[#0F172A] text-[48px] font-extrabold">
                Focus on Growth, Not Fees
              </span>
            </div>
            <div className="w-[568px] h-[316px] flex flex-col gap-[32px]">
              <FocusOnGrowthCard 
                icon={<img src="/icons/increase.png" alt="increase" />}
                title="40% Increase in Direct Bookings"
                description="Our clients see a massive shift from OTA bookings to direct,commission-free reservations."
              />
              <FocusOnGrowthCard 
                icon={<img src="/icons/pig.png" alt="pig" />}
                title="Reduced Operational Costs"
                description="Automate your administrative tasks and spend more time focusing on guest satisfaction."
              />
              <FocusOnGrowthCard 
                icon={<img src="/icons/power.png" alt="power" />}
                title="24/7 Automation"
                description="Your booking engine works while you sleep, capturing guests from every time zone instantly."
              />
            </div>
          </div>

          <div className="w-[568px] h-[516px] gap-[16px] grid grid-cols-2">
            <FocusOnGrowthGrid
              title="Zero"
              description="Overbooking incidents reported by our clients"
              bgClassName="bg-[#1152D4]"
              titleClassName="font-extrabold text-[36px] text-white"
              textClassName="text-white"
            />
            <FocusOnGrowthGrid
              title="99.9%"
              description="Uptime during peak tourist seasons"
              bgClassName="bg-white"
              titleClassName="font-extrabold text-[36px] text-black"
              textClassName="text-[#64748B]"
            />
            <FocusOnGrowthGrid
              title="15M+"
              description="Direct revenue processed last year"
              bgClassName="bg-white"
              titleClassName="font-extrabold text-[36px] text-black"
              textClassName="text-[#64748B]"
            />
            <FocusOnGrowthGrid
              title="2x"
              description="Conversion rate vs generic templates"
              bgClassName="bg-[#1152D4]/10"
              titleClassName="font-extrabold text-[36px] text-[#1152D4]"
              textClassName="text-[#475569]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
