import { Search, Banknote, TrendingDown } from "lucide-react";

import InvisibleToGuestsCard from "./InvisibleToGuestsCard";

export default function InvisibleToGuests() {
  return (
    <section className="w-full flex justify-center items-center mb-8">
      <div className="w-[1280px] h-[614px] flex flex-col gap-[64px] pt-[76px] pb-[96px] pr-[160px] pl-[160px] bg-[#FFFFFF]">
        <div className="w-[896px] h-[84px] flex flex-col gap-[19px]">
          <div className="w-[896px] h-[40px]">
            <span className="w-[896px] h-[40px] font-extrabold text-[#0F172A] text-[36px]">
              Invisible to Your Guests?
            </span>
          </div>
          <div className="w-[896px] h-[28px]">
            <span className="w-[896px] h-[28px] font-normal text-[18px] text-[#475569]">
              Stop losing revenue to high-commission third-party platforms and
              invisible search rankings.
            </span>
          </div>
        </div>

        <div className="w-[960px] h-[274px] flex justify-between items-center gap-[32px]">
          <InvisibleToGuestsCard
            icon={<Search className="w-[30px] h-[28.5px] text-[#1152D4]" />}
            title="Buried on Page 10"
            description="If you aren't on the first page,
              you don't exist to 95% of
              travelers searching for their
              next stay."
            />
          <InvisibleToGuestsCard
            icon={<Banknote className="w-[30px] h-[28.5px] text-[#1152D4]" />}
            title="OTA Dependency"
            description="Paying 15-25% commissions to
              Booking.com and Expedia eats
              your margins every single night."
            />
            <InvisibleToGuestsCard
            icon={<TrendingDown className="w-[30px] h-[28.5px] text-[#1152D4]" />}
            title="Losing to Rivals"
            description="Your local competitors are
              capturing guests searching for
              hotels in your area right now."
            />
        </div>
      </div>
    </section>
  );
}
