interface GuestCardProps {
  num: number;
  title: string;
  description: string;
}

export default function HowItWorkForGuestsCard({ num, title, description }: GuestCardProps) {
  return (
    <div className="h-[164px] flex flex-col justify-center items-center text-center">
      
      {/* Number Circle */}
      <div className="w-[64px] h-[64px] rounded-full pt-[17.5px] pb-[18.5px] mb-4 bg-[#8B4513] flex justify-center items-center text-[#F5E6D3] font-bold">
        {num}
      </div>

      <hr className="h-3 w-full border-t border-[#8B4513]/20 mb-3" />

      {/* Title */}
      <div className="w-[276px] h-[28px]">
        <span className="text-[#5C3317] font-semibold text-[16px]">
          {title}
        </span>
      </div>

      {/* Description */}
      <div className="w-[276px] h-[40px]">
        <span className="text-[#8B4513]/80 text-sm">
          {description}
        </span>
      </div>

    </div>
  )
}