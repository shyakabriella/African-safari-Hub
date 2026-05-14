interface SecurityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SecurityCard({
  icon,
  title,
  description,
}: SecurityCardProps) {
  return (
    <>
      <div className="text-[#8B4513] flex-shrink-0">
        {icon}
      </div>

      <div className="flex flex-col gap-1">
        
        <div className="text-[#5C3317] font-bold text-[14px]">
          {title}
        </div>

        <div className="text-[#A0522D] text-[12px] leading-relaxed">
          {description}
        </div>
      </div>
    </>
  );
}