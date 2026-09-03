"use client";

import Image from "next/image";
import { industryPartners } from "@/data/partners";

export default function PartnerMarquee() {
  // Duplicate array to ensure seamless infinite looping marquee
  const marqueeItems = [...industryPartners, ...industryPartners];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-surface to-brand-sky/20 border-y border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase font-heading tracking-widest text-brand-core mb-2">
          INDUSTRY ECOSYSTEM & PREFERRED PARTNERS
        </p>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
          Associated with 20+ Leading Companies
        </h2>
        <p className="text-sm text-text-muted mt-2 max-w-xl mx-auto">
          Our curriculum, projects, and referral network align with industry standards set by top-tier global tech and enterprise firms.
        </p>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Gradient Fades on Left & Right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        {/* Scrolling flex track */}
        <div className="flex gap-4 sm:gap-6 w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white border border-border-light shadow-sm hover:border-brand-core/30 hover:shadow-md transition-all duration-300 min-w-[180px]"
            >
              {partner.logo ? (
                <div className="w-9 h-9 relative flex items-center justify-center flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-lg bg-brand-sky flex items-center justify-center font-heading text-sm font-bold text-brand-deep flex-shrink-0">
                  {partner.name.substring(0, 2).toUpperCase()}
                </div>
              )}
              <div className="text-left">
                <span className="font-heading text-sm font-bold text-text-primary block leading-tight">
                  {partner.name}
                </span>
                <span className="text-[10px] text-text-muted block font-medium">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
