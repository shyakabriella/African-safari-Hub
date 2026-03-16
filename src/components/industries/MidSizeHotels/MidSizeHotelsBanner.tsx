import Image from "next/image";

export default function MidSizeHotelsBanner() {
  return (
    <section className="w-full flex justify-center items-center mb-12 mt-20">
      <div className="w-[1120px] h-[416px] flex gap-[48px]">
        <div className="w-[536px] h-[416px] flex flex-col gap-[32px]">
          <div className="w-[536px] h-[320px] flex flex-col gap-[16px]">
            <div className="w-[203.45px] h-[24px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10">
              <span className="w-[179.45px] h-[16px] flex justify-center items-center font-bold text-[12px] leading-[17px] text-[#8B4513]">
                HOSPITALITY EXCELLENCE
              </span>
            </div>

            <div className="w-[536px] h-[180px]">
              <span className="w-full h-full font-extrabold text-[55px] leading-[48px]">
                <span className="text-[#0F172A]">The All-in-one</span>{" "}
                <span className="text-[#0F172A]">Growth Engine For</span>{" "}
                <span className="text-[#8B4513]">Mid-Size Hotels</span>
              </span>
            </div>

            <div className="w-full h-[84px]">
              <span className="text-[20px] leading-[28px] font-normal text-[#475569]">
                Empowering independent mid-size hotels to compete with industry
                giants, drastically reduce OTA fees, and maximize staff
                efficiency through intelligent automation.
              </span>
            </div>
          </div>

          <div className="w-full h-[64px] flex gap-[16px]">
            <button className="w-[234.67px] h-[64px] pr-[32px] pl-[32px] pt-[18px] pb-[18px] rounded-[12px] bg-[#8B4513]">
              <span className="w-[120px] h-[28px] font-bold text-[16px] text-white leading-[28px]">
                Start Your Free Trial
              </span>
            </button>
            <button className="w-[179.2px] h-[64px] pr-[32px] pl-[32px] pt-[16px] pb-[16px] rounded-[12px] border border-[#8B4513]/20">
              <span className="w-[88px] h-[28px] font-bold text-[16px] leading-[28px] text-[#8B4513]">
                Book a Demo
              </span>
            </button>
          </div>
        </div>

        <div className="relative w-[636px] h-[401.5px] rounded-[20px] overflow-hidden">
          <Image
            src={"/MidSizeHotelBanner.png"}
            alt="Mid Size Hotel Banner"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
