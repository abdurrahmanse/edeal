"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Plane } from "lucide-react";

export function ServicesHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Plane}
        badgeText="Comprehensive Cross-Border Shipping Logistics"
        title="International Courier Services &"
        highlightedText="Transparent Rates"
        description="Whether sending a high-value MacBook, essential prescription vitamins for elderly parents, or a 50 lb family care box, we offer dedicated freight tiers tailored for expatriates."
      />
    </section>
  );
}
export default ServicesHeroSection;
