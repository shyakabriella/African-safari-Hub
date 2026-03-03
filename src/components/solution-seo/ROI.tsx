import { PiggyBank, TrendingUp, UserPlus } from "lucide-react";
import RoiCard from "./RoiCard";

export default function ROI() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-7xl h-151.5 pr-40 pl-40 pt-24 pb-24 bg-[#F3EFEA]">
        <div className="w-[960px] h-[414px] flex justify-between items-center gap-[64px]">
          
          <div className="w-[415px] h-[332px] flex flex-col gap-[32px]">
            <div className="w-[415px] h-[48px]">
              <span className="text-[48px] text-[#4A3B2A] font-extrabold w-[415px] h-[48px]">
                ROI You Can See
              </span>
            </div>

            <div className="w-[415px] h-[252px] flex flex-col gap-[24px]">
              <RoiCard
                icon={<TrendingUp className="text-[#7B6B5A]" />}
                title="Higher Rankings"
                description="Appear at the top for 'Hotels in Kigali' or 'Luxury Stay Rwanda'."
              />
              <RoiCard
                icon={<UserPlus className="text-[#7B6B5A]" />}
                title="Direct Traffic"
                description="Skip the middlemen and their 20% commissions."
              />
              <RoiCard
                icon={<PiggyBank className="text-[#7B6B5A]" />}
                title="Lower Acquisition Cost"
                description="SEO is an asset that pays dividends over time, unlike paid ads."
              />
            </div>
          </div>

          <div className="w-[481px] h-[414px] flex flex-col gap-[32px] rounded-[24px] bg-[#FDF9F5] border border-[#E8E1D8] p-[32px]">

            <div className="w-[415px] h-[28px] flex items-center justify-between">
              <div className="w-[209.17px] h-[28px]">
                <span className="w-full h-full font-bold text-[20px] text-[#4A3B2A]">
                  Monthly Performance
                </span>
              </div>
              <div className="w-[61.82px] h-[24px] flex justify-between items-center gap-[5.99px]">
                <div className="w-[15px] h-[15px]">
                  <TrendingUp className="text-[#6A4F3C] h-full w-full" />
                </div>
                <span className="w-[42.83px] h-[24px] text-[16px] font-bold text-[#6A4F3C]">
                  +42%
                </span>
              </div>
            </div>

            <div className="w-[415px] h-[240px] flex gap-[12px] items-end pr-[16px] pl-[16px]">
              <div className="w-[53.83px] h-[76.8px] bg-[#E8E1D8] rounded-tr-sm rounded-tl-sm"></div>
              <div className="w-[53.83px] h-[115.19px] bg-[#E8E1D8] rounded-tr-sm rounded-tl-sm"></div>
              <div className="w-[53.83px] h-[153.59px] bg-[#7B6B5A] rounded-tr-sm rounded-tl-sm"></div>
              <div className="w-[53.83px] h-[140.8px] bg-[#7B6B5A] rounded-tr-sm rounded-tl-sm"></div>
              <div className="w-[53.83px] h-[204.8px] bg-[#7B6B5A] rounded-tr-sm rounded-tl-sm"></div>
              <div className="w-[53.83px] h-[243.19px] bg-[#7B6B5A] rounded-tr-sm rounded-tl-sm"></div>
            </div>

            <div className="w-[415px] h-[16px] flex justify-between items-center">
              {["Jan","Feb","Mar","Apr","May","Jun"].map((month, idx) => (
                <div key={idx} className="h-[16px] w-[24px]">
                  <span className="w-full h-full text-[12px] text-[#A19182] font-bold">
                    {month}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}