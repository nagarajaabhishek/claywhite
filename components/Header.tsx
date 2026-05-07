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
    { name: "Fractional Leadership", href: "/services/fractional-leadership" },
    { name: "Company Services", href: "/services/company-services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const newsLinks = [
    { name: "Articles", href: "/news-events/articles" },
    { name: "Posts", href: "/news-events/posts" },
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
          <nav className="hidden md:flex items-center space-x-6">
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
            <div className="relative group">
              <button
                type="button"
                className={`transition-colors flex items-center gap-1 ${pathname.startsWith("/news-events") ? "text-gold font-semibold" : "hover:text-gold"
                  }`}
              >
                <span>News and Events</span>
                <span aria-hidden="true">▾</span>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg p-2 z-10">
                {newsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded hover:bg-gray-50 hover:text-gold"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
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
          <div className="pt-2">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">News and Events</p>
            <div className="space-y-2">
              {newsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base py-1 ${pathname === link.href ? "text-gold font-semibold" : "text-charcoal"
                    }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-charcoal/80">
            <span className="text-gold">📍</span>
            <span>United States</span>
          </div>
        </div>
      )}
    </header>
  );
}
