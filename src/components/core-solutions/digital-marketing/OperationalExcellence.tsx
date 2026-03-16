import {
  FileText,
  MessageSquare,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import OperationalExcellenceCard from "./OperationalExcellenceCard";

export default function OperationalExcellence() {
  return (
    <div className="w-[1280px] h-[756px] pr-[80px] pl-[80px] pt-[46px] pb-[96px]">
      <div className="w-[1120px] h-[573px] flex flex-col gap-[64px]">
        <div className="w-full h-[204px] flex justify-between">
          <div className="w-[680.98px] h-full flex flex-col gap-[16px]">
            <div className="w-full h-[20px]">
              <span className="w-[124.42px] h-full font-bold text-[14px] leading-[20px] text-[#8B4513]">
                UNIFIED POWER
              </span>
            </div>
            <div className="w-full h-[96px] mt-4">
              <span className="w-full h-full font-extrabold text-[48px] leading-[48px] text-[#0F172A]">
                Operational Excellence meets <span className="text-[#8B4513]">Strategic</span> Marketing
              </span>
            </div>
            <div className="w-full h-[56px] mt-6">
              <span className="w-full h-full font-normal text-[18px] leading-[28px] text-[#475569]">
                Stop jumping between apps. We combined the core functions of
                property management with high-performance marketing tools to
                scale your business faster.
              </span>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <button className="cursor-pointer w-[205px] h-[24px] flex gap-[8px] mt-auto">
              <span className="w-[181px] h-full font-bold text-[16px] text-[#8B4513] leading-[24px]">
                Explore all 50+ features
              </span>
              <div className="w-[16px] h-[16px] text-[#8B4513]">
                <TrendingUp />
              </div>
            </button>
          </div>
        </div>

        <div className="w-full h-[305px] flex gap-[32px] mt-8">
          <OperationalExcellenceCard
            icon={<Users />}
            title="Smart Front Desk"
            description="Frictionless check-ins, dynamic booking calendars, and automated guest communications in one screen."
          />
          <OperationalExcellenceCard
            icon={<FileText />}
            title="Smart Invoicing"
            description="Generate professional, branded invoices. Automatic payment tracking and tax reporting integrated."
          />
          <OperationalExcellenceCard
            icon={<Search />}
            title="SEO & Ads Engine"
            description="Rank higher on search results and run high- converting ad campaigns directly from your dashboard."
          />
          <OperationalExcellenceCard
            icon={<MessageSquare />}
            title="Review Management"
            description="Automatically request and showcase guest reviews to build trust and social proof instantly."
          />
        </div>
      </div>
    </div>
  );
}
