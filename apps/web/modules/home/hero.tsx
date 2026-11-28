"use client";

import React from "react";
import {
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  Plane,
  Sparkles,
} from "lucide-react";
import { Button } from "@/modules/ui/button";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";
import { TrustBadge } from "@/modules/shared/trust-badge";
import { HeroManifestCard } from "./hero-manifest-card";

export function Hero() {
  const dispatch = useAppDispatch();

  const scrollToCalculator = () => {
    const el = document.getElementById("calculator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 ambient-mesh">
      {/* Background Soft Ambient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column (7 cols): Clean Minimalist Copy & Actions */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct Expat Gateway • USA, UK & Canada to Bangladesh</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
              Send Parcels & Love to{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
                Bangladesh
              </span>{" "}
              with Zero Customs Hassle.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Living abroad? Send laptops, phones, chocolates, vitamins, and gifts directly to your family's doorstep across all 64 districts in Bangladesh. We manage legal customs clearance, direct weekly cargo flights, and door-to-door delivery.
            </p>

            {/* Minimalist CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Button
                onClick={() => dispatch(setBookingModalOpen(true))}
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto gap-2.5 text-base py-6 px-8 rounded-2xl font-bold shadow-lg hover:shadow-emerald-600/25"
              >
                <span>Book a Parcel Now</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={scrollToCalculator}
                variant="glass"
                size="lg"
                className="w-full sm:w-auto gap-2 py-6 px-7 rounded-2xl text-base font-semibold"
              >
                <span>Calculate Shipping Rate</span>
              </Button>
            </div>

            {/* Reusable Trust Badges */}
            <div className="pt-8 border-t border-border/40 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <TrustBadge icon={ShieldCheck} label="100% Legal Customs Brokerage" iconColor="text-emerald-500" />
              <TrustBadge icon={MapPin} label="Doorstep in 64 BD Districts" iconColor="text-teal-500" />
              <TrustBadge icon={Clock} label="4-6 Days Express Air Freight" iconColor="text-amber-500" className="col-span-2 sm:col-span-1" />
            </div>
          </div>

          {/* Right Column (5 cols): Extracted Subcomponent */}
          <div className="lg:col-span-5 relative">
            <HeroManifestCard />
          </div>
        </div>
      </div>
    </section>
  );
}
