import Image from "next/image";

export default function SoltionMain() {
  return (
    <section className="w-full min-h-screen">
      <div className="min-h-160">
        <div className="w-full min-h-[611.74px] flex justify-center items-center gap-15 mt-20">
          
          {/* Left Content */}
          <div className="w-[576.1px] min-h-145.5">
            
            {/* Badge */}
            <div className="w-[257.11px] h-6 pt-1.25 pb-1.25 pl-3 pr-3 rounded-full bg-[#8B4513]/10 flex items-center gap-1">
              <div className="h-2 w-2 bg-[#8B4513] rounded-full"></div>
              <span className="text-[#8B4513] font-bold text-[14px]">
                Trusted by 200+ Luxury Hotels
              </span>
            </div>

            {/* Heading */}
            <div className="w-xl min-h-72 pb-1.25">
              <h1 className="font-extrabold text-[72px]">
                <span className="text-[#5C3317]">Turn Your Hotel Into a </span>
                <span className="text-[#8B4513]">24/7 Booking Machine</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="w-xl min-h-28 pb-8.25">
              <span className="font-normal text-[#8B4513]/80 text-[20px]">
                Strengthen your direct booking strategy while continuing to benefit from OTAs. We create high-converting custom hotel websites with seamless booking engines and secure automated payments — built for today’s hospitality brands.
              </span>
            </div>

            {/* Buttons */}
            <div className="w-xl min-h-15.5 flex gap-4">
              <button className="w-[205.36px] h-15.5 rounded-xl bg-[#8B4513] text-[#F5E6D3] cursor-pointer hover:bg-[#5C3317] transition">
                Request a Demo
              </button>
              <button className="w-[205.36px] h-15.5 rounded-xl bg-[#F5E6D3] border border-[#8B4513]/30 text-[#5C3317] cursor-pointer hover:bg-[#F5E6D3]/90 transition">
                Get a Quote
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="w-[586.16px] h-[611.74px] relative bg-[#F5E6D3]/10 rounded-2xl">
            
            <div className="w-[256px] h-64 rounded-full bg-[#8B4513]/5 absolute -top-20 -right-20 blur-[30px]"></div>
            <div className="w-[256px] h-64 rounded-full bg-[#8B4513]/5 absolute -bottom-20 -left-20 blur-[30px]"></div>
            
            <div className="rotate-2 border-3 border-[#F5E6D3] rounded-xl w-full h-full">
              <Image
                src={'/direct-booking-pic.png'}
                alt="Hotel direct booking system"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}