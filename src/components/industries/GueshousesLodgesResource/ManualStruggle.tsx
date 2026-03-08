import { MapPin, Zap } from "lucide-react";
import ManualStruggleCard from "./ManualStruggleCard";

export default function ManualStruggle() {
  return (
    <section className="w-full flex justify-center items-center mb-20">
      <div className="w-[1280px] p-[80px] bg-[#8B4513]/5">
        <div className="w-[1120px] flex flex-col justify-center items-center text-center gap-[64px] mt-10">

          <div className="w-full flex flex-col items-center gap-[16px]">
            <h1 className="font-semibold text-[40px] leading-[48px] text-[#0F172A] whitespace-nowrap text-center">
              The Struggle of Manual Management
            </h1>
            <p className="font-normal text-[16px] leading-[24px] text-[#475569] text-center max-w-[672px]">
              Traditional hospitality thrives on warmth, but manual back-office
              tasks can turn a dream lodge into an operational nightmare.
            </p>
          </div>

          <div className="w-full flex items-center gap-[32px]">
            <ManualStruggleCard
              icon={<MapPin />}
              title="Personal Touch vs. Admin"
              description="Spending more time on complex spreadsheets than with your guests? We help you reclaim hours spent on data entry for meaningful guest interactions."
            />
            <ManualStruggleCard
              icon={<Zap />}
              title="Manual Tracking Errors"
              description="Lost reservations and overbooking risks can damage your reputation. Eliminate human error with synchronized booking calendars."
            />
          </div>

        </div>
      </div>
    </section>
  );
}