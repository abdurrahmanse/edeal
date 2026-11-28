"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { FeatureCard } from "@/modules/shared/feature-card";
import { ShieldCheck, Plane, Box, Lock, Headphones, Scale, Sparkles } from "lucide-react";

export function HomeFeaturesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badgeIcon={Sparkles}
        badgeText="Why Overseas Bangladeshis Trust AponBridge"
        title="Cross-Border Logistics Engineered for"
        highlightedText="Complete Peace of Mind"
        description="We eliminate customs anxiety, arbitrary bribes, damaged goods, and inflated courier prices with a transparent end-to-end framework."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={ShieldCheck}
          title="NBR Customs Duty Included"
          description="Never worry about your family getting surprised with extortionate duty charges at airport customs. All taxes are legally cleared beforehand."
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={Plane}
          title="Direct Weekly Cargo Flights"
          description="Partnered with Qatar Airways, Emirates & Biman Bangladesh Cargo for guaranteed weekly departures from JFK, LHR, YYZ, and DXB."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={Box}
          title="Free Repacking & Consolidation"
          description="Shopping from multiple stores? We hold your packages for up to 30 days, remove excessive packaging, and consolidate them into one box to save up to 40%."
          iconColor="text-amber-500"
        />
        <FeatureCard
          icon={Lock}
          title="Tamper-Proof OTP Handover"
          description="Every parcel is sealed with a tamper-evident barcode seal. Handover in Bangladesh requires a secret 4-digit OTP sent to the recipient's phone."
          iconColor="text-indigo-500"
        />
        <FeatureCard
          icon={Headphones}
          title="24/7 Expat Concierge"
          description="Speak with our dedicated support agents in Bengali or English via WhatsApp anytime from New York, London, Toronto, Dubai or Dhaka."
          iconColor="text-cyan-500"
        />
        <FeatureCard
          icon={Scale}
          title="Zero Hidden Tariffs"
          description="What you see on the calculator is exactly what you pay. Transparent per-pound pricing with complete fee breakdown."
          iconColor="text-emerald-500"
        />
      </div>
    </section>
  );
}
export default HomeFeaturesSection;
