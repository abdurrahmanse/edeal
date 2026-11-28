import fs from "fs";
import path from "path";

const webRoot = path.resolve("apps/web");
const modulesRoot = path.join(webRoot, "modules");

// Helper to write file safely
function writeFile(relPath, content) {
  const fullPath = path.join(modulesRoot, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + "\n", "utf8");
  console.log("Wrote:", relPath);
}

console.log("--- 1. BUILDING HOME MODULE SECTIONS ---");

// modules/home/sections/hero/home-hero-section.tsx
writeFile("home/sections/hero/home-hero-section.tsx", `
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/modules/ui/button";
import { Badge } from "@/modules/ui/badge";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen, setTrackingModalOpen, setAssistedModalOpen } from "@/modules/core/slices/uiSlice";
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
                onClick={() => dispatch(setAssistedModalOpen(true))}
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
`);

// modules/home/sections/live-stats/home-live-stats-section.tsx
writeFile("home/sections/live-stats/home-live-stats-section.tsx", `
"use client";

import React from "react";
import { MetricCapsule } from "@/modules/shared/metric-capsule";
import { ShieldCheck, MapPin, PackageCheck, HeartHandshake } from "lucide-react";

export function HomeLiveStatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCapsule
          icon={PackageCheck}
          value={15840}
          suffix="+"
          label="Care Packages Delivered"
          change="Updated Today"
          changeType="positive"
        />
        <MetricCapsule
          icon={MapPin}
          value={64}
          suffix=" Districts"
          label="Doorstep Coverage in BD"
          change="100% Nationwide"
          changeType="positive"
        />
        <MetricCapsule
          icon={ShieldCheck}
          value={100}
          suffix="%"
          label="NBR Legal Customs Cleared"
          change="Zero Harassment"
          changeType="positive"
        />
        <MetricCapsule
          icon={HeartHandshake}
          value={99.8}
          decimals={1}
          suffix="%"
          label="Expat Satisfaction Score"
          change="4.9 / 5 Rating"
          changeType="positive"
        />
      </div>
    </section>
  );
}
export default HomeLiveStatsSection;
`);

// modules/home/sections/features/home-features-section.tsx
writeFile("home/sections/features/home-features-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { FeatureCard } from "@/modules/shared/feature-card";
import { ShieldCheck, Plane, Box, Lock, Headphones, Scale, Sparkles } from "lucide-react";

export function HomeFeaturesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badgeIcon={Sparkles}
        badgeText="Why Overseas Bangladeshis Trust AponBridge"
        title="Cross-Border Logistics Engineered for"
        highlightedText="Complete Peace of Mind"
        description="We eliminate customs anxiety, arbitrary bribes, damaged goods, and inflated courier prices with a transparent end-to-end framework."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={ShieldCheck}
          title="NBR Customs Duty Included"
          description="Never worry about your family getting surprised with extortionate duty charges at airport customs. All taxes are legally cleared beforehand."
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={Plane}
          title="Direct Weekly Cargo Flights"
          description="Partnered with Qatar Airways, Emirates & Biman Bangladesh Cargo for guaranteed weekly departures from JFK, LHR, YYZ, and DXB."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={Box}
          title="Free Repacking & Consolidation"
          description="Shopping from multiple stores? We hold your packages for up to 30 days, remove excessive packaging, and consolidate them into one box to save up to 40%."
          iconColor="text-amber-500"
        />
        <FeatureCard
          icon={Lock}
          title="Tamper-Proof OTP Handover"
          description="Every parcel is sealed with a tamper-evident barcode seal. Handover in Bangladesh requires a secret 4-digit OTP sent to the recipient's phone."
          iconColor="text-indigo-500"
        />
        <FeatureCard
          icon={Headphones}
          title="24/7 Expat Concierge"
          description="Speak with our dedicated support agents in Bengali or English via WhatsApp anytime from New York, London, Toronto, Dubai or Dhaka."
          iconColor="text-cyan-500"
        />
        <FeatureCard
          icon={Scale}
          title="Zero Hidden Tariffs"
          description="What you see on the calculator is exactly what you pay. Transparent per-pound pricing with complete fee breakdown."
          iconColor="text-emerald-500"
        />
      </div>
    </section>
  );
}
export default HomeFeaturesSection;
`);

// modules/home/sections/how-it-works/home-how-it-works-section.tsx
writeFile("home/sections/how-it-works/home-how-it-works-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { StepCard } from "@/modules/shared/step-card";
import { Package, ShieldAlert, Plane, Home, Navigation } from "lucide-react";

export function HomeHowItWorksSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badgeIcon={Navigation}
        badgeText="Seamless 4-Step Journey"
        title="How Your Parcel Travels from"
        highlightedText="Your Hands to Your Family"
        description="A transparent, hassle-free process from overseas warehouse drop-off to doorstep delivery in any village or city in Bangladesh."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StepCard
          stepNumber="01"
          icon={Package}
          title="Drop Off or Ship to Warehouse"
          description="Ship online orders (Amazon, Walmart) to your free virtual US/UK suite address, or drop parcels off at our New York or Houston hubs."
        />
        <StepCard
          stepNumber="02"
          icon={ShieldAlert}
          title="Inspection & Consolidation"
          description="Our warehouse team inspects contents, takes high-res photos, discards outer retail bulk, and combines multiple boxes to minimize dimensional weight."
        />
        <StepCard
          stepNumber="03"
          icon={Plane}
          title="Air Cargo & NBR Clearance"
          description="Your parcel boards a direct cargo flight to Dhaka (HSIA). Our certified clearing agents handle 100% legal customs documentation."
        />
        <StepCard
          stepNumber="04"
          icon={Home}
          title="Doorstep OTP Handover"
          description="Our dedicated Bangladesh courier riders deliver directly to your family's door in any of the 64 districts with verified OTP authentication."
        />
      </div>
    </section>
  );
}
export default HomeHowItWorksSection;
`);

