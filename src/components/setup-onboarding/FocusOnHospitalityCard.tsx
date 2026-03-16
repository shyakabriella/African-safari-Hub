interface FocusOnHospitalityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FocusOnHospitalityCard({
  icon,
  title,
  description,
}: FocusOnHospitalityCardProps) {
  return (
    <div className="w-[384px] h-[230px] rounded-[16px] bg-[#FFFFFF]/50 border border-[#E2E8F0] flex flex-col justify-start items-center text-center pt-8">
      {/* Icon */}
      <div className="w-[64px] h-[64px] rounded-full bg-[#8B4513] flex justify-center items-center text-white mb-4">
        {icon}
      </div>

      {/* Title */}
      <div className="w-[318px] h-[28px] mb-3">
        <span className="font-bold text-[20px] leading-[28px] text-[#0F172A]">
          {title}
        </span>
      </div>

      {/* Description */}
      <div className="w-[318px] h-[72px]">
        <span className="font-normal text-[16px] leading-[24px] text-[#475569]">
          {description}
        </span>
      </div>
    </div>
  );
}