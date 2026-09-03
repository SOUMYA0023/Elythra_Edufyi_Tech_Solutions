import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const footerSections = [
  {
    title: "Courses & Track",
    links: [
      { label: "Technical Domains (17)", href: "/courses/technical" },
      { label: "Non-Technical Domains (9)", href: "/courses/non-technical" },
      { label: "Self-Paced Track", href: "/pricing" },
      { label: "Mentor-Led Track", href: "/pricing" },
      { label: "Professional Placement Track", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing & Programs", href: "/pricing" },
      { label: "Contact Us", href: "/contact" },
      { label: "Apply Now", href: siteConfig.googleFormUrl, external: true },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-inverse border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-core/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-icon.jpeg"
                alt="Elythra Edufyi"
                width={48}
                height={48}
                className="rounded-xl shadow-md"
              />
              <div>
                <span className="font-heading text-xl font-bold text-white leading-none block tracking-tight">
                  ELYTHRA EDUFYI
                </span>
                <span className="block text-xs text-brand-bright font-bold tracking-widest uppercase mt-0.5">
                  TECH SOLUTIONS
                </span>
              </div>
            </Link>

            <p className="text-sm text-text-inverse/70 leading-relaxed max-w-sm">
              Bridging the gap between practical learning and real employability. Hands-on technical and non-technical training with internship experience and placement assistance.
            </p>

            {/* WhatsApp Footer CTA */}
            <div className="pt-2">
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading text-sm font-semibold transition-all duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.265-1.118z" />
                </svg>
                Talk to Us on WhatsApp
              </a>
            </div>

            {/* Social Media Presence */}
            <div className="pt-2">
              <h5 className="text-xs font-bold font-heading uppercase tracking-widest text-text-inverse/50 mb-3">
                Connect With Us
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {/* Instagram */}
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-brand-core/20 border border-white/10 hover:border-brand-bright text-text-inverse/80 hover:text-white transition-all text-xs font-medium"
                >
                  <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span>{siteConfig.social.instagram.name}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-brand-core/20 border border-white/10 hover:border-brand-bright text-text-inverse/80 hover:text-white transition-all text-xs font-medium"
                >
                  <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>{siteConfig.social.linkedin.name}</span>
                </a>

                {/* Facebook Slot */}
                <a
                  href={siteConfig.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-brand-core/20 border border-white/10 hover:border-brand-bright text-text-inverse/80 hover:text-white transition-all text-xs font-medium"
                >
                  <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading text-sm font-bold text-white mb-4 tracking-wider uppercase text-brand-bright">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-inverse/70 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3 text-brand-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-inverse/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Direct Contact Summary */}
        <div className="border-t border-white/10 pt-6 pb-6 flex flex-wrap gap-x-8 gap-y-3 text-xs text-text-inverse/60 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-brand-bright font-bold">Email:</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-bright font-bold">Phone:</span>
            <a href={`tel:${siteConfig.whatsapp.number}`} className="hover:text-white transition-colors">
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-brand-bright font-bold">Hours:</span>
            <span>{siteConfig.contact.workingHours}</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-inverse/50">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-text-inverse/50">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
