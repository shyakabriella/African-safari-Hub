import Image from "next/image";

interface ReachMoreGuestsCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ReachMoreGuestsCard({ image, title, description}:ReachMoreGuestsCardProps) {
  return (
    <div className="w-[262px] h-[269px] flex flex-col p-[16px] gap-[16px] rounded-[12px] bg-white border border-[#8B4513]/5">
      <div className="relative w-[228px] h-[171px] rounded-[8px] bg-[#FDFAF7]">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-center absolute"
        />
      </div>

      <div className="w-[228px] h-[48px] flex flex-col">
        <div className="w-full h-full">
          <span className="w-full h-full font-bold text-[18px] leading-[28px] text-[#0F172A]">
            {title}
          </span>
        </div>
        <div className="w-full h-[20px]">
          <span className="w-full h-full text-[14px] leading-[20px] text-[#64748B]">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
