interface FastTrackImplementationCardProps {
  count: string;
  weekCount: string;
  title: string;
  description: string;  
}

export default function FastTrackImplementationCard({ count, weekCount, title, description }: FastTrackImplementationCardProps) {
  return (
    <div className="w-[298.66px] h-[294px] flex flex-col justify-center items-center text-center p-[32px] rounded-[16px] bg-[#FFFFFF] border border-[#E2E8F0]">
      <div className="w-[64px] h-[88px] pb-[24px]">
        <div className="w-[64px] h-[64px] rounded-[9999px] bg-[#8B4513] flex justify-center items-center">
          <span className="w-[11.13px] h-[28px] font-bold text-[20px] leading-[28px] text-[#FFFFFF]">{count}</span>
        </div>
      </div>
      <div className="w-[74.95px] h-[24px] pb-[8px]">
        <div className="w-full h-[16px]">
          <span className="w-full h-full text-[12px] leading-[16px] text-[#8B4513] font-bold">{weekCount}</span>
        </div>
      </div>
      <div className="w-[172.19px] h-[44px] pb-[16px] mt-2">
        <div className="w-full h-[28px]">
          <span className="w-full h-full font-bold text-[20px] text-[#0F172A] leading-[28px]">{title}</span>
        </div>
      </div>
      <div className="w-[232.66px] h-[72px] pr-[7.55px] pl-[7.55px]">
        <span className="w-[217.56px] h-full font-normal text-[#475569] text-[16px] laeding-[24px]">{description}</span>
      </div>
    </div>
  )
}
