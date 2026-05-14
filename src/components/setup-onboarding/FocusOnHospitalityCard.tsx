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
    <div className="w-[384px] h-[180px] rounded-[16px] bg-[#FFFFFF]/50 border border-[#E2E8F0] flex flex-col justify-start items-center text-center pt-8">
      {/* Icon */}
      <div className="w-[40px] h-[45px] rounded-full bg-[#8B4513] flex justify-center items-center text-white mb-4">
          <span className="text-[8px]">
            {icon}
          </span>
      </div>

      {/* Title */}
      <div className="w-[318px] h-[28px] mb-3">
        <span className="font-bold text-[20px] leading-[28px] text-[#0F172A]">
          {title}
        </span>
      </div>

      {/* Description */}
      <div className="w-[318px] h-[72px] mb-4">
        <span className="font-normal text-[10px] leading-[10px] text-[#a6adb7]">
          {description}
        </span>
      </div>
    </div>
  );
}