"use client";

import React from "react";
import { FedexLabelCallout } from "@/modules/components/molecules/fedex-label-callout";
import { DropoffInstructionsBox } from "@/modules/components/molecules/dropoff-instructions-box";

export function WarehousesDropoffGuideSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
      <h2 className="text-xl font-bold text-foreground text-center">How to Send to Our Terminals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DropoffInstructionsBox
          title="In-Person Drop-off"
          subLabel="Open Mon-Sat 9AM - 6PM EST"
          value="Free Packing Box"
        />
        <FedexLabelCallout
          title="Nationwide FedEx Mail-in"
          subLabel="Discounted prepaid labels provided"
          value="Up to 50% Off"
        />
      </div>
    </section>
  );
}
export default WarehousesDropoffGuideSection;
