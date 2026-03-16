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
    <div className="w-[584px] min-h-[84px] flex gap-[24px] items-start">
      <div className="w-[48px] h-[48px] rounded-full bg-[#8B4513] flex justify-center items-center">
        <CheckCircle className="w-[24px] h-[24px] text-white" />
      </div>

      <div className="flex flex-col gap-[8px] flex-1">
        <h3 className="font-bold text-[20px] text-[#0F172A] leading-tight">
          {title}
        </h3>
        <p className="text-[16px] text-[#475569] font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
