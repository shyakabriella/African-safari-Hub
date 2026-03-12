import ReachMoreGuestsCard from "./ReachMoreGuestsCard";

export default function ReachMoreGuests() {
  return (
    <div className="w-[1120px] h-[433px] flex flex-col gap-[32px] pb-[48px]">
      <div className="w-full h-[35px]">
        <span className="w-full h-full font-bold text-[28px] leading-[35px] text-[#0F172A] tracking-[-0.7px]">
          Reach More Guests Globally
        </span>
      </div>

      <div className="w-full h-[269px] flex gap-[24px]">
        <ReachMoreGuestsCard
          title="Booking.com"
          image="/booking.png"
          description="Global Reach"
        />
        <ReachMoreGuestsCard
          title="Expedia"
          image="/expedia.png"
          description="Massive Traffic"
        />
        <ReachMoreGuestsCard
          title="Airbnb"
          image="/airbnb.png"
          description="Vacation Rentals"
        />
        <ReachMoreGuestsCard
          title="Agoda"
          image="/agoda.png"
          description="Asia Specialist"
        />
      </div>
    </div>
  )
}
