"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Warehouses Modular Sections
import { WarehousesHeroSection } from "@/modules/warehouses/sections/hero/warehouses-hero-section";
import { WarehousesDropoffGuideSection } from "@/modules/warehouses/sections/terminal-instructions/dropoff-guide-section";
import { HomeWarehousesSection } from "@/modules/home/sections/warehouse-network/home-warehouses-section";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

export default function WarehousesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-24">
        <WarehousesHeroSection />
        <HomeWarehousesSection />
        <WarehousesDropoffGuideSection />
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
