"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Modular Monolith Home Sections
import { HomeHeroSection } from "@/modules/home/sections/hero/home-hero-section";
import { HomeLiveStatsSection } from "@/modules/home/sections/live-stats/home-live-stats-section";
import { HomeFeaturesSection } from "@/modules/home/sections/features/home-features-section";
import { HomeHowItWorksSection } from "@/modules/home/sections/how-it-works/home-how-it-works-section";
import { HomeWarehousesSection } from "@/modules/home/sections/warehouse-network/home-warehouses-section";
import { HomeTestimonialsSection } from "@/modules/home/sections/testimonials/home-testimonials-section";
import { HomeCtaSection } from "@/modules/home/sections/cta/home-cta-section";

// Embedded Core Widgets
import { CalculatorWidget } from "@/modules/shipping-calculator/calculator-widget";
import { PricingTable } from "@/modules/rates-pricing/pricing-table";
import { FaqSection } from "@/modules/support-faq/faq-section";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { AssistedShoppingSection } from "@/modules/assisted-shopping/assisted-shopping-section";
import { RestrictedSearch } from "@/modules/restricted-items/restricted-search";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20 selection:text-emerald-800 dark:selection:text-emerald-200">
      <PromoBar />
      <Navbar />

      <main className="flex-1">
        <HomeHeroSection />
        <HomeLiveStatsSection />
        <CalculatorWidget />
        <HomeFeaturesSection />
        <HomeHowItWorksSection />
        <PricingTable />
        <HomeWarehousesSection />
        <HomeTestimonialsSection />
        <HomeCtaSection />
        <FaqSection />
      </main>

      <Footer />

      {/* Global Modals & Concierge Widget */}
      <BookingModal />
      <TrackingWidget />
      <AssistedShoppingSection />
      <RestrictedSearch />
      <ContactConcierge />
    </div>
  );
}
