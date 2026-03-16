import Image from "next/image";

interface TailoredTechnologyCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TailoredHospitalityCard({
  image,
  title,
  description,
  icon
}: TailoredTechnologyCardProps) {
  return (
    <div className="w-[346.66px] flex-1 h-[402px] flex flex-col gap-[30px]">
      <div className="relative w-full h-[250px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="w-[298.66px] h-[108px] flex flex-col gap-[8px]">
        
        <div className="flex items-center gap-[8px]">
          <span className="text-[#8B4513] flex items-center">
            {icon}
          </span>

          <span className="text-[#0F172A] font-bold text-[20px] leading-[28px]">
            {title}
          </span>
        </div>

        <div className="w-full h-[72px]">
          <span className="text-[16px] font-normal leading-[24px] text-[#475569]">
            {description}
          </span>
        </div>

      </div>
    </div>
  );
}