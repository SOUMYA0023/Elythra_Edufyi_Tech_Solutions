"use client";

import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  onSelect?: (course: Course) => void;
}

export default function CourseCard({ course, onSelect }: CourseCardProps) {
  const categoryLabel =
    course.category === "technical" ? "Technical" : "Non-Technical";
  const categoryColor =
    course.category === "technical"
      ? "bg-brand-core/10 text-brand-core border-brand-core/20"
      : "bg-accent-warm/10 text-accent-warm border-accent-warm/30";

  return (
    <div
      onClick={() => onSelect?.(course)}
      className="glass-card group relative p-6 hover:border-brand-core/40 hover:shadow-xl hover:shadow-brand-core/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Top Header: Tag & Explore Hint */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${categoryColor}`}
          >
            {categoryLabel}
          </span>
          <span className="text-[11px] font-medium text-brand-core opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 font-heading">
            View Details
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>

        {/* Course Name */}
        <h3 className="font-heading text-lg font-bold text-text-primary mb-2 group-hover:text-brand-core transition-colors duration-300">
          {course.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted leading-relaxed line-clamp-3 mb-4">
          {course.description}
        </p>
      </div>

      {/* Tool tags snippet */}
      <div>
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-light/60">
          {course.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="text-[11px] px-2 py-0.5 rounded bg-brand-sky/60 text-brand-deep font-medium"
            >
              {tool}
            </span>
          ))}
          {course.tools.length > 3 && (
            <span className="text-[11px] px-1.5 py-0.5 text-text-muted font-medium">
              +{course.tools.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom accent glow */}
      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-core via-brand-bright to-brand-deep rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
