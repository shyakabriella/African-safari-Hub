import Image from "next/image";

export default function SoltionMain() {
  return (
    <section className="w-full min-h-screen">
      <div className="min-h-160">
        <div className="w-full min-h-[611.74px] flex justify-center items-center gap-15 mt-20">
          <div className="w-[576.1px] min-h-145.5">
            <div className="w-[257.11px] h-6 pt-1.25 pb-1.25 pl-3 pr-3 rounded-[9999px] bg-[#1152D4]/10 flex items-center gap-1">
              <div className="h-2 w-2 bg-[#1152D4] rounded-full"></div>
              <span className="text-[#1152D4] font-bold text-[14px]">
                Trusted by 200+ Luxury Hotels
              </span>
            </div>
            <div className="w-xl min-h-72 pb-1.25">
              <h1 className="font-extrabold text-[72px]">
                <span className="text-[#0F172A]">Turn Your Hotel Into a</span>{" "}
                <span className="text-[#1152D4]">24/7 Booking Machine</span>
              </h1>
            </div>
            <div className="w-xl min-h-28 pb-8.25">
              <span className="font-normal text-[#475569] text-[20px]">
                Strengthen your direct booking strategy while continuing to benefit from OTAs. We create high-converting custom hotel websites with seamless booking engines and secure automated payments — built for today’s hospitality brands.
              </span>
            </div>
            <div className="w-xl min-h-15.5 flex gap-4">
              <button className="w-[205.36px] h-15.5 rounded-xl bg-[#1152D4] text-white cursor-pointer">
                Request a Demo
              </button>
              <button className="w-[205.36px] h-15.5 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] cursor-pointer">
                Get a Quote
              </button>
            </div>
          </div>

          <div className="w-[586.16px] h-[611.74px] relative bg-[#FFFFFF]/0.2">
            <div className="w-[256px] h-64 rounded-[9999px] bg-[#1152D4]/5 absolute -top-20 -right-20 blur-[30px]"></div>
            <div className="w-[256px] h-64 rounded-[9999px] bg-[#1152D4]/5 absolute -bottom-20 -left-20 blur-[30px]"></div>
            <div className="rotate-2 border-3 border-white rounded-xl w-full h-full">
              <Image
                src={'/direct-booking.png'}
                alt="Hotel direct booking system"
                fill
                className="object-cover"
              />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
}
