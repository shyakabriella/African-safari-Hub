import WhyHotelBoostCard from "./WhyHotelBoostCard";


export default function WhyHotelBoost() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[412px] flex flex-col justify-center items-center gap-[48px] pt-[96px] pb-[96px] pr-[160px] pl-[160px]">
        <div className="w-[960px] h-[40px] text-center">
          <span className="w-[306.16px] h-[40px] text-[36px] font-extrabold text-[#4A3B2A]">
            Why HotelBoost?
          </span>
        </div>
        <div className="w-[960px] h-[132px] flex justify-between items-center gap-[48px]">
          <WhyHotelBoostCard 
            perc="50+"
            title="Hospitality Clients"
            description="Dedicated expertise in the East African tourism market including Rwanda and Kenya."
          />
          <WhyHotelBoostCard 
            perc="100%"
            title="Data Driven"
            description="Every decision is backed by search volume data and competitive analysis."
          />
          <WhyHotelBoostCard 
            perc="24/7"
            title="Real-time Reporting"
            description="Access your performance dashboard anytime to see your ROI in real-time."
          />
        </div>
      </div>
    </section>
  )
}
