interface ThreeStepsTrainingProps {
  count: string;
  title: string;
  description: string;
}

export default function ThreeStepsTrainingCard({ count, title, description }: ThreeStepsTrainingProps) {
  return (
    <div className="w-[584px] h-[84px] flex gap-[24px]">
      <div className="w-[48px] h-[48px] pt-[9.5px] pb-[10.5px] rounded-[9999px] bg-[#8B4513] flex justify-center items-center">
        <span className="w-[8.77px] h-[28px] font-bold text-[20px] text-white">{count}</span>
      </div>
      <div className="w-[507.38px] h-[84px] flex flex-col gap-[8px]">
        <div className="w-full h-[28px]">
          <span className="w-[323.59px] h-[28px] font-bold text-[20px] text-[#0F172A]">
            {title}
          </span>
        </div>
        <div className="w-full h-[48px]">
          <span className="w-full h-full text-[16px] text-[#475569] font-normal">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
