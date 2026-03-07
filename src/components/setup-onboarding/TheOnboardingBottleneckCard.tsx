interface TheOnboardingBottleneckCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TheOnboardingBottleneckCard({ icon, title, description }: TheOnboardingBottleneckCardProps) {
  return (
    <div className="w-[298.66px] h-[312px] flex flex-col gap-[20px] p-[32px] rounded-[16px] bg-[#FFFFFF]/50 border border-[#E2E8F0]">
      <div className="w-[48px] h-[48px] rounded-[12px] bg-[#FFFFFF]/70">
        <div className="w-[40px] h-[40px] flex justify-center items-center">
          <span className="w-full h-full bg-[#8B4513]/10 text-[#8B4513] rounded-md flex justify-center items-center">{icon}</span>
        </div>
      </div>
      
      <div className="w-[232.66px] h-[28px]">
        <span className="w-full h-full font-bold leading-[28px] text-[20px] text-[#0F172A]">{title}</span>
      </div>
      <div className="w-[232.66px] h-[104px]">
        <span className="w-full h-full font-normal text-[16px] leading-[26px] text-[#475569]/50">
          {description}
        </span>
      </div>
    </div>
  )
}
