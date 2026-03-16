import Image from "next/image";

interface DesignedDistinctionCardProps {
  image: string;
  title: string;
  description: string;
}

export default function DesignedDistinctionCard({
  image,
  title,
  description,
}: DesignedDistinctionCardProps) {
  return (
    <div className="flex-1 flex flex-col gap-[20px] min-h-[450px] border border-[#D4AF37] rounded-[16px]">
      {/* Image */}
      <div className="relative w-full h-[300px] rounded-[16px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-[16px]"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-[12px] px-4">
        <span className="text-[#1f1212] font-bold text-[20px] leading-[28px]">
          {title}
        </span>
        <p className="text-[16px] font-normal leading-[24px] text-[#475569]">
          {description}
        </p>
      </div>
    </div>
  );
}