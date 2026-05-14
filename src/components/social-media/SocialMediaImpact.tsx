import React from "react";
import SocialMediaImpactCard from "./SocialMediaImpactCard";

export default function SocialMediaImpact() {
  return (
    <div className="w-full flex justify-center pb-[40px]">
      <div className="w-[960px] flex flex-col justify-center items-center mt-10">
        <div className="w-full flex flex-col gap-[40px] pt-[48px] pb-[48px] px-[16px] rounded-[16px] bg-[#F5F5F5]">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <span className="font-bold text-[22px] leading-[27.5px] text-[#221610]">
              Full Service Social Strategy
            </span>

            <span className="font-normal text-[12px] leading-[21px] text-[#737373] max-w-[600px]">
              Our expert team specializes in the unique needs of hotel owners
              and boutique property managers.
            </span>
          </div>

          <div className="w-[928px] h-[198px] flex items-center gap-[32px]">
            <SocialMediaImpactCard
              title={"+210%"}
              subtitle={"ENGAGEMENT RATE"}
              description={"Real interactions with potential guests."}
            />
            <SocialMediaImpactCard
              title={"4.8x"}
              subtitle={"AD SPEND ROI"}
              description={"Measured in direct room revenue."}
            />
            <SocialMediaImpactCard
              title={"+85k"}
              subtitle={"MONTHLY REACH"}
              description={"Brand visibility across platforms."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
