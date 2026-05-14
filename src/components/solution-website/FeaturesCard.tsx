import { Check } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
}

export default function FeaturesCard({ title, description }: CardProps) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 border border-white/10">
      
      <div className="flex-shrink-0">
        <Check className="w-5 h-5 text-[#8B4513] bg-white rounded-full p-1" />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-white text-sm font-bold">
          {title}
        </span>

        <span className="text-white/80 text-xs leading-relaxed">
          {description}
        </span>
      </div>
    </div>
  );
}