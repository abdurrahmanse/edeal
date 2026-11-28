"use client";

import React from "react";
import {
  ShieldCheck,
  Plane,
  Home,
  Layers,
  Radio,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/modules/shared/section-header";
import { FeatureCard } from "@/modules/shared/feature-card";

export function FeaturesGrid() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Legal NBR Customs Brokerage",
      description:
        "Never worry about your family facing harassment or surprise tariff invoices at Dhaka Airport. We clear all packages legally under commercial declarations.",
      iconColor: "text-emerald-500",
    },
    {
      icon: Plane,
      title: "Direct Weekly Air Cargo Flights",
      description:
        "Scheduled departures every Tuesday and Friday from JFK (New York) and Houston direct to Hazrat Shahjalal International Airport (DAC).",
      iconColor: "text-teal-500",
    },
    {
      icon: Home,
      title: "Doorstep Delivery to All 64 Districts",
      description:
        "From Dhaka & Chittagong to Sylhet, Rajshahi, Rangpur, and remote rural upazilas — our dedicated couriers deliver right into your family's hands.",
      iconColor: "text-orange-500",
    },
    {
      icon: Layers,
      title: "Free Multi-Store Consolidation",
      description:
        "Order from Amazon, Walmart, BestBuy, and Apple to our USA warehouse. We hold, unbox excess packaging, and combine into a single carton for free.",
      iconColor: "text-blue-500",
    },
    {
      icon: Radio,
      title: "Live GPS Flight & Radar Tracking",
      description:
        "Full transparent visibility with timestamps: from warehouse scanning, airline airway bill issuance, to local delivery rider OTP.",
      iconColor: "text-emerald-500",
    },
    {
      icon: DollarSign,
      title: "Flat & Honest Per-Pound Rates",
      description:
        "We charge a fair, simple service fee. No volumetric tricks for everyday boxes, no hidden handling charges, and zero surprises.",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeIcon={Sparkles}
          badgeText="Why Choose AponBridge"
          title="Engineered Specifically for the Needs of"
          highlightedText="Bangladeshi Families"
          description="Traditional couriers charge exorbitant commercial rates, while informal passenger favors carry risk of confiscation. AponBridge is your secure, trusted bridge."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <FeatureCard
              key={idx}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              iconColor={feat.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
