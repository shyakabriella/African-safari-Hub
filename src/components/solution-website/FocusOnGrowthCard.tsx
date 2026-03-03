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
    <div className="w-[568px] h-[84px] flex gap-[24px] group transition">
      
      <div className="w-[46.5px] h-[46.5px] p-[12px] rounded-[12px] bg-[#8B4513]/10 group-hover:bg-[#8B4513]/20 transition">
        <div className="w-[22px] h-[22px] flex items-center justify-center text-[#8B4513]">
          {icon}
        </div>
      </div>

      <div className="w-[433.84px] h-[84px] flex flex-col gap-[8px]">
        
        <div className="w-[433.84px] h-[28px]">
          <span className="text-[20px] text-[#5C3317] font-bold">
            {title}
          </span>
        </div>

        <div className="w-[433.84px] h-[48px]">
          <span className="text-[#8B4513]/80 font-normal text-[16px]">
            {description}
          </span>
        </div>

      </div>
    </div>
  );
}