import { Check } from "lucide-react";

interface VisualLayoutCardProps {
  title: string;
  description: string;
}

export default function VisualLayoutCard({ title, description }: VisualLayoutCardProps) {
  return (
    <div className="w-[528px] h-[52px] flex items-center gap-[16px]">
      <div className="w-[32px] h-[32px] rounded-[9999px] bg-[#8B4513] flex justify-center items-center">
        <div className="w-[9.51px] h-[7.01px]">
          <span className="w-full h-full text-[#FFFFFF] flex justify-center items-center">{<Check />}</span>
        </div>
      </div>
      <div className="w-[452.16px] h-[52px] flex flex-col">
        <div className="w-full h-[28px]">
          <span className="w-[163.02px] h-full text-[18px] text-[#0F172A] font-semibold leading-[28px]">
            {title}
          </span>
        </div>
        <div className="w-full h-[24px]">
          <span className="w-full h-[24px] font-light text-[16px] leading-[24px] text-[#475569]">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
