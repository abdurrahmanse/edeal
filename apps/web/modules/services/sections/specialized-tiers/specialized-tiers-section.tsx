"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { Laptop, ThermometerSnowflake, Layers, Gift } from "lucide-react";

export function ServicesSpecializedTiersSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Specialized Expat Handling Tiers</h2>
        <p className="text-xs text-muted-foreground">Tailored solutions for delicate and high-value cargo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Laptop}
          title="Electronics & Laptops Priority"
          description="Dedicated anti-static packaging, tamper-evident seals, and express NBR IT-duty clearance. Safe passage for iPhones, MacBooks, and high-end gear."
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={ThermometerSnowflake}
          title="Medicine & Healthcare Express"
          description="Send essential prescription medications, insulin, and diabetic care supplies for elderly parents with guaranteed temperature compliance and direct air routing."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={Layers}
          title="Family Care Box Consolidation"
          description="Combine chocolates, winter garments, baby formulas, and gifts from multiple US/UK retail orders into one sturdy master box to minimize air cargo rates."
          iconColor="text-amber-500"
        />
      </div>
    </section>
  );
}
export default ServicesSpecializedTiersSection;
