import { Lock, Plus, CheckCircle } from "lucide-react";
import SecurityCard from "./SecurityCard";

export default function Security() {
  return (
    <section className="w-full py-20 flex justify-center items-center">
      <div className="max-w-304 w-full flex justify-between items-center gap-12 mx-auto">
        <div className="w-146 h-57 flex flex-col gap-6">
          <div className="w-[584px] h-[36px]">
            <span className="text-[30px] text-[#0F172A] font-bold">
              Bank-Level Security
            </span>
          </div>
          <div className="w-[584px] h-[72px]">
            <span className="font-normal text-[#475569] text-[16px]">
              Trust is the foundation of every transaction. We use the same
              security protocols as leading global financial institutions to
              ensure your and your guests&apos; data is always safe.
            </span>
          </div>
          <div className="w-[590px] h-[64px] flex justify-between items-center gap-[15px]">
            <SecurityCard
              icon={
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Lock className="w-full h-full text-[#1152D4]" />
                  <Plus className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              }
              title="AES-256 Encryption"
              description="Highest industry standards for data at rest and in transit."
            />
            <SecurityCard
              icon={<CheckCircle className="w-12 h-12 text-[#1152D4]" />}
              title="PCI DSS Level 1"
              description="The most stringent security certification in the industry."
            />
          </div>
        </div>

        <div className="w-146 h-50 flex justify-center items-center">
          <div className="w-50 h-50 rounded-full bg-[#1152D4]/5 border-4 border-[#1152D4]/20 flex justify-center items-center">
            <div className="w-[192px] h-[192px] rounded-[24px] bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex justify-center items-center">
              <Lock className="w-16 h-16 text-[#1152D4]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
