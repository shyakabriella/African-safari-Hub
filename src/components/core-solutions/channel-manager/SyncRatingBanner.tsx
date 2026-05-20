import { ArrowRight, Play, CheckCircle2, Zap } from "lucide-react";

export default function SyncRatingBanner() {
  return (
    <div className="w-full bg-white pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center py-10">
          
          {/* Left Content */}
          <div className="flex-1">
            {/* Badge */}
            <div className="mb-6 mt-4 inline-flex items-center gap-2 rounded-full border border-[#e8d5c0] bg-[#f6efe9] px-3 py-1">
              <Zap className="h-3 w-3 text-[#AD6419]" />
              <span className="text-[10px] font-semibold tracking-wide text-[#AD6419] uppercase">
                Real-time Channel Manager
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-2xl leading-tight font-bold text-slate-800 md:text-3xl lg:text-4xl">
              Sync Rates & Availability to{" "}
              <span className="text-[#AD6419]">Stop Overbookings</span>
            </h1>

            {/* Description */}
            <p className="text-[14px] text-slate-600 leading-relaxed mb-8">
              Professional-grade synchronization across 450+ booking channels including Booking.com, 
              Expedia, Agoda, and TripAdvisor. Eliminate manual entry errors and protect your 
              hotel&apos;s reputation instantly.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
              href="/contact"
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-[#AD6419] px-6 py-3 font-semibold text-white transition hover:bg-[#8A4F12]">
                Start 14-Day Free Trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Features list */}
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600">14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm text-slate-600">24/7 support</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Professional Card */}
          <div className="flex-1">
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              {/* Card Header */}
              <div className="border-b border-slate-200 px-5 py-3 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-xs text-slate-500 ml-2">dashboard.sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">Total Bookings</p>
                    <p className="text-2xl font-bold text-slate-800">12,847</p>
                    <p className="text-xs text-green-600 mt-1">↑ +23%</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">Revenue</p>
                    <p className="text-2xl font-bold text-slate-800">$2.4M</p>
                    <p className="text-xs text-green-600 mt-1">↑ +18%</p>
                  </div>
                </div>

                {/* Channel List */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Booking.com</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">2s ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Expedia</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">5s ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Agoda</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">3s ago</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">Direct Website</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-green-600">● Synced</span>
                      <span className="text-xs text-slate-400">1s ago</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500 text-center">
                    15,000+ hotels trust our sync engine
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}