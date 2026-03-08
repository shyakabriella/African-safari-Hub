import { Key, Layers, RefreshCwOff } from "lucide-react";
import ApartmentsBnbProplemCard from "./ApartmentsBnbProplemCard";

export default function ApartmentsBnbProplem() {
  return (
    <section className="w-full flex justify-center items-center bg-[#8B4513]/5">
      <div className="w-[1280px] h-[522px] flex flex-col gap-[48px] justify-center items-center text-center pt-[64px] pb-[64px] pr-[160px] pl-[160px]">
        <div className="w-[960px] h-[76px] flex flex-col justify-center items-center gap-[16px]">
          <div className="w-full h-[36px]">
            <span className="w-[533.09px] h-[36px] text-[30px] font-bold leading-[36px] text-[#0F172A]">
              The Struggle of Manual Management
            </span>
          </div>
          <div className="w-[672px] h-[24px]">
            <span className="w-[627.03px] h-full font-normal text-[16px] leading-[24px] text-[#475569]">
              Manual handling often leads to burnout and lost revenue. Are these holding you back?
            </span>
          </div>
        </div>

        <div className="w-[960px] h-[270px] flex gap-[32px]">
          <ApartmentsBnbProplemCard
            icon={<Layers />}
            title="Multiple Listings"
            description="Tired of switching between Airbnb, Booking.com, and VRBO? Managing separate logins is a nightmare."
          />
          <ApartmentsBnbProplemCard
            icon={<Key />}
            title="Manual Syncing"
            description="The constant risk of double-bookings keeps you awake at night. One mistake ruins your reputation."
          />
          <ApartmentsBnbProplemCard
            icon={<RefreshCwOff />}
            title="Check-in Chaos"
            description="Coordinating keys and cleaning crews takes up all your time. Scaling seems impossible."
          />
        </div>
      </div>
    </section>
  )
}