// modules/home/sections/warehouse-network/home-warehouses-section.tsx
writeFile("home/sections/warehouse-network/home-warehouses-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { HubCard } from "@/modules/shared/hub-card";
import { Globe2 } from "lucide-react";

export function HomeWarehousesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badgeIcon={Globe2}
        badgeText="Global Receiving Terminals"
        title="Strategically Located Hubs Near"
        highlightedText="Major Expat Communities"
        description="Drop off in person or ship using our deeply discounted domestic FedEx/UPS partner rates from anywhere in North America or Europe."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HubCard
          city="New York, USA"
          code="JFK"
          address="147-35 Farmers Blvd, Jamaica, NY 11434 (Near JFK Airport)"
          flightSchedule="Every Tuesday & Friday (Direct Biman & Qatar Cargo)"
          cutoffDay="Wednesdays 5:00 PM EST"
          contact="support.us@aponbridge.com"
          badgeText="Flagship US Hub"
        />
        <HubCard
          city="London, United Kingdom"
          code="LHR"
          address="Unit 4, Heathrow Cargo Centre, Hounslow TW6 3SQ"
          flightSchedule="Every Thursday (Direct Biman Bangladesh Airlines)"
          cutoffDay="Tuesdays 6:00 PM GMT"
          contact="support.uk@aponbridge.com"
          badgeText="UK Hub"
        />
        <HubCard
          city="Toronto, Canada"
          code="YYZ"
          address="6500 Silver Dart Dr, Mississauga, ON L5P 1B2"
          flightSchedule="Every Saturday (Air Canada / Qatar Cargo)"
          cutoffDay="Thursdays 4:00 PM EST"
          contact="support.ca@aponbridge.com"
          badgeText="Canada Hub"
        />
      </div>
    </section>
  );
}
export default HomeWarehousesSection;
`);

// modules/home/sections/testimonials/home-testimonials-section.tsx
writeFile("home/sections/testimonials/home-testimonials-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Card } from "@/modules/ui/card";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Tanvir Ahmed",
    origin: "Jackson Heights, Queens, NY",
    dest: "Mirpur, Dhaka",
    rating: 5,
    quote: "আমি আমার মায়ের জন্য প্রয়োজনীয় প্রেশারের ওষুধ এবং একটা আইপ্যাড পাঠিয়েছিলাম। মাত্র ৬ দিনে মিরপুরের বাসায় ডেলিভারি হয়েছে। কাস্টমসে কোনো ঝামেলা বা অতিরিক্ত টাকা দিতে হয়নি।",
    item: "iPad & Prescription Meds"
  },
  {
    name: "Dr. Farhana Rahman",
    origin: "Whitechapel, London, UK",
    dest: "Sylhet Sadar",
    rating: 5,
    quote: "Used the consolidation service for Eid shopping. Sent 5 parcels from Amazon UK, they repacked them into one compact box and saved me over £60. My family in Sylhet got it before Eid day!",
    item: "Eid Clothes & Chocolates"
  },
  {
    name: "Ashraful Islam",
    origin: "Scarborough, Toronto, CA",
    dest: "Chittagong GEC",
    rating: 5,
    quote: "Very professional tracking system. I could see exactly when the flight took off from Toronto, landed in Dhaka, and cleared NBR customs. OTP verification at doorstep is a great touch.",
    item: "MacBook Air M2 & Watch"
  }
];

export function HomeTestimonialsSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeader
        badgeIcon={Heart}
        badgeText="Heartfelt Expat Stories"
        title="Trusted by Over 10,000 Expatriate"
        highlightedText="Families Worldwide"
        description="Read how overseas Bangladeshis send care packages, gifts, and essentials to their parents, children, and siblings back home."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <Card key={idx} className="glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-emerald-500/40" />
              </div>

              <p className="text-sm text-foreground italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/20 dark:border-white/5 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.origin} → {t.dest}</p>
              </div>
              <span className="text-[11px] font-mono glass-pill px-2.5 py-0.5 rounded-full text-emerald-600 dark:text-emerald-400">
                {t.item}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
export default HomeTestimonialsSection;
`);

