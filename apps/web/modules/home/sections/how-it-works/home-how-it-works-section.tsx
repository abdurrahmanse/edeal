"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { StepCard } from "@/modules/shared/step-card";
import { Package, ShieldAlert, Plane, Home, Navigation } from "lucide-react";

export function HomeHowItWorksSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badgeIcon={Navigation}
        badgeText="Seamless 4-Step Journey"
        title="How Your Parcel Travels from"
        highlightedText="Your Hands to Your Family"
        description="A transparent, hassle-free process from overseas warehouse drop-off to doorstep delivery in any village or city in Bangladesh."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StepCard
          stepNumber={1}
          icon={Package}
          title="Drop Off or Ship to Warehouse"
          description="Ship online orders (Amazon, Walmart) to your free virtual US/UK suite address, or drop parcels off at our New York or Houston hubs."
        />
        <StepCard
          stepNumber={2}
          icon={ShieldAlert}
          title="Inspection & Consolidation"
          description="Our warehouse team inspects contents, takes high-res photos, discards outer retail bulk, and combines multiple boxes to minimize dimensional weight."
        />
        <StepCard
          stepNumber={3}
          icon={Plane}
          title="Air Cargo & NBR Clearance"
          description="Your parcel boards a direct cargo flight to Dhaka (HSIA). Our certified clearing agents handle 100% legal customs documentation."
        />
        <StepCard
          stepNumber={4}
          icon={Home}
          title="Doorstep OTP Handover"
          description="Our dedicated Bangladesh courier riders deliver directly to your family's door in any of the 64 districts with verified OTP authentication."
        />
      </div>
    </section>
  );
}
export default HomeHowItWorksSection;
