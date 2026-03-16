interface PowerfulAICardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function PowerfulAICard({ icon, title, description }: PowerfulAICardProps) {
  return (
    <div className="w-[352px] h-[290px] pt-5 pl-6 rounded-[16px] bg-white border border-[#E2E8F0] flex flex-col gap-[20px]">
      <div className="w-[56px] h-[56px] rounded-[12px] bg-[#8B4513]/10 flex justify-center items-center">
        <div className="w-[25px] h-[25px]">
          <span className="w-full h-full text-[#8B4513] flex justify-center items-center">
            {icon}
          </span>
        </div>
      </div> 

      <div className="w-[286px] h-[28px]">
        <span className="w-[189px] h-full font-bold text-[20px] leading-[28px] text-[#0F172A]">
          {title}
        </span>
      </div>

      <div className="w-[286px] h-[78px]">
        <span className="w-[284.55px] h-full font-normal text-[16px] leading-[26px] text-[#475569]">
          {description}
        </span>
      </div>
    </div>
  )
}
