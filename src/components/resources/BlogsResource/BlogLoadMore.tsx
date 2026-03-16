export default function BlogLoadMore() {
  return (
    <div className="w-[960px] h-[88px] flex flex-col justify-center items-center gap-[24px] mb-10 mt-2">
      <button className="cursor-pointer w-[180px] h-[48px] pl-[25.16px] pr-[25.17px] pt-[11.5px] pb-[12.5px] rounded-[8px] border-2 border-[#8B4513]">
        <span className="w-[125.67px] h-[20px] text-[14px] font-bold leading-[20px] text-[#8B4513]">
          Load More Articles
        </span>
      </button>
      <div className="w-[131.13px] h-[16px]">
        <button className="cursor-pointer hover:underline w-full h-full text-[12px] font-normal leading-[16px] text-[#64748B]">
          Showing 6 of 42 articles
        </button>
      </div>
    </div>
  )
}
