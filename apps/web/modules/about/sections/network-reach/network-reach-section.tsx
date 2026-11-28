"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { MapPin, ShieldCheck, Globe2 } from "lucide-react";

export function AboutNetworkReachSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        icon={MapPin}
        title="64 Districts Doorstep"
        description="From Dinajpur to Cox's Bazar, our dedicated courier riders deliver right to your village or city residence."
        iconColor="text-emerald-500"
      />
      <FeatureCard
        icon={ShieldCheck}
        title="100% Legal NBR Clearance"
        description="We file legal customs declarations for all items. No back-alley clearances, zero risk of parcel confiscation."
        iconColor="text-teal-500"
      />
      <FeatureCard
        icon={Globe2}
        title="Direct Cargo Partnerships"
        description="Weekly allocations on Biman Bangladesh, Qatar Airways, and Emirates air freight."
        iconColor="text-amber-500"
      />
    </div>
  );
}
export default AboutNetworkReachSection;
