import type { Metadata } from "next";
import { pricingTiers } from "@/data/pricing";
import PricingCard from "@/components/PricingCard";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Pricing & Programs — Elythra Edufyi Tech Solutions",
  description:
    "Three clear program tiers from ₹7,000 to ₹17,000. Self-Paced, Mentor-Led, and Professional — each with internship experience and certifications.",
  openGraph: {
    title: "Pricing & Programs — Elythra Edufyi",
    description:
      "Three program tiers with internship, certifications, and placement assistance.",
  },
};

export default function PricingPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-4">
              Programs & Pricing
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Transparent pricing, no hidden fees. Every tier includes
              internship experience and industry certifications — choose the
              level of mentorship and career support that fits your goals.
            </p>
          </div>
        </SectionReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {pricingTiers.map((tier, i) => (
            <SectionReveal key={tier.id} delay={i * 120}>
              <PricingCard tier={tier} />
            </SectionReveal>
          ))}
        </div>

        {/* What's Included in All Tiers */}
        <SectionReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-8 text-center">
              What&apos;s Included in Every Program
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Hands-On Projects",
                  description:
                    "Work on real-world projects designed to build portfolio-worthy experience.",
                },
                {
                  title: "Internship Experience",
                  description:
                    "Complete a structured internship to gain practical industry exposure.",
                },
                {
                  title: "Industry Certifications",
                  description:
                    "Receive Certificates of Participation, Completion, and Internship Completion.",
                },
                {
                  title: "Flexible Learning",
                  description:
                    "Access course materials at your own pace with recorded content and live sessions.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-6">
                  <h3 className="font-heading text-base font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* FAQ */}
        <SectionReveal>
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I switch between program tiers after enrolling?",
                  a: "Yes, you can upgrade to a higher tier by paying the difference. Contact our team for assistance with tier changes.",
                },
                {
                  q: "What does 'placement assistance' include?",
                  a: "Our Professional tier includes referrals to Elythra's partnered companies. This means we connect you with hiring opportunities — please note this is placement assistance, not a guaranteed job placement.",
                },
                {
                  q: "Are the certifications recognized by employers?",
                  a: "Our certifications are issued by Elythra Edufyi Tech Solutions and verify your course completion, internship experience, and practical skills. They serve as professional credentials for your resume and portfolio.",
                },
                {
                  q: "Do I need any prerequisites for the courses?",
                  a: "Most courses are designed for beginners and intermediate learners. Specific prerequisites, if any, will be communicated during the application process.",
                },
                {
                  q: "How long are the courses?",
                  a: "Course duration varies by domain and program tier. Typical programs run between 4-12 weeks. Exact timelines are shared during onboarding.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="glass-card p-5 group cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-heading text-sm font-bold text-text-primary list-none">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-text-muted flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
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
                  </summary>
                  <p className="text-sm text-text-muted leading-relaxed mt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Bottom CTA */}
        <SectionReveal>
          <div className="text-center mt-16">
            <CTAButton href="/apply" size="lg">
              Apply Now
            </CTAButton>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
