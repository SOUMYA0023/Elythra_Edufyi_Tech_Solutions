import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Elythra Edufyi Tech Solutions",
  description:
    "Read the terms and conditions for course enrollment, internship tracks, certification, and placement assistance at Elythra Edufyi Tech Solutions.",
};

export default function TermsPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Draft Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
          <span className="font-bold font-heading uppercase text-xs tracking-wider block mb-1">
            📋 Legal Draft Notice
          </span>
          This document represents the general website terms and conditions of {siteConfig.name}. Specific terms should be formally reviewed by qualified legal counsel.
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-3">
          Terms & Conditions
        </h1>
        <p className="text-sm text-text-muted mb-10">
          Effective Date: January 1, 2026 | Last Updated: September 2026
        </p>

        <div className="glass-card p-6 sm:p-10 space-y-8 text-text-primary prose prose-slate max-w-none [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-deep [&_h2]:mt-6 [&_h2]:mb-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-text-muted [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_li]:text-sm [&_li]:text-text-muted">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to {siteConfig.name} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms & Conditions govern your access to and use of our website ({siteConfig.url}), mobile experiences, educational courses, internship programs, and placement assistance services (collectively, the &quot;Services&quot;).
            </p>
          </section>

          <section>
            <h2>2. Acceptance of Terms</h2>
            <p>
              By applying for, enrolling in, or accessing any course or program offered by {siteConfig.name}, you confirm that you have read, understood, and agree to be legally bound by these Terms & Conditions and our Cookie and Privacy Policies. If you do not agree, you must not enroll or use our Services.
            </p>
          </section>

          <section>
            <h2>3. Eligibility</h2>
            <p>
              Our programs are designed for students, recent graduates, and working professionals. By enrolling, you represent that:
            </p>
            <ul className="list-disc">
              <li>You are at least 18 years of age or possess legal parental/guardian consent.</li>
              <li>All application information provided by you is complete, truthful, and accurate.</li>
              <li>You possess basic digital literacy and hardware required to participate in online/mentor-led learning.</li>
            </ul>
          </section>

          <section>
            <h2>4. Course Enrollment & Program Tiers</h2>
            <p>
              Enrollment is confirmed upon submission of the official application form and payment processing for your chosen tier:
            </p>
            <ul className="list-disc">
              <li><strong>Self-Paced Track (₹7,000):</strong> Self-directed learning, recorded modules, select live sessions, and certifications.</li>
              <li><strong>Mentor-Led Track (₹12,000):</strong> Includes all Self-Paced benefits plus dedicated live mentorship sessions and Letter of Recommendation (LOR).</li>
              <li><strong>Professional Placement Track (₹17,000):</strong> Includes all Self-Paced & Mentor-Led benefits plus placement assistance and referrals to partner companies.</li>
            </ul>
          </section>

          <section>
            <h2>5. Payments and Fees</h2>
            <p>
              All course fees are stated in Indian Rupees (INR). Payments must be made in full or via approved installment plans prior to course commencement. All fee structures are transparent and clearly stated prior to enrollment.
            </p>
          </section>

          <section>
            <h2>6. Course Access & Content Delivery</h2>
            <p>
              Enrolled students receive access to relevant course portals, repositories, and learning assets for the duration specified in their program tier. Course materials are meant solely for individual educational use.
            </p>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All proprietary course curricula, training videos, brand marks, software tools, and design assets are the exclusive intellectual property of {siteConfig.name}. Students are strictly prohibited from copying, distributing, reselling, or publicly broadcasting course materials without express written authorization.
            </p>
          </section>

          <section>
            <h2>8. Student Responsibilities & Code of Conduct</h2>
            <p>
              Students are expected to maintain professional integrity. Plagiarism, disruptive behavior during live sessions, unauthorized sharing of login credentials, or harassment of mentors/peers will result in immediate termination of access without refund.
            </p>
          </section>

          <section>
            <h2>9. Internship & Placement Assistance Clarification</h2>
            <p>
              <strong>Internships:</strong> Every student receives practical project/internship exposure as part of their program.
            </p>
            <p>
              <strong>Placement Assistance:</strong> Professional track students receive referral access to our partner company ecosystem, resume reviews, and interview prep. <em>Placement assistance constitutes active referral support and does not represent a legal guarantee of employment or specific salary figures.</em>
            </p>
          </section>

          <section>
            <h2>10. Third-Party Services & Links</h2>
            <p>
              Our website may utilize third-party tools (such as Google Forms for applications, WhatsApp for communication, and payment gateways). We are not responsible for the independent terms or practices of these external services.
            </p>
          </section>

          <section>
            <h2>11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, {siteConfig.name} shall not be liable for any indirect, incidental, or consequential loss arising from your participation in our programs. Total liability shall not exceed the amount actually paid by you for the specific program.
            </p>
          </section>

          <section>
            <h2>12. Changes to Services & Terms</h2>
            <p>
              We reserve the right to modify or update these Terms & Conditions at any time. Notice of significant updates will be published on this page with an updated modification date.
            </p>
          </section>

          <section>
            <h2>13. Termination</h2>
            <p>
              We reserve the right to suspend or terminate student access to our Services in cases of material breach of these Terms, non-payment, or code of conduct violations.
            </p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the jurisdiction of the competent courts in India.
            </p>
          </section>

          <section>
            <h2>15. Contact Information</h2>
            <p>
              For any questions regarding these Terms & Conditions, please contact us:
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
