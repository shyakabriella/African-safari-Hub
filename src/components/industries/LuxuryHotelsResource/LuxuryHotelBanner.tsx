import Image from "next/image";

export default function LuxuryHotelBanner() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full h-full">
        <div className="relative w-full h-[500px]">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/luxury-banner.png"
              alt="Luxury Banner"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div
            className="absolute top-1/2 left-[38%] -translate-x-1/2 -translate-y-1/2 
            w-[1280px] px-[80px] ml-25 flex flex-col gap-[32px]"
          >
            <div className="w-[768px]">
              <span className="font-extrabold text-[27px]">
                <span className="text-white">Elevate Every Guest</span>{" "}
                <span className="text-[#8B4513]/90">&rsquo;Journey&rsquo;</span>{" "}
                <span className="text-white">to Excellence</span>
              </span>
            </div>

            <div className="w-[672px]">
              <span className="text-[#E2E8F0] leading-5 font-light text-[15px]">
                Redefining 5-star standards with enterprise-grade management for
                the world&apos;s most prestigious resorts. Experience
                operational harmony through bespoke luxury technology.
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <a
                href="/pricing/monthly-plans"
                target="_blank"
                className="w-[230px] h-[44px] flex items-center justify-center rounded-[10px] bg-[#8B4513] text-white font-semibold text-[12px] tracking-wide hover:bg-[#6B3410] transition"
              >
                Experience the Future
              </a>

              <a
                href="/contact"
                target="_blank"
                className="w-[130px] h-[44px] flex items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-[12px] hover:bg-white/15 transition"
              >
                Speak With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
