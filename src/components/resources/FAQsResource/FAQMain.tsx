import { Settings, CreditCard, ShieldCheck } from "lucide-react";
import FAQCategory from "./FAQCategory";
import FAQItem from "./FAQItem";
import SupportSection from "./SupportSection";

export default function FAQMain() {
  return (
    <div className="min-h-screen bg-[#FDFBF9]">
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Expert answers to common questions about setting up, managing,
            and securing your hotel operations with HotelPro.
          </p>
        </div>

        <div className="space-y-12">

          <FAQCategory icon={Settings} title="Getting Started & Setup">
            <FAQItem
              question="How do I set up my hotel profile?"
              answer={
                <p>
                  Navigate to{" "}
                  <strong className="text-[#8B4513]">
                    Settings &gt; Hotel Profile
                  </strong>
                  . Upload your logo, define room types, set tax rates,
                  and configure contact details.
                </p>
              }
            />

            <FAQItem
              question="Can I import existing guest data?"
              answer={
                <p>
                  Yes. Upload CSV or Excel files from the Guests tab.
                  A template is provided to ensure proper formatting.
                </p>
              }
            />
          </FAQCategory>

          <FAQCategory icon={CreditCard} title="Pricing & Plans">
            <FAQItem
              question="What is the cost per room?"
              answer={
                <p>
                  Pricing depends on the number of rooms. We offer plans
                  for small hotels up to enterprise chains.
                </p>
              }
            />

            <FAQItem
              question="Is there a free trial available?"
              answer={
                <p>
                  Yes — a full 14-day free trial with no credit card required.
                </p>
              }
            />
          </FAQCategory>

          <FAQCategory icon={ShieldCheck} title="Security & Data">
            <FAQItem
              question="How secure is my guest information?"
              answer={
                <p>
                  Guest data is encrypted in transit and at rest using
                  industry-standard security protocols.
                </p>
              }
            />

            <FAQItem
              question="Where is the data hosted?"
              answer={
                <p>
                  Data is stored on secure cloud servers across multiple
                  regions for redundancy and disaster recovery.
                </p>
              }
            />
          </FAQCategory>

        </div>

        <SupportSection />

      </main>
    </div>
  );
}