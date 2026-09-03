"use client";

import { useState } from "react";
import { technicalCourses, nonTechnicalCourses, Course } from "@/data/courses";
import { pricingTiers } from "@/data/pricing";
import { siteConfig } from "@/config/site";
import CTAButton from "@/components/CTAButton";
import CourseCard from "@/components/CourseCard";
import PricingCard from "@/components/PricingCard";
import SectionReveal from "@/components/SectionReveal";
import HeroSceneWrapper from "@/components/three/HeroSceneWrapper";
import PartnerMarquee from "@/components/PartnerMarquee";
import DomainDetailModal from "@/components/DomainDetailModal";
import Link from "next/link";

export default function HomePage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const featuredTech = technicalCourses.slice(0, 4);
  const featuredNonTech = nonTechnicalCourses.slice(0, 3);

  return (
    <main className="overflow-hidden">
      {/* ═══════════════════════════════════════════
          1. HERO SECTION (REDESIGNED & BALANCED)
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-surface via-brand-sky/25 to-surface pt-24 pb-16">
        {/* 3D Knowledge Network Background */}
        <div className="absolute inset-0 opacity-80 pointer-events-none">
          <HeroSceneWrapper />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Eyebrow Badge */}
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-brand-core/20 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-core animate-pulse" />
                <span className="text-xs sm:text-sm font-bold font-heading uppercase tracking-widest text-brand-deep">
                  LEARN • BUILD • GET PLACED
                </span>
              </div>
            </SectionReveal>

            {/* Main Headline */}
            <SectionReveal delay={100}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight">
                Skills that land you{" "}
                <span className="block sm:inline-block relative">
                  <span className="gradient-text font-black underline decoration-brand-bright/40 decoration-wavy decoration-2">
                    REAL CAREERS
                  </span>
                </span>
                ,<br className="hidden sm:block" /> not just certificates.
              </h1>
            </SectionReveal>

            {/* Supporting Text */}
            <SectionReveal delay={200}>
              <p className="text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl font-normal">
                Technical and non-technical skill courses with live mentorship, hands-on industry projects, structured internships, and placement referrals to partner companies.
              </p>
            </SectionReveal>

            {/* CTA Buttons & WhatsApp Link */}
            <SectionReveal delay={300}>
              <div className="flex flex-wrap justify-center items-center gap-4 w-full sm:w-auto">
                <CTAButton href={siteConfig.googleFormUrl} external size="lg" className="shadow-xl shadow-brand-core/20">
                  START YOUR JOURNEY
                </CTAButton>
                
                <CTAButton href="/courses/technical" variant="outline" size="lg">
                  EXPLORE COURSES
                </CTAButton>
              </div>

              {/* Sub-CTA Trust Indicator */}
              <div className="mt-6 flex items-center justify-center gap-4 text-xs font-medium text-text-muted">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  26+ Skill Domains
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Real Internship Included
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Placement Referrals
                </span>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. PREFERRED INDUSTRY PARTNERS MARQUEE
          ═══════════════════════════════════════════ */}
      <PartnerMarquee />

      {/* ═══════════════════════════════════════════
          3. WHY ELYTHRA EDUFYI
          ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase font-heading tracking-widest text-brand-core block mb-2">
                THE ELYTHRA ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4">
                Why Students Choose Elythra Edufyi
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                We bridge the gap between academic theory and real-world employability with practical, project-based engineering and professional skill tracks.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                title: "Practical Learning",
                description: "Hands-on projects and industry tools, not outdated textbook lectures.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.942 3.197m0 0a9.093 9.093 0 0 1-3.741-.479 3 3 0 0 1-4.682-2.72m.94 3.198.002.031c0 .225-.012.447-.037.666" />
                  </svg>
                ),
                title: "Live Mentorship",
                description: "Direct guidance from experienced industry practitioners and tech leads.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                ),
                title: "Internship Included",
                description: "Structured internship experience with verifiable completion certificate.",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                ),
                title: "Placement Assistance",
                description: "Direct referrals to partnered tech companies for Professional track students.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 80}>
                <div className="glass-card p-6 text-left h-full border border-border-light hover:border-brand-core/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-brand-sky flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
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
      </section>

      {/* ═══════════════════════════════════════════
          4. DOMAIN CATALOG (INTERACTIVE)
          ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-surface border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technical Section */}
          <SectionReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase font-heading tracking-widest text-brand-core block mb-1">
                  EXPLORE DOMAINS
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary">
                  Technical Courses (17 Domains)
                </h2>
              </div>
              <Link
                href="/courses/technical"
                className="inline-flex items-center gap-1.5 text-sm font-bold font-heading text-brand-core hover:text-brand-deep transition-colors"
              >
                Browse all 17 technical domains →
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredTech.map((course, i) => (
              <SectionReveal key={course.id} delay={i * 80}>
                <CourseCard
                  course={course}
                  onSelect={(c) => setSelectedCourse(c)}
                />
              </SectionReveal>
            ))}
          </div>

          {/* Non-Technical Section */}
          <SectionReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase font-heading tracking-widest text-accent-warm block mb-1">
                  MANAGERIAL & CREATIVE
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary">
                  Non-Technical Courses (9 Domains)
                </h2>
              </div>
              <Link
                href="/courses/non-technical"
                className="inline-flex items-center gap-1.5 text-sm font-bold font-heading text-brand-core hover:text-brand-deep transition-colors"
              >
                Browse all 9 non-technical domains →
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNonTech.map((course, i) => (
              <SectionReveal key={course.id} delay={i * 80}>
                <CourseCard
                  course={course}
                  onSelect={(c) => setSelectedCourse(c)}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. LEARNING JOURNEY TIMELINE
          ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase font-heading tracking-widest text-brand-core block mb-2">
                CAREER ACCELERATOR PIPELINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
                How Your Learning Journey Works
              </h2>
              <p className="text-text-muted text-base sm:text-lg">
                A structured 4-step path designed to take you from foundational concepts to industry readiness.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                step: "01",
                title: "Apply & Enroll",
                desc: "Choose your technical or non-technical domain and select your preferred program track.",
              },
              {
                step: "02",
                title: "Learn & Build",
                desc: "Master skills through live/recorded mentor sessions and build hands-on portfolio projects.",
              },
              {
                step: "03",
                title: "Internship Track",
                desc: "Complete a structured internship assignment with verifiable completion certificates.",
              },
              {
                step: "04",
                title: "Placement Referrals",
                desc: "Professional track students get direct referral access to our partnered company ecosystem.",
              },
            ].map((step, idx) => (
              <SectionReveal key={step.step} delay={idx * 100}>
                <div className="p-6 rounded-2xl bg-surface border border-border-light relative h-full flex flex-col justify-between">
                  <div>
                    <span className="text-4xl font-black font-heading text-brand-bright/30 block mb-3">
                      {step.step}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. PRICING & PROGRAM COMPARISON PREVIEW
          ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-surface border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase font-heading tracking-widest text-brand-core block mb-2">
                TRANSPARENT TIERING
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary mb-4">
                Choose Your Learning & Career Track
              </h2>
              <p className="text-text-muted text-base sm:text-lg">
                Three clear tiers. All include internship experience and verifiable certifications.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <SectionReveal key={tier.id} delay={i * 120}>
                <PricingCard tier={tier} compact />
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-sm font-bold font-heading text-brand-core hover:text-brand-deep transition-colors inline-flex items-center gap-2"
            >
              View detailed tier comparison & FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. ABOUT ELYTHRA COMPANY INTRODUCTION
          ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionReveal>
                <span className="text-xs font-bold uppercase font-heading tracking-widest text-brand-core block mb-2">
                  ABOUT THE COMPANY
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary leading-tight">
                  Elythra Edufyi Tech Solutions
                </h2>
                <p className="text-text-muted text-base leading-relaxed">
                  We are a dedicated ed-tech company focused on bridging the gap between student learning and actual employability. We provide practical, project-based engineering and non-technical skill tracks designed in alignment with modern industry standards.
                </p>
                <p className="text-text-muted text-base leading-relaxed">
                  Rather than selling generic video playlists, we focus on real outcomes: verified course completion, hands-on internship experience, and placement assistance through our partner network.
                </p>
                <div className="pt-2">
                  <CTAButton href="/about" variant="outline" size="md">
                    Read Our Story & Mission
                  </CTAButton>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-6">
              <SectionReveal delay={150}>
                <div className="glass-card p-8 border border-border-light space-y-4 bg-gradient-to-br from-brand-sky/30 via-white to-brand-sky/10">
                  <h3 className="font-heading text-lg font-bold text-brand-deep border-b border-border-light pb-3">
                    What Every Enrolled Student Receives:
                  </h3>
                  <ul className="space-y-3 text-sm text-text-primary">
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                      <span>Certificate of Course Participation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                      <span>Certificate of Course Completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                      <span>Certificate of Internship Completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                      <span>Letter of Recommendation (Mentor-Led & Professional)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">✓</span>
                      <span>Partner Company Referrals (Professional Track)</span>
                    </li>
                  </ul>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. HIGH-INTENT FINAL CTA
          ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-deep via-brand-core to-brand-bright text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-6">
              Ready to Upgrade Your Skills & Career?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step today. Select your domain, fill out the official application form, and start your journey towards real employability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton
                href={siteConfig.googleFormUrl}
                external
                variant="secondary"
                size="lg"
                className="shadow-2xl"
              >
                APPLY NOW — OFFICIAL FORM
              </CTAButton>
              
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.265-1.118z" />
                </svg>
                Ask Questions on WhatsApp
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Domain Detail Modal */}
      <DomainDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </main>
  );
}
