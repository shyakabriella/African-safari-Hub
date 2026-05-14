import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function PaymentMain() {
  return (
    <section className="w-full flex justify-center mt-14">
      
      <div className="bg-[#F5E6D3] w-[90%] rounded-[28px] px-6 py-10">
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          
          {/* Left Content */}
          <div className="max-w-[520px]">

            {/* PCI Badge */}
            <div className="w-fit h-9 px-3 rounded-full bg-[#8B4513]/10 flex items-center gap-2 mb-5">
              <ShieldCheck className="w-4 h-4 text-[#8B4513]" />

              <span className="text-[#8B4513] font-bold text-[10px] tracking-wide">
                PCI-DSS CERTIFIED PLATFORM
              </span>
            </div>

            {/* Heading */}
            <div className="mb-6">
              <h1 className="font-extrabold text-[32px] leading-tight tracking-tight">
                
                <span className="text-[#5C3317]">
                  Secure, Seamless
                </span>

                <br />

                <span className="text-[#8B4513]">
                  Payments
                </span>

                <span className="text-[#5C3317]">
                  {" "}For your Hotel
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-[500px] mb-8">
              <p className="text-[#8B4513]/80 text-[12px] leading-relaxed font-medium">
                Increase direct revenue and reduce manual processing with our
                integrated payment solutions designed specifically for
                hoteliers.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              
              <button className="w-[170px] h-12 rounded-xl bg-[#8B4513] text-white text-sm font-semibold cursor-pointer">
                Start Free Trial
              </button>

              <button className="w-[170px] h-12 rounded-xl bg-[#F5E6D3] border border-[#d4a567] text-sm font-semibold cursor-pointer">
                Book a Demo
              </button>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-[420px] h-[420px] relative bg-white/20 rounded-2xl overflow-hidden">
            
            <div className="border-2 border-white rounded-2xl w-full h-full overflow-hidden">
              <Image
                src={"/secure-payment-pic.png"}
                alt="Secure Payment For Services"
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