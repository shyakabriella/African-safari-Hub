import { Gauge } from "lucide-react";
import Image from "next/image";

export default function GoLiveBanner() {
  return (
    <section className="w-full flex justify-center py-32">
      <div className="w-[1280px] flex items-center justify-between px-16 gap-16">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8 max-w-[640px]">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#8B4513]/10 w-fit">
            <Gauge className="w-5 h-5 text-[#8B4513]" />
            <span className="text-base font-medium text-[#8B4513]">
              ACCELERATED DEPLOYMENT
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[64px] font-extrabold leading-[1.05]">
            <span className="text-[#0F172A] block">Go Live in Days,</span>
            <span className="text-[#8B4513] block">Not Months.</span>
          </h2>

          {/* Description */}
          <p className="text-[20px] text-[#475569] leading-relaxed max-w-[640px]">
            Professional setup of your booking engine and PMS with expert-led
            staff training. Get your hotel operational without the technical
            headaches.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 pt-4">
            <button className="px-10 py-5 rounded-[16px] bg-[#8B4513] text-white font-bold text-[16px]">
              Start Your Fast-Track Today
            </button>

            <button className="px-10 py-5 rounded-[16px] border border-[#E2E8F0] bg-white text-[#0F172A] font-bold text-[16px]">
              View Pricing
            </button>
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