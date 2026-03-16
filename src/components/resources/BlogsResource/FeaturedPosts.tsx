import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeaturedPosts() {
  return (
      <div className="flex w-[960px] h-[549px] pb-[16px] mt-15 rounded-[12px] bg-white border border-[#F1F5F9]">
        <div className="w-[574.8px] relative h-[531px]">
          <Image
            src={`/featured-post.png`}
            alt=""
            fill
            className="absolute rounded-[12px]"
          />
        </div>
        <div className="w-[383.2px] h-[531px] flex flex-col gap-[16px] p-[48px]">
          <div className="w-[287.2px] h-[24px] flex gap-[8px]">
            <div className="w-[152.53px] flex justify-center items-center text-center h-[24px] pt-[4px] pb-[4px] pr-[12px] pl-[12px] rounded-[9999px] bg-[#8B4513]/10">
              <span className="w-[128.53px] h-[16px] font-bold text-[12px] text-[#8B4513] leading-[16px]">
                FEATURED ANALYSIS
              </span>
            </div>
            <div className="w-[65.22px] h-[16px]">
              <span className="w-full h-full font-normal text-[12px] leading-[16px] text-[#94A3B8]">
                12 Oct 2023
              </span>
            </div>
          </div>
          <div className="w-[287.2px] h-[113px]">
            <span className="w-full h-full text-[30px] font-bold leading-[37.5px] text-[#0F172A]">
              The Future of AI in Revenue Management
            </span>
          </div>
          <div className="w-[287.2px] h-[130px]">
            <span className="w-full h-full font-normal text-[#475569] text-[16px] leading-[26px]">
              Discover how proprietary machine learning algorithms are reshaping
              dynamic pricing strategies, allowing hotels to achieve
              record-breaking RevPAR in volatile markets.
            </span>
          </div>
          <div className="w-full h-[32px] flex gap-[16px] items-center">
            <div className="relative w-[32px] h-[32px]">
              <Image
                src="/user-one.png"
                alt="User One"
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className="w-[110.13px] h-[30px] flex flex-col">
              <div className="w-full h-[14px]">
                <span className="font-bold text-[14px] leading-[14px] text-[#0F172A]">
                  Sarah Jenkins
                </span>
              </div>
              <div className="w-full h-[16px]">
                <span className="font-normal text-[12px] leading-[16px] text-[#64748B]">
                  Chief Data Scientist
                </span>
              </div>
            </div>
          </div>
          <div className="w-[174.26px] h-[64px] pt-[16px]">
            <button className="cursor-pointer w-full h-[48px] flex items-center justify-center gap-2 px-[24px] rounded-[8px] bg-[#8B4513]">
              <span className="font-bold text-[13px] leading-[20px] text-white">
                Read Full Article
              </span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
  );
}
