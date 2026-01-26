import { Metadata } from "next";
import { siteContent } from "@/content/site";
import FrameworkList from "@/components/FrameworkList";
import CTA from "@/components/CTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "GRC & Regulatory Strategy | SOC 2, HIPAA, SOX, NIST Compliance",
  description: "GRC framework implementation and audit readiness. Expert SOC 2, NIST, HIPAA, SOX, and SEC compliance consulting for investor-ready growth. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "grc advisory",
    "soc 2 compliance",
    "hipaa compliance",
    "sox compliance",
    "nist compliance",
    "sec compliance",
    "audit readiness",
    "compliance consultant",
    "grc framework",
    "dallas grc consultant",
    "orange county compliance",
  ],
  openGraph: {
    title: "GRC & Regulatory Strategy | WH Advisory Services",
    description: "Framework implementation and audit readiness. SOC 2, NIST, HIPAA, SOX, SEC compliance expertise for investor-ready growth.",
    type: "website",
  },
};

export default function GRCRegulatoryPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'GRC & Regulatory Strategy',
          name: 'GRC Advisory and Compliance Consulting',
          description: siteContent.services.grc.description,
          provider: {
            '@type': 'Organization',
            name: 'WH Advisory Services',
          },
          areaServed: ['United States'],
          serviceOutput: [
            'SOC 2 Type I & II readiness',
            'NIST & ISO Security Standards implementation',
            'HIPAA & Healthcare Regulatory Compliance',
            'SOX & SEC Financial Controls',
            'Third-Party Risk Management',
          ],
        }}
      />
      <div>
      <section className="section-padding bg-white text-charcoal">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {siteContent.services.grc.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {siteContent.services.grc.description}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-dark mb-8">Frameworks & Standards</h2>
            <FrameworkList />

            {siteContent.services.grc.coreServices && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-dark mb-8">Core Services</h2>
                <div className="space-y-6">
                  {siteContent.services.grc.coreServices.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-gold">
                      <h3 className="text-xl font-bold text-gray-dark mb-2">{service.name}</h3>
                      <p className="text-charcoal">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Sector-Specific Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {siteContent.sectors.map((sector, idx) => (
                  <div key={idx} className="bg-white rounded p-4">
                    <h4 className="font-bold text-gray-dark mb-2">{sector.name}</h4>
                    <p className="text-sm text-charcoal">{sector.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-dark mb-4">Audit Readiness & Remediation</h3>
              <p className="text-charcoal mb-4">
                We don&apos;t just check boxes—we build resilient compliance frameworks that support growth. Our approach includes:
              </p>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Gap assessment and risk analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Framework implementation with practical, scalable processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Audit preparation and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Ongoing compliance monitoring and remediation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">•</span>
                  <span>Vendor and third-party risk management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        primaryText="Schedule a Strategy Audit"
        secondaryText="Learn About Fractional Leadership"
        primaryHref="/contact"
        secondaryHref="/services/fractional-leadership"
      />
    </div>
    </>
  );
}
