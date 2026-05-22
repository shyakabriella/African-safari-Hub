import {
  Star,
  User,
  LayoutDashboard,
  Zap,
  Check,
  Sun,
  Key,
  Quote,
  CheckCircle2,
} from "lucide-react";

export default function page() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#AD6419] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Col: Copy */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-800 text-[10px] font-semibold mb-6 tracking-wide uppercase border border-orange-100">
                Built for Modern Hospitality
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-slate-900">
                Master Your <br />
                <span className="text-[#AD6419]">Front Office</span>
              </h1>
              <p className="text-[12px] text-slate-500 mb-8 leading-relaxed">
                Streamline your hotel operations with our high-performance
                Property Management System. Coordinate guest arrivals, room
                statuses, and real-time occupancy from a single, intuitive
                interface.
              </p>
            </div>

            {/* Right Col: Graphic/UI Mockup */}
            <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto aspect-[4/3] rounded-xl bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/40 p-5 overflow-hidden">
              {/* Fake UI Header */}
              <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-3">
                <div className="flex flex-col gap-1">
                  <div className="h-2.5 w-28 bg-slate-200 rounded-full"></div>
                  <div className="h-2 w-40 bg-slate-100 rounded-full"></div>
                </div>

                <div className="w-7 h-7 rounded-full bg-slate-200"></div>
              </div>

              {/* Fake UI Body - Charts */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                    <div className="h-2 w-14 bg-slate-100 rounded-full"></div>
                  </div>

                  <div className="h-24 w-full bg-blue-50/50 rounded-lg relative overflow-hidden flex items-end">
                    <svg
                      className="absolute bottom-0 w-full h-20 text-blue-400"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M0 100 V 40 Q 10 30, 20 50 T 40 40 T 60 60 T 80 30 T 100 50 V 100 Z"
                        fill="currentColor"
                        opacity="0.2"
                      />
                      <path
                        d="M0 40 Q 10 30, 20 50 T 40 40 T 60 60 T 80 30 T 100 50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-2">
                    <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                    <div className="h-2 w-10 bg-slate-100 rounded-full"></div>
                  </div>

                  <div className="h-20 w-full bg-emerald-50/50 rounded-lg relative overflow-hidden flex items-end">
                    <svg
                      className="absolute bottom-0 w-full h-14 text-[#AD6419]"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M0 100 V 60 Q 15 50, 30 70 T 50 40 T 70 80 T 85 50 T 100 60 V 100 Z"
                        fill="currentColor"
                        opacity="0.1"
                      />
                      <path
                        d="M0 60 Q 15 50, 30 70 T 50 40 T 70 80 T 85 50 T 100 60"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Notification Card */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg shadow-slate-200/40 p-3 flex items-center gap-2 border border-slate-100">
                <div className="bg-orange-50 text-[#AD6419] p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-800">
                    Check-in Complete
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Room 402 • Suite
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 inline-block relative">
              Core Features Designed for Efficiency
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#AD6419] rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-[#AD6419] rounded-xl flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">
                Guest Management
              </h3>
              <p className="text-slate-500 text-[12px] mb-6 leading-relaxed">
                Create personalized experiences with rich guest profiles,
                preference tracking, and detailed stay histories.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[12px] text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-[#AD6419]" strokeWidth={2.5} />
                  VIP Status Recognition
                </li>
                <li className="flex items-center gap-3 text-[12px] text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-[#C29F59]" strokeWidth={2.5} />
                  Automated CRM Sync
                </li>
              </ul>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-[#AD6419] rounded-xl flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">
                Operations Dashboard
              </h3>
              <p className="text-slate-500 text-[12px] mb-6 leading-relaxed">
                Real-time room status, housekeeping management, and maintenance
                tracking from one unified dashboard.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[12px] text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-[#AD6419]" strokeWidth={2.5} />
                  Live Occupancy Map
                </li>
                <li className="flex items-center gap-3 text-[12px] text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-[#C29F59]" strokeWidth={2.5} />
                  Staff Task Assignment
                </li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-[#AD6419] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">
                Automated Check-in/out
              </h3>
              <p className="text-slate-500 text-[12px] mb-6 leading-relaxed">
                Reduce wait times with mobile-first check-in and automated
                billing upon guest departure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[12px] text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-[#AD6419]" strokeWidth={2.5} />
                  Contactless Experience
                </li>
                <li className="flex items-center gap-3 text-[12px] text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-[#C29F59]" strokeWidth={2.5} />
                  Digital Key Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              A Day in the Life with HotelSafari
            </h2>
            <p className="text-slate-500 text-[11px]">
              Seamlessly managing every touchpoint from dawn to dusk.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {/* Item 1 - Left */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                {/* Mobile line connection */}
                <div className="md:hidden absolute left-4 top-5 w-4 h-[2px] bg-slate-100"></div>
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right order-2 md:order-1 mt-2 md:mt-0">
                  <h4 className="text-[14px] font-bold text-slate-900 mb-1">
                    08:00 AM - Morning Rush
                  </h4>
                  <p className="text-[12px] text-slate-500">
                    Automated invoices sent to guests for express checkout.
                    Housekeeping app updates in real-time.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[#AD6419] border-4 border-white shadow-sm flex items-center justify-center z-10 order-1 md:order-2">
                  <Sun className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="hidden md:block w-1/2 order-3"></div>
              </div>

              {/* Item 2 - Right */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:hidden absolute left-4 top-5 w-4 h-[2px] bg-slate-100"></div>
                <div className="hidden md:block w-1/2 order-1"></div>
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center z-10 order-2 md:order-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
                <div className="w-full md:w-1/2 pl-12 md:pl-12 text-left order-3 md:order-3 mt-2 md:mt-0">
                  <h4 className="text-[14px] font-bold text-slate-900 mb-1">
                    01:00 PM - Operations Prep
                  </h4>
                  <p className="text-[12px] text-slate-500">
                    Maintenance logs confirmed. Front office assigns early
                    arrivals to clean rooms instantly.
                  </p>
                </div>
              </div>

              {/* Item 3 - Left */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="md:hidden absolute left-4 top-5 w-4 h-[2px] bg-slate-100"></div>
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right order-2 md:order-1 mt-2 md:mt-0">
                  <h4 className="text-[14px] font-bold text-slate-900 mb-1">
                    04:00 PM - Guest Arrivals
                  </h4>
                  <p className="text-[12px] text-slate-500">
                    VIP alerts trigger for loyalty members. 10-second check-ins
                    via tablet or mobile.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[#AD6419] border-4 border-white shadow-sm flex items-center justify-center z-10 order-1 md:order-2">
                  <Key className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="hidden md:block w-1/2 order-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#fdfbf6] to-[#f8f4e6] rounded-3xl p-12 md:p-16 text-center border border-[#f0e8d5] shadow-xl shadow-[#AD6419]/5 relative overflow-hidden">
            {/* Decorative background blurs */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-40 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to elevate your hospitality?
              </h2>
              <p className="text-slate-600 mb-8 max-w-xl mx-auto text-[12px]">
                Join thousands of properties worldwide that use HotelSafari to
                drive efficiency and deliver unforgettable guest experiences.
              </p>
              <a href="/contact" target="_blank" className="bg-[#AD6419] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#9a5a17] transition-colors shadow-lg shadow-[#AD6419]/20 text-[14px]">
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
