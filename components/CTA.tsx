"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

interface CTAProps {
  primaryText: string;
  secondaryText?: string;
  primaryHref: string;
  secondaryHref?: string;
  className?: string;
}

export default function CTA({ primaryText, secondaryText, primaryHref, secondaryHref, className = "" }: CTAProps) {
  const handleCTAClick = (text: string, href: string) => {
    trackCTAClick(text, href);
  };

  return (
    <section className={`section-padding bg-gray-50 text-charcoal ${className}`}>
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Schedule a strategy audit to see how WH Advisory can transform your compliance into a competitive advantage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            onClick={() => handleCTAClick(primaryText, primaryHref)}
            className="bg-charcoal text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-dark transition-colors"
          >
            {primaryText}
          </Link>
          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              onClick={() => handleCTAClick(secondaryText, secondaryHref)}
              className="border-2 border-charcoal text-charcoal px-8 py-3 rounded-lg font-bold hover:bg-charcoal hover:text-white transition-colors"
            >
              {secondaryText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
