import { Metadata } from "next";
import { siteContent } from "@/content/site";
import Timeline from "@/components/Timeline";
import LogoCloud from "@/components/LogoCloud";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Clay White | 20+ Years C-Suite GRC Experience",
  description: "Clay White brings 20+ years of C-suite experience in Governance, Risk, and Compliance. Executive leadership at Maximus, Title365, Aseptic Technology, and founder of Casablanca Cocktails. Based in Dallas, TX and Orange County, CA.",
  keywords: [
    "clay white",
    "grc executive",
    "compliance executive",
    "c-suite experience",
    "fractional executive",
    "dallas compliance consultant",
    "orange county grc",
  ],
  openGraph: {
    title: "About Clay White | WH Advisory Services",
    description: "20+ years of C-suite experience in GRC. Executive leadership at Maximus, Title365, Aseptic Technology, and founder of Casablanca Cocktails.",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData type="Person" />
      <div>
      <section className="section-padding bg-white text-charcoal">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Clay White</h1>
            <p className="text-xl text-gray-700 mb-4">
              {siteContent.principal.name}
            </p>
            <p className="text-lg text-gray-600">
              {siteContent.principal.title}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-charcoal mb-6 leading-relaxed">
                {siteContent.about.narrative}
              </p>
              <p className="text-lg text-charcoal mb-6">
                {siteContent.principal.bio}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-dark mb-4">Value Proposition</h2>
              <p className="text-charcoal leading-relaxed">
                {siteContent.about.valueProposition}
              </p>
            </div>

            {siteContent.about.problemsWeSolve && (
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-dark mb-4">The Problems We Solve</h2>
                <ul className="space-y-3 text-charcoal">
                  {siteContent.about.problemsWeSolve.map((problem, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-3">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {siteContent.about.roi && (
              <div className="bg-gray-50 rounded-lg p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-dark mb-4">Value & ROI</h2>
                <div className="space-y-4 text-charcoal">
                  <div>
                    <p className="font-semibold mb-2">Cost Savings:</p>
                    <p>{siteContent.about.roi.costSavings}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Benchmark:</p>
                    <p>{siteContent.about.roi.benchmark}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Time to Impact:</p>
                    <p>{siteContent.about.roi.timeToImpact}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Timeline />

      <LogoCloud />

      <Clients />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-dark mb-6">Locations</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-lg text-charcoal mb-8">
              {siteContent.principal.locations.map((location, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-gold mr-2">📍</span>
                  <span>{location}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={siteContent.principal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-semibold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Clay White on LinkedIn</span>
              </a>
              <span className="text-charcoal hidden sm:inline">•</span>
              <a
                href={siteContent.company.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-semibold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>WH Advisory Services on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA
        primaryText="Schedule a Strategy Audit"
        primaryHref="/contact"
      />
    </div>
    </>
  );
}
