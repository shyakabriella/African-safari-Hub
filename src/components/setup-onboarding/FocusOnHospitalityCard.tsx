interface FocusOnHospitalityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FocusOnHospitalityCard({ icon, title, description }: FocusOnHospitalityCardProps) {
  return (
    <div className="w-[298.66px] h-[286px] rounded-[16px] bg-[#FFFFFF] border border-[#E2E8F0] flex flex-col justify-center items-center text-center">
      <div className="w-[56px] h-[50px] pt-[10px] pb-[10px] rounded-[9999px] bg-[#8B4513] text-white flex justify-center items-center">{icon}</div>

      <div className="w-[232.66px] h-[28px] mt-7">
        <span className="w-[191.17px] h-[28px] font-bold text-[20px] leading-[28px] text-[#0F172A]">{title}</span>
      </div>

      <div className="w-[232.66px] h-[96px] mt-5">
        <span className="w-[218.78px] h-full font-normal text-[16px] leading-[24px] text-[#475569]">
          {description}
        </span>
      </div>
    </div>
  )
}
