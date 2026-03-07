import FastTrackImplementationCard from "./FastTrackImplementationCard";

export default function FastTrackImplementation() {
  return (
    <section className="w-full flex justify-center items-center mt-8">
      <div className="w-[1280px] h-[562px] pt-[80px] pb-[80px]">
        <div className="w-full h-[402px] flex flex-col justify-center items-center pr-[32px] pl-[32px] gap-[64px]">
          {/* Header */}
          <div className="w-[768px] h-[108px] flex flex-col text-center gap-[16px]">
            <div className="w-[768px] h-[36px]">
              <span className="w-[392.5px] h-[36px] font-extrabold text-[30px] text-[#0F172A]">
                Our Fast-Track Implementation
              </span>
            </div>
            <div className="w-[768px] h-[56px]">
              <span className="w-full h-full font-normal text-[20px] text-[#475569]">
                A clear, proven path to operational excellence in just 21 days.
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="w-[1216px] h-[230px] flex gap-[32px]">
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
  );
}