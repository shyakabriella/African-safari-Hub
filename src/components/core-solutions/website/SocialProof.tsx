import { Globe, TrendingUp } from "lucide-react";
import SocialProofCard from "./SocialProofCard";

export default function SocialProof() {
  return (
    <div className="w-[1280px] h-[254px] mb-15 mt-3 pt-[48px] pb-[48px] pr-[80px] pl-[80px] bg-[#8B4513]/3">
      <div className="w-[1120px] h-[158px] flex justify-between gap-[32px]">
        <SocialProofCard
          header="AVG. COMISSION SAVINGS"
          title="20%"
          sideIconArrow={<TrendingUp />}
          sideTitle="15%"
          description="vs OTA standard rates"
        />
        <SocialProofCard
          header="BOOKING CONVERSION"
          title="35%"
          sideIconArrow={<TrendingUp />}
          sideTitle="22%"
          description="Increase in mobile bookings"
        />
        <SocialProofCard
          header="GLOBAL PAYOUTS"
          title="150+"
          sideIconArrow={<Globe />}
          description="Countries supported natively"
        />
      </div>
    </div>
  )
}
