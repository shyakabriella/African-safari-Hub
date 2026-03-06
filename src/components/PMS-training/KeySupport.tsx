import { ActivityIcon, Headset, PlayCircle, Zap } from "lucide-react";
import KeySupportCard from "./KeySupportCard";


export default function KeySupport() {
  return (
    <section className="w-full flex justify-center items-center mt-20">
      <div className="w-[1280px] h-[510px] pt-[80px] pb-[80px] bg-[#F6F6F8]/20 border border-[#F6F6F8] flex justify-center items-center">
        <div className="w-full h-[350px] flex flex-col gap-[64px] pr-[32px] pl-[32px]">
          <div className="w-[1216px] h-[76px] flex flex-col gap-[16px] text-center">
            <div className="w-full h-[36px]">
              <span className="w-[316.94px] h-full text-[30px] font-extrabold text-[#0F172A]">
                Key Support Features
              </span>
            </div>
            <div className="w-full h-[24px]">
              <span className="w-[505.2px] h-full text-[16px] text-[#475569] font-normal">
                Everything you need to keep your hotel running at peak performance.
              </span>
            </div>
          </div>

          <div className="w-[1216px] h-[210px] flex items-center justify-between gap-[24px]">
            <KeySupportCard
              icon={<Headset />}
              title="24/7 Technical Assistance"
              description="Round-the-clock help desk to resolve any technical hiccups instantly."
            />
            <KeySupportCard
              icon={<PlayCircle />}
              title="On-Demand Library"
              description="Access our comprehensive database of video tutorials and how-to guides anytime."
            />
            <KeySupportCard
              icon={<Zap />}
              title="Fast-Track Onboarding"
              description="Get new hires up to speed in 48 hours with our streamlined learning modules."
            />
            <KeySupportCard
              icon={<ActivityIcon />}
              title="Performance Audits"
              description="Regular check-ups to identify workflow bottlenecks and implement best practices."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
