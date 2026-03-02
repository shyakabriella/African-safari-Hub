import Image from "next/image";

export default function DirectBookingPowerhouse() {
  return (
    <section className="w-full min-h-screen">
      <div className="flex justify-center items-center w-full h-[847.75px]">
        <div className="w-7xl h-[655.75px] pr-10 pl-10 flex flex-col gap-16 rounded-xl">
          <div className="h-114.5 pr-10 pl-10">
            <div className="w-full h-28 flex flex-col gap-4">
              <div className="w-[652.97px] h-10">
                <span className="text-[#0F172A] font-extrabold text-[36px]">
                  Your Direct Booking Powerhouse
                </span>
              </div>
              <div className="w-[652.97px] h-14">
                <span className="text-[#475569] text-[18px] font-normal">
                  We provide a unified ecosystem that turns your online presence
                  into a revenue- generating asset.
                </span>
              </div>
              <div className="flex justify-end">
                <button className="flex items-center gap-x-2 text-[#1152D4] cursor-pointer">
                  <span>Explore full feature list</span>
                  <span className="text-[18px]">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-300 h-[479.75px] flex gap-12 mt-6">
            
            <div className="w-xl h-[479.75px] flex flex-col gap-5">
              <div className="relative w-xl h-81">
                <Image
                  src={"/website-design.png"}
                  alt="Hotel direct booking system"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="w-xl h-8">
                <span className="text-[24px] text-[#1152D4] font-bold">
                  Custom Hotel Website
                </span>
              </div>
              <div className="w-xl h-22">
                <span className="text-[18px] font-normal">
                  Not just a template. We design bespoke, lightning-fast
                  websites optimized for hospitality SEO, ensuring you rank
                  higher on Google and capture every direct guest.
                </span>
              </div>
            </div>

            <div className="w-xl h-[479.75px] flex flex-col gap-5">
              <div className="relative w-xl h-81">
                <Image
                  src={"/booking-engine.png"}
                  alt="Hotel direct booking system"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="w-xl h-8">
                <span className="text-[24px] text-[#1152D4] font-bold">
                  Integrated Booking Engine
                </span>
              </div>
              <div className="w-xl h-22">
                <span className="text-[18px] font-normal">
                  A seamless booking experience that lives on your site. Real-time
                  availability, dynamic pricing, and secure payment processing built to
                  maximize conversion rates.
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
