"use client";

import React from "react";
import { PackageCheck, MapPin, Clock, Star } from "lucide-react";
import { MetricCapsule } from "@/modules/shared/metric-capsule";

export function LiveStats() {
  const stats = [
    {
      icon: PackageCheck,
      value: 128450,
      suffix: "+",
      label: "Parcels Delivered Safely",
      subLabel: "From USA, UK & Canada to BD",
      colorClass: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: MapPin,
      value: 64,
      suffix: " / 64",
      label: "Districts Reached",
      subLabel: "Every village, thana & city in BD",
      colorClass: "text-amber-500 dark:text-amber-400",
    },
    {
      icon: Clock,
      value: 98.8,
      decimals: 1,
      suffix: "%",
      label: "On-Time Flight Clearance",
      subLabel: "Zero customs clearance delay",
      colorClass: "text-teal-600 dark:text-teal-400",
    },
    {
      icon: Star,
      value: 4.9,
      decimals: 1,
      suffix: " / 5.0",
      label: "Customer Trust Rating",
      subLabel: "Based on 14,000+ expat reviews",
      colorClass: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <MetricCapsule
              key={idx}
              icon={s.icon}
              value={s.value}
              decimals={s.decimals}
              suffix={s.suffix}
              label={s.label}
              subLabel={s.subLabel}
              colorClass={s.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
