import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function ApartmentsBanner() {
  return (
    <section className="w-full flex justify-center items-center mb-12">
      <div className="w-[1280px] h-[522px]">
        <div className="w-full h-[656px] pr-[160px] pl-[160px] pt-[80px] pb-[80px] flex justify-center items-center">
          <div className="w-[960px] h-[496px] flex justify-between gap-[40px]">
            <div className="w-[460px] h-[496px] flex flex-col gap-[32px]">
              <div className="w-full h-[344px] flex flex-col gap-[16px]">
                <div className="w-full h-[20px]">
                  <span className="w-full h-full font-bold text-[14px] leading-[20px] text-[#8B4513]">
                    SMART RENTAL MANAGEMENT
                  </span>
                </div>
                <div className="w-full h-[180px] leading-12.5">
                  <span className="w-full h-full font-extrabold text-[50px]">
                    <span className="text-[#0F172A]">Maximize Your</span>{" "}
                    <span className="text-[#8B4513]">Short-Term</span>{" "}
                    <span className="text-[#0F172A]">Rental Revenue</span>
                  </span>
                </div>
                <div className="w-full h-[112px]">
                  <span className="text-[20px] leading-[28px] font-normal text-[#475569]">
                    Streamline your apartment and Airbnb management with the
                    ultimate automated PMS designed for modern hosts. Sync
                    platforms, automate messages, and grow your business.
                  </span>
                </div>
                <div className="w-full h-[56px] flex gap-[16px]">
                  <button className="w-[161.72px] h-[56px] pr-[24px] pl-[24px] rounded-[8px] bg-[#8B4513]">
                    <span className="w-[113.72px] h-[24px] font-bold text-[14px] text-white leading-[24px]">
                      Start Free Trial
                    </span>
                  </button>
                  <button className="w-[160px] h-full pr-[36.73px] pl-[36.73px] rounded-[8px] bg-[#8B4513]/10 border border-[#8B4513]/20">
                    <span className="w-[84.52px] h-[24px] font-bold text-[14px] leading-[24px] text-[#8B4513]">
                      View Demo
                    </span>
                  </button>
                </div>
                <div className="w-full h-[32px] flex items-center gap-[16px]">
                  <div className="w-[80px] h-[32px] flex">
                    <div className="w-[32px] h-[32px] rounded-[9999px] bg-[#E2E8F0] border-2 border-[#FDFAF7]"></div>
                    <div className="w-[32px] h-[32px] -ml-2">
                      <div className="w-full h-full rounded-[9999px] bg-[#CBD5E1] border-2 border-[#FDFAF7]"></div>
                    </div>
                    <div className="w-[32px] h-[32px] -ml-2">
                      <div className="w-full h-full rounded-[9999px] bg-[#94A3B8] border-2 border-[#FDFAF7]"></div>
                    </div>
                  </div>
                  <div className="w-[282.28px] h-[20px] ml-3">
                    <span className="font-normal text-[14px] leading-[20px] text-[#64748B]">
                      Joined by 2,000+ top-rated hosts worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[480px] h-[475px] rounded-[20px] overflow-hidden">
              <Image
                src={"/apartments-banner.png"}
                alt="Apartments & BnB Banner"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-2 left-2 bg-white border border-green-500 text-green-400 px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                <TrendingUp className="w-7 h-7 bg-green-200 rounded-full p-2 text-green-600" />
                <span className="font-bold text-[14px] leading-[20px]">
                  Revenue Growth <br /> +32% Average
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
