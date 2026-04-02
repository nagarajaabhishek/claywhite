import Link from "next/link";
import { siteContent } from "@/content/site";

export default function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4 text-center">
          Our Services
        </h2>
        <p className="text-xl text-charcoal text-center mb-12 max-w-3xl mx-auto">
          {siteContent.services.overviewDescription}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold transition-colors">
            <h3 className="text-2xl font-bold text-gray-dark mb-4">
              {siteContent.services.fractional.title}
            </h3>
            <p className="text-charcoal mb-6">{siteContent.services.fractional.description}</p>
            <ul className="space-y-3 mb-6">
              {siteContent.services.fractional.whyChoose.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span className="text-charcoal">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services/fractional-leadership"
              className="text-gold font-bold hover:underline inline-block"
            >
              Learn More →
            </Link>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gold transition-colors">
            <h3 className="text-2xl font-bold text-gray-dark mb-4">
              {siteContent.services.grc.title}
            </h3>
            <p className="text-charcoal mb-6">{siteContent.services.grc.description}</p>
            <ul className="space-y-2 mb-6 text-sm">
              {siteContent.services.grc.coreCapabilities.slice(0, 3).map((capability: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span className="text-charcoal">{capability}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services/fractional-leadership"
              className="text-gold font-bold hover:underline inline-block"
            >
              Interested in Fractional Work? →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