// modules/home/sections/cta/home-cta-section.tsx
writeFile("home/sections/cta/home-cta-section.tsx", `
"use client";

import React from "react";
import { Button } from "@/modules/ui/button";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen, setConciergeOpen } from "@/modules/core/slices/uiSlice";
import { Heart, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export function HomeCtaSection() {
  const dispatch = useAppDispatch();

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden glass-surface specular-shine rounded-3xl p-8 sm:p-14 border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 dark:text-emerald-300 mx-auto">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>পরবাস থেকে দেশের বাড়িতে ভালোবাসার উপহার</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Send a Care Package to Your Family in Bangladesh?
        </h2>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          Book your shipment in 2 minutes, get your US/UK warehouse suite address, or chat with our 24/7 concierge for custom inquiries.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            onClick={() => dispatch(setBookingModalOpen(true))}
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl px-8 h-12 shadow-lg shadow-emerald-600/25 font-bold gap-2 text-sm"
          >
            <span>Book Shipment Now</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => dispatch(setConciergeOpen(true))}
            className="glass-surface specular-shine rounded-2xl px-6 h-12 font-semibold gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </Button>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Zero prepayment obligation until your package arrives at our warehouse</span>
        </div>
      </div>
    </section>
  );
}
export default HomeCtaSection;
`);

console.log("--- 2. BUILDING CALCULATOR MODULE SECTIONS ---");

// modules/calculator/sections/hero/calculator-hero-section.tsx
writeFile("calculator/sections/hero/calculator-hero-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Scale } from "lucide-react";

export function CalculatorHeroSection() {
  return (
    <section className="pt-12 pb-8 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Scale}
        badgeText="Official Expat Freight Rate Calculator"
        title="Calculate International Shipping to"
        highlightedText="Bangladesh in Seconds"
        description="Get instant, 100% all-inclusive pricing including international air cargo, legal Bangladesh customs duty clearance, and doorstep courier delivery in any district."
      />
    </section>
  );
}
export default CalculatorHeroSection;
`);

// modules/calculator/sections/packing-guide/packing-guide-section.tsx
writeFile("calculator/sections/packing-guide/packing-guide-section.tsx", `
"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { Box, ShieldCheck, Sparkles } from "lucide-react";

export function CalculatorPackingGuideSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Box}
          title="How Dimensional Weight Works"
          description="Air cargo uses the higher of actual weight vs volumetric weight (L × W × H in inches ÷ 139). We offer free unboxing and repackaging to minimize empty space!"
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={ShieldCheck}
          title="100% Legal NBR Clearance"
          description="No hidden tariff shocks at Dhaka Hazrat Shahjalal Airport. Our quoted price includes all customs handling so your family never pays a single extra Poisha."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={Sparkles}
          title="Free Repacking & Consolidation"
          description="Ordered multiple boxes from Amazon and Walmart? Send them all to our New York or Houston warehouse; we combine them into one sturdy box to save you up to 40%."
          iconColor="text-amber-500"
        />
      </div>
    </section>
  );
}
export default CalculatorPackingGuideSection;
`);

console.log("--- 3. BUILDING TRACK MODULE SECTIONS ---");

// modules/track/sections/hero/track-hero-section.tsx
writeFile("track/sections/hero/track-hero-section.tsx", `
"use client";

import React from "react";
import { Radio } from "lucide-react";

export function TrackHeroSection() {
  return (
    <section className="pt-12 pb-6 text-center max-w-4xl mx-auto px-4 space-y-4">
      <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 dark:text-emerald-300">
        <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
        <span>Trans-Atlantic Air Cargo Live Radar</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
        Track International Shipment
      </h1>
      <p className="text-base text-muted-foreground max-w-2xl mx-auto">
        Live GPS tracking from US warehouse dispatch, cargo flight departure, to Dhaka Hazrat Shahjalal Airport customs clearance and doorstep courier rider delivery.
      </p>
    </section>
  );
}
export default TrackHeroSection;
`);

// modules/track/sections/tracking-search/tracking-search-section.tsx
writeFile("track/sections/tracking-search/tracking-search-section.tsx", `
"use client";

import React from "react";
import { Input } from "@/modules/ui/input";
import { Button } from "@/modules/ui/button";
import { Search } from "lucide-react";

export interface TrackingSearchSectionProps {
  code: string;
  setCode: (c: string) => void;
  loading: boolean;
  onSearch: (e: React.FormEvent) => void;
  onPreset: (sample: string) => void;
}

