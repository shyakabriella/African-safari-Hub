export default function LuxuryHotelCTA() {
  return (
    <section className="w-full flex justify-center items-center my-10">
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-6 py-16 px-6 md:px-10 rounded-2xl bg-[#8B4513] border border-[#8B4513]/20">
        {/* Title */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl leading-snug font-semibold text-white">
            Ready to set the gold standard in hospitality?
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-sm md:text-base text-[#E0E0E0] leading-relaxed">
            Join the elite circle of world-class hotels powered by Regal PMS.
            Schedule your private executive briefing today.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-3 mt-2">
          <a href="/contact" target="_blank" className="cursor-pointer w-full md:w-[220px] h-11 rounded-xl bg-[#8B4513] border border-white flex justify-center items-center hover:bg-[#7a3d11] transition">
            <span className="font-medium text-sm text-white">
              Start Free Trial
            </span>
          </a>

          <a href="/contact" target="_blank" className="cursor-pointer w-full md:w-[160px] h-11 rounded-xl bg-white border border-[#8B4513]/20 flex justify-center items-center hover:bg-[#f5f5f5] transition">
            <span className="font-medium text-sm text-[#8B4513]">
              Talk to Sales
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
