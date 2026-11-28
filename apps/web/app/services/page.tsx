"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Services Modular Sections
import { ServicesHeroSection } from "@/modules/services/sections/hero/services-hero-section";
import { ServicesSpecializedTiersSection } from "@/modules/services/sections/specialized-tiers/specialized-tiers-section";
import { PricingTable } from "@/modules/rates-pricing/pricing-table";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-20">
        <ServicesHeroSection />
        <PricingTable />
        <ServicesSpecializedTiersSection />
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
