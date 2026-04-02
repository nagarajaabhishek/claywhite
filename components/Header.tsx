"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fractional Leadership", href: "/services/fractional-leadership" },
    { name: "GRC & Regulatory", href: "/services/grc-regulatory" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white text-charcoal border-b border-gray-100 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/images/wh-advisory-logo.png"
                alt=""
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xl font-bold text-charcoal">
              WH Advisory Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${pathname === link.href ? "text-gold font-semibold" : "hover:text-gold"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-charcoal/80 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
            <span className="text-gold">📍</span>
            <span>United States</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-lg py-2 border-b border-gray-50 last:border-0 ${pathname === link.href ? "text-gold font-semibold" : "text-charcoal"
                }`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-charcoal/80">
            <span className="text-gold">📍</span>
            <span>United States</span>
          </div>
        </div>
      )}
    </header>
  );
}