export function TrackingSearchSection({
  code,
  setCode,
  loading,
  onSearch,
  onPreset,
}: TrackingSearchSectionProps) {
  return (
    <div className="max-w-xl mx-auto px-4 space-y-3">
      <form onSubmit={onSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Enter AponBridge tracking code (e.g. APN-88204-BD)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="pl-10 glass-surface rounded-2xl h-12 text-sm font-mono"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl px-6 h-12 font-semibold shadow-md shadow-emerald-600/20"
        >
          {loading ? "Syncing..." : "Track"}
        </Button>
      </form>

      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>Try Demo Consignments:</span>
        <button
          type="button"
          onClick={() => onPreset("APN-88204-BD")}
          className="font-mono underline text-emerald-600 dark:text-emerald-400 hover:opacity-80"
        >
          APN-88204-BD
        </button>
        <span>•</span>
        <button
          type="button"
          onClick={() => onPreset("APN-91042-UK")}
          className="font-mono underline text-emerald-600 dark:text-emerald-400 hover:opacity-80"
        >
          APN-91042-UK
        </button>
      </div>
    </div>
  );
}
export default TrackingSearchSection;
`);

// modules/track/sections/live-radar/live-radar-section.tsx
writeFile("track/sections/live-radar/live-radar-section.tsx", `
"use client";

import React from "react";
import { Badge } from "@/modules/ui/badge";
import { Progress } from "@/modules/ui/progress";
import { Plane, Radio } from "lucide-react";

export interface LiveRadarSectionProps {
  shipment: any;
}

export function LiveRadarSection({ shipment }: LiveRadarSectionProps) {
  if (!shipment) return null;

  return (
    <div className="glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <Plane className="w-5 h-5 transform -rotate-45" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-lg text-foreground">{shipment.trackingCode}</span>
              <Badge variant="outline" className="text-emerald-600 border-emerald-500/30 text-xs">
                {shipment.currentStatus}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Route: {shipment.originHub} → {shipment.destinationDistrict} (Estimated: {shipment.estimatedDeliveryDate})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground glass-pill px-3 py-1.5 rounded-xl">
          <Radio className="w-3.5 h-3.5 text-emerald-500 animate-ping" />
          <span>Flight QR-8104 (In Transit)</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground font-medium">
          <span>US JFK Warehouse</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">Trans-Atlantic Air Corridor (65%)</span>
          <span>Dhaka Doorstep</span>
        </div>
        <Progress value={65} className="h-2 bg-muted/40" />
      </div>
    </div>
  );
}
export default LiveRadarSection;
`);

// modules/track/sections/consignment-details/consignment-details-section.tsx
writeFile("track/sections/consignment-details/consignment-details-section.tsx", `
"use client";

import React from "react";
import { MapPin, Package, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface ConsignmentDetailsSectionProps {
  shipment: any;
}

export function ConsignmentDetailsSection({ shipment }: ConsignmentDetailsSectionProps) {
  if (!shipment) return null;

  return (
    <div className="glass-surface specular-shine rounded-3xl p-6 space-y-4">
      <h3 className="font-bold text-base text-foreground">Consignment Summary</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Origin
          </span>
          <p className="font-semibold text-foreground">{shipment.originHub}</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-teal-500" /> Destination
          </span>
          <p className="font-semibold text-foreground">{shipment.destinationDistrict}, BD</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <Package className="w-3.5 h-3.5 text-amber-500" /> Package Weight
          </span>
          <p className="font-semibold text-foreground">{shipment.packageDetails?.weightLbs || 6.5} lbs</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Customs Status
          </span>
          <p className="font-semibold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Pre-Approved
          </p>
        </div>
      </div>
    </div>
  );
}
export default ConsignmentDetailsSection;
`);

console.log("--- 4. BUILDING SERVICES MODULE SECTIONS ---");

// modules/services/sections/hero/services-hero-section.tsx
writeFile("services/sections/hero/services-hero-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Plane } from "lucide-react";

export function ServicesHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Plane}
        badgeText="Comprehensive Cross-Border Shipping Logistics"
        title="International Courier Services &"
        highlightedText="Transparent Rates"
        description="Whether sending a high-value MacBook, essential prescription vitamins for elderly parents, or a 50 lb family care box, we offer dedicated freight tiers tailored for expatriates."
      />
    </section>
  );
}
export default ServicesHeroSection;
`);

// modules/services/sections/specialized-tiers/specialized-tiers-section.tsx
writeFile("services/sections/specialized-tiers/specialized-tiers-section.tsx", `
"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { Laptop, ThermometerSnowflake, Layers, Gift } from "lucide-react";

export function ServicesSpecializedTiersSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-1">
        <h2 className="text-2xl font-bold text-foreground">Specialized Expat Handling Tiers</h2>
        <p className="text-xs text-muted-foreground">Tailored solutions for delicate and high-value cargo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Laptop}
          title="Electronics & Laptops Priority"
          description="Dedicated anti-static packaging, tamper-evident seals, and express NBR IT-duty clearance. Safe passage for iPhones, MacBooks, and high-end gear."
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={ThermometerSnowflake}
          title="Medicine & Healthcare Express"
          description="Send essential prescription medications, insulin, and diabetic care supplies for elderly parents with guaranteed temperature compliance and direct air routing."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={Layers}
          title="Family Care Box Consolidation"
          description="Combine chocolates, winter garments, baby formulas, and gifts from multiple US/UK retail orders into one sturdy master box to minimize air cargo rates."
          iconColor="text-amber-500"
        />
      </div>
    </section>
  );
}
export default ServicesSpecializedTiersSection;
`);

console.log("--- 5. BUILDING BUY-FOR-ME MODULE SECTIONS ---");

// modules/buy-for-me/sections/hero/buy-for-me-hero-section.tsx
writeFile("buy-for-me/sections/hero/buy-for-me-hero-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { ShoppingBag } from "lucide-react";

export function BuyForMeHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={ShoppingBag}
        badgeText="Assisted Online Shopping Service"
        title="We Buy in the USA & Deliver to"
        highlightedText="Your Family's Door in BD"
        description="Don't have an international credit card or having trouble with store shipping restrictions? Simply paste the product link, and we will purchase it on your behalf."
      />
    </section>
  );
}
export default BuyForMeHeroSection;
`);

// modules/buy-for-me/sections/order-form/assisted-order-form-section.tsx
writeFile("buy-for-me/sections/order-form/assisted-order-form-section.tsx", `
"use client";

