import { Bed, Calendar, RefreshCw } from "lucide-react";
import React from "react";

export default function OneClickIntegration() {
  return (
    <section className="w-full mt-12 flex justify-center items-center pb-10">
      
      <div className="w-full max-w-5xl flex flex-col gap-10 text-center px-4">
        
        {/* Heading */}
        <div className="flex flex-col gap-3">
          
          <div>
            <span className="font-extrabold text-[26px] text-[#0F172A] tracking-tight">
              One-Click Integration
            </span>
          </div>

          <div className="max-w-xl mx-auto">
            <span className="text-[#475569] text-[14px] leading-relaxed">
              Our payment gateway connects seamlessly with our
              Booking Engine and PMS.
            </span>
          </div>
        </div>

        {/* Integration Flow */}
        <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap">
          
          {/* Booking Engine */}
          <div className="flex justify-center items-center flex-col gap-3">
            
            <div className="w-14 h-14 rounded-full bg-[#F5E6D3] flex justify-center items-center">
              <Calendar className="w-5 h-5 text-[#8B4513]" />
            </div>

            <span className="text-[#8B4513]/70 text-[11px] font-bold">
              Booking Engine
            </span>
          </div>

          {/* Line */}
          <div className="w-14 h-[1px] bg-[#D9C5B3] hidden sm:block"></div>

          {/* Payments */}
          <div className="flex items-center flex-col gap-2">
            
            <div className="w-16 h-16 flex justify-center items-center rounded-[14px] bg-[#8B4513] shadow-md">
              <RefreshCw className="w-5 h-5 text-[#F5E6D3]" />
            </div>

            <span className="text-[11px] font-bold text-[#8B4513]">
              Payments
            </span>
          </div>

          {/* Line */}
          <div className="w-14 h-[1px] bg-[#D9C5B3] hidden sm:block"></div>

          {/* PMS */}
          <div className="flex flex-col items-center gap-3">
            
            <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#F5E6D3]">
              <Bed className="w-5 h-5 text-[#8B4513]" />
            </div>

            <span className="text-[#8B4513]/70 text-[11px] font-bold">
              PMS System
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}