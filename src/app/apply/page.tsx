import type { Metadata } from "next";
import { pricingTiers } from "@/data/pricing";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Apply Now — Elythra Edufyi Tech Solutions",
  description:
    "Start your journey with Elythra Edufyi. Fill out our application form and our team will guide you to the right program and domain.",
  openGraph: {
    title: "Apply Now — Elythra Edufyi",
    description:
      "Apply for technical and non-technical courses with internship and placement tracks.",
  },
};

export default function ApplyPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-4">
              Apply Now
            </h1>
            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Take the first step towards building real, employable skills.
              Our application process is simple and takes just a few minutes.
            </p>
          </div>
        </SectionReveal>

        {/* How It Works */}
        <SectionReveal>
          <div className="glass-card p-8 lg:p-10 mb-12">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-6">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Fill the Form",
                  description:
                    "Click the button below to open our application form. You'll share your details, choose your domain, and select a program tier.",
                },
                {
                  step: "02",
                  title: "Team Review",
                  description:
                    "Our team reviews your application and reaches out within 48 hours to discuss your goals and answer any questions.",
                },
                {
                  step: "03",
                  title: "Start Learning",
                  description:
                    "Once enrolled, you get immediate access to your course materials, mentor assignments, and your internship track begins.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center sm:text-left">
                  <span className="inline-block font-heading text-3xl font-bold text-brand-bright/30 mb-2">
                    {item.step}
                  </span>
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

        {/* Program Quick Reference */}
        <SectionReveal>
          <div className="mb-12">
            <h2 className="text-xl font-heading font-bold text-text-primary mb-6 text-center">
              Quick Program Reference
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`rounded-xl p-5 border text-center ${
                    tier.highlighted
                      ? "border-brand-core bg-brand-sky/30"
                      : "border-border-light bg-white"
                  }`}
                >
                  {tier.badge && (
                    <span className="inline-block px-3 py-0.5 text-[10px] font-bold font-heading bg-gradient-to-r from-brand-deep to-brand-core text-white rounded-full mb-2">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-heading text-base font-bold text-text-primary">
                    {tier.name}
                  </h3>
                  <p className="font-heading text-2xl font-bold text-brand-deep mt-1">
                    {tier.priceFormatted}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{tier.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Main CTA */}
        <SectionReveal>
          <div className="text-center bg-gradient-to-br from-brand-deep via-brand-core to-brand-bright rounded-2xl p-10 lg:p-14">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              Ready? Let&apos;s do this.
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Our official application form takes about 2 minutes. You&apos;ll be
              asked for your name, contact details, preferred domain, and
              program tier.
            </p>
            <CTAButton
              href="https://forms.gle/RuHQHcq5ZwtvDUgR8"
              external
              variant="secondary"
              size="lg"
            >
              Open Application Form
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </CTAButton>
            <p className="text-xs text-white/50 mt-4">
              Opens in a new tab — Google Forms
            </p>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
