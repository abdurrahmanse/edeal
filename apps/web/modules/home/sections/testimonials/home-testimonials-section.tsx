"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Card } from "@/modules/ui/card";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Tanvir Ahmed",
    origin: "Jackson Heights, Queens, NY",
    dest: "Mirpur, Dhaka",
    rating: 5,
    quote: "আমি আমার মায়ের জন্য প্রয়োজনীয় প্রেশারের ওষুধ এবং একটা আইপ্যাড পাঠিয়েছিলাম। মাত্র ৬ দিনে মিরপুরের বাসায় ডেলিভারি হয়েছে। কাস্টমসে কোনো ঝামেলা বা অতিরিক্ত টাকা দিতে হয়নি।",
    item: "iPad & Prescription Meds"
  },
  {
    name: "Dr. Farhana Rahman",
    origin: "Whitechapel, London, UK",
    dest: "Sylhet Sadar",
    rating: 5,
    quote: "Used the consolidation service for Eid shopping. Sent 5 parcels from Amazon UK, they repacked them into one compact box and saved me over £60. My family in Sylhet got it before Eid day!",
    item: "Eid Clothes & Chocolates"
  },
  {
    name: "Ashraful Islam",
    origin: "Scarborough, Toronto, CA",
    dest: "Chittagong GEC",
    rating: 5,
    quote: "Very professional tracking system. I could see exactly when the flight took off from Toronto, landed in Dhaka, and cleared NBR customs. OTP verification at doorstep is a great touch.",
    item: "MacBook Air M2 & Watch"
  }
];

export function HomeTestimonialsSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badgeIcon={Heart}
        badgeText="Heartfelt Expat Stories"
        title="Trusted by Over 10,000 Expatriate"
        highlightedText="Families Worldwide"
        description="Read how overseas Bangladeshis send care packages, gifts, and essentials to their parents, children, and siblings back home."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <Card key={idx} className="glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-emerald-500/40" />
              </div>

              <p className="text-sm text-foreground italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 dark:border-white/5 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.origin} → {t.dest}</p>
              </div>
              <span className="text-[11px] font-mono glass-pill px-2.5 py-0.5 rounded-full text-emerald-600 dark:text-emerald-400">
                {t.item}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
export default HomeTestimonialsSection;