import React, { useState } from "react";
import { Card } from "@/modules/ui/card";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Button } from "@/modules/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/modules/ui/select";
import { Link2, ShieldCheck, CheckCircle2, Sparkles, CreditCard } from "lucide-react";
import { shipmentRepository } from "@/modules/core/repositories";
import { toast } from "sonner";

export function AssistedOrderFormSection() {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [storeName, setStoreName] = useState<any>("Amazon");
  const [estPrice, setEstPrice] = useState("199");
  const [contactName, setContactName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("Dhaka");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productUrl || !productName || !whatsapp) {
      toast.error("Please fill in product link, item name, and your WhatsApp number");
      return;
    }

    setSubmitting(true);
    try {
      const res = await shipmentRepository.requestAssistedShopping({
        productUrl,
        productName,
        storeName,
        estimatedPriceUSD: Number(estPrice) || 100,
        quantity: 1,
        customerContact: {
          name: contactName || "Expat Customer",
          email: "customer@example.com",
          whatsappNumber: whatsapp,
          bdDeliveryCity: deliveryCity,
        },
      });

      setResult(res);
      toast.success("Assisted shopping request received!");
    } catch (err: any) {
      toast.error(err.message || "Failed to submit request");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="glass-surface specular-shine rounded-3xl p-6 sm:p-10 border border-emerald-500/30">
        {result ? (
          <div className="text-center py-8 space-y-4">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Order Quote Generated!</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Order Reference: <strong className="text-foreground font-mono">{result.id}</strong>. Our US purchasing desk has received your item request.
            </p>
            <div className="glass-surface rounded-2xl p-4 max-w-sm mx-auto text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Item Price:</span>
                <span className="font-mono font-bold text-foreground">\${result.estimatedPriceUSD}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service Fee (6%):</span>
                <span className="font-mono font-bold text-foreground">\${result.serviceFeeUSD}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/20 dark:border-white/5 font-bold">
                <span>Total Estimated:</span>
                <span className="text-emerald-600 font-mono">\${result.totalEstimatedUSD}</span>
              </div>
            </div>
            <Button onClick={() => setResult(null)} variant="outline" className="rounded-xl mt-4">
              Submit Another Product
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label className="text-xs font-semibold flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-emerald-500" />
                Product URL / Link
              </Label>
              <Input
                placeholder="https://www.amazon.com/dp/B09V3HMK6B or Walmart link"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                className="glass-surface rounded-xl h-11 text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Store / Merchant</Label>
                <Select value={storeName} onValueChange={setStoreName}>
                  <SelectTrigger className="glass-surface rounded-xl h-11 text-xs">
                    <SelectValue placeholder="Select store" />
                  </SelectTrigger>
                  <SelectContent className="glass-surface">
                    <SelectItem value="Amazon">Amazon USA</SelectItem>
                    <SelectItem value="Walmart">Walmart</SelectItem>
                    <SelectItem value="BestBuy">Best Buy</SelectItem>
                    <SelectItem value="Apple">Apple Store</SelectItem>
                    <SelectItem value="eBay">eBay</SelectItem>
                    <SelectItem value="Target">Target</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">Item Name / Title</Label>
                <Input
                  placeholder="e.g. Apple Watch Series 9"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">Listed Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="199"
                  value={estPrice}
                  onChange={(e) => setEstPrice(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs font-mono"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold">Your Name</Label>
                <Input
                  placeholder="Your Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">WhatsApp Number (For Instant Quote)</Label>
                <Input
                  placeholder="+1 (555) 000-0000 or BD #"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="glass-surface rounded-xl h-11 text-xs font-mono"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold">Delivery City in Bangladesh</Label>
                <Select value={deliveryCity} onValueChange={setDeliveryCity}>
                  <SelectTrigger className="glass-surface rounded-xl h-11 text-xs">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="glass-surface">
                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                    <SelectItem value="Chittagong">Chittagong</SelectItem>
                    <SelectItem value="Sylhet">Sylhet</SelectItem>
                    <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                    <SelectItem value="Khulna">Khulna</SelectItem>
                    <SelectItem value="Barisal">Barisal</SelectItem>
                    <SelectItem value="Rangpur">Rangpur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl h-12 font-bold shadow-lg shadow-emerald-600/20 text-sm gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>{submitting ? "Calculating Quote..." : "Get Instant Purchase Quote & Proceed"}</span>
            </Button>
          </form>
        )}
      </Card>
    </section>
  );
}
export default AssistedOrderFormSection;
`);

// modules/buy-for-me/sections/workflow-steps/buy-for-me-workflow-section.tsx
writeFile("buy-for-me/sections/workflow-steps/buy-for-me-workflow-section.tsx", `
"use client";

import React from "react";
import { StepCard } from "@/modules/shared/step-card";
import { Link2, Sparkles, CreditCard, Box } from "lucide-react";

export function BuyForMeWorkflowSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
      <h2 className="text-xl font-bold text-foreground text-center">How Buy-For-Me Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StepCard
          stepNumber="01"
          icon={Link2}
          title="Submit Store Link"
          description="Find your item on Amazon, Walmart, or eBay and paste the link in the form above."
        />
        <StepCard
          stepNumber="02"
          icon={Sparkles}
          title="Transparent Quote"
          description="We send you an all-inclusive quote in USD or BDT with fair bKash / bank payment options."
        />
        <StepCard
          stepNumber="03"
          icon={CreditCard}
          title="We Purchase in USA"
          description="Our US team buys the item using verified US commercial cards with Prime fast shipping."
        />
        <StepCard
          stepNumber="04"
          icon={Box}
          title="Delivered to BD"
          description="We inspect, pack, fly, customs clear, and deliver to your family's doorstep."
        />
      </div>
    </section>
  );
}
export default BuyForMeWorkflowSection;
`);

// modules/buy-for-me/sections/supported-stores/supported-stores-section.tsx
writeFile("buy-for-me/sections/supported-stores/supported-stores-section.tsx", `
"use client";

