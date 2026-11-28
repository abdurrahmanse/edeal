"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Customs Guide Modular Sections
import { CustomsHeroSection } from "@/modules/customs-guide/sections/hero/customs-hero-section";
import { CustomsDutyRulesSection } from "@/modules/customs-guide/sections/duty-rules/duty-rules-section";
import { RestrictedSearch } from "@/modules/restricted-items/restricted-search";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

export default function CustomsGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-24">
        <CustomsHeroSection />
        <RestrictedSearch />
        <CustomsDutyRulesSection />
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
