import { Gauge } from "lucide-react";
import Image from "next/image";

export default function GoLiveBanner() {
  return (
    <section className="w-full flex justify-center py-18">
      <div className="w-[1280px] flex items-center justify-between px-16 gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 max-w-[640px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B4513]/10 w-fit">
            <Gauge className="w-4 h-4 text-[#8B4513]" />
            <span className="font-medium text-[10px] text-[#8B4513]">
              ACCELERATED DEPLOYMENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[40px] font-extrabold leading-[1.05] mt-3">
            <span className="text-[#0F172A] block">Go Live in Days,</span>
            <span className="text-[#8B4513] block">Not Months.</span>
          </h2>

          {/* Description */}
          <p className="text-[13px] text-[#475569] leading-relaxed max-w-[640px]">
            Professional setup of your booking engine and PMS with expert-led
            staff training. Get your hotel operational without the technical
            headaches.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 pt-4">
            <a href="/contact" target="_blank" className="px-6 py-3 rounded-[16px] bg-[#8B4513] text-white font-semibold cursor-pointer text-[13px]">
              Start Your Fast-Track Today
            </a>

            <a href="/pricing/monthly-plans" target="_blank" className="px-6 py-3 rounded-[16px] border border-[#E2E8F0] bg-white text-[#0F172A] font-semibold cursor-pointer text-[13px]">
              View Pricing
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[640px] h-[400px] relative rounded-2xl overflow-hidden">
          <Image
            src="/GoLiveBanner.png"
            alt="PMS Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}