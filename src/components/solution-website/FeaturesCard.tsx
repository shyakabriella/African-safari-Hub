import { Check } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
}

export default function FeaturesCard({ title, description }: CardProps) {
  return (
    <div className="w-140 h-28.5 p-4 rounded-xl bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 flex items-center">
      <div className="w-1/12 flex justify-center items-center">
        <Check className="text-[#8B4513] bg-white rounded-full p-1" size={30} />
      </div>

      <div className="w-[433.65px] h-20 flex flex-col gap-1 ml-4">
        <span className="text-[#FFFFFF] text-[20px] font-bold">{title}</span>
        <span className="text-[#FFFFFF]/80 text-[16px] font-normal">
          {description}
        </span>
      </div>
    </div>
  );
}