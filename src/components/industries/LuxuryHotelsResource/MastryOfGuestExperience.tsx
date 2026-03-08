import Image from "next/image";
import MastryOfGuestExperienceCard from "./MastryOfGuestExperienceCard";

export default function MastryOfGuestExperience() {
  return (
    <section className="w-full flex justify-center items-center mt-20 mb-20">
      <div className="w-[1218px] flex items-center justify-between gap-[48px]">

        <div className="w-[584px] flex flex-col gap-[40px]">
          <div>
            <div className="flex mt-5 items-center justify-center w-[131.94px] h-[24px] pt-[4px] pb-[4px] pr-[16px] pl-[16px] rounded-[9999px] bg-[#8B4513]/10">
              <h2 className="text-[#8B4513] text-[12px] font-bold leading-[16px]">
                THE SOLUTION
              </h2>
            </div>
            <h1 className="text-[#0F172A] text-[36px] font-extrabold mt-2 leading-tight">
              Mastery of the Guest Experience
            </h1>
          </div>

          <p className="text-[#334155] text-[18px] leading-relaxed">
            Our bespoke modules ensure seamless multi-department coordination and
            white-glove service through an intuitive interface designed for elite operators.
          </p>

          <div className="flex flex-col gap-[24px]">
            <MastryOfGuestExperienceCard
              title="Enterprise-Grade PMS"
              description="A robust core designed for multi-property agility and complex booking engines."
            />
            <MastryOfGuestExperienceCard
              title="Bespoke Concierge Modules"
              description="Tailored request management that tracks preferences for ultra-VIP guests."
            />
            <MastryOfGuestExperienceCard
              title="Multi-Department Sync"
              description="Real-time status updates across housekeeping, F&B, and maintenance."
            />
          </div>
        </div>

        <div className="relative w-[584px] h-[420px] rounded-[32px] overflow-hidden shadow-lg">
          <Image
            src="/mastery-guest.png"
            alt="Luxury hotel room with scenic view"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
