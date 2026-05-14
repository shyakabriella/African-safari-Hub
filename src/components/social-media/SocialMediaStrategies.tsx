import SocialMediaStrategiesCard from "./SocialMediaStrategiesCard";

export default function SocialMediaStrategies() {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-10 mt-3">
      <div className="w-[960px] h-[60px] pr-[16px] pl-[16px] pt-[3px] mb-6 flex flex-col">
        <span className="font-bold text-[22px] leading-[27.5px] text-[#221610]">
          Full Service Social Strategy
        </span>
        <span className="w-full h-full font-normal text-[12px] mt-2 leading-[21px] text-[#737373]">
          Our expert team specializes in the unique needs of hotel owners and
          boutique property managers.
        </span>
      </div>

      <div className="w-[960px] h-[185px] flex items-center gap-[12px] p-[16px] mt-15 mb-8">
        <SocialMediaStrategiesCard
          image="/strategy-one.png"
          title="Content Creation"
          description="Professional photography and
cinematic videography tailored
for luxury hospitality aesthetics."
        />
        <SocialMediaStrategiesCard
          image="/strategy-two.png"
          title="Targeted Ad Campaigns"
          description="Strategic Meta and TikTok ads
designed to drive high-intent
traffic directly to your booking
engine."
        />
        <SocialMediaStrategiesCard
          image="/strategy-three.png"
          title="Influencer Partnerships"
          description="Connecting your property with
vetted travel creators who align
with your brand’s voice and
audience."
        />
        <SocialMediaStrategiesCard
          image="/strategy-four.png"
          title="Reputation Management"
          description="Proactive monitoring and 24/7
community engagement to
ensure peak guest satisfaction
online."
        />
      </div>
    </section>
  );
}
