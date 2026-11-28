"use client";

import React from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";

// Contact Modular Sections
import { ContactHeroSection } from "@/modules/contact/sections/hero/contact-hero-section";
import { ContactChannelsSection } from "@/modules/contact/sections/channels/contact-channels-section";
import { ContactInquiryFormSection } from "@/modules/contact/sections/inquiry-form/contact-inquiry-form-section";

// Global Modals
import { BookingModal } from "@/modules/shipment-booking/booking-modal";
import { TrackingWidget } from "@/modules/shipment-tracking/tracking-widget";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-24">
        <ContactHeroSection />

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <ContactChannelsSection />
          </div>
          <div className="lg:col-span-7">
            <ContactInquiryFormSection />
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
      <TrackingWidget />
      <ContactConcierge />
    </div>
  );
}
