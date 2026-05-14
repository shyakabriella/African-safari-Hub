interface SocialMediaStrugglesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SocialMediaStrugglesCard({
  icon,
  title,
  description,
}: SocialMediaStrugglesCardProps) {
  return (
    <div className="w-[301.33px] h-[153px] flex flex-col gap-[12px] p-[16px] rounded-[8px] bg-white border border-[#E5E5E5]">
      <div className="w-[267.33px] h-[20px]">
        <span className="w-full h-full text-[#8B4513]">{icon}</span>
      </div>

      <div className="w-[267.33px] h-[87px] flex flex-col gap-[4px]">
        <div className="w-full h-[20px]">
          <span className="w-full h-full font-bold text-[16px] leading-[20px] text-[#221610]">
            {title}
          </span>
        </div>
        <div className="w-full h-[63px]">
          <span className="w-full h-full font-normal text-[10px] leading-[21px] text-[#737373]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
