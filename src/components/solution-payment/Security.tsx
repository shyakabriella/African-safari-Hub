import { Lock, Plus, CheckCircle } from "lucide-react";
import SecurityCard from "./SecurityCard";

export default function Security() {
  return (
    <section className="w-full py-14 flex justify-center items-center">
      
      <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-evenly items-center gap-10 px-4 mx-auto">
        
        {/* Left Content */}
        <div className="max-w-[500px] flex flex-col gap-5">
          
          {/* Heading */}
          <div>
            <span className="text-[26px] text-[#0F172A] font-extrabold tracking-tight">
              Bank-Level Security
            </span>
          </div>

          {/* Description */}
          <div>
            <span className="text-[#475569] text-[15px] leading-relaxed">
              Trust is the foundation of every transaction. We use advanced
              security protocols to keep your and your guests&apos; data safe.
            </span>
          </div>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-5 mt-2">
            
            <div className="flex items-start gap-3 bg-[#F8F3EE] border border-[#E7D4C2] rounded-2xl p-4">
              
              <SecurityCard
                icon={
                  <div className="relative w-9 h-9 flex items-center justify-center">
                    <Lock className="w-full h-full text-[#8B4513]" />

                    <Plus className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                }
                title="AES-256 Encryption"
                description="Highest industry standards for data protection."
              />
            </div>

            <div className="flex items-start gap-3 bg-[#F8F3EE] border border-[#E7D4C2] rounded-2xl p-4">
              
              <SecurityCard
                icon={
                  <CheckCircle className="w-9 h-9 text-[#8B4513]" />
                }
                title="PCI DSS Level 1"
                description="Top-tier security certification in the industry."
              />
            </div>
          </div>
        </div>

        {/* Right Icon */}
        <div className="flex justify-center items-center">
          
          <div className="w-40 h-40 rounded-full bg-[#8B4513]/5 border-2 border-[#8B4513]/20 flex justify-center items-center">
            
            <div className="w-[130px] h-[130px] rounded-[20px] bg-white shadow-xl flex justify-center items-center">
              
              <Lock className="w-12 h-12 text-[#8B4513]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}