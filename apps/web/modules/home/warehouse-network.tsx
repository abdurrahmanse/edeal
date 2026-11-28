"use client";

import React from "react";
import { Building2 } from "lucide-react";
import { SectionHeader } from "@/modules/shared/section-header";
import { HubCard } from "@/modules/shared/hub-card";

export function WarehouseNetwork() {
  const hubs = [
    {
      country: "United States",
      flag: "🇺🇸",
      hubName: "New York (JFK Gateway & Consolidation Center)",
      address: "147-39 175th Street, Jamaica, NY 11434",
      phone: "+1 (718) 555-0144",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM EST",
      features: ["Walk-in drop off", "Free repackaging", "Direct Qatar / Emirates Cargo flights"],
      cutoff: "Every Friday 5 PM EST",
    },
    {
      country: "United States",
      flag: "🇺🇸",
      hubName: "Houston Terminal (Texas & Southern Hub)",
      address: "6200 Hillcroft Ave, Suite 104, Houston, TX 77081",
      phone: "+1 (832) 555-0182",
      hours: "Mon - Fri: 10:00 AM - 6:00 PM CST",
      features: ["Luggage drop-off", "Heavy cargo scale", "Bi-weekly flights"],
      cutoff: "Every Tuesday 3 PM CST",
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      hubName: "London Heathrow Gateway (UK & Europe)",
      address: "Unit 4, Heathrow Cargo Village, TW6 3RN, UK",
      phone: "+44 20 7946 0912",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM GMT",
      features: ["British Airways / Biman cargo", "Next-flight loading"],
      cutoff: "Every Thursday 4 PM GMT",
    },
    {
      country: "Bangladesh Destination",
      flag: "🇧🇩",
      hubName: "Dhaka Central Customs & Sorting Facility",
      address: "Hazrat Shahjalal Int'l Airport (DAC) & Tejgaon I/A, Dhaka-1208",
      phone: "+880 1700-000000",
      hours: "24/7 Processing & Customs Brokerage",
      features: ["NBR Customs desk", "Air-conditioned pharmaceutical vault", "64-district delivery fleet"],
      cutoff: "Daily dispatch to all divisions",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeIcon={Building2}
          badgeText="Physical International Warehouses"
          title="Our Receiving Terminals &"
          highlightedText="Direct Flight Routes"
          description="We operate our own physical receiving warehouses in New York, Houston, and London, with direct customs clearing in Dhaka."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hubs.map((hub, idx) => (
            <HubCard
              key={idx}
              flag={hub.flag}
              country={hub.country}
              hubName={hub.hubName}
              address={hub.address}
              phone={hub.phone}
              hours={hub.hours}
              cutoff={hub.cutoff}
              features={hub.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