import React from "react";
import { StoreLogoChip } from "@/modules/components/molecules/store-logo-chip";

export function SupportedStoresSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center space-y-4">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Popular Supported US & UK Online Stores
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <StoreLogoChip storeName="Amazon USA" />
        <StoreLogoChip storeName="Walmart" />
        <StoreLogoChip storeName="Best Buy" />
        <StoreLogoChip storeName="Apple Store" />
        <StoreLogoChip storeName="eBay" />
        <StoreLogoChip storeName="Target" />
        <StoreLogoChip storeName="B&H Photo" />
        <StoreLogoChip storeName="Newegg" />
      </div>
    </section>
  );
}
export default SupportedStoresSection;
`);

console.log("--- 6. BUILDING CUSTOMS-GUIDE MODULE SECTIONS ---");

// modules/customs-guide/sections/hero/customs-hero-section.tsx
writeFile("customs-guide/sections/hero/customs-hero-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { ShieldCheck } from "lucide-react";

export function CustomsHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={ShieldCheck}
        badgeText="National Board of Revenue (NBR) Compliant"
        title="Bangladesh Airport Customs &"
        highlightedText="Legal Clearance Guide"
        description="Learn what items you can send duty-free, what requires legal commercial tax declaration, and which prohibited goods to avoid."
      />
    </section>
  );
}
export default CustomsHeroSection;
`);

// modules/customs-guide/sections/duty-rules/duty-rules-section.tsx
writeFile("customs-guide/sections/duty-rules/duty-rules-section.tsx", `
"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { Laptop, Gift, AlertTriangle } from "lucide-react";

export function CustomsDutyRulesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
      <h2 className="text-xl font-bold text-foreground text-center">Standard Duty Guidelines for Expat Parcels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Laptop}
          title="Laptops & Tablets"
          description="1 personal laptop or tablet per consignment is permitted with standard NBR assessment. AponBridge pre-clears documentation at Hazrat Shahjalal Airport."
          iconColor="text-emerald-500"
        />
        <FeatureCard
          icon={Gift}
          title="Chocolates & Garments"
          description="Personal gifts up to 10 kg of confectioneries and personal clothing are cleared swiftly under personal baggage allowances with minimal formalities."
          iconColor="text-teal-500"
        />
        <FeatureCard
          icon={AlertTriangle}
          title="Strictly Banned Items"
          description="Drone cameras without defense ministry approval, commercial gold bullion, counterfeit currency, weapon accessories, and flammable aerosols are strictly forbidden."
          iconColor="text-rose-500"
        />
      </div>
    </section>
  );
}
export default CustomsDutyRulesSection;
`);

console.log("--- 7. BUILDING WAREHOUSES MODULE SECTIONS ---");

// modules/warehouses/sections/hero/warehouses-hero-section.tsx
writeFile("warehouses/sections/hero/warehouses-hero-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Building2 } from "lucide-react";

export function WarehousesHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Building2}
        badgeText="Physical International Receiving Terminals"
        title="Our Global Warehouses &"
        highlightedText="Drop-off Locations"
        description="Drop off your parcels in person at our New York or Houston hubs, or send them using our discounted nationwide FedEx shipping labels."
      />
    </section>
  );
}
export default WarehousesHeroSection;
`);

// modules/warehouses/sections/terminal-instructions/dropoff-guide-section.tsx
writeFile("warehouses/sections/terminal-instructions/dropoff-guide-section.tsx", `
"use client";

