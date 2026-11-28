"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { Box, ShieldCheck, Sparkles } from "lucide-react";

export function CalculatorPackingGuideSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Box}
          title="How Dimensional Weight Works"
          description="Air cargo uses the higher of actual weight vs volumetric weight (L × W × H in inches ÷ 139). We offer free unboxing and repackaging to minimize empty space!"
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={ShieldCheck}
          title="100% Legal NBR Clearance"
          description="No hidden tariff shocks at Dhaka Hazrat Shahjalal Airport. Our quoted price includes all customs handling so your family never pays a single extra Poisha."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={Sparkles}
          title="Free Repacking & Consolidation"
          description="Ordered multiple boxes from Amazon and Walmart? Send them all to our New York or Houston warehouse; we combine them into one sturdy box to save you up to 40%."
          iconColor="text-amber-500"
        />
      </div>
    </section>
  );
}
export default CalculatorPackingGuideSection;
