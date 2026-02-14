"use client";

import WhatsNewMain from "./WhatsNewMain";
import WhatsNewSidebar from "./WhatsNewSidebar";

export default function WhatsNewSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <WhatsNewMain />
          </div>

          <div className="lg:sticky lg:top-[110px]">
            <WhatsNewSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}