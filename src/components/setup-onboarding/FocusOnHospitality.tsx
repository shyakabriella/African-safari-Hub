import { CheckCircle, Smile, TrendingUp } from "lucide-react";
import FocusOnHospitalityCard from "./FocusOnHospitalityCard";

export default function FocusOnHospitality() {
  return (
    <section className="w-full h-[550px] flex justify-center items-center bg-[#F6F6F8]/20">
      <div className="w-[1280px] flex flex-col justify-center items-center text-center gap-[64px] pb-[80px] pr-[160px] pl-[160px] bg-[#ffffff3d]">
        <div className="w-[896px] h-[40px]">
          <span className="w-[696.64] h-full font-bold text-[#0F172A] text-[36px] leading-[40px]">
            Focus on Hospitality, We&apos;ll Handle the Rest
          </span>
        </div>

        <div className="w-[960px] h-[286px] flex justify-between items-center gap-[32px]">
          <FocusOnHospitalityCard
            icon={<TrendingUp />}
            title="Start Earning Faster"
            description="Every day of delay is lost revenue. Our process gets you booking on all channels in record time."
          />
          <FocusOnHospitalityCard
            icon={<Smile />}
            title="Reduce Staff Turnover"
            description="Confident staff are happy staff. Proper training eliminates the stress of new system adaptation."
          />
          <FocusOnHospitalityCard
            icon={<CheckCircle />}
            title="Error-Free Operations"
            description="Avoid the nightmare of overbookings and lost reservations with professional technical oversight."
          />
        </div>
      </div>
    </section>
  )
}
