export default function SuccessStoryCTA() {
  return (
    <section className="w-full flex justify-center items-center my-10">
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-6 py-16 px-6 md:px-12 rounded-2xl bg-[#261405] border border-[#8B4513]/20">
        {/* Title */}
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl leading-snug text-white font-semibold">
            Ready to write your success story?
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-sm md:text-base text-[#CBD5E1] leading-relaxed">
            Join 2,500+ properties growing their revenue and simplifying their
            stack with HotelTech.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-3 mt-2">
          <a href="/contact" target="_blank" className="cursor-pointer w-full md:w-[180px] h-12 rounded-xl bg-[#8B4513] flex justify-center items-center hover:bg-[#6f3610] transition">
            <span className="font-medium text-sm text-white">
              Schedule Demo
            </span>
          </a>

          <a href="/pricing/monthly-plans" target="_blank" className="cursor-pointer w-full md:w-[180px] h-12 rounded-xl bg-white/10 backdrop-blur-md border border-[#8B4513]/30 flex justify-center items-center hover:bg-white/15 transition">
            <span className="font-medium text-sm text-white/70">
              View Pricing
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
