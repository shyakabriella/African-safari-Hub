import { Globe, Shield, Headset } from "lucide-react";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-14">
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#5C3317] mb-2">
            Why Choose Us?
          </h2>

          <p className="text-sm md:text-base text-[#8B4513]/80 max-w-2xl mx-auto">
            We’re not just a tech company — we’re hospitality experts focused on local and international markets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <WhyChooseUsCard
            icon={<Globe className="w-5 h-5 text-[#8B4513]" />}
            title="Local Market Expertise"
            description="Deep understanding of Rwanda & East Africa hospitality and payment trends."
          />

          <WhyChooseUsCard
            icon={<Shield className="w-5 h-5 text-[#A0522D]" />}
            title="Enterprise Security"
            description="Bank-level encryption and global compliance standards."
          />

          <WhyChooseUsCard
            icon={<Headset className="w-5 h-5 text-[#8B4513]/90" />}
            title="24/7 Local Support"
            description="On-the-ground support to optimize your hotel operations."
          />

        </div>
      </div>
    </section>
  );
}