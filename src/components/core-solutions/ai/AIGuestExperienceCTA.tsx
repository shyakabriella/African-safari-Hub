// export default function AIGuestExperienceCTA() {
//   return (
//     <div className="w-[1280px] h-[726px] pb-[96px] pr-[80px] pl-[80px]">
//       <div className="w-[1120px] h-[534px] flex flex-col text-center justify-center items-center gap-[10px] p-[80px] rounded-[32px] bg-[#8B4513]/5 border border-[#8B4513]/10">
//         <div className="w-[900px] h-[144px] pr-[41.72px] pl-[41.72px]">
//           <span className="w-[716.55px] h-full text-[48px] font-extrabold leading-[48px] text-[#0F172A]">
//             Transform Your Guest Experience Today
//           </span>
//         </div>

//         <div className="w-[780px] h-[56px] pr-[41.94px] pl-[41.92px]">
//           <span className="w-[516.14px] h-full font-normal text-[20px] leading-[28px] text-[#475569]">
//             Join hundreds of forward-thinking hotels already using HotelAI to automate operations and delight guests.
//           </span>
//         </div>

//         <div className="w-[492.04px] h-[56px] flex gap-[16.01px] mt-10">
//           <button className="cursor-pointer w-[250.67px] h-[56px] bg-[#8B4513] rounded-[12px] pr-[40px] pl-[40px]">
//             <span className="w-[170.67px] h-[28px] font-bold text-[18px] text-white leading-[28px]">
//               Start Free Trial
//             </span>
//           </button>

//           <button className="cursor-pointer w-[225.36px] h-[56px] bg-[#FFFFFF] rounded-[12px] pr-[40px] pl-[40px] border border-[#8B4513]">
//             <span className="w-[141.36px] h-[28px] text-[18px] font-bold leading-[18px] text-[#8B4513]">
//               Talk To Sales
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }












// src/components/core-solutions/ai/AIGuestExperienceCTA.tsx

export default function AIGuestExperienceCTA() {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-[#8B4513]/5 to-[#8B4513]/10 border border-[#8B4513]/20 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            Transform Your Guest Experience Today
          </h2>

          <p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mb-8">
            Join hundreds of forward-thinking hotels already using HotelAI to automate operations and delight guests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-[#8B4513] text-white font-semibold hover:bg-[#6B3410] transition shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>

            <button className="px-8 py-3 rounded-xl bg-white text-[#8B4513] font-semibold border border-[#8B4513] hover:bg-[#8B4513]/5 transition">
              Talk To Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}