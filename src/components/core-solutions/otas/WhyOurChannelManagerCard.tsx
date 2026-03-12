interface WhyOurChannelManagerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyOurChannelManagerCard({ icon, title, description }: WhyOurChannelManagerCardProps) {
  return (
    <div className="w-[352px] h-[287px] flex flex-col gap-[24px] p-[32px] rounded-[16px] bg-white border border-[#8B4513]">
      <div className="w-[56px] h-[56px] rounded-[12px] bg-[#8B4513]/10 flex justify-center items-center">
        <div className="w-[25px] h-[15px]">
          <span className="w-full h-full text-[#8B4513] flex justify-center items-center">{icon}</span>
        </div>
      </div>
      <div className="w-[286px] h-[141px] flex flex-col gap-[12px]">
        <div className="w-full h-[25px]">
          <span className="w-full h-full font-bold text-[20px] leading-[25px] text-[#0F172A]">
            {title}
          </span>
        </div>
        <div className="w-full h-[104px]">
          <span className="w-full h-full font-normal text-[16px] leading-[26px] text-[#475569]">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}
