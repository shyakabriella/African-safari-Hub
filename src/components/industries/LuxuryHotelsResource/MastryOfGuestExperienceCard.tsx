import { CheckCircle } from "lucide-react"

interface MastryOfGuestExperienceCardProps {
  title: string;
  description: string;
}

export default function MastryOfGuestExperienceCard({
  title,
  description,
}: MastryOfGuestExperienceCardProps) {
  return (
    <div className="w-[584px] min-h-[84px] flex gap-[20px] items-start">
      <div className="w-[40px] h-[40px] rounded-full bg-[#8B4513] flex justify-center items-center">
        <CheckCircle className="w-[24px] h-[24px] text-white" />
      </div>

      <div className="flex flex-col gap-[2px] flex-1">
        <h3 className="font-bold text-[15px] text-[#0F172A] leading-tight">
          {title}
        </h3>
        <p className="text-[12px] text-[#475569] font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
