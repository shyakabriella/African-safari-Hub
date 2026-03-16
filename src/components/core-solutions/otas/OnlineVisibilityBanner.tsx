import Image from "next/image";

export default function OnlineVisibilityBanner() {
  return (
    <div className="w-[1120px] h-[416px] flex gap-[48px] mt-20 mb-10">
      <div className="w-[536px] flex flex-col gap-[32px]">
        <div className="w-[536px] flex flex-col gap-[20px]">
          <span className="font-bold text-[10px] leading-[17px] text-[#8B4513] whitespace-nowrap">
            GLOBAL REACH PLATFORM
          </span>

          <div className="w-[536px] mb-4">
            <span className="w-full h-full font-extrabold text-[55px] leading-[48px]">
              Online visibility on 450+ OTAs
            </span>
          </div>

          <div className="w-full">
            <span className="text-[20px] leading-[28px] font-normal text-[#475569]">
              Distribute your inventory globally on Booking.com, Expedia,
              Airbnb, and more. Reach more guests with zero effort through our
              seamless channel management.
            </span>
          </div>
        </div>

        <div className="w-full h-[64px] flex gap-[16px]">
          <button className="cursor-pointer w-[234.67px] h-[64px] pr-[32px] pl-[32px] pt-[18px] pb-[18px] rounded-[12px] bg-[#8B4513]">
            <span className="w-[120px] h-[28px] font-bold text-[16px] text-white leading-[28px]">
              Start Free Trial
            </span>
          </button>
          <button className="cursor-pointer w-[179.2px] h-[64px] pr-[32px] pl-[32px] pt-[16px] pb-[16px] rounded-[12px] border border-[#8B4513]/20">
            <span className="w-[88px] h-[28px] font-bold text-[16px] leading-[28px] text-[#8B4513]">
              View Channels
            </span>
          </button>
        </div>
      </div>

      <div className="relative w-[636px] h-[401.5px] rounded-[20px] overflow-hidden">
        <Image
          src={"/map.png"}
          alt="Guest House Banner"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
