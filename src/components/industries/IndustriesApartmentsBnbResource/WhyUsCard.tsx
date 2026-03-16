interface WhyUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyUsCard({ icon, title, description }: WhyUsCardProps) {
  return (
    <div className="w-[448px] h-[72px] flex gap-[16px]">
      <div className="w-[40px] h-[40px] rounded-[9999px] flex justify-center items-center bg-[#8B4513]/20">
        <div className="w-[20px] h-[19px]">
          <span className="w-full h-full text-[#8B4513] flex justify-center items-center">{icon}</span>
        </div>
      </div>
      <div className="w-[351.56px] h-[72px] flex flex-col gap-[4px]">
        <div className="w-full h-[28px]">
          <span className="w-[177.59px] h-[28px] font-bold text-[20px] text-white leading-[28px]">{title}</span>
        </div>
        <div className="w-full h-[40px]">
          <span className="text-[#94A3B8] leading-[20px] text-[14px] font-normal">{description}</span>
        </div>
      </div>
    </div>
  )
}
