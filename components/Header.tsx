"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-charcoal border-b border-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/images/wh-advisory-logo.svg"
                alt=""
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  // Hide logo if not found, show text fallback
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xl font-bold text-charcoal">
              WH Advisory Services
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/services/fractional-leadership" className="hover:text-gold transition-colors">
              Fractional Leadership
            </Link>
            <Link href="/services/grc-regulatory" className="hover:text-gold transition-colors">
              GRC & Regulatory
            </Link>
            <Link href="/about" className="hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-500">
            <span>Dallas, TX</span>
            <span>•</span>
            <span>Orange County, CA</span>
          </div>
        </div>
      </div>
    </header>
  );
}
