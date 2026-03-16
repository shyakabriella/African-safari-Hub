import Image from "next/image";

export default function SyncRatingBanner() {
  return (
    <div className="w-[1120px] h-[416px] flex gap-[20%] mt-15 mb-10">
      <div className="w-[579px] h-[416px] flex flex-col gap-[32px]">
        <div className="w-[536px] h-[320px] flex flex-col gap-[16px]">
          <div className="w-[250.45px] h-[24px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10 flex items-center justify-center">
            <span className="font-bold text-[10px] leading-[17px] text-[#8B4513] whitespace-nowrap">
              REAL-TIME CHANNEL MANAGER
            </span>
          </div>

          <div className="w-[536px] h-[180px]">
            <span className="w-full h-full font-extrabold text-[55px] leading-[48px]">
              <span className="text-[#0F172A]">Sync Rates &</span>{" "}
              <span className="text-[#0F172A]">Availability to</span> <br />
              <span className="text-[#8B4513]">Stop Overthinkings</span>
            </span>
          </div>

          <div className="w-full h-[84px]">
            <span className="text-[20px] leading-[28px] font-normal text-[#475569]">
              Professional-grade synchronization across 400+ booking channels. Eliminate manual entry errors and protect your hotel&apos;s reputation instantly.
            </span>
          </div>
        </div>

        <div className="w-full h-[64px] flex gap-[16px]">
          <button className="cursor-pointer w-[264.67px] h-[64px] pr-[32px] pl-[32px] pt-[18px] pb-[18px] rounded-[12px] bg-[#8B4513]">
            <span className="w-[120px] h-[28px] font-bold text-[16px] text-white leading-[28px]">
              Start 14-Day Free Trial
            </span>
          </button>
          <button className="cursor-pointer w-[199.2px] h-[64px] pr-[32px] pl-[32px] pt-[16px] pb-[16px] rounded-[12px] border border-[#8B4513]/20">
            <span className="w-[88px] h-[28px] font-bold text-[16px] leading-[28px] text-[#8B4513]">
              Watch Demo
            </span>
          </button>
        </div>
      </div>

      <div className="relative w-[636px] h-[401.5px] rounded-[20px] overflow-hidden">
        <Image
          src={"/sync-rating-banner.png"}
          alt="Guest House Banner"
          fill
          className="object-cover rounded-[20px]"
        />
      </div>
    </div>
  );
}
