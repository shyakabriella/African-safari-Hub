import Image from "next/image";

interface TailoredTechnologyCardProps {
  image: string;
  title: string;
  description: string;
}

export default function TailoredTechnologyCard({
  image,
  title,
  description,
}: TailoredTechnologyCardProps) {
  return (
    <div className="w-[346.66px] h-[402px] flex flex-col gap-[30px]">
      <div className="relative w-full h-[250px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="w-[298.66px] h-[108px] flex flex-col gap-[8px]">
        <div className="flex items-center gap-[6px]">
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
