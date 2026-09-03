"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border-2 border-brand-bright/20 animate-ping" />
        <div className="absolute inset-4 rounded-full border border-brand-core/30 animate-pulse" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-core/10 to-brand-bright/10" />
      </div>
    </div>
  ),
});

export default function HeroSceneWrapper() {
  return <HeroScene />;
}
