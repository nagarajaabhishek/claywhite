import { Metadata } from "next";
import { Suspense } from "react";
import { siteContent } from "@/content/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact WH Advisory Services | Schedule a Fractional Executive Consultation",
  description: "Ready to bring structure, reduce risk, and scale faster? Contact WH Advisory Services to schedule a strategy audit. Fractional COO, CFO, and GRC advisory expertise. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "contact WH Advisory Services",
    "schedule strategy audit",
    "fractional executive consultation",
    "GRC advisory consultation",
    "compliance consultation",
    "fractional COO inquiry",
    "fractional CFO inquiry",
    "compliance consultant Dallas TX",
    "GRC consultant Orange County CA",
    "WH Advisory contact",
    "Clay White contact",
  ],
  openGraph: {
    title: "Contact WH Advisory Services | Schedule a Strategy Audit",
    description: "Get in touch with WH Advisory Services. Schedule a strategy audit for fractional COO, CFO, or GRC executive leadership.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="section-padding bg-white text-charcoal">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Schedule a strategy audit or discuss how WH Advisory can transform your compliance into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div>
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
