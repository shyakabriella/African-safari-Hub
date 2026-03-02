interface GuestCardProps {
  num: number;
  title: string
  description: string;
}

export default function HowItWorkForGuestsCard({ num, title, description}: GuestCardProps) {
  return (
    <div className="h-[164px] flex flex-col justify-center items-center text-center">
      <div className="w-[64px] h-[64px] rounded-[9999px] pt-[17.5px] pb-[18.5px] mb-4 bg-[#1152D4] flex justify-center items-center text-white font-bold">
        {num}
      </div>
      <hr className="h-3 w-full text-gray-100" />
      <div className="w-[276px] h-[28px]"><span className="text-[#0F172A]">{title}</span></div>
      <div className="w-[276px] h-[40px]"><span className="text-[#64748B]">{description}</span></div>
    </div>
  )
}
