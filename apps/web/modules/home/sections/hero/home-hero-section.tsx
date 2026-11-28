"use client";

import React from "react";
import { Button } from "@/modules/ui/button";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen, setTrackingModalOpen, setAssistedShoppingModalOpen } from "@/modules/core/slices/uiSlice";
import { HeroManifestCard } from "@/modules/home/hero-manifest-card";
import { Plane, ShieldCheck, ArrowRight, ShoppingBag, Radio, Sparkles } from "lucide-react";

export function HomeHeroSection() {
  const dispatch = useAppDispatch();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>পরবাস থেকে প্রিয়জনের কাছে নির্ভরযোগ্য উপহার ও পার্সেল</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
              Send Care Packages to Bangladesh,{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                Worry-Free
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Fast, transparent air cargo from the USA, UK, Canada & UAE. All-inclusive customs duty clearance, free repackaging & doorstep courier delivery across all 64 districts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => dispatch(setBookingModalOpen(true))}
                className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl px-6 h-12 shadow-lg shadow-emerald-600/20 font-semibold gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Shipment</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => dispatch(setTrackingModalOpen(true))}
                className="glass-surface specular-shine rounded-2xl px-6 h-12 font-semibold gap-2 hover:bg-white/40 dark:hover:bg-white/10"
              >
                <Radio className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                <span>Track Radar</span>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                onClick={() => dispatch(setAssistedShoppingModalOpen(true))}
                className="rounded-2xl px-4 h-12 font-semibold gap-2 text-muted-foreground hover:text-foreground"
              >
                <ShoppingBag className="w-4 h-4 text-amber-500" />
                <span>Buy For Me</span>
              </Button>
            </div>

            {/* Quick Micro-Assurance Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Legal NBR Clearance</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <div className="flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-emerald-500" />
                <span>Weekly Cargo Flights</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>Zero Airport Harassment</span>
            </div>
          </div>

          {/* Right Column: Hero Manifest Floating Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroManifestCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeHeroSection;
