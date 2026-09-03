import type { Metadata } from "next";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About Us — Elythra Edufyi Tech Solutions",
  description:
    "Learn about Elythra Edufyi Tech Solutions — our mission to bridge learning and real employability through industry-aligned courses, internships, and placement assistance.",
  openGraph: {
    title: "About Us — Elythra Edufyi",
    description:
      "Bridging learning and real employability since day one.",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-6">
              We build careers,{" "}
              <span className="gradient-text">not just courses</span>
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Elythra Edufyi Tech Solutions exists because the gap between
              &quot;I completed a course&quot; and &quot;I got a job&quot; is
              wider than it should be. We&apos;re closing it — with real
              mentorship, real internship experience, and real placement
              pathways.
            </p>
          </div>
        </SectionReveal>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <SectionReveal>
            <div className="glass-card p-8 lg:p-10 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-text-muted leading-relaxed">
                To deliver industry-relevant education that directly translates
                into employment outcomes. We believe every student deserves more
                than a certificate — they deserve a clear path from learning to
                earning. Our courses are built with hiring managers, taught by
                industry practitioners, and designed to produce job-ready
                graduates.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="glass-card p-8 lg:p-10 h-full">
              <div className="w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-text-muted leading-relaxed">
                To be India&apos;s most trusted bridge between education and
                employment — where every course completion leads to a tangible
                career outcome. We envision a future where the skills gap
                doesn&apos;t hold back talented, motivated students from the
                careers they deserve.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* What Makes Us Different */}
        <SectionReveal>
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-text-primary mb-10 text-center">
              What Makes Elythra Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Not Just Videos",
                  description:
                    "We're not a MOOC with endless recorded lectures. Our programs combine live mentorship, hands-on projects, and structured internships to build real capability.",
                },
                {
                  title: "Internship Built-In",
                  description:
                    "Every student — regardless of tier — completes a structured internship. This isn't a simulated exercise; it's real project work that goes on your resume.",
                },
                {
                  title: "Placement Pathways",
                  description:
                    "Our Professional tier connects you to hiring opportunities through Elythra's network of partner companies. Real referrals, not vague promises.",
                },
                {
                  title: "26+ Domains",
                  description:
                    "From Full Stack Development and AI/ML to Digital Marketing and Finance — we cover both technical and non-technical career paths.",
                },
                {
                  title: "Transparent Pricing",
                  description:
                    "Three clear tiers, no hidden fees, no upselling. You know exactly what you're getting before you enroll.",
                },
                {
                  title: "Industry Credentials",
                  description:
                    "Every completer receives Certificates of Participation, Course Completion, and Internship Completion. Mentor-Led and Professional tiers include a Letter of Recommendation.",
                },
              ].map((item, i) => (
                <SectionReveal key={item.title} delay={i * 80}>
                  <div className="glass-card p-6 h-full">
                    <h3 className="font-heading text-base font-bold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal>
          <div className="text-center bg-gradient-to-r from-brand-sky to-brand-sky/50 rounded-2xl p-10 lg:p-14">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-4">
              Join us. Build something real.
            </h2>
            <p className="text-text-muted mb-6 max-w-lg mx-auto">
              Explore our courses, pick your domain, and start a learning
              journey that ends with real career outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href="/apply" size="lg">
                Apply Now
              </CTAButton>
              <CTAButton href="/courses/technical" variant="outline" size="lg">
                Browse Courses
              </CTAButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
