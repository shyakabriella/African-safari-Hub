import Image from "next/image";
import DriverBookingsCard from "./DriverBookingsCard";

export default function DriveBookings() {
  return (
    <div className="w-full min-h-screen bg-[#0F172A] px-20 py-24">
      <div className="max-w-[1120px] mx-auto flex items-center flex-col lg:flex-row gap-20">

        <div className="flex-1 flex flex-col gap-10">

          <div className="flex flex-col gap-4">
            <span className="font-bold text-sm text-[#8B4513]">
              DEMAND GENERATION
            </span>
            <h1 className="text-5xl font-extrabold leading-tight text-white">
              Don&apos;t just manage rooms, <span className="text-[#8B4513]">drive bookings.</span>
            </h1>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              Most PMS tools are just filing cabinets. We are an engine. Our integrated marketing suite connects your property data directly to Google, Meta, and Review platforms.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <DriverBookingsCard
              title="Automated Local SEO"
              description="Update listings across 50+ directories in one click."
            />
            <DriverBookingsCard
              title="Smart Ad Spend"
              description="AI-driven bidding to ensure your ads only show when you have vacancy."
            />
            <DriverBookingsCard
              title="Reputation Shield"
              description="Manage reviews from Google, Booking.com, and Expedia in a single inbox."
            />
          </div>

          <button className="cursor-pointer w-[320px] h-14 bg-[#8B4513] text-white font-bold text-lg mt-4 rounded-md">
            See Marketing Tools In Action
          </button>
        </div>

        <div className="flex-1 flex justify-center items-start">
          <div className="w-full max-w-[520px] p-4 rounded-2xl border border-[#334155] relative">
            <div className="absolute z-10 bottom-10 left-10 w-[438px] h-[94px] flex flex-col gap-[8px] p-[16px] rounded-[12px] bg-[#FFFFFF]/10 border border-[#FFFFFF]/10">
              <div className="w-[404px] h-[20px] flex justify-between">
                <div className="w-[134.69px] h-[16px]">
                  <span className="w-full h-full text-[12px] font-bold text-[#8B4513] leading-[16px]">
                    LIVE PERFORMANCE
                  </span>
                </div>
                <div className="w-[53.14px] h-[20px] bg-[#10B981]/20 mt-2 rounded-[9999px] flex justify-center items-center">
                  <span className="w-[37.14px] h-[16px] font-bold text-[12px] leading-[16px] text-[#34D399] flex justify-center items-center">
                    Active
                  </span>
                </div>
              </div>
              <div className="w-[404px] h-[32px]">
                <span className="text-white font-extrabold w-full h-full text-[24px] leading-[32px]">
                  +240% Engagement
                </span>
              </div>
            </div>
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/drive-booking-image.png"
                alt="drive booking image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}