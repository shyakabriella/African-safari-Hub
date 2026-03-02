import Image from "next/image";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <section className="w-full min-h-[602px] pt-[96px] pb-[96px]">
        
        <div className="h-[410px] pr-[40px] pl-[40px] flex flex-col gap-[64px]">
          <div className="h-[112px] flex flex-col justify-center items-center gap-[16px]">
            <div className="">
              <span className="text-[36px] font-extrabold text-[#0F172A]">Why Choose Us?</span>
            </div>
            <div className="h-[112px] text-center">
              <span className="font-normal text-[18px] text-[#475569]">
                We aren't just another tech company. We are hospitality experts focused on the <br />
                Local and International market.
              </span>
            </div>
          </div>

          <div className="w-full h-[234px] flex gap-[32px] justify-center mt-6">
            <WhyChooseUsCard
              icon={
                <Image
                  src={'/icons/globe.png'}
                  alt="globe"
                  width={30}
                  height={30}
                />
              }
              title="Local Market Expertise"
              description="Deep understanding of the Rwanda and
              East Africa hospitality landscape,
              including local payment trends."
            />
            <WhyChooseUsCard
              icon={
                <Image 
                  src={'/icons/protection.png'}
                  alt="protection"
                  width={24}
                  height={30}
                />
              }
              title="Enterprise Security"
              description="Bank-level encryption for all transactions
              and guest data protection compliant with
              global standards."           
            />
            <WhyChooseUsCard
              icon={
                <Image 
                  src={'/icons/support.png'}
                  alt="support"
                  width={30}
                  height={27}
                />
              }
              title="24/7 Local Support"
              description="Dedicated account managers available
              on-the-ground to help you optimize your
              digital strategy."
            />
          </div>
        </div>

    </section>
  )
}
