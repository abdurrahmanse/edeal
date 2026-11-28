"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Building2 } from "lucide-react";

export function WarehousesHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Building2}
        badgeText="Physical International Receiving Terminals"
        title="Our Global Warehouses &"
        highlightedText="Drop-off Locations"
        description="Drop off your parcels in person at our New York or Houston hubs, or send them using our discounted nationwide FedEx shipping labels."
      />
    </section>
  );
}
export default WarehousesHeroSection;
