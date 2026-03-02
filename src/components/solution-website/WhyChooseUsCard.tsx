interface WhyChooseUsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyChooseUsCard({ icon, title, description }: WhyChooseUsProps) {
  return (
    <div className="w-[378.66px] h-[234px] bg-[#F8FAFC] border border-[#F1F5F9] rounded-[16px] pl-6 pt-8 flex flex-col gap-[20px]">
      <div className="text-[#1152D4]">
        {icon}
      </div>
      <div className="w-[312.66px] h-[28px]">
        <span className="text-[20px] font-bold text-[#0F172A]">
          {title}
        </span>
      </div>
      <div className="w-[312.66px] h-[72px]">
        <span className="text-[16px] font-normal text-[#475569]">{description}</span>
      </div>
    </div>
  )
}
