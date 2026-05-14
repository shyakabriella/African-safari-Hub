import React from "react";
import SocialMediaStrugglesCard from "./SocialMediaStrugglesCard";
import { ChartBarIcon, ClockIcon, MessageCircle } from "lucide-react";

export default function SocialMediaStruggles() {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-10 mt-3">
      <div className="w-[960px] h-[60px] pr-[16px] pl-[16px] pt-[20px] pb-[12px]">
        <span className="font-bold text-[22px] leading-[27.5px] text-[#221610]">
          The Struggle of Modern Hospitality
        </span>
      </div>

      <div className="w-[960px] h-[185px] flex items-center gap-[12px] p-[16px]">
        <SocialMediaStrugglesCard
          icon={<ClockIcon />}
          title={`Inconsistent Posting`}
          description={`Struggling to find the time to post high-
quality content daily while managing on-
site guests.`}
        />
        <SocialMediaStrugglesCard
          icon={<MessageCircle />}
          title={`Community Management`}
          description={`Missing guest inquiries, tags, and
valuable engagement opportunities in a
fast-paced digital world.`}
        />
        <SocialMediaStrugglesCard
          icon={<ChartBarIcon />}
          title={`Measuring ROI`}
          description={`Uncertainty about how likes and social
engagement translate directly to booked
room nights.`}
        />
      </div>
    </section>
  );
}
