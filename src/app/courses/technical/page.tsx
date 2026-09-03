"use client";

import { useState } from "react";
import { technicalCourses, Course } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";
import DomainDetailModal from "@/components/DomainDetailModal";
import { siteConfig } from "@/config/site";

export default function TechnicalCoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-brand-core/10 text-brand-core border border-brand-core/20 mb-4 font-heading uppercase tracking-wider">
              Technical Domains (17)
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-4">
              Master High-Demand Tech Capabilities
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              From Full Stack Web Development to Cyber Security and VLSI — explore our 17 industry-aligned technical domains. Click any domain card to view detailed curricula, tools, and career outcomes.
            </p>
          </div>
        </SectionReveal>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalCourses.map((course, i) => (
            <SectionReveal key={course.id} delay={Math.min(i * 40, 400)}>
              <CourseCard
                course={course}
                onSelect={(c) => setSelectedCourse(c)}
              />
            </SectionReveal>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <SectionReveal>
          <div className="mt-16 text-center glass-card p-10 lg:p-14 border border-border-light bg-gradient-to-br from-white via-brand-sky/20 to-white">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-4">
              Ready to Accelerate Your Tech Career?
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto leading-relaxed">
              Apply now to reserve your seat for the upcoming cohort. All domains include hands-on project experience, mentorship, and certifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href={siteConfig.googleFormUrl} external size="lg">
                APPLY FOR TECHNICAL TRACK
              </CTAButton>
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-semibold text-base transition-colors flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Interactive Modal */}
      <DomainDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </main>
  );
}