import React from "react";
import { FedexLabelCallout } from "@/modules/components/molecules/fedex-label-callout";
import { DropoffInstructionsBox } from "@/modules/components/molecules/dropoff-instructions-box";

export function WarehousesDropoffGuideSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
      <h2 className="text-xl font-bold text-foreground text-center">How to Send to Our Terminals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DropoffInstructionsBox
          title="In-Person Drop-off"
          subLabel="Open Mon-Sat 9AM - 6PM EST"
          value="Free Packing Box"
        />
        <FedexLabelCallout
          title="Nationwide FedEx Mail-in"
          subLabel="Discounted prepaid labels provided"
          value="Up to 50% Off"
        />
      </div>
    </section>
  );
}
export default WarehousesDropoffGuideSection;
`);

console.log("--- 8. BUILDING ABOUT MODULE SECTIONS ---");

// modules/about/sections/hero/about-hero-section.tsx
writeFile("about/sections/hero/about-hero-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { Heart } from "lucide-react";

export function AboutHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={Heart}
        badgeText="Built by Expats, for Expats"
        title="Connecting Bangladeshi Families"
        highlightedText="Across Oceans & Continents"
        description="AponBridge Express was founded with a singular mission: to eliminate the anxiety, unfair pricing, and airport customs harassment that overseas Bangladeshis face when sending love and essentials home."
      />
    </section>
  );
}
export default AboutHeroSection;
`);

// modules/about/sections/our-story/our-story-section.tsx
writeFile("about/sections/our-story/our-story-section.tsx", `
"use client";

import React from "react";
import { Card } from "@/modules/ui/card";
import { Plane } from "lucide-react";

export function AboutOurStorySection() {
  return (
    <Card className="glass-surface specular-shine rounded-3xl p-8 sm:p-12 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/20 dark:border-white/5">
        <div className="flex items-center gap-2.5">
          <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <Plane className="w-5 h-5 transform -rotate-45" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Our Origin Story</h2>
            <p className="text-xs text-muted-foreground">From Jackson Heights, Queens to Dhaka</p>
          </div>
        </div>
        <span className="glass-pill px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-600">
          Est. 2022
        </span>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          As non-resident Bangladeshis living in North America, we frequently tried sending laptops, medicines, and winter clothes to our parents and siblings back in Bangladesh. We encountered endless frustrations: parcels held hostage at Dhaka airport, mysterious and arbitrary custom duties demanded on arrival, and damaged items.
        </p>
        <p>
          We realized that millions of expatriates in the USA, UK, Canada, and the Middle East lacked a transparent, modern, tech-enabled courier bridge. In 2022, we built AponBridge Express — combining certified IATA air cargo partnerships, legal National Board of Revenue (NBR) customs clearance, and a proprietary nationwide last-mile delivery network.
        </p>
      </div>
    </Card>
  );
}
export default AboutOurStorySection;
`);

// modules/about/sections/network-reach/network-reach-section.tsx
writeFile("about/sections/network-reach/network-reach-section.tsx", `
"use client";

import React from "react";
import { FeatureCard } from "@/modules/shared/feature-card";
import { MapPin, ShieldCheck, Globe2 } from "lucide-react";

export function AboutNetworkReachSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard
        icon={MapPin}
        title="64 Districts Doorstep"
        description="From Dinajpur to Cox's Bazar, our dedicated courier riders deliver right to your village or city residence."
        iconColor="text-emerald-500"
      />
      <FeatureCard
        icon={ShieldCheck}
        title="100% Legal NBR Clearance"
        description="We file legal customs declarations for all items. No back-alley clearances, zero risk of parcel confiscation."
        iconColor="text-teal-500"
      />
      <FeatureCard
        icon={Globe2}
        title="Direct Cargo Partnerships"
        description="Weekly allocations on Biman Bangladesh, Qatar Airways, and Emirates air freight."
        iconColor="text-amber-500"
      />
    </div>
  );
}
export default AboutNetworkReachSection;
`);

console.log("--- 9. BUILDING CONTACT MODULE SECTIONS ---");

// modules/contact/sections/hero/contact-hero-section.tsx
writeFile("contact/sections/hero/contact-hero-section.tsx", `
"use client";

import React from "react";
import { SectionHeader } from "@/modules/shared/section-header";
import { MessageCircle } from "lucide-react";

export function ContactHeroSection() {
  return (
    <section className="pt-12 pb-10 text-center max-w-4xl mx-auto px-4">
      <SectionHeader
        badgeIcon={MessageCircle}
        badgeText="24/7 Expat Concierge Support"
        title="We Are Here to Help You"
        highlightedText="Connect with Home"
        description="Have questions about package weight, allowed items, customs rates, or warehouse drop-offs? Reach out to our team in New York, Houston, London, or Dhaka anytime."
      />
    </section>
  );
}
export default ContactHeroSection;
`);

