export default function NewsLetter() {
  return (
    <div className="w-full h-[238px] pt-[64px] pb-[64px] bg-[#8B4513]/5 border border-[#E2E8F0] flex justify-center items-center">
      <div className="w-[1280px] h-[108px] flex justify-between items-center pr-[160px] pl-[160px]">
        <div className="w-[436.72px] h-[108px] flex flex-col gap-[16px]">
          <div className="w-full h-[36px]">
            <span className="w-full h-full font-bold text-[30px] leading-[36px] text-[#0F172A]">
              Never miss an industry insight
            </span>
          </div>
          <div className="w-full h-[56px]">
            <span className="w-full h-full text-[18px] text-[#475569] font-normal leading-[28px]">
              Subscribe to our weekly newsletter for curated hospitality
              technology news and expert strategies.
            </span>
          </div>
        </div>
        <div className="w-[471.52px] h-[48px] flex">
          <input
            type="text"
            className="w-[280px] h-[48px] px-[16px] py-[12px] rounded-l-[8px] bg-white border border-[#E2E8F0]"
            placeholder="Your work email"
          />
          <button className="w-[179.52px] h-[48px] cursor-pointer rounded-r-[8px] bg-[#8B4513]">
            <span className="w-[115.52px] h-[24px] text-white leading-[16px] font-bold leading-[24px]">
              Subscribe Now
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
