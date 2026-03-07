import { AlarmClockOff, Network, UserX } from "lucide-react";
import TheOnboardingBottleneckCard from "./TheOnboardingBottleneckCard";

export default function TheOnboardingBottleneck() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[622px] border border-[#F1F5F9] bg-[#FFFFFF] pt-[40px] pb-[80px] pr-[160px] pl-[160px] flex flex-col justify-center items-center text-center gap-[64px]">
        <div className="w-[896px] h-[84px] flex flex-col gap-[16px]">
          <div className="w-full h-[40px]">
            <span className="w-[449.53px] h-full font-bold text-[36px] leading-[40px] text-[#0F172A]">
              The Onboarding Bottleneck
            </span>
          </div>
          <div className="w-full h-[28px]">
            <span className="w-[514.2px] h-full font-normal text-[18px] leading-[28px] text-[#475569]">
              Why most hotel software implementations fail or stall for months.
            </span>
          </div>
        </div>

        <div className="w-[960px] h-[312px] flex items-center justify-between gap-[32px]">
          <TheOnboardingBottleneckCard
            icon={<AlarmClockOff />}
            title="Slow Setups"
            description="Traditional onboarding involves endless back-and-forth emails, causing weeks of lost revenue while rooms sit empty online."
          />
          <TheOnboardingBottleneckCard
            icon={<Network />}
            title="Technical Confusion"
            description="Complex API mappings, PMS configurations, and payment gateway syncs are overwhelming for busy hotel managers."
          />
          <TheOnboardingBottleneckCard
            icon={<UserX />}
            title="Staff Frustration"
            description="Untrained teams lead to double bookings, incorrect rates, and low morale during the most critical opening phase."
          />
        </div>
      </div>
    </section>
  )
}
