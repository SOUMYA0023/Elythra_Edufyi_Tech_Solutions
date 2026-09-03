"use client";

import { useEffect } from "react";
import type { Course } from "@/data/courses";
import { siteConfig } from "@/config/site";
import CTAButton from "./CTAButton";

interface DomainDetailModalProps {
  course: Course | null;
  onClose: () => void;
}

export default function DomainDetailModal({ course, onClose }: DomainDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (course) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const whatsappMessage = `Hi, I am interested in the ${course.name} domain at Elythra Edufyi Tech Solutions. Please provide more details on enrollment and upcoming batches.`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-border-light overflow-hidden my-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-brand-deep via-brand-core to-brand-bright p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/90 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-3 bg-white/10 text-white border-white/20 uppercase tracking-wider font-heading`}
          >
            {course.category === "technical" ? "Technical Domain" : "Non-Technical Domain"}
          </span>

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
            {course.name}
          </h2>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
            {course.description}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xs font-bold uppercase font-heading tracking-wider text-text-muted mb-3">
              Tools & Technologies Mastered
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-brand-sky text-brand-deep border border-brand-core/15"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase font-heading tracking-wider text-text-muted mb-3">
              Key Skills Gained
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* What You Will Learn */}
          <div className="bg-surface rounded-xl p-4 sm:p-5 border border-border-light">
            <h3 className="text-sm font-bold font-heading text-text-primary mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
              </svg>
              What You Will Learn
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              {course.whatYouWillLearn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-core mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Exposure */}
          <div className="p-4 sm:p-5 rounded-xl bg-brand-sky/40 border border-brand-core/20">
            <h3 className="text-sm font-bold font-heading text-brand-deep mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-core" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l5.654-4.654m0 0a3 3 0 0 1 3.586 0" />
              </svg>
              Real Project Exposure
            </h3>
            <p className="text-sm text-text-primary leading-relaxed">
              {course.projectExposure}
            </p>
          </div>

          {/* Grid: Suitable For & Career Roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface border border-border-light">
              <h4 className="text-xs font-bold uppercase font-heading tracking-wider text-text-muted mb-2">
                Who This Is Suitable For
              </h4>
              <p className="text-xs sm:text-sm text-text-primary leading-relaxed">
                {course.suitableFor}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border-light">
              <h4 className="text-xs font-bold uppercase font-heading tracking-wider text-text-muted mb-2">
                Career Opportunities
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {course.careerOpportunities.map((role) => (
                  <span key={role} className="text-xs px-2 py-0.5 rounded bg-gray-100 text-text-primary font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-surface border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={siteConfig.whatsapp.getCustomLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading text-sm font-semibold transition-all duration-300 gap-2 shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.265-1.118z" />
            </svg>
            Ask via WhatsApp
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              Close
            </button>
            <CTAButton
              href={siteConfig.googleFormUrl}
              external
              size="sm"
              className="w-full sm:w-auto"
            >
              Apply for {course.name}
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