// modules/contact/sections/channels/contact-channels-section.tsx
writeFile("contact/sections/channels/contact-channels-section.tsx", `
"use client";

import React from "react";
import { Card } from "@/modules/ui/card";
import { WhatsappLink } from "@/modules/components/atoms/whatsapp-link";
import { PhoneLink } from "@/modules/components/atoms/phone-link";
import { EmailLink } from "@/modules/components/atoms/email-link";
import { MessageCircle, Clock, MapPin, Sparkles } from "lucide-react";

export function ContactChannelsSection() {
  return (
    <div className="space-y-6">
      <Card className="glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg">Instant Concierge Desk</h3>
            <p className="text-xs text-muted-foreground">Bengali & English Support Available</p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <WhatsappLink label="WhatsApp Concierge (24/7)" value="+1 (917) 555-APON" highlight />
          <PhoneLink label="US Toll-Free Helpline" value="+1 (800) 888-2766" />
          <PhoneLink label="Dhaka Hub Support" value="+880 1711-000000" />
          <EmailLink label="Official Inquiries" value="care@aponbridge.com" />
        </div>

        <div className="pt-4 border-t border-white/20 dark:border-white/5 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span>Support Hours: 24 Hours, 7 Days a Week</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-500" />
            <span>US HQ: 147-35 Farmers Blvd, Jamaica, NY</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Dhaka Central Hub: 42 Tejgaon I/A, Dhaka-1208</span>
          </div>
        </div>
      </Card>

      <div className="glass-surface specular-shine rounded-3xl p-6 flex items-center gap-4 text-xs">
        <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
        <p className="text-muted-foreground">
          Are you shipping for Eid, Ramadan, or family medical emergencies? Let our concierge know for priority dispatch routing.
        </p>
      </div>
    </div>
  );
}
export default ContactChannelsSection;
`);

// modules/contact/sections/inquiry-form/contact-inquiry-form-section.tsx
writeFile("contact/sections/inquiry-form/contact-inquiry-form-section.tsx", `
"use client";

import React, { useState } from "react";
import { Card } from "@/modules/ui/card";
import { Input } from "@/modules/ui/input";
import { Label } from "@/modules/ui/label";
import { Textarea } from "@/modules/ui/textarea";
import { Button } from "@/modules/ui/button";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ContactInquiryFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in your name, email, and message");
      return;
    }
    setSent(true);
    toast.success("Message received! Our team will reply within 2 hours.");
  };

  return (
    <Card className="glass-surface specular-shine rounded-3xl p-6 sm:p-10 border border-emerald-500/20">
      {sent ? (
        <div className="text-center py-12 space-y-4">
          <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Message Dispatched!</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            Thank you, {name}. Our expat logistics specialist will reach out to you at {email} or via WhatsApp within 2 hours.
          </p>
          <Button onClick={() => setSent(false)} variant="outline" className="rounded-xl mt-4">
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">Send an Inquiry</h3>
            <p className="text-xs text-muted-foreground">Fill in the form below for a rapid response from our freight team.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold">Your Full Name</Label>
              <Input
                placeholder="Tanvir Ahmed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass-surface rounded-xl h-11 text-xs"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold">Email Address</Label>
              <Input
                type="email"
                placeholder="tanvir@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-surface rounded-xl h-11 text-xs"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold">Phone / WhatsApp Number</Label>
            <Input
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="glass-surface rounded-xl h-11 text-xs font-mono"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-semibold">Your Message or Item Questions</Label>
            <Textarea
              placeholder="Tell us what you plan to ship (weight, dimensions, items) or any questions you have regarding customs and drop-offs..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="glass-surface rounded-xl min-h-[120px] text-xs"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl h-12 font-bold shadow-lg shadow-emerald-600/20 text-sm gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Submit Inquiry</span>
          </Button>
        </form>
      )}
    </Card>
  );
}
export default ContactInquiryFormSection;
`);

console.log("--- 10. BUILDING CATALOG MODULE SECTIONS ---");

// modules/components-catalog/sections/hero/catalog-hero-section.tsx
writeFile("components-catalog/sections/hero/catalog-hero-section.tsx", `
"use client";

import React from "react";
import { Component, Sparkles } from "lucide-react";

export function CatalogHeroSection() {
  return (
    <section className="pt-12 pb-8 text-center max-w-4xl mx-auto px-4 space-y-4">
      <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 dark:text-emerald-300">
        <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
        <span>Modular Monolith Component Library (200+ Single-Responsibility Elements)</span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
        AponBridge Design System & Micro-Components
      </h1>
      <p className="text-base text-muted-foreground max-w-2xl mx-auto">
        Every badge, button, tag, and indicator follows the Single Responsibility Principle, modularized strictly by domain page and section with glassmorphism + minimalism.
      </p>
    </section>
  );
}
export default CatalogHeroSection;
`);

console.log("Modular sections creation complete!");
