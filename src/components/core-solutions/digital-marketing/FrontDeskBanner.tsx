import { Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function FrontDeskBanner() {
  return (
    <div className="w-[1580px] h-[632px] flex items-center">
      <div className="w-full h-[656px] pl-[160px] pr-[80px] pt-[80px] flex justify-center items-center">
        <div className="w-full h-[496px] flex justify-between gap-[40px]">
          <div className="w-[460px] h-[496px] flex flex-col gap-[32px]">
            <div className="w-full h-[344px] flex flex-col gap-[16px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B4513]/10 rounded-md">
                <Sparkles className="w-4 h-4 text-[#8B4513]" />
                <span className="font-bold text-[14px] leading-[20px] text-[#8B4513]">
                  SMART RENTAL MANAGEMENT
                </span>
              </div>
              <div className="w-full h-[180px] leading-12.5">
                <span className="w-full h-full font-extrabold text-[50px]">
                  <span className="text-[#0F172A]">All-in-one Front</span>{" "}
                  <span className="text-[#0F172A]">Desk, Invoicing &</span>{" "}
                  <span className="text-[#8B4513]">Growth Suite</span>
                </span>
              </div>
              <div className="w-full h-[112px]">
                <span className="text-[20px] leading-[28px] font-normal text-[#475569]">
                  Master your daily operations with intuitive PMS tools while our integrated SEO, Ads, and Reputation engine drives consistent guest demand.
                </span>
              </div>
              <div className="w-full h-[56px] flex gap-[16px]">
                <button className="cursor-pointer w-[180.72px] h-[56px] pr-[24px] pl-[24px] rounded-[8px] bg-[#8B4513]">
                  <span className="w-[113.72px] h-[24px] font-bold text-[14px] text-white leading-[24px]">
                    Start Free Trial
                  </span>
                </button>
                <button className="cursor-pointer w-[180px] h-full pr-[36.73px] pl-[36.73px] rounded-[8px] bg-[#8B4513]/10 border border-[#8B4513]/20">
                  <span className="w-[84.52px] h-[24px] font-bold text-[14px] leading-[24px] text-[#8B4513]">
                    Book a Demo
                  </span>
                </button>
              </div>
              <div className="w-full h-[32px] flex items-center gap-[16px]">
                <div className="w-[80px] h-[32px] flex">
                  <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[9999px] bg-[#8B4513]/20 border-2 border-[#FDFAF7]"><span className="text-[10px] font-bold text-[#8B4513]">JD</span></div>
                  <div className="w-[32px] h-[32px] -ml-2">
                    <div className="w-full h-full flex justify-center items-center rounded-[9999px] bg-[#8B4513]/20 border-2 border-[#FDFAF7]"><span className="text-[10px] font-bold text-[#8B4513]">AM</span></div>
                  </div>
                  <div className="w-[32px] h-[32px] -ml-2">
                    <div className="w-full h-full flex justify-center items-center rounded-[9999px] bg-[#8B4513]/20 border-2 border-[#FDFAF7]"><span className="text-[10px] font-bold text-[#8B4513]">RK</span></div>
                  </div>
                </div>
                <div className="w-[282.28px] h-[20px] ml-3">
                  <span className="font-normal text-[12px] leading-[20px] text-[#64748B]">
                    Joined by 2,000+ top property managers this month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[780px] h-[475px]">
            <Image
              src={"/front-desk-banner.png"}
              alt="Front Desk Banner"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
