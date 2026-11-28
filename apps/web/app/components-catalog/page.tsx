"use client";

import React, { useState } from "react";
import { PromoBar } from "@/modules/layout/promo-bar";
import { Navbar } from "@/modules/layout/navbar";
import { Footer } from "@/modules/layout/footer";
import { ContactConcierge } from "@/modules/support-faq/contact-concierge";
import { CatalogHeroSection } from "@/modules/components-catalog/sections/hero/catalog-hero-section";
import { Input } from "@/modules/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/modules/ui/tabs";
import {
  Layers,
  Search,
  Box,
  Component,
  Sparkles,
  ShieldCheck,
  Plane,
  Tag,
  Radio,
  Clock,
  MapPin,
  Scale,
} from "lucide-react";

// Import sample atomic components from our 200+ catalog
import {
  BadgePill,
  BadgeDot,
  StatusBeacon,
  VerifiedStamp,
  CurrencyTag,
  WeightTag,
  AmbientOrb,
  RatingStars,
  AvatarChip,
  PulseDot,
  CopyButton,
  ExternalLinkTag,
  GlassDivider,
  LiveBadge,
  DiscountPill,
  PercentageBar,
  SparkleTag,
  TimeBadge,
  DateTag,
  FlightNumberTag,
  AwbBadge,
  AirportCode,
  InsuranceShield,
  FragileTag,
  LockBadge,
} from "@/modules/components/atoms";

import {
  FlightRoutePill,
  AirportPairDisplay,
  EtaCountdownCard,
  SearchInputField,
  WeightCounterInput,
  CustomsStatusRow,
  WarehouseTimeRow,
  DeliveryRiderCard,
  TrackingMiniInput,
  PriceBreakdownRow,
  ReviewRatingSummary,
  ServiceTierBadge,
  StoreLogoChip,
  FlightConnectionArrow,
  AllowedItemTag,
  RestrictedItemTag,
  BkashPaymentBadge,
  CreditCardBadge,
  NagadPaymentBadge,
  PackageCategoryChip,
} from "@/modules/components/molecules";

import {
  MiniCalculatorCard,
  CargoRadarView,
  AirCargoManifestTable,
  WarehouseOperatingCard,
  CustomsTaxEstimatorBox,
  AssistedShoppingSummary,
  DistrictCoverageMap,
  ShippingTimelineCard,
  PricingTierCard,
  InsuranceCoverageCard,
  RepackagingSavingsCard,
  DoorstepDeliveryCard,
  OtpHanoverCard,
} from "@/modules/components/organisms";

import {
  DhakaDivisionCard,
  ChattogramDivisionCard,
  SylhetDivisionCard,
  JfkAirportHubBadge,
  HoustonTerminalBadge,
  HeathrowGatewayBadge,
  DhakaAirportGatewayBadge,
  BangladeshiExpatTrustSeal,
  NbrCustomsBrokerLicenseTag,
} from "@/modules/components/domain";

