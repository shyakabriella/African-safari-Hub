import React from "react";

export default function SocialMediaReadyToGoViral() {
  return (
    <div className="w-full flex justify-center pb-[40px]">
      
      <div className="w-[960px] flex flex-col items-center text-center gap-[24px] py-[64px] px-[16px] rounded-[16px] bg-[#8B4513]">
        
        {/* Text */}
        <div className="flex flex-col gap-[12px] max-w-[700px]">
          <h2 className="font-bold text-[28px] leading-[34px] text-white">
            Ready to go viral?
          </h2>

          <p className="font-normal text-[14px] leading-[22px] text-white/80">
            Talk to our social experts today and discover how we can transform
            your digital footprint into a revenue stream.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-[12px]">
          
          <button className="cursor-pointer px-6 py-3 rounded-[12px] bg-white text-[#8B4513] font-semibold">
            Book a Free Consultation
          </button>

          <button className="cursor-pointer px-6 py-3 rounded-[12px] border border-white text-white font-semibold">
            View Our Portfolio
          </button>

        </div>

      </div>
    </div>
  );
}