interface TransformYourHotelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function TransformYourHotelCard({ icon, title, description }: TransformYourHotelCardProps) {
  return (
    <div className="w-[280px] h-[234px] pt-8 pl-4 flex flex-col rounded-[16px] bg-[#FFFFFF]/10 border border-[#FFFFFF]/20">
      <span className="w-[28.52px] h-[30px] text-[#FFFFFF]">{icon}</span>
      <div className="w-[230px] h-[28px] mt-2">
        <span className="text-white font-bold text-[20px] w-[134.53px] h-[28px]">{title}</span>
      </div>
      <div className="w-[230px] h-[60px] mt-2">
        <span className="w-[224.55px] h-full leading-[20px] text-[14px] font-normal text-[#FFFFFF]/40">{description}</span>
      </div>
    </div>
  )
}
