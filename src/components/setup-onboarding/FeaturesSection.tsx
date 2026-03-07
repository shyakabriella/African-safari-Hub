import { Server, Plug, DollarSign, Users, BookOpen, Headphones } from "lucide-react";
import FeaturesSectionCard from "./FeaturesSectionCard";

export default function FeaturesSection() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center py-25">
      <div className="w-[1280px] flex flex-col items-center justify-center gap-32 px-16 bg-white">
        <div className="w-full flex flex-col gap-32">
          <FeaturesSectionCard
            header="Hands-On Setup"
            imageSrc="/features-one.png"
            features={[
              {
                icon: <Server size={28} />,
                title: "Seamless Data Migration",
                description: "We handle the heavy lifting of importing guest records, future bookings, and room inventory.",
              },
              {
                icon: <Plug size={28} />,
                title: "Advanced API Integrations",
                description: "Connect your PMS with keycards, POS, and accounting software without the tech jargon.",
              },
              {
                icon: <DollarSign size={28} />,
                title: "Payment Gateway Setup",
                description: "Secure, PCI-compliant processing configured for instant deposits and low fees.",
              },
            ]}
          />

          <FeaturesSectionCard
            header="Expert Training"
            imageSrc="/features-two.png"
            reverse
            features={[
              {
                icon: <Users size={28} />,
                title: "Role-Based Workshops",
                description: "Tailored training sessions for front-of-house, housekeeping, and management roles.",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Simplified Manuals",
                description: "No 500-page manuals. Just clear, visual cheat-sheets for your daily operations.",
              },
              {
                icon: <Headphones size={28} />,
                title: "Ongoing Priority Support",
                description: "Post-launch safety net with a dedicated account manager available 24/7.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}