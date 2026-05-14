import Image from "next/image";

export default function SocialMediaWelcome() {
  return (
    <section className="w-full flex justify-center py-5 mt-16">
      
      <div className="w-full max-w-[960px] flex items-center justify-evenly gap-8 rounded-2xl">
        
        {/* Image */}
        <div className="w-[416px] h-[259px] overflow-hidden rounded-[12px] flex-shrink-0">
          <Image
            src="/social-media-welcome.png"
            alt="social media welcome"
            width={416}
            height={259}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 w-[480px] mb-5">
          
          {/* Text */}
          <div className="flex flex-col gap-4">
            <h2 className="font-black text-[22px] leading-[40px] text-[#221610]">
              Turn Your Social Presence into a <br /> <span className="text-[#8B4513]">Booking Engine</span> 
            </h2>

            <p className="font-normal text-[12px] leading-[24px] text-[#525252]">
              Building brand loyalty and visibility on Instagram,
              Facebook, and TikTok for high-end hospitality brands
              through expert storytelling and data-driven strategy.
            </p>
          </div>

          {/* Button */}
          <button className="cursor-pointer w-full h-[35px] px-8 rounded-[12px] bg-[#8B4513] flex items-center justify-center">
            <span className="font-semibold text-[16px] leading-[24px] text-white">
              Get Started
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}