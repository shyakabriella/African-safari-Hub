import React from "react";

export default function ReadyToClimb() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] px-[160px] py-[80px]">
        <div className="w-[960px] mx-auto flex flex-col items-center text-center gap-[20px] rounded-[48px] bg-[#7B6B5A]/5 border border-[#7B6B5A]/20 py-[80px] px-[60px]">
          <div className="max-w-[798px]">
            <h2 className="text-[30px] font-extrabold text-[#4A3B2A] leading-tight">
              Ready to climb the rankings?
            </h2>
          </div>

          <div className="max-w-[672px]">
            <p className="text-[14px] text-[#7B6B5A] leading-relaxed">
              Stop leaving money on the table. Join the elite hotels that own
              their search traffic.
            </p>
          </div>

          <a href="/contact" target="_blank" className="px-[20px] mt-9 py-[10px] rounded-[12px] cursor-pointer bg-[#4A3B2A] text-white text-[10px] font-bold hover:scale-105 transition">
            Request Your SEO Strategy
          </a>

          <p className="text-[12px] text-[#8F7E6D]">
            No obligation. 100% free technical audit included.
          </p>
        </div>
      </div>
    </section>
  );
}