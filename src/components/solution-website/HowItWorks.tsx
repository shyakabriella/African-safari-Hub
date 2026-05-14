import HowItWorkForGuestsCard from "./HowItWorkForGuestsCard";

export default function HowItWorks() {
  return (
    <section className="w-full py-14">
      
      {/* Header */}
      <div className="text-center mb-10 px-4">
        
        <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#5C3317] mb-2">
          How It Works for Your Guests
        </h2>

        <p className="text-sm md:text-base text-[#8B4513]/80">
          A simple 4-step journey from discovery to arrival.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <HowItWorkForGuestsCard
          num={1}
          title="Visit Site"
          description="Guest discovers your landing page."
        />

        <HowItWorkForGuestsCard
          num={2}
          title="Select Room"
          description="Real-time availability for instant selection."
        />

        <HowItWorkForGuestsCard
          num={3}
          title="Pay Securely"
          description="Fast encrypted payment in seconds."
        />

        <HowItWorkForGuestsCard
          num={4}
          title="Get Confirmed"
          description="Instant email confirmation with details."
        />
      </div>
    </section>
  );
}