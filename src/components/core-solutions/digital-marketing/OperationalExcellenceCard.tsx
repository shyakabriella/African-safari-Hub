interface OperationalExcellenceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function OperationalExcellenceCard({ icon, title, description }: OperationalExcellenceCardProps) {
  return (
    <div className="w-[256px] h-[305px] flex flex-col gap-[24px] p-[32px] bg-white rounded-[16px] border border-[#E2E8F0]">
      <div className="w-[56px] h-[56px] rounded-[12px] bg-[#8B4513]/10 flex justify-center items-center">
        <div className="w-[25px] h-[15px]">
          <span className="w-full h-full text-[#8B4513] flex justify-center items-center">
            {icon}
          </span>
        </div>
      </div>

      <div className="w-[190px] h-[153.75px] flex flex-col gap-[11px]">
        <div className="w-[190px] h-[28px]">
          <span className="w-full h-full text-[18px] font-bold leading-[28px] text-[#0F172A]">
            {title}
          </span>
        </div>
        <div className="w-[190px] h-[114.75px] pb-[0.75px]">
          <span className="w-full h-[114px] font-normal text-[14px] leading-[22.8px] text-[#475569]">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
