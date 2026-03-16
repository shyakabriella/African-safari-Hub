"use client";

import { Mail, MessageSquare, HelpCircle } from "lucide-react";

export default function SupportSection() {
  return (
    <div className="mt-20 mb-16 px-4">
      <div className="max-w-4xl mx-auto bg-[#8B4513] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />

        <div className="relative z-10">

          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Still have questions?
          </h2>

          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Our support team is available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <button className="cursor-pointer flex items-center gap-2 px-8 py-3.5 bg-white text-[#8B4513] font-bold rounded-xl hover:bg-gray-50 transition shadow-lg">
              <Mail className="w-5 h-5" />
              Contact Support
            </button>

            <button className="cursor-pointer flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition shadow-lg">
              <MessageSquare className="w-5 h-5" />
              Live Chat
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}