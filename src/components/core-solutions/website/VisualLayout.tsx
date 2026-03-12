import Image from "next/image";
import VisualLayoutCard from "./VisualLayoutCard";

export default function VisualLayout() {
  return (
    <div className="w-[1280px] h-[566px] mb-10 pt-[96px] pb-[96px] pr-[80px] pl-[80px] bg-[#FDFAF7]">
      <div className="w-[1120px] h-[374px] flex gap-[64px]">
        <div className="w-[528px] h-[374px] flex flex-col gap-[32px]">
          <div className="w-[528px] h-[90px]">
            <span className="w-full h-full font-normal text-[#0F172A] text-[36px] leading-[45px]">
              Take back control of your <br /> guest relationships
            </span>
          </div>

          <div className="w-[528px] h-[252px] flex flex-col gap-[30px]">
            <VisualLayoutCard
              title="Zero Commissions"
              description="Keep the 15-20% you'd usually pay to Expedia or Booking.com."
            />
            <VisualLayoutCard
              title="Direct Guest Communication"
              description="Own your guest data from day one. Build loyalty with post-stay marketing."
            />
            <VisualLayoutCard
              title="Loyalty & Upselling"
              description="Offer add-ons like breakfast, late check-out, or spa treatments directly during checkout."
            />
          </div>
        </div>

        <div className="w-[528px] h-[341.33px]">
          <div className="w-full h-full flex">
            <Image
              src="/visual-bed.png"
              alt="Bed"
              width={256}
              height={341}
              className="w-1/2 h-full object-cover mt-10"
            />

            <Image
              src="/visual-phone.png"
              alt="Phone"
              width={256}
              height={341}
              className="w-1/2 h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