export default function ComponentsCatalogPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-emerald-500/20">
      <PromoBar />
      <Navbar />

      <main className="flex-1 ambient-mesh pb-28">
        {/* Modular Monolith Catalog Hero Section */}
        <CatalogHeroSection />

        {/* Filter Bar & Search */}
        <section className="text-center max-w-4xl mx-auto px-4 space-y-4 pb-10">

          {/* Search */}
          <div className="max-w-md mx-auto relative pt-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search components (e.g. badge, radar, flight, tariff)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-11 glass-surface text-sm rounded-2xl"
            />
          </div>

          {/* Category Tabs */}
          <div className="pt-4 flex justify-center">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="glass-surface p-1 rounded-2xl">
                <TabsTrigger value="all" className="rounded-xl text-xs font-semibold px-4">All</TabsTrigger>
                <TabsTrigger value="atoms" className="rounded-xl text-xs font-semibold px-4">Atoms (55+)</TabsTrigger>
                <TabsTrigger value="molecules" className="rounded-xl text-xs font-semibold px-4">Molecules (50+)</TabsTrigger>
                <TabsTrigger value="organisms" className="rounded-xl text-xs font-semibold px-4">Organisms (25+)</TabsTrigger>
                <TabsTrigger value="domain" className="rounded-xl text-xs font-semibold px-4">Domain (20+)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Catalog Showcase Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section: Atoms */}
          {(activeTab === "all" || activeTab === "atoms") && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-white/20 dark:border-white/5 pb-2">
                <Component className="w-4 h-4 text-emerald-600" />
                <h3 className="text-lg font-bold text-foreground">Atoms (Micro UI Elements)</h3>
                <span className="text-xs text-muted-foreground glass-pill px-2.5 py-0.5 rounded-full ml-auto">
                  55+ Micro Primitives
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <BadgePill label="Express Priority" value="4-6d" highlight />
                <BadgeDot label="Dhaka Hub Online" value="Active" />
                <StatusBeacon label="Trans-Atlantic Flight" value="In-Air" highlight />
                <VerifiedStamp label="NBR Customs Cleared" value="100%" />
                <CurrencyTag label="Flat Air Tariff" value="$68.00" />
                <WeightTag label="Chargeable Weight" value="6.5 lbs" />
                <RatingStars rating={4.9} />
                <AvatarChip label="Tanvir Ahmed (Expat)" subLabel="New York JFK" />
                <PulseDot label="Radar Tracking" value="Live" highlight />
                <LiveBadge label="Qatar Cargo Flight - En Route" />
                <DiscountPill couponCode="APON15" discountPercentage={15} />
                <SparkleTag label="Free Consolidation" value="Active" />
                <TimeBadge label="Friday Departure" value="5:00 PM EST" />
                <DateTag label="Est. Doorstep Delivery" value="Nov 25, 2026" />
                <FlightNumberTag label="Flight QR-8104" value="JFK → DAC" highlight />
                <AwbBadge label="Airway Bill" value="AWB-82941" />
                <AirportCode label="Hazrat Shahjalal" value="DAC" />
                <InsuranceShield label="Full Loss Cover" value="$500 Max" />
                <FragileTag label="Anti-Static Foam" value="Secured" />
                <LockBadge label="Tamper Seal" value="OTP-Verified" />
              </div>
            </div>
          )}

          {/* Section: Molecules */}
          {(activeTab === "all" || activeTab === "molecules") && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 border-b border-white/20 dark:border-white/5 pb-2">
                <Box className="w-4 h-4 text-teal-600" />
                <h3 className="text-lg font-bold text-foreground">Molecules (Composite Functional Units)</h3>
                <span className="text-xs text-muted-foreground glass-pill px-2.5 py-0.5 rounded-full ml-auto">
                  50+ Components
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <FlightRoutePill label="JFK Gateway → Dhaka Hub" value="Airway Bill QR-8104" highlight />
                <AirportPairDisplay label="Departure & Arrival Hubs" subLabel="New York JFK (USA) to Dhaka DAC (BD)" />
                <EtaCountdownCard label="Remaining Transit Time" value="3 Days 14 Hrs" />
                <WeightCounterInput label="Weight Stepper" value="7.5 lbs (~3.4 kg)" />
                <CustomsStatusRow label="NBR Commercial Declaration" value="Cleared (Duty Prepaid)" />
                <WarehouseTimeRow label="New York Hub Cutoff" value="Every Friday 5 PM EST" />
                <DeliveryRiderCard label="Assigned BD Courier Rider" subLabel="OTP Verification Required" value="Dispatched" highlight />
                <PriceBreakdownRow label="Customs & Handling Brokerage" value="$18.00" />
                <ReviewRatingSummary label="Verified NRB Reviews" value="14,200+ Verified" />
                <StoreLogoChip label="Assisted Procurement" value="Amazon / Apple / Walmart" />
                <AllowedItemTag label="Personal Laptops & Phones" value="Max 2 units allowed" />
                <RestrictedItemTag label="Standalone Lithium Packs" value="IATA Air Cargo Rules" />
                <BkashPaymentBadge label="Instant Payment" value="bKash / Nagad" />
                <CreditCardBadge label="International Payment" value="Visa / Mastercard" />
                <PackageCategoryChip label="Electronics & Gadgets" value="Flat Tariff" />
              </div>
            </div>
          )}

          {/* Section: Organisms */}
          {(activeTab === "all" || activeTab === "organisms") && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 border-b border-white/20 dark:border-white/5 pb-2">
                <Layers className="w-4 h-4 text-amber-500" />
                <h3 className="text-lg font-bold text-foreground">Organisms (Feature Blocks & Data Modules)</h3>
                <span className="text-xs text-muted-foreground glass-pill px-2.5 py-0.5 rounded-full ml-auto">
                  25+ Feature Modules
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MiniCalculatorCard label="Instant Rate Quote Card" subLabel="Weight & Destination Landing Cost Estimator" value="$68 USD" highlight />
                <CargoRadarView label="Air Cargo Flight Radar" subLabel="Atlantic Crossing Gate Tracking" value="In-Flight" />
                <WarehouseOperatingCard label="New York Receiving Terminal" subLabel="147-39 175th St, Jamaica, NY 11434" value="Open Mon-Sat" />
                <CustomsTaxEstimatorBox label="National Board of Revenue Brokerage" subLabel="Legally cleared under commercial invoice" value="100% Guaranteed" />
                <DistrictCoverageMap label="64 Districts Courier Fleet" subLabel="Doorstep courier delivery with rider OTP" value="Every Thana & Village" />
                <InsuranceCoverageCard label="Full Value Protection Guarantee" subLabel="100% declared value refund if lost or damaged" value="Covered" />
                <RepackagingSavingsCard label="Free Multi-Store Consolidation" subLabel="Save up to 40% volume weight by combining boxes" value="Free Service" />
                <OtpHanoverCard label="OTP Verified Handover Protocol" subLabel="Recipient receives secret code via BD SMS" value="Safe Delivery" />
              </div>
            </div>
          )}

          {/* Section: Domain (Bangladesh & Diaspora Logistics) */}
          {(activeTab === "all" || activeTab === "domain") && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 border-b border-white/20 dark:border-white/5 pb-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <h3 className="text-lg font-bold text-foreground">Domain (Bangladesh & Diaspora Expat Modules)</h3>
                <span className="text-xs text-muted-foreground glass-pill px-2.5 py-0.5 rounded-full ml-auto">
                  20+ Regional Units
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <DhakaDivisionCard label="Dhaka Division Delivery" value="Next-Day Doorstep" highlight />
                <ChattogramDivisionCard label="Chattogram Metropolitan & Port" value="24-48 Hours" />
                <SylhetDivisionCard label="Sylhet Direct Expat Corridor" value="Direct Delivery" highlight />
                <JfkAirportHubBadge label="New York JFK Cargo Terminal" value="Hub #1" />
                <HoustonTerminalBadge label="Houston Texas Receiving Hub" value="Hub #2" />
                <HeathrowGatewayBadge label="London Heathrow Cargo Village" value="Hub #3" />
                <DhakaAirportGatewayBadge label="Dhaka Hazrat Shahjalal Airport" value="DAC Terminal" />
                <BangladeshiExpatTrustSeal label="Non-Resident Bangladeshi (NRB)" value="Verified Partner" />
                <NbrCustomsBrokerLicenseTag label="NBR Customs Brokerage" value="Licensed" />
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
      <ContactConcierge />
    </div>
  );
}
