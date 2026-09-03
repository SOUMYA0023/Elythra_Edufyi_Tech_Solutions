import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Edufyi Tech Solutions",
  description:
    "Learn how Edufyi Tech Solutions uses cookies, local storage, and site preferences to deliver an optimal web experience.",
};

export default function CookiePolicyPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-3">
          Cookie Policy
        </h1>
        <p className="text-sm text-text-muted mb-10">
          Last Updated: September 2026
        </p>

        <div className="glass-card p-6 sm:p-10 space-y-8 text-text-primary prose prose-slate max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-deep [&_h2]:mt-6 [&_h2]:mb-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-text-muted [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:text-sm [&_li]:text-text-muted">
          <section>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer, smartphone, or tablet when you visit a website. They enable web applications to recognize your device, preserve session state, and save client preferences.
            </p>
          </section>

          <section>
            <h2>2. Why We Use Cookies</h2>
            <p>
              Edufyi Tech Solutions uses cookies and browser local storage to maintain session continuity, store your cookie consent choice, and enable essential site functionality.
            </p>
          </section>

          <section>
            <h2>3. Categories of Cookies We Use</h2>
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Essential Cookies (Required)</h3>
                <p className="text-xs text-text-muted">
                  These cookies and local storage items (`elythra-cookie-consent`) are necessary to record your consent choices and ensure site security. The website cannot function properly without them.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Functional Cookies</h3>
                <p className="text-xs text-text-muted">
                  Used to remember UI states such as opened domain modal preferences or active filter states during your browsing session.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Analytics Cookies</h3>
                <p className="text-xs text-text-muted">
                  Used to evaluate aggregate traffic patterns and page popularity. We do not sell or track individual user identities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border-light">
                <h3 className="font-heading font-bold text-base text-brand-core mb-1">Third-Party Services</h3>
                <p className="text-xs text-text-muted">
                  When you access external resources linked on our Site (such as the official Google Application Form or WhatsApp chat), those third-party services may set session cookies according to their independent privacy policies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>4. Managing Cookie Preferences</h2>
            <p>
              You can manage or modify your cookie choices at any time:
            </p>
            <ul className="list-disc">
              <li>Use our site-wide Cookie Consent Banner to accept or decline optional storage categories.</li>
              <li>Configure your web browser (Chrome, Safari, Firefox, Edge) to block or delete cookies. Note that disabling essential cookies may impact site navigation.</li>
            </ul>
          </section>

          <section>
            <h2>5. Policy Updates</h2>
            <p>
              We may update this Cookie Policy periodically to reflect technological changes or operational requirements. Updated versions will be posted on this page with a revised date.
            </p>
          </section>

          <section className="border-t border-border-light pt-6">
            <h2>Contact Us</h2>
            <p>
              For questions regarding our use of cookies, please contact us at{" "}
              <a href="mailto:info@edufyitechsolutions.com" className="font-semibold text-brand-core hover:underline">
                info@edufyitechsolutions.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
