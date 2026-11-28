"use client";

import React from "react";
import { Radio } from "lucide-react";

export function TrackHeroSection() {
  return (
    <section className="pt-12 pb-6 text-center max-w-4xl mx-auto px-4 space-y-4">
      <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 dark:text-emerald-300">
        <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
        <span>Trans-Atlantic Air Cargo Live Radar</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
        Track International Shipment
      </h1>
      <p className="text-base text-muted-foreground max-w-2xl mx-auto">
        Live GPS tracking from US warehouse dispatch, cargo flight departure, to Dhaka Hazrat Shahjalal Airport customs clearance and doorstep courier rider delivery.
      </p>
    </section>
  );
}
export default TrackHeroSection;
