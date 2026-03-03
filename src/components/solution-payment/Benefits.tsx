import { CalendarX, Percent, TrendingUp } from "lucide-react";
import BenefitsCard from "./BenefitsCard";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="w-full mt-6 flex justify-center items-center">
      <div className="relative flex w-[80%] justify-center items-center h-[640px] rounded-[32px] bg-[#8B4513]">
        <div className="bg-[#F5E6D3]/30 w-[256px] h-[256px] absolute -top-30 -right-30 rounded-[9999px]"></div>

        <div className="w-[1150px] h-[512px] flex justify-center gap-[30px]">
          <div className="w-[520px] h-[388px] flex flex-col gap-[20px]">
            <div className="w-[520px] h-[80px]">
              <span className="text-[#F5E6D3] text-[36px] font-extrabold">
                Why Hoteliers Love HotelWebPro Payments
              </span>
            </div>
            <div className="w-[520px] h-[276px] flex flex-col gap-[28px] mt-10">
              <BenefitsCard
                icon={<TrendingUp className="text-[#8B4513]" />}
                title="Faster Cash Flow"
                description="Funds are deposited into your account within 24-48 hours, improving your operational liquidity."
              />
              <BenefitsCard
                icon={<CalendarX className="text-[#8B4513]" />}
                title="Reduced No-shows"
                description="Secure pre-payments or credit card authorizations at the time of booking to protect your revenue."
              />
              <BenefitsCard
                icon={<Percent className="text-[#8B4513]" />}
                title="Lower Transaction Fees"
                description="Our industry-specialized rates ensure you keep more of your hard-earned revenue from every booking."
              />
            </div>
          </div>
          <div className="relative w-[520px] h-[512px] rounded-[16px] overflow-hidden">
            <Image
              src={'/successfulManagement-pic.png'}
              alt="Successful Management"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}