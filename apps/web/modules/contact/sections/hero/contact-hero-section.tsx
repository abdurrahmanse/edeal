"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { MessageCircle } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={MessageCircle}
        badgeText="24/7 Expat Concierge Support"
        title="We Are Here to Help You"
        highlightedText="Connect with Home"
        description="Have questions about package weight, allowed items, customs rates, or warehouse drop-offs? Reach out to our team in New York, Houston, London, or Dhaka anytime."
      />
    </section>
  );
}
export default ContactHeroSection;
