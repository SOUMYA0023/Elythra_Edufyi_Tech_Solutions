"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import { siteConfig } from "@/config/site";

const navLinks = [
  {
    label: "Courses",
    href: "#",
    children: [
      { label: "Technical Courses", href: "/courses/technical" },
      { label: "Non-Technical Courses", href: "/courses/non-technical" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-border-light py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <Image
            src="/images/logo-icon.jpeg"
            alt="Elythra Edufyi Logo"
            width={42}
            height={42}
            className="rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"
            priority
          />
          <div>
            <span className="font-heading text-lg sm:text-xl font-bold text-brand-deep leading-none block tracking-tight">
              ELYTHRA EDUFYI
            </span>
            <span className="block text-[10px] text-brand-core font-bold tracking-widest uppercase mt-0.5">
              TECH SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-surface/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-border-light">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="px-4 py-2 text-sm font-semibold text-text-primary hover:text-brand-core transition-colors rounded-full flex items-center gap-1.5"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 text-brand-core ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-border-light overflow-hidden animate-slide-down p-1.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-brand-sky hover:text-brand-core transition-colors rounded-xl"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-text-primary hover:text-brand-core transition-colors rounded-full"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA & WhatsApp */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center gap-2 text-xs font-semibold font-heading border border-emerald-200"
            title="Chat on WhatsApp"
          >
            <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.265-1.118z" />
            </svg>
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          <CTAButton href={siteConfig.googleFormUrl} external size="sm">
            APPLY NOW
          </CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2.5 rounded-xl bg-surface border border-border-light text-text-primary hover:bg-brand-sky transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-border-light shadow-xl animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-gray-100 pb-2">
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-bold font-heading text-text-primary rounded-xl hover:bg-brand-sky"
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  >
                    {link.label}
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 text-brand-core ${
                        mobileCoursesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileCoursesOpen && (
                    <div className="ml-4 space-y-1 mt-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-text-muted hover:text-brand-core rounded-lg hover:bg-brand-sky/50"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-base font-bold font-heading text-text-primary rounded-xl hover:bg-brand-sky hover:text-brand-core border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-2 space-y-2">
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-heading font-semibold text-sm shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.265-1.118z" />
                </svg>
                Chat on WhatsApp
              </a>

              <CTAButton
                href={siteConfig.googleFormUrl}
                external
                size="md"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                APPLY NOW
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
