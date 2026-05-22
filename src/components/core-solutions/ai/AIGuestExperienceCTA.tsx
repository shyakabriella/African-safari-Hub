export default function AIGuestExperienceCTA() {
  return (
    <div className="w-full py-5 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl bg-gradient-to-br from-[#8B4513]/5 to-[#8B4513]/10 border border-[#8B4513]/20 p-6 md:p-10 text-center">
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3">
            Transform Your Guest Experience Today
          </h2>

          <p className="text-sm md:text-base text-[#475569] max-w-xl mx-auto mb-6 leading-relaxed">
            Join hundreds of forward-thinking hotels already using HotelAI to automate operations and delight guests.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" target="_blank" className="px-6 py-2.5 rounded-lg bg-[#8B4513] text-white text-sm font-semibold hover:bg-[#6B3410] transition shadow-md hover:shadow-lg">
              Start Free Trial
            </a>

            <a href="/contact" target="_blank" className="px-6 py-2.5 rounded-lg bg-white text-[#8B4513] text-sm font-semibold border border-[#8B4513] hover:bg-[#8B4513]/5 transition">
              Talk To Sales
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}