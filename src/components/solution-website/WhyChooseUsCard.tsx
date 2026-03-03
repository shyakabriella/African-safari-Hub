interface WhyChooseUsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUsCard({ icon, title, description }: WhyChooseUsProps) {
  return (
    <div className="w-[378.66px] h-[234px] bg-[#F5E6D3]/30 border border-[#F5E6D3]/40 rounded-[16px] pl-6 pt-8 flex flex-col gap-[20px] shadow-sm">
      
      {/* Icon */}
      <div className="text-[#8B4513]">
        {icon}
      </div>

      {/* Title */}
      <div className="w-[312.66px] h-[28px]">
        <span className="text-[20px] font-bold text-[#5C3317]">
          {title}
        </span>
      </div>

      {/* Description */}
      <div className="w-[312.66px] h-[72px]">
        <span className="text-[16px] font-normal text-[#8B4513]/80">
          {description}
        </span>
      </div>

    </div>
  )
}