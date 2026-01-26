import Link from "next/link";
import { siteContent } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal section-padding border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-dark font-bold text-lg mb-4">WH Advisory Services</h3>
            <p className="text-gray-600 text-sm mb-4">
              Transforming compliance from a check-the-box burden into a strategic asset.
            </p>
            <div className="flex gap-4">
              <a
                href={siteContent.company.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors"
                aria-label="WH Advisory Services LinkedIn"
                title="WH Advisory Services on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={siteContent.principal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold transition-colors"
                aria-label="Clay White LinkedIn"
                title="Clay White on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/services/fractional-leadership" className="hover:text-gold transition-colors">
                  Fractional Leadership
                </Link>
              </li>
              <li>
                <Link href="/services/grc-regulatory" className="hover:text-gold transition-colors">
                  GRC & Regulatory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {siteContent.principal.locations.map((location, idx) => (
                <li key={idx}>{location}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} WH Advisory Services. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a
              href={siteContent.company.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold transition-colors"
            >
              Company LinkedIn
            </a>
            <span className="text-gray-300">•</span>
            <a
              href={siteContent.principal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold transition-colors"
            >
              Clay White LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
