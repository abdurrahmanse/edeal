"use client";

import React from "react";
import { MetricCapsule } from "@/modules/shared/metric-capsule";
import { ShieldCheck, MapPin, PackageCheck, HeartHandshake } from "lucide-react";

export function HomeLiveStatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCapsule
          icon={PackageCheck}
          value={15840}
          suffix="+"
          label="Care Packages Delivered"
          subLabel="Updated Today"
        />
        <MetricCapsule
          icon={MapPin}
          value={64}
          suffix=" Districts"
          label="Doorstep Coverage in BD"
          subLabel="100% Nationwide"
        />
        <MetricCapsule
          icon={ShieldCheck}
          value={100}
          suffix="%"
          label="NBR Legal Customs Cleared"
          subLabel="Zero Harassment"
        />
        <MetricCapsule
          icon={HeartHandshake}
          value={99.8}
          decimals={1}
          suffix="%"
          label="Expat Satisfaction Score"
          subLabel="4.9 / 5 Rating"
        />
      </div>
    </section>
  );
}
export default HomeLiveStatsSection;
