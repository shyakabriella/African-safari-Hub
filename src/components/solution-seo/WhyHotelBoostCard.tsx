interface WhyHotelBoostProps {
  perc: string;
  title: string;
  description: string;
}

export default function WhyHotelBoostCard({ perc, title, description }: WhyHotelBoostProps) {
  return (
    <div className="w-[288px] h-[132px] gap-4 flex flex-col justify-center items-center text-center">
      <div className="w-[288px] h-[40px]">
        <span className="w-[66px] h-[40px] font-extrabold text-[#8B5E3C] text-[36px]">
          {perc}
        </span>
      </div>
      <div className="w-[288px] h-[28px]">
        <span className="w-[161.98px] h-[28px] font-bold text-[18px] text-[#4A3B2A]">
          {title}
        </span>
      </div>
      <div className="w-[288px] h-[40px]">
        <span className="w-[285.39px] h-full font-normal text-[#7D6B5D] text-[14px]">
          {description}
        </span>
      </div>
    </div>
  )
}