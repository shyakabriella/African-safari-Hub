import { BarChart3, MessageSquare, Sparkles } from "lucide-react";
import PowerfulAICard from "./PowerfulAICard";

export default function PowerfulAI() {
  return (
    <div className="w-[1280px] h-[686px] mt-5 mb-8 pt-[96px] pb-[96px] pr-[80px] pl-[80px] bg-[#F8FAFC]">
      <div className="w-[1120px] h-[494px] flex flex-col gap-[64px] text-center justify-center items-center">

        <div className="w-[1120px] h-[140px] flex flex-col gap-[16px]">
          <div className="w-full h-[20px]">
            <span className="w-[195.64px] h-full font-bold text-[14px] leading-[20px] tracking-[1.4px] text-[#8B4513]">
              Platform Capabilities
            </span>
          </div>
          <div className="w-full h-[40px]">
            <span className="w-[501.67px] h-full font-extrabold leading-[40px] text-[#0F172A] text-[36px]">
              Powerful AI Suite for Hoteliers
            </span>
          </div>
          <div className="w-full h-[48px] pr-[224px] pl-[224px]">
            <div className="w-[672px] h-full">
              <span className="w-[667.68px] h-full font-normal text-[16px] leading-[24px] text-[#475569]">
                Our platform integrates seamlessly with your existing systems to automate communication and provide actionable data.
              </span>
            </div>
          </div>
        </div>
        
        <div className="w-[1120px] h-[290px] flex gap-[32px]">
          <PowerfulAICard
            icon={<MessageSquare />}
            title="24/7 Guest Support"
            description="Instant answers for guests at any time, via WhatsApp, Web, or App. Reducing front-desk workload by up to 70%."
          />
          <PowerfulAICard
            icon={<Sparkles />}
            title="Automated Smart Replies"
            description="AI-generated responses to common queries and reviews, maintaining a professional and personalized tone consistently."
          />
          <PowerfulAICard
            icon={<BarChart3 />}
            title="Data-Driven Insights"
            description="Analyze guest sentiment and operational performance with advanced analytics dashboards that track guest satisfaction."
          />
        </div>

      </div>
    </div>
  )
}
