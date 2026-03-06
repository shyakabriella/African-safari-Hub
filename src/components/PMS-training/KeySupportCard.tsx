interface KeySupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function KeySupportCard({ icon, title, description }: KeySupportCardProps) {
  return (
    <div className="w-[286px] h-[210px] pt-6 pl-4 rounded-[16px] bg-white border border-[#F1F5F9]">
      <div className="w-[44px] h-[42px] p-[12px] rounded-[12px] bg-[#8B4513]/10">
        <span className="w-[20px] h-[18px] text-[#8B4513] flex justify-center items-center">{icon}</span>
      </div>
      <div className="w-full h-[28px] mt-3">
        <span className="w-[226.34px] h-full text-[18px] text-[#0F172A] font-bold">{title}</span>
      </div>
      <div className="w-[236px] h-[60px]">
        <span className="w-[190.48px] h-[60px] text-[14px] font-normal text-[#64748B]">
          {description}
        </span>
      </div>
    </div>
  )
}
