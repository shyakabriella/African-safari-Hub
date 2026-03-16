import { CircleCheck } from "lucide-react";

export default function ByeOverbookingCTA() {
  return (
    <div className="w-[1200px] h-[554px] pl-[24px] pr-[24px] pb-[96px]">
      <div className="w-[1152px] h-[458px] text-center justify-center items-center flex flex-col gap-[32px] p-[64px] rounded-[32px] bg-[#8B4513]">
        <div className="w-[800px] h-[96px] pr-[65.77px] pl-[65.77px]">
          <span className="w-[568.46px] h-full font-extrabold leading-[48px] text-[48px] text-white">
            Ready to say goodbye to overbookings forever?
          </span>
        </div>
        
        <div className="w-[600px] h-[56px] pr-[3.14px] pl-[3.14px]">
          <span className="w-[593.72px] h-full font-normal text-[#FFFFFF]/80 text-[20px] leading-[28px]">
            Join 15,000+ hoteliers who trust our Sync engine to manage their properties.
          </span>
        </div>
        
        <div className="w-[412.97px] h-[62px] flex gap-[16px]">
          <button className="w-[207.53px] h-[62px] pr-[32px] pl-[32px] pt-[17px] pb-[17px] bg-white rounded-[12px]">
            <span className="w-[143.53px] h-[28px] font-bold text-[18px] leading-[28px] text-[#8B4513]">
              Get Started Free
            </span>
          </button>
          <button className="w-[189.44px] h-[62px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] bg-[#8B4513]/20 rounded-[12px] border border-[#FFFFFF]/30">
            <span className="w-[123.44px] h-[28px] font-bold text-white text-[18px] leading-[28px]">
              Contact Sales
            </span>
          </button>
        </div>
        
        <div className="w-[170.31px] h-[20px] flex items-center gap-[8px]">
          <div className="w-[15px] h-[15px]">
            <CircleCheck className="text-[#FFFFFF]/70 w-full h-full" />
          </div>
          <span className="w-[147.31px] h-[20px] font-normal text-[14px] leading-[20px] text-[#FFFFFF]/70">
            No credit card required
          </span>
        </div>
      </div>
    </div>
  )
}
