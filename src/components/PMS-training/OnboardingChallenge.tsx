import { AlarmClockOff, AlertCircle, Users } from "lucide-react";
import OnboardingChallengeCard from "./OnboardingChallengeCard";

export default function OnboardingChallenge() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[562px] pt-[80px] pb-[80px] bg-[#F8FAFC]/30 border border-[#F6F6F8]">
        <div className="w-full h-[402px] flex flex-col justify-center items-center pr-[32px] pl-[32px] gap-[64px]">
          <div className="w-[768px] h-[108px] flex flex-col text-center gap-[16px]">
            <div className="w-[768px] h-[36px]">
              <span className="w-[392.5px] h-[36px] font-extrabold text-[30px] text-[#0F172A]">
                The Onboarding Challenge
              </span>
            </div>
            <div className="w-[768px] h-[56px]">
              <span className="w-full h-full font-normal text-[20px] text-[#475569]">
                Tired of manual errors and long training cycles? High staff turnover and complex
                systems shouldn&apos;t hold your hotel back from excellence.
              </span>
            </div>
          </div>
          <div className="w-[1216px] h-[230px] flex gap-[32px]">
            <OnboardingChallengeCard
              icon={<AlertCircle />}
              title="Costly Manual Errors"
              description="Inefficient training leads to booking mistakes and billing discrepancies that hurt your bottom line."
            />
            <OnboardingChallengeCard
              icon={<Users />}
              title="High Staff Turnover"
              description="Constantly training new hires on complex PMS systems drains resources and lowers morale."
            />
            <OnboardingChallengeCard
              icon={<AlarmClockOff />}
              title="Inefficient Onboarding"
              description="Weeks-long learning curves prevent your staff from being guest-ready when you need them most."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
