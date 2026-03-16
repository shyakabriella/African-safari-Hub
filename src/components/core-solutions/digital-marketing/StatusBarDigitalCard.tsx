interface StatusBarDigitalCardProps {
  header: string;
  iconHeader: React.ReactNode;
  title: string;
  descriptionIcon: React.ReactNode;
  description: string;
}

export default function StatusBarDigitalCard({ header, iconHeader, title, descriptionIcon, description }: StatusBarDigitalCardProps) {
  return (
    <div className="w-[357.33px] h-[170px] flex flex-col gap-[12px] p-[32px] rounded-[16px] bg-white border border-[#8B4513]/10">
      <div className="flex justify-between items-center w-[291.33px] h-[20px]">
        <div className="w-[156.72px] h-full">
          <span className="w-full h-full font-semibold text-[#64748B] text-[14px] leading-[20px]">
            {header}
          </span>
        </div>
        <div className="w-[20px] h-[16px]">
          <span className="w-full h-full text-[#8B4513]">
            {iconHeader}
          </span>
        </div>
      </div>

      <div className="w-[291.33px] h-[40px]">
        <span className="w-full h-full font-extrabold text-[36px] leading-[40px] text-[#0F172A]">
          {title}
        </span>
      </div>

      <div className="w-[291.33px] h-[20px] flex gap-[20px]">
        <div className="w-[11.67px] h-[7px]">
          <span className="w-full h-full text-[#059669]">
            {descriptionIcon}
          </span>
        </div>

        <span className="w-[230.16px] h-full font-bold text-[14px] leading-[20px] text-[#059669]">
          {description}
        </span>
      </div>
    </div>
  )
}
