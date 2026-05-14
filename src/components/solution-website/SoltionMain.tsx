import Image from "next/image";

export default function SoltionMain() {
  return (
    <section className="w-full py-16">
      
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          
          {/* Left Content */}
          <div className="max-w-[520px]">

            {/* Badge */}
            <div className="w-fit px-3 py-1 rounded-full bg-[#8B4513]/10 flex items-center gap-2 mb-5">
              <div className="h-2 w-2 bg-[#8B4513] rounded-full"></div>

              <span className="text-[#8B4513] font-bold text-[11px]">
                Trusted by 200+ Luxury Hotels
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-extrabold text-[40px] leading-tight tracking-tight mb-5">
              
              <span className="text-[#5C3317]">
                Turn Your Hotel Into a{" "}
              </span>

              <span className="text-[#8B4513]">
                24/7 Booking Machine
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-[#8B4513]/80 text-[15px] leading-relaxed mb-8">
              Strengthen your direct booking strategy while still benefiting
              from OTAs. We build high-converting hotel websites with seamless
              booking engines and secure automated payments.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              
              <button className="px-6 py-3 cursor-pointer rounded-xl bg-[#8B4513] text-[#F5E6D3] font-semibold text-sm hover:bg-[#5C3317] transition">
                Request a Demo
              </button>

              <button className="px-6 py-3 cursor-pointer rounded-xl bg-[#F5E6D3] border border-[#8B4513]/30 text-[#5C3317] font-semibold text-sm hover:bg-[#F5E6D3]/90 transition">
                Get a Quote
              </button>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-[420px] h-[420px] bg-[#F5E6D3]/10 rounded-2xl overflow-hidden">

            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#8B4513]/5 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#8B4513]/5 blur-2xl"></div>

            <div className="relative w-full h-full border-2 border-[#F5E6D3] rounded-2xl overflow-hidden rotate-1">
              
              <Image
                src={"/direct-booking-pic.png"}
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