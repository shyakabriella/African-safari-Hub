import { CheckCircle, Server, Zap } from "lucide-react";
import WhyHotelGrowthCard from "./WhyHotelGrowthCard";
import Image from "next/image";

export default function WhyHotelGrowth() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[736px] pl-[80px] pr-[80px] pt-[112px] pb-[96px] bg-[#0F172A] flex justify-center items-center">
        <div className="w-[1120px] h-[528px] flex items-center gap-[64px]">
          <div className="w-[528px] h-[488px] flex flex-col gap-[40px]">
            <div className="w-full h-[132px]">
              <div className="w-[528px] h-[20px]">
                <span className="text-[14px] leading-[20px] font-bold text-[#8B4513]">
                  The Benefits
                </span>
              </div>
              <div className="w-[528px] h-[80px]">
                <span className="font-bold text-[36px] text-white leading-[40px]">
                  Why HotelGrowth is the preferred choice
                </span>
              </div>
            </div>
            <div className="w-full h-[264px] flex flex-col gap-[24px]">
              <WhyHotelGrowthCard
                icon={<CheckCircle />}
                title="Higher Occupancy"
                description="Dynamic pricing and multi-channel exposure keep your properties booked all year round."
              />
              <WhyHotelGrowthCard
                icon={<Zap />}
                title="Better Reviews"
                description="Consistent, professional communication leads to happier guests and glowing 5-star ratings."
              />
              <WhyHotelGrowthCard
                icon={<Server />}
                title="Zero Double-Bookings"
                description="Our proprietary API-first sync engine is the fastest in the industry. Reliability guaranteed."
              />
            </div>
          </div>

          <div className="relative w-[528px] h-[528px]">
            <div
              className="relative w-full h-full rounded-[24px] overflow-hidden
                  bg-white/10 backdrop-blur-[20px]
                  border border-[#8B4513]/30
                  shadow-[0_8px_32px_0_rgba(139,69,19,0.2)]
                  transition-all duration-300 hover:shadow-[0_12px_40px_0_rgba(139,69,19,0.35)]"
            >
              <Image
                src={"/WhyHotelGrowth.png"}
                alt="Why Hotel Growth"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
