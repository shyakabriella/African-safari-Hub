export default function IncreaseCTA() {
  return (
    <div className="w-[1024px] h-[492px] p-[80px] rounded-[24px] bg-[#8B4513] mb-6">

      <div className="w-[864px] h-[332px] flex flex-col gap-[32px] justify-center items-center text-center">
        <div className="w-[672px] h-[96px] pr-[66.16px] pl-[66.16px]">
          <span className="w-[539.67px] h-full font-medium text-white text-[48px] leading-[48px]">
            Ready to increase your direct bookings today?
          </span>
        </div>

        <div className="w-[576px] h-[56px] pr-[18.58px] pl-[18.58px]">
          <span className="w-[538.83px] h-full text-[#F1F5F9] font-light text-[20px] leading-[28px]">
            Join thousands of property owners who have boosted their profit by switching to BookDirect.
          </span>
        </div>

        <div className="w-[864px] h-[64px] flex gap-[15.99px] justify-center">
          <button className="cursor-pointer w-[251.88px] h-[64px] rounded-[12px] bg-white">
            <span className="w-[171.88px] h-[28px] text-[#8B4513] font-light leading-[28px] text-[18px]">
              Get Started for Free
            </span>
          </button>
          <button className="cursor-pointer w-[232.45px] h-[64px] rounded-[12px] bg-[#8B4513]/20 border border-[#FFFFFF]/30">
            <span className="w-[150.45px] h-[28px] font-light text-white text-[18px] leading-[28px]">
              Schedule a Demo
            </span>
          </button>
        </div>
        <span className="w-[256.66px] h-[20px] font-extralight text-[14px] leading-[20px] text-[#FFFFFF]/60">
          No credit card required. 14-day free trial.
        </span>
      </div>

    </div>
  )
}
