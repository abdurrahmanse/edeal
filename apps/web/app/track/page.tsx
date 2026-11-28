"use client";

import React, { useState } from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Track Modular Sections
import { TrackHeroSection } from "@/modules/track/sections/hero/track-hero-section";
import { TrackingSearchSection } from "@/modules/track/sections/tracking-search/tracking-search-section";
import { LiveRadarSection } from "@/modules/track/sections/live-radar/live-radar-section";
import { ConsignmentDetailsSection } from "@/modules/track/sections/consignment-details/consignment-details-section";
import { TrackingTimeline } from "@/modules/shipment-tracking/tracking-timeline";

// Core State & Modals
import { useAppDispatch, useAppSelector } from "@/modules/core/hooks";
import { lookupTracking } from "@/modules/core/slices/shippingSlice";
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";
import { toast } from "sonner";

export default function TrackPage() {
  const dispatch = useAppDispatch();
  const activeShipment = useAppSelector((state) => state.shipping.activeShipment);
  const [code, setCode] = useState("APN-88204-BD");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      dispatch(lookupTracking(code));
      setLoading(false);
      toast.success("Flight Radar synced with live consignment");
    }, 350);
  };

  const handleDemoPreset = (sampleCode: string) => {
    setCode(sampleCode);
    dispatch(lookupTracking(sampleCode));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-24 space-y-12">
        {/* Track Hero */}
        <TrackHeroSection />

        {/* Tracking Search Form */}
        <TrackingSearchSection
          code={code}
          setCode={setCode}
          loading={loading}
          onSearch={handleSearch}
          onPreset={handleDemoPreset}
        />

        {/* Live Radar, Details & Milestones */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <LiveRadarSection shipment={activeShipment} />
          <ConsignmentDetailsSection shipment={activeShipment} />
          {activeShipment && <TrackingTimeline shipment={activeShipment} />}
        </div>
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
