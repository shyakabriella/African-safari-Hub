export default function LuxuryHotelCTA() {
  return (
    <section className="w-full flex justify-center items-center mt-10 mb-10">
      
      <div className="w-full max-w-[1120px] flex flex-col items-center text-center gap-[30px] pt-[96px] pb-[80px] px-[40px] md:px-[80px] rounded-[24px] bg-[#8B4513] border border-[#8B4513]/20">
        
        <div className="w-full max-w-[900px]">
          <span className="block font-bold text-[48px] leading-[48px] text-[#FFFFFF]">
            Ready to set the gold standard <br /> in hospitality?
          </span>
        </div>

        <div className="w-full max-w-[900px]">
          <span className="block text-[#E0E0E0] leading-[28px] text-[18px] font-normal">
            Join the elite circle of world-class hotels powered by Regal PMS. Schedule your private executive briefing today.
          </span>
        </div>

        <div className="w-full max-w-[900px] flex flex-col md:flex-row justify-center gap-[16px] mt-4">
          <button className="cursor-pointer w-full md:w-[340px] h-[72px] rounded-[12px] bg-[#8B4513] border-2 border-[#FFFFFF] flex justify-center items-center">
            <span className="font-bold text-[20px] leading-[28px] text-[#FFFFFF]">
              Start Your 14-Day Free Trial
            </span>
          </button>
          <button className="cursor-pointer w-full md:w-[204px] h-[72px] rounded-[12px] bg-[#FFFFFF] border-2 border-[#8B4513]/20 flex justify-center items-center">
            <span className="font-bold text-[20px] leading-[28px] text-[#8B4513]">
              Talk to Sales
            </span>
          </button>
        </div>
      </div>

    </section>
  )
}