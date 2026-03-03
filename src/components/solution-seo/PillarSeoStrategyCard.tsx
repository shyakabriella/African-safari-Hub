import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface PillarSeoProps {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
}

export default function PillarSeoStrategyCard({
  number,
  title,
  description,
  bullets,
  image,
  reverse = false,
}: PillarSeoProps) {
  return (
    <div
      className={`w-[960px] h-[456px] flex items-center gap-[48px] ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* TEXT SIDE */}
      <div className="w-[456px] flex flex-col gap-[15.4px]">
        {/* HEADER */}
        <div className="flex items-center gap-[16px]">
          <div className="w-[48px] h-[48px] bg-[#7B6B5A]/10 rounded-full flex justify-center items-center">
            <span className="text-[16px] font-bold text-[#4A3B2A]">
              {number}
            </span>
          </div>

          <span className="font-bold text-[20px] text-[#4A3B2A]">{title}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-[18px] text-[#7B6B5A] leading-relaxed">
          {description}
        </p>

        {/* BULLETS */}
        <div className="flex flex-col gap-[12px] pt-[8px]">
          {bullets.map((item, index) => (
            <div key={index} className="flex items-center gap-[12px]">
              <CheckCircle className="w-[16px] h-[16px] text-[#8F7E6D]" />
              <span className="text-[#4A3B2A] text-[16px]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative w-[456px] h-[456px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}