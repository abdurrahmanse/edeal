"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Heart } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Heart}
        badgeText="Built by Expats, for Expats"
        title="Connecting Bangladeshi Families"
        highlightedText="Across Oceans & Continents"
        description="AponBridge Express was founded with a singular mission: to eliminate the anxiety, unfair pricing, and airport customs harassment that overseas Bangladeshis face when sending love and essentials home."
      />
    </section>
  );
}
export default AboutHeroSection;
