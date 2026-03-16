import DesignedDistinctionCard from "./DesignedDistinctionCard";

export default function DesignedDistinction() {
  return (
    <section className="w-full flex justify-center items-center bg-[#8B4513]/5">
      <div className="w-[1280px] flex flex-col gap-[48px] justify-center items-center text-center pt-[64px] pb-[64px] px-[80px]">

        {/* Heading */}
        <div className="w-full max-w-[960px] flex flex-col gap-[12px]">
          <h2 className="text-[#0F172A] font-bold text-[40px] leading-[48px]">
            Designed for Distinction
          </h2>
          <p className="text-[18px] leading-[28px] text-[#475569]">
            Achieve operational excellence that translates directly into guest loyalty <br />
            and property prestige.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex gap-[24px] mt-2">
          <DesignedDistinctionCard
            image="/designated-one.png"
            title="Personalized VIP Experiences"
            description="Every touchpoint reflects the guest's legacy. Anticipate needs with integrated history and real-time preference tracking."
          />
          <DesignedDistinctionCard
            image="/designated-two.png"
            title="Operational Excellence"
            description="Data-driven insights that optimize staff allocation, inventory management, and revenue per available room (RevPAR)."
          />
          <DesignedDistinctionCard
            image="/designated-three.png"
            title="Lasting Brand Loyalty"
            description="Seamless stays create advocates. Build a reputation for perfection that keeps guests returning year after year."
          />
        </div>
      </div>
    </section>
  );
}