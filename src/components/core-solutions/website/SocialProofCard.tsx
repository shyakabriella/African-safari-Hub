import { ReactNode } from "react";

interface SocialProofCardProps {
  header: string;
  title: string;
  description: string;
  sideTitle?: string;
  sideIconArrow?: ReactNode;
}

export default function SocialProofCard({
  header,
  title,
  description,
  sideTitle,
  sideIconArrow,
}: SocialProofCardProps) {
  return (
    <div className="w-[352px] p-8 rounded-[16px] bg-white/80 border-2 border-[#8B4513]/20 flex flex-col gap-4">
      
      {/* Header */}
      <span className="text-[#64748B] text-[14px] font-medium leading-[20px]">
        {header}
      </span>

      {/* Title + optional side content */}
      <div className="flex items-center gap-4">
        <span className="text-[#0F172A] text-[36px] font-medium leading-[40px]">
          {title}
        </span>

        {sideTitle || sideIconArrow ? (
          <div className="flex items-center gap-2 text-[#16A34A]">
            {sideIconArrow && <div className="flex-shrink-0">{sideIconArrow}</div>}
            {sideTitle && <span className="text-[14px] font-medium leading-[20px]">{sideTitle}</span>}
          </div>
        ) : null}
      </div>

      {/* Description */}
      <span className="text-[#94A3B8] text-[12px] font-extralight leading-[16px]">
        {description}
      </span>
    </div>
  );
}