export default function MidSizeHotelsCTA() {
  return (
    <section className="w-full flex justify-center items-center mt-10 mb-10">
      <div className="w-[768px] h-[400px] flex flex-col items-center text-center pt-[96px] pb-[80px] rounded-[24px] pr-[80px] pl-[80px] bg-[#8B4513]/5 border border-[#8B4513]/20">
        <div className="w-[606px] h-[66px]">
          <span className="w-[499.1px] h-full font-bold text-[32px] leading-[48px] text-[#0F172A]">
            Ready to reclaim your hotel&apos;s growth?
          </span>
        </div>

        <div className="w-[606px] h-[46px]">
          <span className="text-[#475569] leading-[28px] text-[14px] font-normal">
            Join hundreds of mid-size hotels already maximizing their potential
            with our platform.
          </span>
        </div>

        <div className="w-[606px] h-[88px] flex justify-center gap-[16px]">
          <a
          href="/contact"
          target="_blank"
          className="cursor-pointer w-[200px] h-[52px] flex items-center justify-center rounded-[12px] bg-[#8B4513]">
            <span className="font-bold text-[15px] leading-[28px] text-[#FFFFFF]">
              Get Started Now
            </span>
          </a>

          <a
          href="/contact"
          target="_blank"
          className="cursor-pointer w-[180px] h-[52px] flex items-center justify-center rounded-[12px] bg-[#FFFFFF] border-2 border-[#8B4513]/20">
            <span className="text-[15px] leading-[28px] font-bold text-[#8B4513]">
              Talk to Sales
            </span>
          </a>
        </div>

        <div className="w-[606px] h-[20px]">
          <span className="font-medium text-[14px] text-[#64748B] leading-[20px]">
            No credit card required • 14-day free trial • Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
