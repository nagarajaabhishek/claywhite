"use client";

import Link from "next/link";
import { siteContent } from "@/content/site";
import { trackCTAClick } from "@/lib/analytics";

export default function Hero() {
  const handleCTAClick = (text: string, href: string) => {
    trackCTAClick(text, href);
  };
  return (
    <section className="bg-white text-charcoal section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {siteContent.hero.headline}
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            {siteContent.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              onClick={() => handleCTAClick(siteContent.hero.primaryCTA, "/contact")}
              className="bg-charcoal text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-dark transition-colors"
            >
              {siteContent.hero.primaryCTA}
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
