import { Banknote, CircleCheck, Gauge, Star, TrendingUp } from "lucide-react";
import StatusBarDigitalCard from "./StatusBarDigitalCard";

export default function StatusBarDigital() {
  return (
    <div className="w-[1280px] h-[250px] mb-10 pr-[80px] pl-[80px] pt-[40px] pb-[40px] bg-[#8B4513]/5">
      <div className="w-[1120px] h-[170px] flex justify-between gap-[24px]">
        <StatusBarDigitalCard
          header="EFFICIENCY BOOST"
          iconHeader={<Gauge />}
          title="40%"
          description="+15% vs Last Quarter"
          descriptionIcon={<TrendingUp />}
        />
        <StatusBarDigitalCard
          header="REVENUE GROWTH"
          iconHeader={<Banknote />}
          title="25%"
          description="+10% Average Organic Growth"
          descriptionIcon={<TrendingUp />}
        />
        <StatusBarDigitalCard
          header="CLIENT SATISFACTION"
          iconHeader={<Star />}
          title="4.9/5"
          description="Verified User Rating"
          descriptionIcon={<CircleCheck />}
        />
      </div>
    </div>
  )
}
