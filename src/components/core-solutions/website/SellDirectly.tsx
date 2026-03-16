import { BarChart2, Bed, Calendar, CreditCard, Globe, Phone } from "lucide-react";
import SellDirectlyCard from "./SellDirectlyCard";

export default function SellDirectly() {
  return (
    <div className="w-full max-w-[1280px] h-[920px] px-20 pb-24 bg-white mb-12 flex justify-center items-center">
      <div className="w-full max-w-[1120px] h-[824px] flex flex-col items-center gap-16 text-center">
        
        <div className="flex flex-col gap-4 mt-8">
          <span className="font-normal text-[14px] leading-[20px] text-[#8B4513]">
            POWERFUL ENGINE
          </span>
          <span className="font-medium text-[36px] leading-[40px] text-[#0F172A]">
            Everything you need to sell direct
          </span>
          <div className="max-w-[672px]">
            <span className="text-[18px] font-extralight leading-[28px] text-[#475569]">
              Our booking engine is built with a focus on conversion optimization and a premium user experience.
            </span>
          </div>
        </div>

        <div className="w-[1120px] h-[612px] grid grid-cols-3 gap-8">
          <SellDirectlyCard
            icon={<Bed />}
            title="Flexible Room Management"
            description="Showcase room types, amenities, and high-res galleries. Dynamic pricing based on occupancy and seasonal demand."
          />
          <SellDirectlyCard
            icon={<CreditCard />}
            title="Instant Secure Payments"
            description="Integrated Stripe & PayPal support. Process global cards, Apple Pay, and Google Pay with zero friction."
          />
          <SellDirectlyCard
            icon={<Calendar />}
            title="Real-time Availability"
            description="Sync instantly with iCal, Google Calendar, and other major PMS systems to avoid overbooking."
          />
          <SellDirectlyCard
            icon={<Phone />}
            title="Mobile-First Design"
            description="Over 60% of bookings happen on mobile. Our engine is optimized for the smallest screens for maximum conversion."
          />
          <SellDirectlyCard
            icon={<BarChart2 />}
            title="Advanced Analytics"
            description="Track your guest journey. Understand where they drop off and optimize your funnel for better performance."
          />
          <SellDirectlyCard
            icon={<Globe />}
            title="Multi-Language Ready"
            description="Automatically detect guest language and currency to provide a local booking experience for international travelers."
          />
        </div>
      </div>
    </div>
  );
}