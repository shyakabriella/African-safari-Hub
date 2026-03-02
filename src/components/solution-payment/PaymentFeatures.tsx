import { FileText, Globe, Zap } from "lucide-react";
import InfoPaymentCard from "./PaymentFeaturesCard";

export default function PaymentFeatures() {
  return (
    <section className="w-full mt-6">
      <div className="flex justify-center items-center">
        <div className="w-262.5 flex justify-center items-center min-h-130 rounded-xl">
          <div className="w-full min-h-114.5 pr-10 pl-10">
            <div className=" h-28 flex flex-col gap-4">
              <div className="h-10 flex justify-center items-center">
                <span className="font-extrabold text-[36px] text-[#0F172A]">
                  Powerful Payment Features
                </span>
              </div>
              <div className="w-full h-14 flex justify-center items-center">
                <span className="text-[#475569] text-[18px] text-center">
                  Everything you need to manage your hotel&#39;s finances efficiently and securely on a single dashboard.
                </span>
              </div>
            </div>

            <div className="w-full h-28 flex justify-center items-center gap-7 mt-29">
              <InfoPaymentCard
                icon={
                  <Zap className="text-[#1152D4] w-5 h-6.25" />
                }
                title="Real-time Processing"
                description="
                Instant verification and processing of
                guest payments to secure bookings
                immediately without manual intervention.
              "
              classNameIcon="bg-[#1152D4]/10"
              className="w-[384px] h-70.5 rounded-2xl bg-[#F6F6F8] border border-[#E2E8F0]"
              />
              <InfoPaymentCard
                icon={
                  <Globe className="text-[#1152D4] w-6.25 h-6.25" />
                }
                title="Global & Local Gateways"
                description="
                Accept Visa, Mastercard, AMEX, and local
                mobile money providers to cater to every
                guest regardless of where they are from.
              "
              classNameIcon="bg-[#1152D4]/10"
              className="w-[384px] h-70.5 rounded-2xl bg-[#F6F6F8] border border-[#E2E8F0]"
              />
              <InfoPaymentCard
                icon={
                  <FileText className="text-[#1152D4] w-5 h-6.25" />
                }
                title="Automated Invoicing"
                description="
                Generate and send professional, branded
                invoices automatically upon successful
                payment. Sync directly with your
                accounting software.
              "
              classNameIcon="bg-[#1152D4]/10"
              className="w-[384px] h-70.5 rounded-2xl bg-[#F6F6F8] border border-[#E2E8F0]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
