interface FastTrackImplementationCardProps {
  count: string;
  weekCount: string;
  title: string;
  description: string;  
}

export default function FastTrackImplementationCard({
  count,
  weekCount,
  title,
  description
}: FastTrackImplementationCardProps) {
  return (
    <div className="w-[384px] h-[230px] pt-9 pl-4 rounded-[16px] bg-[#FFFFFF]/50 border border-[#F1F5F9] flex flex-col justify-start items-center text-center">
      {/* Count circle */}
      <div className="w-[64px] h-[64px] rounded-full bg-[#8B4513] flex justify-center items-center mb-2">
        <span className="font-bold text-[20px] text-white">{count}</span>
      </div>

      {/* Week */}
      <div className="w-[74.95px] h-[24px] mb-2">
        <span className="w-full h-full text-[12px] leading-[16px] text-[#8B4513] font-bold">
          {weekCount}
        </span>
      </div>

      {/* Title */}
      <div className="w-[318px] h-[28px] mb-2">
        <span className="font-bold text-[20px] text-[#0F172A] leading-[28px]">
          {title}
        </span>
      </div>

      {/* Description */}
      <div className="w-[318px] h-[72px]">
        <span className="w-full h-full font-normal text-[16px] text-[#64748B] leading-[24px]">
          {description}
        </span>
      </div>
    </div>
  );
}