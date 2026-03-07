import FastTrackImplementationCard from "./FastTrackImplementationCard";

export default function FastTrackImplementation() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[602px] pt-[80px] pb-[80px] pr-[160px] pl-[160px] flex flex-col justify-center items-center text-center gap-[64px] bg-[#F6F6F8]/20">
        <div className="w-[896px] h-[84px] flex flex-col gap-[16px]">
          <div className="w-full h-[40px]">
            <span className="w-[504.03px] h-full font-bold text-[36px] text-[#0F172A] leading-[40px]">
              Our Fast-Track Implementation
            </span>
          </div>
          <div className="w-full h-[28px]">
            <span className="w-[488.31px] h-[28px] font-normal text-[18px] text-[#475569] leading-[28px]">
              A clear, proven path to operational excellence in just 21 days.
            </span>
          </div>
        </div>

        <div className="w-[960px] h-[294px] relative">
          <div className="w-full h-[4px] bg-[#AD6419]/20 absolute top-1/2 left-0 -translate-y-1/2"></div>

          <div className="w-full h-full flex justify-between items-center gap-[32px] relative z-10">
            <FastTrackImplementationCard
              count="1"
              weekCount="WEEK ONE"
              title="Full Configuration"
              description="Data migration from legacy systems, PMS setup, and OTA channel mapping."
            />
            <FastTrackImplementationCard
              count="2"
              weekCount="WEEK TWO"
              title="Staff Training"
              description="Role-based workshops for front desk, housekeeping, and management teams."
            />
            <FastTrackImplementationCard
              count="3"
              weekCount="WEEK THREE"
              title="Official Go-Live"
              description="Final system check, live support for the first 48 hours, and performance audit."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
