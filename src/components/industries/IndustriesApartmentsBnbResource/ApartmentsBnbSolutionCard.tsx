import Image from "next/image";

interface ApartmentsBnbSolutionCardProps {
  image: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ApartmentsBnbSolutionCard({
  image,
  icon,
  title,
  description,
}: ApartmentsBnbSolutionCardProps) {
  return (
    <div className="w-[298.66px] h-[300px] flex flex-col gap-[24px]">
      <div className="relative w-full h-[168px] rounded-[12px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="w-[298.66px] h-[108px] flex flex-col gap-[8px]">
        <div className="flex items-center gap-[6px]">
          <div className="text-[#8B4513] flex items-center">{icon}</div>

          <span className="text-[#0F172A] font-bold text-[15px] leading-[28px]">
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
