import React from "react"

interface ZeroErrorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ZeroErrorCard({ icon, title, description }: ZeroErrorCardProps) {
  return (
    <div className="w-[362.66px] h-[246px] flex flex-col gap-[16px] p-[32px] rounded-[16px] bg-white border border-[#8B4513]/5 gap-[20px]">
      <div className="w-[48px] h-[48px] rounded-[8px] bg-[#8B4513]/10 flex justify-center items-center">
        <div className="w-[20px] h-[25px]">
          <span className="w-full h-full text-[#8B4513] flex justify-center items-center">{icon}</span>
        </div>
      </div>

      <div className="w-[296.66px] h-[28px]">
        <span className="w-full h-full font-bold text-[20px] text-[#0F172A] leading-[28px]">
          {title}
        </span>
      </div>

      <div className="w-[296.66px] h-[72px]">
        <span className="w-full h-full text-[#475569] text-[16px] leading-[24px] font-normal">
          {description}
        </span>
      </div>
    </div>
  )
}
