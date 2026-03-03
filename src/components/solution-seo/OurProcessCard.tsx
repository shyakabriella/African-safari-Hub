interface OurProcessProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function OurProcessCard({ icon, title, description }: OurProcessProps) {
  return (
    <div className="w-[216px] h-[180px] flex flex-col text-center gap-[10px] justify-center items-center">
      <div className="flex justify-center items-center w-[80px] h-[80px] rounded-[9999px] bg-[#FDF7F0] border-4 border-[#4A3B2A]">
        <div className="w-[25px] h-[22.5px]">
          <span className="text-[#4A3B2A] w-[25px] h-[22.5px]">{icon}</span>
        </div>
      </div>
      <div className="w-[216px] h-[28px]">
        <span className="w-[63.52px] h-[28px] font-bold text-[18px] text-[#4A3B2A]">
          {title}
        </span>
      </div>
      <div className="w-[216px] h-[40px]">
        <span className="w-[213.73px] h-[40px] text-[14px] text-[#7B6B5A] font-normal">
          {description}
        </span>
      </div>
    </div>
  )
}