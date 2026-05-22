import React from "react";

export default function FinalCTA() {
  return (
    <section className="w-full flex justify-center items-center mt-10 mb-10">
      <div
        className="w-[960px] h-[374px] gap-[24px] rounded-[24px] bg-gradient-to-b from-white to-[#F8FAFC] border border-[#E2E8F0] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 flex flex-col justify-center items-center text-center"
      >
        <div className="w-[862px] h-[36px]">
          <span className="w-[588.13px] h-[36px] text-[25px] font-extrabold leading-[36px] text-[#8B4513]">
            Ready to level up your team&apos;s expertise?
          </span>
        </div>
        <div className="w-[672px] h-[56px]">
          <span className="w-[662.67px] h-full font-normal text-[#475569] text-[13px] leading-[28px]">
            Join hundreds of successful hotels that have optimized their
            operations with our world-class PMS training and support.
          </span>
        </div>
        <div className="w-[862px] h-[84px] flex items-center justify-center gap-4 pt-[16px]">
          <a href="/contact" target="_blank" className="cursor-pointer w-[204.48px] h-[60px] pt-[20px] pb-[20px] pr-[40px] pl-[40px] rounded-[10px] bg-[#8B4513] shadow-md shadow-black/50">
            <span className="w-[174.48px] h-[28px] text-[12px] font-bold text-[#ffffff]/90">
              Get Started Today
            </span>
          </a>
          <a href="/contact" target="_blank" className="cursor-pointer w-[208.91px] h-[60px] pt-[20px] pb-[20px] pr-[40px] pl-[40px] rounded-[10px] bg-[#F1F5F9]">
            <span className="w-[158.91px] h-[28px] font-bold text-[12px] leading-[28px] text-[#0F172A]">
              Talk to an Expert
            </span>
          </a>
        </div>

        <div className="w-[862px] h-[28px] pt-[8px]">
          <span className="w-[256.86px] h-[20px] text-[14px] leading-[20px] font-normal text-[#64748B]">
            Free initial consultation. No hidden fees.
          </span>
        </div>
      </div>
    </section>
  );
}
