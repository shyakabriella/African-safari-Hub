import FeaturesCard from "./FeaturesCard";

import { LayoutDashboard, Calendar } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full">
      <div className="flex justify-center items-center w-full">
        <div className="w-full flex justify-center">
          <div className="w-300 h-128.5 bg-[#1152D4] pl-9 pr-5 pt-9 pb-12 flex gap-5">
            <div className="w-140 h-128.5 flex flex-col gap-4">
              <div className="w-140 h-9 flex items-center gap-2 text-white">
                <LayoutDashboard className="w-7.5 h-6" />
                <span className="text-[24px] font-extrabold">
                  Website Features
                </span>
              </div>
              <div className="w-140 h-109.5 flex flex-col gap-3">
                <FeaturesCard
                  title="Stunning Room Pages"
                  description="Highlight your inventory with high-res galleries and specific
                  amenity lists."
                />
                <FeaturesCard
                  title="Local Guide & Amenities"
                  description="Become a destination expert with integrated maps and
                  attraction guides."
                />
                <FeaturesCard
                  title="Mobile-First Experience"
                  description="Optimized for travelers booking on-the-go with seamless
                  mobile navigation."
                />
              </div>
            </div>

            <div className="w-140 h-128.5 flex flex-col gap-4">
              <div className="w-140 h-9 flex items-center gap-2 text-white">
                <Calendar className="w-7.5 h-6" />
                <span className="text-[24px] font-extrabold">
                  Booking Engine Features
                </span>
              </div>
              <div className="w-140 h-109.5 flex flex-col gap-3">
                <FeaturesCard
                  title="Live Inventory & Prices"
                  description="Automated price synchronization across all channels to
                  prevent overbooking."
                />
                <FeaturesCard
                  title="Global Payment Gateway"
                  description="Accept Visa, Mastercard, and local mobile money securely in
                  any currency."
                />
                <FeaturesCard
                  title="Upselling Tools"
                  description="Offer breakfast, airport transfers, or late checkouts during the
                  checkout flow."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
