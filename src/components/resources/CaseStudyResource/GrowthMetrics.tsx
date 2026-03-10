import { ArrowRight, Clock, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

export default function GrowthMetrics() {
  return (
    <div className="w-[1120px] h-[641px] flex gap-[32px] mb-4">
      <div className="w-[352px] h-[641px] p-[24px] rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0]">
        <div className="relative w-[302px] h-[216px] pb-[24px]">
          <Image src={"/growth-image-one.png"} alt="Growth" fill className="" />
        </div>
        <div className="w-[302px] h-[68.5px] mt-4">
          <div className="w-full h-[52.5px] flex flex-col gap-[8.5px]">
            <span className="w-[70.11px] h-[16px] font-bold text-[12px] leading-[16px] text-[#8B4513]">
              BOUTIQUE
            </span>
            <div className="w-[302px] h-[28px]">
              <span className="w-full h-full font-bold text-[#0F172A] text-[20px] leading-[28px]">
                The Urban Attic
              </span>
            </div>
          </div>
        </div>
        <div className="w-[302px] h-[87.5px] pb-[24px]">
          <div className="w-full h-[63.5px]">
            <span className="w-full h-[60px] text-[14px] text-[#475569] font-normal leading-[20px]">
              Automated personalization led to record-breaking guest
              satisfaction scores and repetitive direct stays.
            </span>
          </div>
        </div>
        <div className="w-[302px] h-[199px] pb-[24px]">
          <div className="w-[302px] h-[175px] flex flex-col gap-[8px] p-[16px] rounded-[8px] bg-[#F8FAFC]">
            <div className="w-[270px] h-[96px] flex items-end">
              <div className="w-[54px] h-[28.8px] rounded-tl-[2px] rounded-tr-[2px] bg-[#8B4513]/20"></div>
              <div className="w-[54px] h-[43.19px] bg-[#8B4513]/30 rounded-tl-[2px] rounded-tr-[2px]"></div>
              <div className="w-[54px] h-[38.39px] bg-[#8B4513]/40 rounded-tl-[2px] rounded-tr-[2px]"></div>
              <div className="w-[54px] h-[62.39px] bg-[#8B4513]/60 rounded-tl-[2px] rounded-tr-[2px]"></div>
              <div className="w-[54px] h-[86.39px] bg-[#8B4513] rounded-tl-[2px] rounded-tr-[2px]"></div>
            </div>
            <div className="w-[270px] h-[15px] flex justify-between items-center">
              <div className="w-[11.89px] h-[15px]">
                <span className="w-full h-full font-bold text-[10px] leading-[15px] text-[#94A3B8]">
                  Q1
                </span>
              </div>
              <div className="w-[13.39px] h-[15px]">
                <span className="font-bold leading-[15px] text-[10px] text-[#94A3B8]">
                  Q4
                </span>
              </div>
            </div>
            <div className="w-[270px] h-[16px] text-center">
              <span className="text-[#059669] w-[140.58px] h-full font-bold text-[12px] leading-[16px]">
                85% NPS Score Increase
              </span>
            </div>
            <div className="cursor-pointer hover:underline w-[290.93px] h-[20px] pr-[210.47px] mt-8 flex justify-center items-center">
              <span className="w-[71.53px] h-full text-[#8B4513] font-bold text-[10px] leading-[20px]">
                View Story
              </span>
              <ArrowRight className="w-[12px] h-[12px] text-[#8B4513]" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[352px] h-[641px] p-[24px] rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0]">
        <div className="relative w-[302px] h-[216px] pb-[24px]">
          <Image src={"/growth-image-two.png"} alt="Growth" fill className="" />
        </div>
        <div className="w-[302px] h-[68.5px] mt-4">
          <div className="w-full h-[52.5px] flex flex-col gap-[8.5px]">
            <span className="w-[70.11px] h-[16px] font-bold text-[12px] leading-[16px] text-[#8B4513]">
              MID-IZE
            </span>
            <div className="w-[302px] h-[28px]">
              <span className="w-full h-full font-bold text-[#0F172A] text-[20px] leading-[28px]">
                Metro Business Suites
              </span>
            </div>
          </div>
        </div>
        <div className="w-[302px] h-[166.5px] pb-[24px]">
          <div className="w-full h-[63.5px]">
            <span className="w-full h-[60px] text-[14px] text-[#475569] font-normal leading-[20px]">
              Operational efficiency improved by 35% <br /> through integrated
              PMS and staff communication tools.
            </span>
          </div>
        </div>
        <div className="w-[302px] h-[120px] pb-[24px]">
          <div className="w-full h-[96px] flex flex-col gap-[16px]">
            <div className="w-[302px] flex gap-[12px] items-center">
              {/* Clock Icon Box */}
              <div className="w-[40px] h-[40px] rounded-full bg-[#F1F5F9] flex justify-center items-center">
                <Clock className="w-5 h-5 text-[#64748B]" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[#64748B] leading-[15px]">
                  BEFORE: MANUAL ENTRY
                </span>
                <span className="text-[14px] font-bold text-[#0F172A] leading-[20px]">
                  12 mins per guest
                </span>
              </div>
            </div>

            <div className="w-[302px] flex gap-[12px] items-center mt-2">
              {/* Zap Icon Box */}
              <div className="w-[40px] h-[40px] rounded-full bg-[#8B4513]/10 flex justify-center items-center">
                <Zap className="w-5 h-5 text-[#8B4513]" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold text-[#64748B] leading-[15px]">
                  AFTER: AUTOMATED
                </span>
                <span className="text-[14px] font-bold text-[#0F172A] leading-[20px]">
                  45 seconds per guest
                </span>
              </div>
            </div>
          </div>
        </div>

        <button className="hover:underline flex items-center cursor-pointer gap-[4px]">
          {/* Text */}
          <span className="text-[14px] font-bold text-[#8B4513]">
            View Story
          </span>

          {/* Arrow */}
          <div className="w-[9px] h-[8px] relative">
            <Image
              src="/arrow-no-tail.png"
              alt="Arrow"
              fill
              className="object-contain"
            />
          </div>
        </button>
      </div>

      <div className="w-[352px] h-[641px] gap-[16px] p-[24px] rounded-[12px] bg-[#FFFFFF] border border-[#E2E8F0]">
        <div className="w-[302px] h-[24px]">
          <span className="w-full h-full text-[16px] font-bold leading-[24px] text-[#0F172A]">
            Aggregate Client Growth
          </span>
        </div>

        <div className="w-[302px] flex items-end gap-1 mt-4">
          <span className="text-[#0F172A] text-[30px] font-extrabold leading-[36px]">
            +12.4M
          </span>
          <span className="text-[12px] text-[#64748B] font-medium leading-[16px]">
            In Direct Revenue
          </span>
        </div>

        <div className="w-[302px] flex items-center gap-1 mt-3">
          <TrendingUp className="w-[12px] h-[7px] text-[#10B981]" />
          <span className="text-[14px] font-bold text-[#059669] leading-[20px]">
            +22% YoY
          </span>
          <span className="text-[14px] font-normal text-[#64748B] leading-[20px] pl-1">
            overall average
          </span>
        </div>

        <div className="relative w-[300px] h-[260px] p-3 mt-5 bg-white border border-[#E2E8F0] rounded-xl shadow-md overflow-hidden mx-auto">
          <Image
            src="/brown-arrow-going-up.jpg"
            alt="brown arrow going up"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-[302px] h-[17px] mt-1 flex justify-between items-center">
          <div className="w-[47.67px] h-[17px]">
            <span className="w-full h-full text-[11px] font-bold leading-[16.5px] text-[#94A3B8]">
              Jan 2023
            </span>
          </div>
          <div className="w-[19.28px] h-[17px]">
            <span className="w-full h-full text-[11px] font-bold leading-[16.5px] text-[#94A3B8]">
              Jun
            </span>
          </div>
          <div className="w-[49.61px] h-[17px]">
            <span className="w-full h-full text-[11px] font-bold leadnig-[16.5px] text-[#94A3B8]">
              Dec 2023
            </span>
          </div>
        </div>

        <div className="w-[302px] pt-[16px] border-t border-[#E2E8F0] mt-15">
          <div className="text-center">
            <span className="text-[#64748B] text-[12px] leading-[16px] font-normal">
              &quot;The transition was seamless. We saw ROI in less than <br />
              3 months.&quot; — GM, Coastal Retreat
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
