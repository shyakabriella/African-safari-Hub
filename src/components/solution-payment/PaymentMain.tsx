import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function PaymentMain() {
  return (
    <section className="min-h-screen w-full flex justify-center mt-20">
      <div className="bg-[#F8FAFC] w-[90%] rounded-3xl px-6 py-8">
        <div className="flex justify-center items-center gap-15 mt-20">
          <div className="min-h-145.5">
            <div className="w-[257.11px] h-6 pt-1.25 pb-1.25 pl-3 pr-3 rounded-[9999px] bg-[#1152D4]/10 flex items-center gap-1">
              <ShieldCheck className="h-[14.67px] w-[12.33px] text-[#1152D4]" />
              <span className="text-[#1152D4] font-bold text-[12px]">
                PCI-DSS CERTIFIED PLATFORM
              </span>
            </div>
            <div className="min-h-72">
              <h1 className="font-extrabold text-[72px]">
                <span className="text-[#0F172A]">Secure, Seamless</span> <br />
                <span className="text-[#1152D4]">Payments</span>{" "}
                <span className="text-[#0F172A]">
                  For your <br /> Hotel
                </span>
              </h1>
            </div>
            <div className="w-[584px] min-h-28 pb-8.25">
              <span className="font-normal text-[#475569] text-[20px]">
                Increase direct revenue and reduce manual processing with our
                integrated payment solutions designed specifically for
                hoteliers. Automate your front desk and get paid faster.
              </span>
            </div>
            <div className="w-xl min-h-15.5 flex gap-4">
              <button className="w-[205.36px] h-15.5 rounded-xl bg-[#1152D4] text-white cursor-pointer">
                Start Free Trial
              </button>
              <button className="w-[205.36px] h-15.5 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] cursor-pointer">
                Book a Demo
              </button>
            </div>
          </div>

          <div className="w-[40%] h-[611.74px] relative bg-[#FFFFFF]/0.2">
            <div className="border-3 border-white rounded-xl w-full h-full">
              <Image
                src={"/secure-payment.png"}
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
