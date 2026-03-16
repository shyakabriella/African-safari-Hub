import { Brain, CheckCircle, Smile, Tag } from "lucide-react";
import TransformYourHotelCard from "./TransformYourHotelCard";
import TransformYourHotelItem from "./TransformYourHotelItem";

export default function TransformYourHotel() {
  return (
    <section className="w-full flex justify-center items-center mt-20">
      <div className="relative w-[1280px] h-[676px] pl-[32px] pr-[32px] pt-[96px] pb-[96px] bg-[#8B4513]">
        <div className="absolute -top-18 -right-30 -rotate-12 w-[426.66px] h-300 bg-[#FFFFFF]/5 z-9"></div>
        <div className="w-[1216px] h-[484px] flex justify-between items-center gap-[64px]">
          
          <div className="w-[576px] h-full p-[16px] grid grid-cols-2 gap-x-[30px] gap-y-[10px]">
            <TransformYourHotelCard
              icon={<CheckCircle />}
              title="Reduce Errors"
              description="Minimize booking conflicts and billing mistakes through standardized processes."
            />
            <TransformYourHotelCard
              icon={<Tag />}
              title="Higher Retention"
              description="Empowered employees are happierand stay longer, reducing hiring costs."
            />
            <TransformYourHotelCard
              icon={<Smile />}
              title="Guest Satisfaction"
              description="Efficient front-desk operations lead to faster check-ins and happier guests."
            />
            <TransformYourHotelCard
              icon={<Brain />}
              title="Peace of Mind"
              description="Sleep better knowing your systems are running smooth and your team is ready."
            />
          </div>

          <div className="w-[576px] h-[288px] flex flex-col gap-[24px]">
            <div className="w-full h-[80]">
              <span className="w-full h-full font-extrabold text-[36px] text-white leading-[40px]">
                Transform Your Hotel Management Experience
              </span>
            </div>
            <div className="w-full h-[56px]">
              <span className="w-full h-full text-[#FFFFFF]/50 font-normal text-[20px]">
                Our training doesn&apos;t just teach software; it transforms your business culture to prioritize efficiency and service excellence.
              </span>
            </div>
            <div className="w-full h-[104px] flex flex-col gap-[25px]">
              <TransformYourHotelItem text="Dedicated training coordinator for your account" />
              <TransformYourHotelItem text="Tailored curriculum based on your PMS version" />
              <TransformYourHotelItem text="Post-training evaluation and certification" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
