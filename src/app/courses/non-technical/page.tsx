"use client";

import { useState } from "react";
import { nonTechnicalCourses, Course } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SectionReveal from "@/components/SectionReveal";
import CTAButton from "@/components/CTAButton";
import DomainDetailModal from "@/components/DomainDetailModal";
import { siteConfig } from "@/config/site";

export default function NonTechnicalCoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent-warm/10 text-accent-warm border border-accent-warm/30 mb-4 font-heading uppercase tracking-wider">
              Non-Technical Domains (9)
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary mb-4">
              Essential Professional & Managerial Domains
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              From Finance and Digital Marketing to HR, AutoCAD, and Biotechnology — master professional capabilities with real project exposure. Click any domain card to view complete program details.
            </p>
          </div>
        </SectionReveal>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonTechnicalCourses.map((course, i) => (
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
              Ready to Advance Your Professional Skills?
            </h2>
            <p className="text-text-muted mb-8 max-w-lg mx-auto leading-relaxed">
              Apply now for your preferred non-technical track and gain industry-recognized certifications and internship experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href={siteConfig.googleFormUrl} external size="lg">
                APPLY FOR NON-TECHNICAL TRACK
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
