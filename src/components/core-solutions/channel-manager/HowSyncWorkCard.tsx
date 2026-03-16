interface HowSyncWorkCardProps {
  integer: string;
  title: string;
  description: string;
}

export default function HowSyncWorkCard({ integer, title, description}: HowSyncWorkCardProps) {
  return (
    <div className="w-[544px] h-[72px] flex items-center gap-[16px]">
      <div className="flex justify-center items-center text-center w-[32px] h-[32px] rounded-[9999px] bg-[#8B4513]">
        <span className="flex justify-center items-center text-center w-[7.02px] h-[24px] font-bold text-white text-[16px] leadnig-[24px]">
          {integer}
        </span>
      </div>
      
      <div className="w-[414.47px] h-[72px] flex flex-col">
        <div className="w-full h-[24px]">
          <span className="w-[157.81px] h-full font-bold text-[#0F172A] text-[16px] leading-[24px]">
            {title}
          </span>
        </div>
        <div className="w-full h-[48px]">
          <span className="w-full h-full font-normal text-[16px] leading-[24px] text-[#475569]">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
