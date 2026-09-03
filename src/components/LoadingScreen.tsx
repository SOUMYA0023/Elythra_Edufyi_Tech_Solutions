"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/95 backdrop-blur-xl">
      <div className="flex flex-col items-center gap-6 p-6 text-center max-w-sm">
        {/* Animated Brand Mark Assembly */}
        <div className="relative w-20 h-20">
          {/* Outer glowing orbital pulse */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-core to-brand-bright opacity-30 animate-ping" />
          
          {/* Main Logo Container */}
          <div className="relative w-20 h-20 rounded-2xl bg-white p-2.5 shadow-2xl border border-border-light flex items-center justify-center">
            <Image
              src="/images/logo-icon.jpeg"
              alt="Elythra Edufyi"
              width={64}
              height={64}
              className="rounded-lg object-contain animate-pulse-soft"
              priority
            />
          </div>
        </div>

        {/* Brand Name & Motto */}
        <div>
          <h2 className="font-heading text-lg font-bold text-brand-deep tracking-tight">
            {siteConfig.name}
          </h2>
          <p className="text-xs font-heading font-semibold text-brand-core uppercase tracking-widest mt-1">
            LEARN • BUILD • GET PLACED
          </p>
        </div>

        {/* Shimmer progress bar */}
        <div className="w-56 h-1.5 bg-brand-sky rounded-full overflow-hidden relative border border-border-light">
          <div className="h-full bg-gradient-to-r from-brand-deep via-brand-core to-brand-bright rounded-full shimmer-bg" />
        </div>
      </div>
    </div>
  );
}
