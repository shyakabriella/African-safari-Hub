interface SellDirectlyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SellDirectlyCard({ icon, title, description }: SellDirectlyCardProps) {
  return (
    <div className="w-[352px] h-[290px] rounded-[16px] bg-[#FDFAF7] border border-[#8B4513]/30 pl-3 pt-8 flex flex-col gap-[15px] items-center">
      <div className="w-[56px] h-[56px] rounded-[12px] bg-[#8B4513] flex justify-center items-center text-white">
        {icon}
      </div>
      <div className="w-[286px] h-[28px]">
        <span className="w-[265.72px] h-full font-medium text-[#0F172A] text-[20px] leading-[28px]">
          {title}
        </span>
      </div>
      <div className="w-[286px] h-[104px]">
        <span className="w-[277.63px] h-[104px] font-light text-[16px] leading-[26px] text-[#475569]">
          {description}
        </span>
      </div>
    </div>
  )
}
