"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { Laptop, Gift, AlertTriangle } from "lucide-react";

export function CustomsDutyRulesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
      <h2 className="text-xl font-bold text-foreground text-center">Standard Duty Guidelines for Expat Parcels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Laptop}
          title="Laptops & Tablets"
          description="1 personal laptop or tablet per consignment is permitted with standard NBR assessment. AponBridge pre-clears documentation at Hazrat Shahjalal Airport."
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={Gift}
          title="Chocolates & Garments"
          description="Personal gifts up to 10 kg of confectioneries and personal clothing are cleared swiftly under personal baggage allowances with minimal formalities."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={AlertTriangle}
          title="Strictly Banned Items"
          description="Drone cameras without defense ministry approval, commercial gold bullion, counterfeit currency, weapon accessories, and flammable aerosols are strictly forbidden."
          iconColor="text-rose-500"
        />
      </div>
    </section>
  );
}
export default CustomsDutyRulesSection;
