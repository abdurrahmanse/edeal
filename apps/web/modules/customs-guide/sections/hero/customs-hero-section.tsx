"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { ShieldCheck } from "lucide-react";

export function CustomsHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={ShieldCheck}
        badgeText="National Board of Revenue (NBR) Compliant"
        title="Bangladesh Airport Customs &"
        highlightedText="Legal Clearance Guide"
        description="Learn what items you can send duty-free, what requires legal commercial tax declaration, and which prohibited goods to avoid."
      />
    </section>
  );
}
export default CustomsHeroSection;
