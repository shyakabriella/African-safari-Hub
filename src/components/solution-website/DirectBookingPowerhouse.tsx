import Image from "next/image";

export default function DirectBookingPowerhouse() {
  return (
    <section className="w-full py-14 bg-[#8B4513]/5">
      
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          
          <h2 className="text-[24px] md:text-[30px] font-extrabold text-[#5C3317] mb-2">
            Your Direct Booking Powerhouse
          </h2>

          <p className="text-[#8B4513]/70 text-[13px] md:text-[14px] max-w-xl mx-auto">
            We turn your website into a revenue-generating machine with a unified ecosystem.
          </p>

          <div className="mt-3">
            <button className="text-[#8B4513] hover:text-[#5C3317] hover:underline text-xs font-medium transition">
              Explore full feature list →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          
          {/* Card 1 */}
          <div className="w-full max-w-[340px] flex flex-col gap-3">
            
            <div className="relative w-full h-[190px]">
              <Image
                src={"/web-design-pic.png"}
                alt="Hotel direct booking system"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-base font-bold text-[#8B4513]">
              Custom Hotel Website
            </h3>

            <p className="text-xs text-[#5C3317]/90 leading-relaxed">
              Bespoke, fast hotel websites optimized for SEO to boost direct bookings.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[340px] flex flex-col gap-3">
            
            <div className="relative w-full h-[190px]">
              <Image
                src={"/booking-engine-pic.png"}
                alt="Hotel direct booking system"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-base font-bold text-[#8B4513]">
              Integrated Booking Engine
            </h3>

            <p className="text-xs text-[#5C3317]/90 leading-relaxed">
              Real-time availability, dynamic pricing, and secure payments to maximize conversions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}