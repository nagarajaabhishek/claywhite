 "use client";

import { useState } from "react";
import { siteContent } from "@/content/site";

export default function CompanyServices() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (idx: number) => {
    setExpandedCards((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="company-services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 text-center uppercase">
          Company Services
        </h2>
        <p className="text-xl text-charcoal text-center mb-12 max-w-4xl mx-auto">
          {siteContent.services.companyServicesIntro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {siteContent.services.coreServices?.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 border-2 border-gray-200 hover:border-gold transition-all shadow-sm flex flex-col">
              <div className={`${expandedCards.includes(idx) ? "" : "max-h-[12rem] overflow-hidden"}`}>
                <h3 className="text-xl font-bold text-gold mb-2">
                  {service.name}
                </h3>
                <p className="text-lg font-bold text-gray-dark mb-4 min-h-[3rem]">
                  {service.subtitle}
                </p>
                <p className="text-charcoal leading-relaxed mb-6">
                  {service.description}
                </p>
                <div>
                  <p className="font-bold text-sm text-gray-dark uppercase tracking-wider mb-3">Key Capabilities</p>
                  <ul className="text-sm text-charcoal space-y-2 mb-6">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-sm text-gray-dark uppercase tracking-wider mb-3">Business Impact</p>
                  <ul className="text-sm text-charcoal space-y-2">
                    {service.impact.map((imp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gold mr-2">•</span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleCard(idx)}
                className="mt-6 text-gold font-bold hover:underline text-left"
              >
                {expandedCards.includes(idx) ? "Less" : "More"}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-charcoal text-white rounded-xl p-10 shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">{siteContent.services.integratedLeadership.title}</h3>
          <div className="w-20 h-1 bg-gold mb-6"></div>
          <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-wrap">
            {siteContent.services.integratedLeadership.description}
          </p>
        </div>
      </div>
    </section>
  );
}
