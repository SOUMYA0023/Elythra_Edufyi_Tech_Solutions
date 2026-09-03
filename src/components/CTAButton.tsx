"use client";

import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href = "/apply",
  external = false,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-core";

  const variants = {
    primary:
      "bg-brand-core text-white hover:bg-brand-deep hover:shadow-lg hover:shadow-brand-core/25 hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-brand-sky text-brand-deep hover:bg-brand-bright/20 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border-2 border-brand-core text-brand-core hover:bg-brand-core hover:text-white hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-brand-core hover:bg-brand-sky hover:-translate-y-0.5 active:translate-y-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
}
