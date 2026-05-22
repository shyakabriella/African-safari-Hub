export default function ApartmentsBnbCTA() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[1280px] h-[522px] pt-[96px] pb-[96px] pr-[256px] pl-[256px] bg-[#8B4513]">
        <div className="w-[768px] h-[330px] flex flex-col text-center gap-[32px]">
          <div className="w-full h-[50px]">
            <span className="w-[608.32px] h-full font-extrabold text-[40px] leading-[48px] text-white">
              Ready to scale your rental business?
            </span>
          </div>
          <div className="w-full h-[56px]">
            <span className="text-white leading-[28px] text-[15px] font-normal">
              Join thousands of hosts who have automated their workflow and
              increased their <br /> profit with StaySync.
            </span>
          </div>
          <div className="w-full h-[62px] flex justify-center gap-[16px]">
            <a href="/contact" target="_blank" className="w-[200px] h-[50px] cursor-pointer flex items-center justify-center rounded-[8px] bg-[#FFFFFF]">
              <span className="font-bold text-[13px] leading-[28px] text-[#8B4513] text-center">
                Start 14-Day Free Trial
              </span>
            </a>

            <a href="/contact" target="_blank" className="w-[200px] h-[50px] cursor-pointer flex items-center justify-center rounded-[8px] bg-[#8B4513]/20 border border-[#FFFFFF]/30">
              <span className="text-[13px] leading-[28px] font-bold text-white text-center">
                Talk to Sales
              </span>
            </a>
          </div>
          <div className="w-full h-[20px]">
            <span className="font-normal text-[14px] text-white leading-[20px]">
              No credit card required. Cancel anytime.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
