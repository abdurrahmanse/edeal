"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// About Modular Sections
import { AboutHeroSection } from "@/modules/about/sections/hero/about-hero-section";
import { AboutOurStorySection } from "@/modules/about/sections/our-story/our-story-section";
import { AboutNetworkReachSection } from "@/modules/about/sections/network-reach/network-reach-section";
import { HomeLiveStatsSection } from "@/modules/home/sections/live-stats/home-live-stats-section";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-24 space-y-12">
        <AboutHeroSection />
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <AboutOurStorySection />
          <HomeLiveStatsSection />
          <AboutNetworkReachSection />
        </section>
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
