import Image from "next/image";

export default function SuccessStoryBanner() {
  return (
    <div className="w-[1320px] flex justify-center items-center h-[352px] pb-[32px] mt-22 mb-10">
      
      <div className="relative w-full h-[390px] rounded-[12px] overflow-hidden">
        
        <Image
          src="/case-study-banner.png"
          alt="Case Study"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1120px] flex flex-col gap-[16px]">

            <div className="w-fit flex justify-center px-[12px] py-[4px] rounded-full bg-[#8B4513]">
              <span className="font-bold text-[12px] text-white">
                GLOBAL SUCCESS
              </span>
            </div>

            <div className="max-w-[1024px]">
              <h2 className="text-[48px] font-bold leading-[48px] text-white">
                Success Stories: <br /> Transforming Hospitality
              </h2>
            </div>

            <div className="max-w-[672px]">
              <p className="text-[18px] leading-[29px] text-[#CBD5E1]">
                Discover how leading hotels worldwide leverage our platform to drive revenue,
                streamline operations, and create unforgettable guest experiences.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}