import React from "react";

export default function ReadyToClimb() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] px-[160px] py-[80px]">
        <div className="w-[960px] mx-auto flex flex-col items-center text-center gap-[48px] rounded-[48px] bg-[#7B6B5A]/5 border border-[#7B6B5A]/20 py-[80px] px-[60px]">
          <div className="max-w-[798px]">
            <h2 className="text-[60px] font-extrabold text-[#4A3B2A] leading-tight">
              Ready to climb the rankings?
            </h2>
          </div>

          <div className="max-w-[672px]">
            <p className="text-[20px] text-[#7B6B5A] leading-relaxed">
              Stop leaving money on the table. Join the elite hotels that own
              their search traffic.
            </p>
          </div>

          <button className="px-[40px] py-[18px] rounded-[16px] bg-[#4A3B2A] text-white text-[18px] font-bold hover:scale-105 transition">
            Request Your SEO Strategy
          </button>

          <p className="text-[14px] text-[#8F7E6D]">
            No obligation. 100% free technical audit included.
          </p>
        </div>
      </div>
    </section>
  );
}