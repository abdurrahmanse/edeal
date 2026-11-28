"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { ShoppingBag } from "lucide-react";

export function BuyForMeHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={ShoppingBag}
        badgeText="Assisted Online Shopping Service"
        title="We Buy in the USA & Deliver to"
        highlightedText="Your Family's Door in BD"
        description="Don't have an international credit card or having trouble with store shipping restrictions? Simply paste the product link, and we will purchase it on your behalf."
      />
    </section>
  );
}
export default BuyForMeHeroSection;
