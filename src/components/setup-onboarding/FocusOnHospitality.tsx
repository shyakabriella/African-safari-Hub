import { CheckCircle, Smile, TrendingUp } from "lucide-react";
import FocusOnHospitalityCard from "./FocusOnHospitalityCard";

export default function FocusOnHospitality() {
  return (
    <section className="w-full flex justify-center items-center py-25 bg-[#F6F6F8]/20">
      <div className="w-[1280px] flex flex-col justify-center items-center text-center gap-32 px-16 bg-[#ffffff3d]">
        {/* Header */}
        <div className="w-[768px] h-[56px]">
          <span className="w-full h-full font-extrabold text-[48px] leading-[52px] text-[#0F172A]">
            Focus on Hospitality, We&apos;ll Handle the Rest
          </span>
        </div>

        {/* Cards */}
        <div className="w-[1216px] h-[230px] flex justify-between items-center gap-12">
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
  );
}