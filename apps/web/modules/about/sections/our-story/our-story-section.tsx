"use client";

import React from "react";
import { Card } from "@/modules/ui/card";
import { Plane } from "lucide-react";

export function AboutOurStorySection() {
  return (
    <Card className="glass-surface specular-shine rounded-3xl p-8 sm:p-12 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/20 dark:border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <Plane className="w-5 h-5 transform -rotate-45" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Our Origin Story</h2>
            <p className="text-xs text-muted-foreground">From Jackson Heights, Queens to Dhaka</p>
          </div>
        </div>
        <span className="glass-pill px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-600">
          Est. 2022
        </span>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          As non-resident Bangladeshis living in North America, we frequently tried sending laptops, medicines, and winter clothes to our parents and siblings back in Bangladesh. We encountered endless frustrations: parcels held hostage at Dhaka airport, mysterious and arbitrary custom duties demanded on arrival, and damaged items.
        </p>
        <p>
          We realized that millions of expatriates in the USA, UK, Canada, and the Middle East lacked a transparent, modern, tech-enabled courier bridge. In 2022, we built AponBridge Express — combining certified IATA air cargo partnerships, legal National Board of Revenue (NBR) customs clearance, and a proprietary nationwide last-mile delivery network.
        </p>
      </div>
    </Card>
  );
}
export default AboutOurStorySection;
