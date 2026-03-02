interface CardProps {
  title: string;
  description: string;
}

import Image from "next/image";

export default function FeaturesCard({ title, description }: CardProps) {
  return (
    <div className="w-140 h-28.5 p-4 rounded-xl bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 flex">
      <div className="w-1/12">
        <Image src={'/icons/check.png'} className="text-white bg-white rounded-[99999px] p-2" 
        alt="check-mark" width={30} height={30} />
      </div>

      <div className="w-[433.65px] h-20 flex flex-col gap-1">
        <span className="text-[#FFFFFF] text-[20px] font-bold">{title}</span>
        <span className="text-[#FFFFFF]/80 text-[16px] font-normal">
          {description}
        </span>
      </div>
    </div>
  );
}
