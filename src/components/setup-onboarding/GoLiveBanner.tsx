import { Gauge } from "lucide-react";
import Image from "next/image";

export default function GoLiveBanner() {
  return (
    <section className="w-full flex justify-center py-25">
      <div className="w-[1280px] flex items-center justify-evenly px-40 gap-20">
        {/* LEFT CONTENT */}
        <div className="max-w-146 flex flex-col gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B4513]/10 w-fit">
            <Gauge className="w-4 h-4 text-[#8B4513]" />
            <span className="text-sm font-medium text-[#8B4513]">
              ACCELERATED DEPLOYMENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[56px] font-extrabold leading-[1.05]">
            <span className="text-[#0F172A] block">Go Live in Days,</span>
            <span className="text-[#8B4513] block">Not Months.</span>
          </h2>

          {/* Description */}
          <p className="text-[18px] text-[#475569] leading-relaxed max-w-[560px]">
            Professional setup of your booking engine and PMS with expert-led
            staff training. Get your hotel operational without the technical
            headaches.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <button className="px-8 py-4 rounded-[16px] bg-[#8B4513] text-white font-bold text-[15px]">
              Start Your Fast-Track Today
            </button>

            <button className="px-8 py-4 rounded-[16px] border border-[#E2E8F0] bg-white text-[#0F172A] font-bold text-[15px]">
              View Pricing
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-115 h-65 relative rounded-2xl overflow-hidden">
          <Image
            src="/GoLiveBanner.png"
            alt="PMS Banner"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}