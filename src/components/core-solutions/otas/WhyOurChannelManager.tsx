import { RefreshCw, ShieldCheck, TrendingUp } from "lucide-react";
import WhyOurChannelManagerCard from "./WhyOurChannelManagerCard";

export default function WhyOurChannelManager() {
  return (
    <div className="w-[1120px] h-[567px] flex flex-col pb-[34px] gap-[40px] justify-center items-center text-center">
      <div className="w-[1120px] h-[112px] flex flex-col gap-[20px] justify-center items-center">
        <span className="w-[654.88px] h-[40px] font-extrabold text-[#0F172A] text-[36px] leading-[40px]">
          Why Choose Our Channel Manager?
        </span>
        <div className="w-[720px] h-[56px] pl-[11.8px] pr-[11.81px]">
          <span className="w-[696.39px] h-full font-normal text-[18px] leading-[28px] text-[#475569]">
            Simplify your operations and maximize your revenue with automated sync across the world&apos;s leading platforms.
          </span>
        </div>
      </div>

      <div className="w-[1120px] h-[287px] flex justify-between gap-[32px]">
        <WhyOurChannelManagerCard
          title="Increased Occupancy"
          icon={<TrendingUp />}
          description="List on 450+ channels to ensure your rooms are always visible to potential guests, filling vacancies faster than ever."
        />
        <WhyOurChannelManagerCard
          title="Instant Sync"
          icon={<RefreshCw />}
          description="Updates prices and availability across all platforms in real-time. When a booking is made, all other sites update instantly."
        />
        <WhyOurChannelManagerCard
          title="No Overbookings"
          icon={<ShieldCheck />}
          description="Our smart sync engine prevents double bookings automatically, giving you peace of mind and protecting your reputation."
        />
      </div>
    </div>
  )
}
