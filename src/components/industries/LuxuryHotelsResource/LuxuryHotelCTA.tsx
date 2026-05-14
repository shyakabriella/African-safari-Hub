export default function LuxuryHotelCTA() {
  return (
    <section className="w-full flex justify-center items-center mt-10 mb-10">
      
      <div className="w-full max-w-[1120px] flex flex-col items-center text-center gap-[30px] pt-[96px] pb-[80px] px-[40px] md:px-[80px] rounded-[24px] bg-[#8B4513] border border-[#8B4513]/20">
        
        <div className="w-full max-w-[900px]">
          <span className="block font-bold text-[35px] leading-[48px] text-[#FFFFFF]">
            Ready to set the gold standard in hospitality?
          </span>
        </div>

        <div className="w-full max-w-[900px]">
          <span className="block text-[#E0E0E0] leading-[28px] text-[13px] font-normal">
            Join the elite circle of world-class hotels powered by Regal PMS. Schedule your private executive briefing today.
          </span>
        </div>

        <div className="w-full max-w-[900px] flex flex-col md:flex-row justify-center gap-[16px] mt-4">
          <button className="cursor-pointer w-full md:w-[310px] h-[62px] rounded-[12px] bg-[#8B4513] border-2 border-[#FFFFFF] flex justify-center items-center">
            <span className="font-bold text-[14px] leading-[28px] text-[#FFFFFF]">
              Start Your 14-Day Free Trial
            </span>
          </button>
          <button className="cursor-pointer w-full md:w-[170px] h-[62px] rounded-[12px] bg-[#FFFFFF] border-2 border-[#8B4513]/20 flex justify-center items-center">
            <span className="font-bold text-[14px] leading-[28px] text-[#8B4513]">
              Talk to Sales
            </span>
          </button>
        </div>
      </div>

    </section>
  )
}