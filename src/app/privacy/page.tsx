import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Elythra Edufyi Tech Solutions",
  description:
    "Learn about how Elythra Edufyi Tech Solutions collects, uses, and protects student data and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted mb-10">
          Effective Date: January 1, 2026 | Last Updated: September 2026
        </p>

        <div className="glass-card p-6 sm:p-10 space-y-8 text-text-primary prose prose-slate max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-deep [&_h2]:mt-6 [&_h2]:mb-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-text-muted [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:text-sm [&_li]:text-text-muted">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              At {siteConfig.name}, we collect personal information required to process course applications, fulfill program enrollments, deliver mentorship, and facilitate placement support. This includes:
            </p>
            <ul className="list-disc">
              <li><strong>Contact Information:</strong> Full name, email address, phone number, and location details provided when submitting our application form or contact inquiries.</li>
              <li><strong>Academic & Professional Information:</strong> Domain preferences, educational background, and resume/portfolio materials submitted for career tracks.</li>
              <li><strong>Technical Data:</strong> Browser session information, device indicators, and consent preferences (`elythra-cookie-consent`).</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information strictly for legitimate operational purposes:</p>
            <ul className="list-disc">
              <li>To evaluate and process your application for technical or non-technical program tracks.</li>
              <li>To schedule mentorship sessions, deliver course updates, and issue completion certificates.</li>
              <li>To facilitate partner company referrals for eligible Professional track candidates.</li>
              <li>To respond to customer service inquiries via email, phone, or official WhatsApp communications.</li>
            </ul>
          </section>

          <section>
            <h2>3. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade student personal data. Data is shared with external services only when necessary for core site operations:
            </p>
            <ul className="list-disc">
              <li><strong>Google Forms / Workspace:</strong> Used for processing course applications securely.</li>
              <li><strong>Payment Processors:</strong> Standard secure electronic payment gateways for fee processing.</li>
              <li><strong>Hiring Partners:</strong> Professional track student profiles and resumes are shared with partner companies solely upon candidate consent for placement opportunities.</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Retention & Security</h2>
            <p>
              We maintain appropriate technical and administrative safeguards to protect your information against unauthorized access, alteration, or disclosure. Personal data is retained only as long as necessary to fulfill educational obligations and statutory requirements.
            </p>
          </section>

          <section>
            <h2>5. Your Privacy Rights</h2>
            <p>You have the right to access, update, or request the deletion of your personal contact data stored with us. To exercise these rights, please contact our privacy desk at {siteConfig.contact.email}.</p>
          </section>

          <section>
            <h2>6. Updates to This Policy</h2>
            <p>
              We may revise this Privacy Policy periodically. Modifications will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              For privacy-related inquiries, please reach out to:
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
