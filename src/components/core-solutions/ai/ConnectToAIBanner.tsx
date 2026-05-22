import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";

export default function ConnectToAIBanner() {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10 md:py-12 mt-10">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 max-w-6xl mx-auto">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          <div className="flex flex-col gap-3">

            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8B4513]/10 w-fit">
              <span className="text-[11px] text-[#8B4513] font-semibold tracking-wide">
                THE FUTURE OF HOSPITALITY
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#0F172A]">
                Connect Your Hotel to the{" "}
              </span>
              <span className="text-[#8B4513]">Future of AI</span>
            </h1>

          </div>

          <p className="text-sm md:text-base text-[#475569] leading-relaxed">
            Enhance guest satisfaction with 24/7 automated support, smart AI replies, and insights that drive revenue.
          </p>

          {/* INPUT */}
          <div className="flex flex-col sm:flex-row gap-2 w-full">

            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#8B4513]/20 focus-within:border-[#8B4513] transition">
              <Mail className="w-4 h-4 text-[#94A3B8]" />
              <input
                type="email"
                className="flex-1 py-1 text-sm outline-none text-[#0F172A] placeholder:text-[#94A3B8]"
                placeholder="Enter your work email"
              />
            </div>

            <button className="px-5 py-2.5 rounded-lg bg-[#8B4513] text-white text-sm font-semibold hover:bg-[#6B3410] transition whitespace-nowrap">
              Free Demo
            </button>

          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3">

            <div className="flex -space-x-2">
              <div className="w-7 h-7 rounded-full bg-gray-800 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-blue-700 border-2 border-white" />
              <div className="w-7 h-7 rounded-full bg-gray-400 border-2 border-white" />
            </div>

            <span className="text-xs text-[#64748B]">
              500+ luxury hotels joined
            </span>

          </div>

        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 relative">

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#8B4513]/10 to-transparent">

            {/* Replace with image */}
            <div className="w-full h-full flex items-center justify-center">

              <div className="text-center">
                <Sparkles className="w-12 h-12 text-[#8B4513]/40 mx-auto mb-3" />
                <p className="text-sm text-[#8B4513] font-medium">
                  AI Visualization
                </p>
              </div>

            </div>

            {/* FLOAT CARD */}
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-2 flex items-center gap-2">

              <div className="w-8 h-8 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#8B4513]" />
              </div>

              <div>
                <p className="text-[10px] text-[#64748B]">RESPONSE</p>
                <p className="text-sm font-bold text-[#0F172A]">99.8%</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}