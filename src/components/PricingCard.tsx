import type { PricingTier } from "@/data/pricing";
import CTAButton from "./CTAButton";

interface PricingCardProps {
  tier: PricingTier;
  compact?: boolean;
}

export default function PricingCard({ tier, compact = false }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-px transition-all duration-300 hover:-translate-y-1 ${
        tier.highlighted
          ? "bg-gradient-to-br from-brand-core via-brand-bright to-accent-warm shadow-xl shadow-brand-core/15"
          : "bg-border-light hover:shadow-lg hover:shadow-brand-core/5"
      }`}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-brand-deep to-brand-core text-white text-xs font-bold font-heading rounded-full tracking-wide shadow-md">
            {tier.badge}
          </span>
        </div>
      )}

      <div
        className={`relative rounded-2xl bg-white h-full flex flex-col ${
          compact ? "p-5" : "p-7"
        }`}
      >
        {/* Tier Name */}
        <h3 className="font-heading text-xl font-bold text-text-primary">
          {tier.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-text-muted mt-1">{tier.tagline}</p>

        {/* Price */}
        <div className="mt-4 mb-4">
          <span className="font-heading text-4xl font-bold text-brand-deep">
            {tier.priceFormatted}
          </span>
          <span className="text-sm text-text-muted ml-1">/ course</span>
        </div>

        {/* Description */}
        {!compact && (
          <p className="text-sm text-text-muted leading-relaxed mb-5">
            {tier.description}
          </p>
        )}

        {/* Features */}
        <ul className={`space-y-2.5 flex-1 ${compact ? "mb-4" : "mb-6"}`}>
          {tier.features.map((feature) => (
            <li
              key={feature.text}
              className={`flex items-start gap-2.5 text-sm ${
                feature.included ? "text-text-primary" : "text-text-muted/50"
              }`}
            >
              {feature.included ? (
                <svg
                  className="w-4.5 h-4.5 mt-0.5 text-brand-core flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4.5 h-4.5 mt-0.5 text-text-muted/30 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              )}
              <span className={feature.included ? "" : "line-through"}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <CTAButton
          href="/apply"
          variant={tier.highlighted ? "primary" : "outline"}
          size={compact ? "sm" : "md"}
          className="w-full"
        >
          Get Started
        </CTAButton>
      </div>
    </div>
  );
}
