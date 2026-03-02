import HowItWorkForGuestsCard from "./HowItWorkForGuestsCard";

export default function HowItWorks() {
  return (
    <section className="w-full">
          
          <div className="w-full min-h-[200px] gap-[16px] flex flex-col justify-center items-center text-center gap-[16px]">
            <div className="w-full h-[40px]">
              <span className="font-extrabold text-[36px] text-[#0F172A]">
                How It Works for Your Guests
              </span>
            </div>
            <div className="w-full h-[28px]">
              <span className="text-[16px] text-[#475569] font-normal">
                A simple 4-step journey from discovery to arrival.
              </span>
            </div>
          </div>

          <div className="h-[164px] flex justify-center gap-8">
            <HowItWorkForGuestsCard 
              num={1} 
              title="Visit Site" 
              description="Guest discovers your beautiful landingpage." 
            />
            <HowItWorkForGuestsCard 
              num={2} 
              title="Select Room" 
              description="Real-time availability allows for instant selection." 
            />
            <HowItWorkForGuestsCard 
              num={3} 
              title="Pay Securely" 
              description="Fast, encrypted payment processing inseconds." 
            />
            <HowItWorkForGuestsCard 
              num={4} 
              title="Get Confirmed" 
              description="Instant email confirmation with all booking details." 
            />
          </div>

    </section>
  )
}
