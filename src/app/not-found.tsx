import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface via-brand-sky/30 to-surface px-4">
      <div className="text-center max-w-lg">
        {/* Animated visual */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-bright/30 animate-[spin_20s_linear_infinite]" />
          {/* Middle ring */}
          <div className="absolute inset-4 rounded-full border border-brand-core/20 animate-[spin_15s_linear_infinite_reverse]" />
          {/* Inner core */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-core/10 to-brand-bright/10 flex items-center justify-center">
            <span className="font-heading text-6xl font-bold gradient-text">
              404
            </span>
          </div>
          {/* Floating nodes */}
          <div className="absolute top-2 right-6 w-3 h-3 rounded-full bg-brand-core animate-pulse" />
          <div className="absolute bottom-6 left-2 w-2.5 h-2.5 rounded-full bg-brand-bright animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-12 left-0 w-2 h-2 rounded-full bg-accent-warm animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mb-3">
          Page not found
        </h1>
        <p className="text-text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 bg-brand-core text-white font-heading font-semibold rounded-xl hover:bg-brand-deep hover:shadow-lg hover:shadow-brand-core/25 transition-all duration-300 text-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/courses/technical"
            className="px-5 py-2.5 border-2 border-brand-core text-brand-core font-heading font-semibold rounded-xl hover:bg-brand-core hover:text-white transition-all duration-300 text-sm"
          >
            Browse Courses
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 text-text-muted font-heading font-semibold rounded-xl hover:bg-brand-sky transition-all duration-300 text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
