import Image from "next/image";
import WhyUsCard from "./WhyUsCard";
import { CheckCircle, Star, ThumbsUp } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[536px] pl-[160px] pr-[160px] pt-[80px] pb-[80px] rounded-tr-[48px] rounded-tl-[48px] bg-[#1A120B] flex justify-center items-center">
        <div className="w-[960px] h-[376px] flex items-center justify-between gap-[64px]">

          <div className="w-[448px] h-[248px] flex gap-[16px]">
            <div className="relative w-[216px] h-[216px]">
              <Image 
              src={'/why-us-one.png'}
              fill
              alt="Why Us One"
              className="absolute rounded-[16px]"
            />
            </div>
            <div className="relative w-[216px] h-[248px] pt-[32px] mt-[30px]">
              <Image 
                src={'/why-us-two.png'}
                alt="Why Us Two"
                fill
                className="absolute rounded-[16px]"
              />
            </div>
          </div>

          <div className="w-1/2 h-[376px] flex flex-col gap-[32px]">
            <div className="w-full h-[80px]">
              <span className="font-bold text-[36px] text-white leading-[40px]">
                Why Top Hosts Choose StaySync
              </span>
            </div>
            <div className="w-full h-[264px] flex flex-col gap-[24px]">
              <WhyUsCard
                icon={<Star />}
                title="Higher Occupancy"
                description="Dynamic pricing and multi-channel exposure keep your properties booked all year round."
              />
              <WhyUsCard
                icon={<ThumbsUp />}
                title="Better Reviews"
                description="Consistent, professional communication leads to happier guests and glowing 5-star ratings."
              />
              <WhyUsCard
                icon={<CheckCircle />}
                title="Zero Double-Bookings"
                description="Our proprietary API-first sync engine is the fastest in the industry. Reliability guaranteed."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
