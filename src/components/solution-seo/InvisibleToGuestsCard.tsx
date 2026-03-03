interface InvisibleToGuestsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function InvisibleToGuestsCard({ icon, title, description }: InvisibleToGuestsProps) {
  return (
    <div className="w-[298.66px] h-[274px] bg-[#D9BFA8]/20 border border-[#D9BFA8]/40 pt-9 pl-5 flex flex-col gap-[12px] rounded-2xl">
      {icon}
      <div className="w-[232.66px] h-[28px]">
        <span className="w-[170.28px] h-[28px] text-[#4A3B2A] text-[20px] font-bold">
          {title}
        </span>
      </div>
      <div className="w-[232.66px] h-[104px]">
        <span className="w-[213.38px] h-[104px] text-[16px] font-normal text-[#7B6B5A]">
          {description}
        </span>
      </div>
    </div>
  )
}