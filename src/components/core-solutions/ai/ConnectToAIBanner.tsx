import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";

export default function ConnectToAIBanner() {
  return (
    <div className="w-[1220px] flex items-center gap-12 mt-12 mb-6">
      <div className="w-[536px] flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#8B4513]/10">
            <span className="text-[12px] leading-[16px] text-[#8B4513] font-extralight">
              THE FUTURE OF HOSPITALITY
            </span>
          </div>

          <h1 className="text-[60px] font-extralight leading-[1.1]">
            <span className="text-[#0F172A]">
              Connect Your {" "}
            </span>
            <span className="text-[#0F172A]">Hotel to the</span>{" "}
            <span className="text-[#8B4513] font-bold">Future of AI</span>
          </h1>
        </div>

        <p className="text-[18px] leading-[29px] text-[#475569] font-extralight">
          Enhance guest satisfaction with 24/7 automated support, smart AI replies, and deep performance insights that drive revenue.
        </p>

        <div className="w-[536px] h-[56px] flex gap-[12px]">
          <div className="w-[332.06px] h-full">
            <div className="w-full h-full pr-[16px] pl-[16px] rounded-[12px] bg-white border border-[#8B4513] flex justify-evenly items-center">
              <div className="w-[28px] h-[16px] pr-[8px]">
                <Mail className="w-[20px] h-[16px] text-[#94A3B8]" />
              </div>
              <input
                type="text"
                className="w-[270.06px] h-[40px] pt-[9px] pb-[9px] pr-[12px] pl-[12px] text-[#94A3B8] outline-0"
                placeholder="Enter your work email"
              />
            </div>
          </div>
          <button className="cursor-pointer flex justify-center items-center text-center w-[191.94px] h-[56px] pr-[32px] pl-[32px] rounded-[12px] bg-[#8B4513]">
            <span className="w-[127.94px] h-[28px] font-extralight text-white leading-[28px] text-[18px]">
              Free Demo
            </span>
          </button>
        </div>
        <div className="w-[536px] h-[32px] flex gap-[16px]">
          <div className="flex -space-x-4">
            <div className="w-8 h-8 rounded-full bg-black border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-[#648bc1] border-2 border-white"></div>
            <div className="w-8 h-8 rounded-full bg-[#94A3B8] border-2 border-white"></div>
          </div>
          <div className="w-[290.27px] h-[20px]">
            <span className="w-full h-full font-extralight text-[14px] leading-[20px] text-[#64748B]">
              Joined by 500+ luxury hotels worldwide
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-[636px] h-[502px]">
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[80%] h-[60px] bg-black/60 blur-2xl rounded-full"></div>

        <div className="flex items-center pl-2 absolute bottom-22 left-30 w-[236px] h-[90px] bg-[#FFFFFF]/90 rounded-lg shadow-lg z-1 flex gap-[10px]">
          <div className="w-[36px] h-[36px] p-[8px] rounded-[9999px] bg-[#8B4513]/10 flex justify-center items-center">
            <Sparkles className="w-[20px] h-[20px] text-[#8B4513]" />
          </div>
          <div className="w-[157.39px] h-[40px] gap-[2px] flex flex-col">
            <div className="w-[157.39px] h-[16px]">
              <span className="w-[77.23px] h-[16px] font-extralight text-[12px] leading-[16px] text-[#64748B]">
                RESPONSE RATE
              </span>
            </div>
            <div className="w-[157.39px] h-[24px]">
              <span className="w-full h-full leading-[24px] font-medium text-[#0F172A] text-[13px]">
                99.8%
              </span>
            </div>
          </div>
        </div>
        
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <Image
            src="/future-ai-banner.png"
            alt="Banner"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  )
}
