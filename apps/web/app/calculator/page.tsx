"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Calculator Modular Sections
import { CalculatorHeroSection } from "@/modules/calculator/sections/hero/calculator-hero-section";
import { CalculatorPackingGuideSection } from "@/modules/calculator/sections/packing-guide/packing-guide-section";
import { CalculatorWidget } from "@/modules/shipping-calculator/calculator-widget";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-20">
        <CalculatorHeroSection />
        <CalculatorWidget />
        <CalculatorPackingGuideSection />
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
