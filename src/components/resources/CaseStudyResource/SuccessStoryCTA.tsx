export default function SuccessStoryCTA() {
  return (
    <section className="w-full flex justify-center items-center mt-10 mb-10">
      <div className="w-full max-w-[1120px] flex flex-col items-center text-center gap-[30px] pt-[96px] pb-[80px] px-[40px] md:px-[80px] rounded-[24px] bg-[#261405] border border-[#8B4513]/20">
        <div className="w-full max-w-[900px]">
          <span className="block font-bold text-[48px] leading-[48px] text-[#FFFFFF]">
            Ready to write your success story?
          </span>
        </div>

        <div className="w-full max-w-[900px]">
          <span className="block text-[#CBD5E1] leading-[28px] text-[18px] font-normal">
            Join 2,500+ properties growing their revenue and simplifying their{" "}
            <br /> stack with HotelTech.
          </span>
        </div>

        <div className="w-full max-w-[900px] flex flex-col md:flex-row justify-center gap-[16px] mt-4">
          <button className="cursor-pointer w-full md:w-[240px] h-[72px] rounded-[12px] bg-[#8B4513]  flex justify-center items-center">
            <span className="font-bold text-[20px] leading-[28px] text-[#FFFFFF]">
              Schedule a Demo
            </span>
          </button>
          <button
            className="cursor-pointer w-full md:w-[240px] h-[72px] rounded-[12px] bg-white/10 backdrop-blur-md border border-[#8B4513]/30  flex justify-center items-center"
          >
            <span className="font-bold text-[20px] leading-[28px] text-[#FFFFFF]/50">
              View Pricing
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
