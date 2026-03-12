import DriveBookings from "@/components/core-solutions/digital-marketing/DriveBookings";
import FrontDeskBanner from "@/components/core-solutions/digital-marketing/FrontDeskBanner";
import OperationalExcellence from "@/components/core-solutions/digital-marketing/OperationalExcellence";
import ReadyToAutomateCTA from "@/components/core-solutions/digital-marketing/ReadyToAutomateCTA";
import StatusBarDigital from "@/components/core-solutions/digital-marketing/StatusBarDigital";

export default function DigitalMarketing() {
  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <FrontDeskBanner />
      <StatusBarDigital />
      <OperationalExcellence />
      <DriveBookings />
      <ReadyToAutomateCTA />
    </div>
  )
}
