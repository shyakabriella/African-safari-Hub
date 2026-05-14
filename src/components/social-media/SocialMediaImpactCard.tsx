interface SocialMediaImpactCardProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function SocialMediaImpactCard({ title, description, subtitle }: SocialMediaImpactCardProps) {
  return (
    <div className="w-[288px] h-[198px] p-[32px] rounded-[12px] text-center bg-white border border-[#E5E5E5]">
      <div className="w-[222px] h-[48px]">
        <span className="w-[162.34px] h-[48px] font-black text-[30px] leading-[36px] text-[#8B4513]">
          {title}
        </span>
      </div>
      <div className="w-[222px] h-[28px]">
        <span className="w-[194.33px] h-[28px] font-bold text-[15px] leading-[28px] text-[#221610]">{subtitle}</span>
      </div>
      <div className="w-[222px] h-[40px]">
        <span className="w-[201.52px] h-[40px] font-normal text-[12px] leading-[15px] text-[#737373]">{description}</span>
      </div>
    </div>
  )
}
