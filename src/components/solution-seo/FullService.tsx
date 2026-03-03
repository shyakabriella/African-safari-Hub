import { BarChart2, Key, Link, Smartphone, TriangleDashed, Zap } from "lucide-react";
import FullServiceCard from "./FullServiceCard";

export default function FullService() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[744px] p-[40px] bg-[#D9BFA8]/30">
        <div className="relative w-[1200px] h-[664px] flex flex-col gap-[64px] pr-[160px] pl-[160px] pt-[96px] pb-[96px] rounded-[24px] bg-[#8B5E3C]">
          <div className="absolute -top-5 -right-8 rotate-6 w-60 h-[720.42px] bg-[#D9BFA8]/5 z-50"></div>
          
          <div className="w-[880px] h-[92px] flex flex-col gap-[20px]">
            <div className="w-[880px] h-[48px]">
              <span className="text-[#FFFFFF] text-[48px] font-extrabold">
                Full-Service SEO Features
              </span>
            </div>
            <div className="w-[672px] h-[28px]">
              <span className="text-[18px] text-[#FFFFFF]/80 font-normal">
                Everything you need to outpace the competition and own your search results.
              </span>
            </div>
          </div>

          <div className="w-[880px] h-[316px] grid grid-cols-3 gap-[32px]">
            <FullServiceCard
              icon={<Key />}
              title="Keyword Research"
              description="Identifying high-value search terms specific to hotel niche."
            />
            <FullServiceCard
              icon={<TriangleDashed />}
              title="GMB Optimization"
              description="Complete management of your Google My Business profile."
            />
            <FullServiceCard
              icon={<Zap />}
              title="Speed Optimization"
              description="Optimizing images and scripts for instant loading."
            />
            <FullServiceCard
              icon={<Link />}
              title="Quality Backlinks"
              description="Building authority through hospitality industry links."
            />
            <FullServiceCard
              icon={<BarChart2 />}
              title="Monthly Reporting"
              description="Transparent data showing your traffic and growth."
            />
            <FullServiceCard
              icon={<Smartphone />}
              title="Mobile SEO"
              description="Ensuring perfect display on smartphones and tablets."
            />
          </div>
        </div>
      </div>
    </section>
  )
}