interface FocusOnGrowthProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FocusOnGrowthCard({
  icon,
  title,
  description,
}: FocusOnGrowthProps) {
  return (
    <div className="w-[568px] h-[84px] flex gap-[24px]">
      <div className="w-[46.5px] h-[46.5px] p-[12px] rounded-[12px] bg-[#1152D4]/10">
        <div className="w-[22px] h-[22px] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="w-[433.84px] h-[84px] flex flex-col gap-[8px]">
        <div className="w-[433.84px] h-[28px]">
          <span className="text-[20px] text-[#0F172A] font-bold">{title}</span>
        </div>
        <div className="w-[433.84px] h-[48px]">
          <span className="text-[#475569] font-normal text-[16px]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
