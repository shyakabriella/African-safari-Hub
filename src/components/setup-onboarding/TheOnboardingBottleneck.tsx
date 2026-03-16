import { AlarmClockOff, Network, UserX } from "lucide-react";
import TheOnboardingBottleneckCard from "./TheOnboardingBottleneckCard";

export default function TheOnboardingBottleneck() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[562px] pt-[20px] pb-[80px] bg-[#F8FAFC]/30 border border-[#F6F6F8]/10">
        <div className="w-full h-[402px] flex flex-col justify-center items-center pr-[32px] pl-[32px] gap-[64px]">
          {/* Header */}
          <div className="w-[768px] h-[108px] flex flex-col text-center gap-[16px]">
            <div className="w-[768px] h-[36px]">
              <span className="w-[392.5px] h-[36px] font-extrabold text-[30px] text-[#0F172A]">
                The Onboarding Bottleneck
              </span>
            </div>
            <div className="w-[768px] h-[56px]">
              <span className="w-full h-full font-normal text-[20px] text-[#475569]">
                Why most hotel software implementations fail or stall for months.
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="w-[1216px] h-[230px] flex gap-[32px]">
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
      </div>
    </section>
  );
}