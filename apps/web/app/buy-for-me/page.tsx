"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Buy For Me Modular Sections
import { BuyForMeHeroSection } from "@/modules/buy-for-me/sections/hero/buy-for-me-hero-section";
import { AssistedOrderFormSection } from "@/modules/buy-for-me/sections/order-form/assisted-order-form-section";
import { BuyForMeWorkflowSection } from "@/modules/buy-for-me/sections/workflow-steps/buy-for-me-workflow-section";
import { SupportedStoresSection } from "@/modules/buy-for-me/sections/supported-stores/supported-stores-section";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

export default function BuyForMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-24">
        <BuyForMeHeroSection />
        <AssistedOrderFormSection />
        <BuyForMeWorkflowSection />
        <SupportedStoresSection />
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
