"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Scale } from "lucide-react";

export function CalculatorHeroSection() {
  return (
    <section className="pt-12 pb-8 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Scale}
        badgeText="Official Expat Freight Rate Calculator"
        title="Calculate International Shipping to"
        highlightedText="Bangladesh in Seconds"
        description="Get instant, 100% all-inclusive pricing including international air cargo, legal Bangladesh customs duty clearance, and doorstep courier delivery in any district."
      />
    </section>
  );
}
export default CalculatorHeroSection;
