import { CalendarX, Percent, TrendingUp } from "lucide-react";
import BenefitsCard from "./BenefitsCard";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="w-full mt-10 flex justify-center items-center">
      
      <div className="relative flex w-[90%] max-w-6xl justify-center items-center rounded-[28px] bg-[#8B4513] overflow-hidden px-6 py-10">
        
        {/* Background Circle */}
        <div className="bg-[#F5E6D3]/20 w-[180px] h-[180px] absolute -top-16 -right-16 rounded-full"></div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 relative z-10">
          
          {/* Left Content */}
          <div className="max-w-[480px]">
            
            {/* Heading */}
            <div className="mb-8">
              <span className="text-[#F5E6D3] text-[20px] leading-tight font-extrabold tracking-tight">
                Why Hoteliers Love HotelWebPro Payments
              </span>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-5">
              
              <BenefitsCard
                icon={<TrendingUp className="text-[#8B4513] w-4 h-4" />}
                title="Faster Cash Flow"
                description="Funds are deposited into your account within 24-48 hours."
              />

              <BenefitsCard
                icon={<CalendarX className="text-[#8B4513] w-4 h-4" />}
                title="Reduced No-shows"
                description="Secure pre-payments to protect your booking revenue."
              />

              <BenefitsCard
                icon={<Percent className="text-[#8B4513] w-4 h-4" />}
                title="Lower Transaction Fees"
                description="Industry-specialized rates help you keep more revenue."
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-[380px] h-[380px] rounded-2xl overflow-hidden">
            
            <Image
              src={"/successfulManagement-pic.png"}
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