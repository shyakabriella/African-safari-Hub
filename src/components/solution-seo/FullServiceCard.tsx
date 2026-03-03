interface FullServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FullServiceCard({ icon, title, description }: FullServiceProps) {
  return (
    <div className="w-[272px] h-[142px] flex gap-[14px] p-[24px] rounded-[16px] bg-[#D9BFA8]/10 border border-[#D9BFA8]/10">
      <div className="w-[28.75px] h-[92px]">
        <span className="w-[28.75px] h-[15px] text-[#D9BFA8]">{icon}</span>
      </div>
      <div className="w-[154.75px] h-[92px] flex flex-col">
        <div className="w-[154.75px] h-[24px]">
          <span className="w-[142.83px] h-full text-[16px] text-[#D9BFA8] font-bold">{title}</span>
        </div>
        <div className="w-[154.75px] h-[60px]">
          <span className="w-[154.75px] h-[60px] text-[14px] font-normal text-[#D9BFA8]/70">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}