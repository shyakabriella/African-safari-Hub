import { Bot, Calendar, MessageCircle } from "lucide-react";
import ApartmentsBnbSolutionCard from "./ApartmentsBnbSolutionCard";

export default function ApartmentsBnbSolution() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[625px] flex flex-col pt-[80px] pb-[80px] pr-[160px] pl-[160px]">
        <div className="w-[960px] h-[465px] flex flex-col gap-[48px]">
          
          <div className="w-[768px] h-[117px] flex flex-col gap-[16px]">
            <div className="w-full h-[45px]">
              <span className="font-extrabold text-[36px] leading-[45px] text-[#0F172A]">
                Our All-in-One Solution
              </span>
            </div>
            <div className="w-full h-[56px]">
              <span className="font-normal text-[18px] leading-[28px] text-[#475569]">
                Take control of your rental business with professional tools designed to handle the heavy lifting while you focus on growth.
              </span>
            </div>
          </div>

          <div className="w-[960px] h-[300px] flex gap-[32px]">
            <ApartmentsBnbSolutionCard
              image="/apartment-solution-one.png"
              icon={<Bot />}
              title="Automated PMS"
              description="Sync all platforms in real-time. Prices, availability, and content updated instantly across the web."
            />
            <ApartmentsBnbSolutionCard
              image="/apartment-solution-two.png"
              icon={<Calendar />}
              title="Unified Calendar"
              description="One centralized view for all your properties. Spot gaps in occupancy and adjust strategies in seconds."
            />
            <ApartmentsBnbSolutionCard
              image="/apartment-solution-three.png"
              icon={<MessageCircle />}
              title="Guest Messaging"
              description="Automated AI tools for 5-star service. Respond to inquiries and send check-in details while you sleep."
            />
          </div>

        </div>
      </div>
    </section>
  )
}
