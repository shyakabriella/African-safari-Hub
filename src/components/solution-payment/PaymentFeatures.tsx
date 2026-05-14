import { FileText, Globe, Zap } from "lucide-react";
import InfoPaymentCard from "./PaymentFeaturesCard";

export default function PaymentFeatures() {
  return (
    <section className="w-full mt-10">
      
      <div className="flex justify-center items-center">
        
        <div className="w-full max-w-6xl px-4">
          
          {/* Heading */}
          <div className="flex flex-col gap-3 text-center mb-14">
            
            <div>
              <span className="font-extrabold text-[28px] text-[#0F172A] tracking-tight">
                Powerful Payment Features
              </span>
            </div>

            <div className="max-w-2xl mx-auto">
              <span className="text-[#475569] text-[15px] leading-relaxed">
                Everything you need to manage your hotel&apos;s finances
                efficiently and securely on a single dashboard.
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 place-items-center">
            
            <InfoPaymentCard
              icon={
                <Zap className="text-[#8B4513] w-4 h-4" />
              }
              title="Real-time Processing"
              description="
                Instant verification and processing of
                guest payments to secure bookings
                immediately without manual intervention.
              "
              classNameIcon="bg-[#8B4513]/10"
              className="w-[320px] h-[240px] rounded-2xl bg-[#F3E8DE] border border-[#D9BFA8]"
            />

            <InfoPaymentCard
              icon={
                <Globe className="text-[#8B4513] w-4 h-4" />
              }
              title="Global & Local Gateways"
              description="
                Accept Visa, Mastercard, AMEX, and local
                mobile money providers to cater to every
                guest regardless of where they are from.
              "
              classNameIcon="bg-[#8B4513]/10"
              className="w-[320px] h-[240px] rounded-2xl bg-[#F3E8DE] border border-[#D9BFA8]"
            />

            <InfoPaymentCard
              icon={
                <FileText className="text-[#8B4513] w-4 h-4" />
              }
              title="Automated Invoicing"
              description="
                Generate and send professional, branded
                invoices automatically upon successful
                payment.
              "
              classNameIcon="bg-[#8B4513]/10"
              className="w-[320px] h-[240px] rounded-2xl bg-[#F3E8DE] border border-[#D9BFA8]"
            />

          </div>
        </div>
      </div>
    </section>
  );
}