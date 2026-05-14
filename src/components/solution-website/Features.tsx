import FeaturesCard from "./FeaturesCard";
import { LayoutDashboard, Calendar } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full py-12">
      
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="bg-[#8B4513] rounded-2xl p-8 flex flex-col lg:flex-row gap-8">
          
          {/* Left Side */}
          <div className="flex-1 flex flex-col gap-5">
            
            <div className="flex items-center gap-2 text-white">
              <LayoutDashboard className="w-5 h-5 text-[#F5E6D3]" />
              <span className="text-xl font-extrabold">
                Website Features
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <FeaturesCard
                title="Stunning Room Pages"
                description="High-res galleries and clear amenity breakdowns."
              />

              <FeaturesCard
                title="Local Guide & Amenities"
                description="Integrated maps and attraction guides for guests."
              />

              <FeaturesCard
                title="Mobile-First Experience"
                description="Smooth booking experience on any device."
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col gap-5">
            
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-5 h-5 text-[#F5E6D3]" />
              <span className="text-xl font-extrabold">
                Booking Engine Features
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <FeaturesCard
                title="Live Inventory & Prices"
                description="Real-time sync across all channels."
              />

              <FeaturesCard
                title="Global Payment Gateway"
                description="Accept cards and mobile money securely."
              />

              <FeaturesCard
                title="Upselling Tools"
                description="Boost revenue during checkout flow."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}