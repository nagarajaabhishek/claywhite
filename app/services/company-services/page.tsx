import { Metadata } from "next";
import { siteContent } from "@/content/site";
import FrameworkList from "@/components/FrameworkList";
import CTA from "@/components/CTA";
import ChallengeInput from "@/components/ChallengeInput";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Company Services | SOC 2, HIPAA, SOX, NIST, ISO 27001 | WH Advisory",
  description: "Transform compliance from a cost center to a strategic asset. WH Advisory delivers SOC 2, NIST, ISO 27001, HIPAA, GAPP, SOX, and SEC cybersecurity compliance consulting — with audit readiness and investor-ready governance frameworks. Serving Dallas, TX and Orange County, CA.",
  keywords: [
    "company services",
    "GRC advisory",
    "SOC 2 compliance",
    "SOC 2 Type II readiness",
    "HIPAA compliance",
    "SOX compliance",
    "NIST compliance",
    "ISO 27001",
    "SEC cybersecurity compliance",
    "GAPP compliance",
    "CCPA compliance",
    "enterprise risk management",
    "third party risk management",
    "vendor risk management",
    "audit readiness",
    "compliance framework implementation",
    "information security governance",
    "data privacy compliance",
    "regulatory compliance consulting",
    "GRC consultant Dallas TX",
    "GRC consultant Orange County CA",
    "investor ready compliance",
    "cybersecurity governance",
  ],
  openGraph: {
    title: "Company Services | SOC 2, HIPAA, SOX, NIST | WH Advisory Services",
    description: "From compliance burden to strategic asset. SOC 2, NIST, ISO 27001, HIPAA, GAPP, SOX, and SEC compliance expertise for audit-ready, investor-ready growth.",
    type: "article",
  },
};

export default function CompanyServicesPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Company Services',
          name: 'Company Services and Compliance Consulting',
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
              Company Services
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

              {siteContent.services.coreServices && (
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-dark mb-8">Core Services</h2>
                  <div className="space-y-6">
                    {siteContent.services.coreServices.map((service: { name: string; description: string }, idx: number) => (
                      <div key={idx} className="bg-white rounded-lg p-6 border-l-4 border-gold shadow-sm">
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
                  {siteContent.sectors.list.map((sector: { name: string; description: string }, idx: number) => (
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

        <ChallengeInput />

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
