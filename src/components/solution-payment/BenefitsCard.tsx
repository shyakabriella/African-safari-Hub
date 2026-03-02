interface BenefitsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function BenefitsCard({
  icon,
  title,
  description,
}: BenefitsCardProps) {
  return (
    <div className="w-[520px] h-[76px] flex gap-[16px]">
      <div className="w-[40px] h-[40px] rounded-[9999px] bg-[#fffff]/20">
        <div className="w-[40px] h-[40px] rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white">{icon}</span>
        </div>
      </div>
      <div className="w-[426.91px] h-[76px]">
        <div className="w-[426.91px] h-[28px]">
          <span className="w-[162.28px] h-[28px] text-[20px] font-bold text-white">
            {title}
          </span>
        </div>
        <div className="w-[426.91px] h-[48px]">
          <span className="w-[426.91px] h-[48px] text-[16px] font-normal text-[#ffffff]/40">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
