interface ApartmentsBnbProplemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ManualStruggleCard({
  icon,
  title,
  description,
}: ApartmentsBnbProplemCardProps) {
  return (
    <div className="w-[1120px] h-[200px] flex flex-col gap-[10px] p-[32px] rounded-[16px] bg-white border border-[#8B4513]/10">
      <div className="w-[30px] h-[50px] rounded-[12px] bg-[#F5E9E2] flex items-center justify-center">
        <div className="w-[40px] h-[30px]">
          <span className="w-full h-full text-[#8B4513] flex justify-center items-center">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-[28px]">
        <span className="w-full h-full font-bold text-[20px] leading-[28px] text-[#0F172A]">
          {title}
        </span>
      </div>

      <div className="w-full h-[96px]">
        <span className="w-full h-full font-normal text-[16px] leading-[24px] text-[#475569]">
          {description}
        </span>
      </div>
    </div>
  );
}
