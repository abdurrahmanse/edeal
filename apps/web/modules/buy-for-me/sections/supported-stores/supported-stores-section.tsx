"use client";

import React from "react";
import { StoreLogoChip } from "@/modules/components/molecules/store-logo-chip";

export function SupportedStoresSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center space-y-4">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Popular Supported US & UK Online Stores
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StoreLogoChip label="Amazon USA" value="Prime Fast" highlight />
        <StoreLogoChip label="Walmart" value="Everyday Low" />
        <StoreLogoChip label="Best Buy" value="Tech Deals" />
        <StoreLogoChip label="Apple Store" value="US Unlocked" highlight />
        <StoreLogoChip label="eBay US" value="Authentic" />
        <StoreLogoChip label="Target" value="Household" />
        <StoreLogoChip label="B&H Photo" value="Pro Camera" />
        <StoreLogoChip label="Newegg" value="PC Hardware" />
      </div>
    </section>
  );
}
export default SupportedStoresSection;
