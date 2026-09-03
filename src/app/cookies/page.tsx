import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy — Elythra Edufyi Tech Solutions",
  description:
    "Learn how Elythra Edufyi Tech Solutions uses cookies, browser storage, and local analytics preferences to enhance your learning experience.",
};

export default function CookiePolicyPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="mb-8 p-4 rounded-xl bg-brand-sky border border-brand-core/20 text-brand-deep text-sm">
          <span className="font-bold font-heading uppercase text-xs tracking-wider block mb-1">
            🍪 Transparent Cookie Usage Policy
          </span>
          This policy details how {siteConfig.name} uses cookies and client-side storage technologies to deliver an optimal web experience.
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-3">
          Cookie Policy
        </h1>
        <p className="text-sm text-text-muted mb-10">
          Effective Date: January 1, 2026 | Last Updated: September 2026
        </p>

        <div className="glass-card p-6 sm:p-10 space-y-8 text-text-primary prose prose-slate max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-deep [&_h2]:mt-6 [&_h2]:mb-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-text-muted [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:text-sm [&_li]:text-text-muted">
          <section>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer, tablet, or mobile device when you visit websites. They allow web applications to recognize your browser, store preferences, and provide customized user experiences.
            </p>
          </section>

          <section>
            <h2>2. Categories of Cookies We Use</h2>
            <p>We classify the storage and cookie mechanisms on our site into four functional categories:</p>
            
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Essential Cookies (Always Active)</h3>
                <p className="text-xs text-text-muted">
                  Necessary for website stability, security, and remembering your cookie consent preferences (`elythra-cookie-consent`). Without these, basic features cannot function.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Analytics & Performance Cookies</h3>
                <p className="text-xs text-text-muted">
                  Allow us to analyze aggregated site traffic pattern data, popular course views, and layout performance. No individual personal profiles are sold or tracked.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Functional Cookies</h3>
                <p className="text-xs text-text-muted">
                  Remember your course filter selections, modal state preferences, and theme choices across your browsing session.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Marketing & External Services</h3>
                <p className="text-xs text-text-muted">
                  Used when you interact with embedded external applications (such as our official Google Application Form or WhatsApp chat links).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>3. Third-Party Integrations</h2>
            <p>
              When navigating our site, you may interact with external platforms:
            </p>
            <ul className="list-disc">
              <li><strong>Google Forms:</strong> Used to securely collect course applications. Google may place essential session cookies upon opening the application form.</li>
              <li><strong>WhatsApp Click-to-Chat:</strong> Redirects to standard WhatsApp Web / Mobile protocols without embedding third-party trackers in our domain.</li>
            </ul>
          </section>

          <section>
            <h2>4. Managing Your Cookie Preferences</h2>
            <p>
              You have full control over optional cookies:
            </p>
            <ul className="list-disc">
              <li>You can accept or reject optional cookies at any time via our site-wide Cookie Consent Banner.</li>
              <li>You can clear your local storage and cookies directly through your web browser settings (Chrome, Safari, Firefox, Edge).</li>
            </ul>
          </section>

          <section>
            <h2>5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect technological updates or legal requirements. Revisions will be published on this page with an updated date.
            </p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>
              If you have questions regarding our cookie practices, please contact our team:
            </p>
            <p className="font-semibold text-text-primary">
              {siteConfig.name}<br />
              Email: {siteConfig.contact.email}<br />
              Phone: {siteConfig.contact.phone}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
