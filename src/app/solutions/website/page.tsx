import DirectBookingPowerhouse from "@/components/solution-website/DirectBookingPowerhouse";
import Features from "@/components/solution-website/Features";
import FocusOnGrowth from "@/components/solution-website/FocusOnGrowth";
import HowItWorks from "@/components/solution-website/HowItWorks";
import ReadyToModernize from "@/components/solution-website/ReadyToModernize";
import SoltionMain from "@/components/solution-website/SoltionMain";
import StopGivingAwayProfit from "@/components/solution-website/StopGivingAwayProfit";
import WhyChooseUs from "@/components/solution-website/WhyChooseUs";

export default function HotelWebsite() {
  return (
    <>
      <SoltionMain />
      <StopGivingAwayProfit />
      <DirectBookingPowerhouse />
      <Features />
      <HowItWorks />
      <FocusOnGrowth />
      <WhyChooseUs />
      <ReadyToModernize />
    </>
  )
}