export default function ReadyToModernize() {
  return (
    <section className="w-full py-16 px-4">
      
      <div className="max-w-5xl mx-auto">
        
        <div className="bg-[#8B4513] rounded-2xl px-6 py-14 text-center flex flex-col items-center gap-6">
          
          {/* Heading */}
          <h2 className="text-[26px] md:text-[36px] font-extrabold text-[#F5E6D3] leading-tight max-w-2xl">
            Ready to modernize your hotel operations?
          </h2>

          {/* Subheading */}
          <p className="text-sm md:text-base text-[#F5E6D3]/90 max-w-xl">
            Join hundreds of hoteliers taking back control of bookings and revenue.
          </p>

          {/* Button */}
          <button className="px-8 py-4 bg-[#F5E6D3] text-[#8B4513] rounded-xl font-bold text-sm md:text-base hover:bg-[#F5E6D3]/90 transition cursor-pointer">
            Book a Free Consultation
          </button>

          {/* Footer text */}
          <p className="text-xs text-white/70">
            No commitment required. Free site audit included.
          </p>

        </div>

      </div>
    </section>
  );
}