import { CircleCheck } from "lucide-react";

interface DriverBookingsCardProps {
  title: string;
  description: string;
}

export default function DriverBookingsCard({ title, description }: DriverBookingsCardProps) {
  return (
    <div className="flex items-start gap-4">
      
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        <CircleCheck className="w-5 h-5 text-[#8B4513]" />
      </div>
      
      {/* Text */}
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="font-bold text-lg text-white leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}