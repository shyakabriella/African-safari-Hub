import { Globe, Shield, Headset } from "lucide-react";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <section className="w-full min-h-[602px] pt-[96px] pb-[96px]">
      <div className="h-[410px] pr-[40px] pl-[40px] flex flex-col gap-[64px]">
        <div className="h-[112px] flex flex-col justify-center items-center gap-[16px]">
          <div className="">
            <span className="text-[36px] font-extrabold text-[#5C3317]">
              Why Choose Us?
            </span>
          </div>
          <div className="h-[112px] text-center">
            <span className="font-normal text-[18px] text-[#8B4513]/80">
              We aren&apos;t just another tech company. We are hospitality
              experts focused on the <br />
              Local and International market.
            </span>
          </div>
        </div>

        <div className="w-full h-[234px] flex gap-[32px] justify-center mt-6">
          <WhyChooseUsCard
            icon={<Globe className="w-7 h-7 text-[#8B4513]" />}
            title="Local Market Expertise"
            description="Deep understanding of the Rwanda and East Africa hospitality landscape, including local payment trends."
          />

          <WhyChooseUsCard
            icon={<Shield className="w-7 h-7 text-[#A0522D]" />}
            title="Enterprise Security"
            description="Bank-level encryption for all transactions and guest data protection compliant with global standards."
          />

          <WhyChooseUsCard
            icon={<Headset className="w-7 h-7 text-[#8B4513]/90" />}
            title="24/7 Local Support"
            description="Dedicated account managers available on-the-ground to help you optimize your digital strategy."
          />
        </div>
      </div>
    </section>
  );
}
