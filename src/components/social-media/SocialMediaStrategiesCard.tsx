import Image from "next/image";

interface SocialMediaStrategiesCardProps {
  image: string;
  title: string;
  description: string;
}

export default function SocialMediaStrategiesCard({
  image,
  title,
  description,
}: SocialMediaStrategiesCardProps) {
  return (
    <div className="w-[301.33px] h-[300px] flex flex-col rounded-[8px] bg-white border border-[#E5E5E5] overflow-hidden">
      {/* Image section */}
      <div className="w-full h-[140px] relative bg-[#F5E9E2]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Text section */}
      <div className="p-[16px] flex flex-col gap-[6px]">
        <h3 className="font-bold text-[16px] leading-[20px] text-[#221610]">
          {title}
        </h3>

        <p className="font-normal text-[13px] leading-[21px] text-[#737373]">
          {description}
        </p>
      </div>
    </div>
  );
}
