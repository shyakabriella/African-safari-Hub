import { Globe, ShieldCheck, Zap } from "lucide-react";
import ZeroErrorCard from "./ZeroErrorCard";

export default function ZeroError() {
  return (
    <div className="w-[1280px] h-[568.13px] pr-[40px] pl-[40px] pt-[50px] mt-15 mb-15 pb-[80px] bg-[#8B4513]/5">
      <div className="w-full h-[408.13] flex flex-col gap-[48px] pl-[24px] pr-[24px]">
        <div className="w-[800px] h-[114.13px] flex flex-col gap-[15.13px]">
          <div className="w-full h-[40px]">
            <span className="w-full h-full font-extrabold leading-[40px] text-[36px] text-[#0F172A]">
              Engineered for Zero Errors
            </span>
          </div>
          <div className="w-full h-[59px]">
            <span className="w-full h-full text-[#475569] leading-[29.3px] text-[18px] font-normal">
              Our &apos;Sync&apos; engine is designed to handle the heavy lifting of inventory management. Every time a room is booked, we update all your other channels before the next traveler can even click &apos;Book&apos;.
            </span>
          </div>
        </div>
      
        <div className="w-[1152px] h-[246px] flex gap-[40px]">
          <ZeroErrorCard
            icon={<Zap />}
            title="Instant Updates"
            description="Updates are pushed to Booking.com, Expedia, and Airbnb simultaneously the moment a change occurs."
          />
          <ZeroErrorCard
            icon={<ShieldCheck />}
            title="Reputation Guard"
            description="Avoid the penalties and ranking drops associated with guest cancellations due to double bookings."
          />
          <ZeroErrorCard
            icon={<Globe />}
            title="Global Inventory"
            description="Manage rates for different markets and currencies from one central cloud-based dashboard."
          />
        </div>
      </div>
    </div>
  )
}
