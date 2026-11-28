"use client";

import React from "react";
import {
  Calculator,
  Plane,
  Ship,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  Info,
  Scale,
} from "lucide-react";
import { Button } from "@/modules/ui/button";
import { Slider } from "@/modules/ui/slider";
import { Label } from "@/modules/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/modules/ui/tabs";
import { useAppDispatch, useAppSelector, useActiveCurrency } from "@/modules/core/hooks";
import { updateCalculator } from "@/modules/core/slices/shippingSlice";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";
import { CostBreakdownChart } from "./cost-breakdown-chart";
import { RouteSelector } from "./route-selector";
import { CategorySelector } from "./category-selector";
import { AddonToggles } from "./addon-toggles";
import { SectionHeader } from "@/modules/shared/section-header";
import {
  OriginCountry,
  BangladeshDivision,
  ShippingCategory,
  ShippingSpeed,
} from "@/modules/core/types";

export function CalculatorWidget() {
  const dispatch = useAppDispatch();
  const { calculator, activeQuote } = useAppSelector((state) => state.shipping);
  const { format } = useActiveCurrency();

  return (
    <section id="calculator" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeIcon={Calculator}
          badgeText="Instant Minimalist Calculator"
          title="Calculate Parcel Shipping to"
          highlightedText="Bangladesh in Seconds"
          description="No hidden customs taxes, surprise warehouse storage fees, or ambiguous transit delays. Transparent per-pound flat rates with doorstep delivery guaranteed."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/20 dark:border-white/5">
              <div>
                <h3 className="text-lg font-bold text-foreground">Shipment Specifications</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Customize route, category and weight</p>
              </div>
              <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-semibold text-muted-foreground">
                USA / UK / CA to BD
              </span>
            </div>

            {/* Subcomponent 1: RouteSelector */}
            <RouteSelector
              origin={calculator.origin}
              destination={calculator.destination}
              onOriginChange={(val) => dispatch(updateCalculator({ origin: val }))}
              onDestinationChange={(val) => dispatch(updateCalculator({ destination: val }))}
            />

            {/* Subcomponent 2: CategorySelector */}
            <CategorySelector
              category={calculator.category}
              onCategoryChange={(val) => dispatch(updateCalculator({ category: val }))}
            />

            {/* Weight Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <Label className="flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Package Weight</span>
                </Label>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {calculator.weightLbs} lbs
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    (~{(calculator.weightLbs * 0.453).toFixed(1)} kg)
                  </span>
                </div>
              </div>
              <Slider
                value={[calculator.weightLbs]}
                min={1}
                max={70}
                step={0.5}
                onValueChange={(vals) => vals[0] !== undefined && dispatch(updateCalculator({ weightLbs: vals[0] }))}
              />
              <div className="flex justify-between text-[11px] text-muted-foreground font-medium">
                <span>1 lb (Small Gift)</span>
                <span>25 lbs (Medium Box)</span>
                <span>70 lbs (Large Box)</span>
              </div>
            </div>

            {/* Delivery Speed Tabs */}
            <div className="space-y-2 pt-2">
              <Label className="flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-emerald-600" />
                <span>Delivery Speed & Transport Mode</span>
              </Label>
              <Tabs
                value={calculator.speed}
                onValueChange={(val: any) => dispatch(updateCalculator({ speed: val as ShippingSpeed }))}
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 w-full h-12 glass-surface-subtle rounded-2xl p-1">
                  <TabsTrigger value="express_air" className="text-xs sm:text-sm gap-1.5 font-medium rounded-xl">
                    <Plane className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Express (4-6d)</span>
                  </TabsTrigger>
                  <TabsTrigger value="standard_air" className="text-xs sm:text-sm gap-1.5 font-medium rounded-xl">
                    <PackageCheck className="w-3.5 h-3.5 text-teal-500" />
                    <span>Standard (7-10d)</span>
                  </TabsTrigger>
                  <TabsTrigger value="sea_cargo" className="text-xs sm:text-sm gap-1.5 font-medium rounded-xl">
                    <Ship className="w-3.5 h-3.5 text-blue-500" />
                    <span>Sea Cargo</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Subcomponent 3: AddonToggles */}
            <AddonToggles
              includeInsurance={calculator.includeInsurance}
              fragileHandling={calculator.fragileHandling}
              onInsuranceToggle={(checked) => dispatch(updateCalculator({ includeInsurance: checked }))}
              onFragileToggle={(checked) => dispatch(updateCalculator({ fragileHandling: checked }))}
            />
          </div>

          {/* Quotation Summary Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-5 relative overflow-hidden border border-emerald-500/30">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
                  Estimated Total Landing Cost
                </span>
                <span className="glass-pill px-3 py-0.5 rounded-full text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                  Flat Quote
                </span>
              </div>

              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-4xl sm:text-5xl font-black text-foreground tracking-tight font-mono">
                  {format(activeQuote.totalCostUSD)}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  (Customs & BD doorstep included)
                </span>
              </div>

              <div className="p-3 rounded-2xl glass-surface-subtle text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between font-medium">
                <span className="flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-emerald-600" />
                  <span>Flight Transit:</span>
                </span>
                <span className="font-bold">{activeQuote.estimatedDays}</span>
              </div>

              {/* Recharts Breakdown */}
              <CostBreakdownChart quote={activeQuote} />

              {/* Guarantees */}
              <div className="space-y-2 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free drop-off at JFK / Houston or prepaid FedEx label</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Legal NBR Bangladesh Customs clearance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Doorstep delivery across all 64 districts</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => dispatch(setBookingModalOpen(true))}
                  variant="gradient"
                  size="lg"
                  className="w-full gap-2 font-bold py-6 text-sm rounded-2xl shadow-lg hover:shadow-emerald-600/30"
                >
                  <span>Proceed to Book Parcel</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="glass-surface-subtle p-4 rounded-2xl text-xs text-muted-foreground flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p>
                <strong>Expat Tip:</strong> You can consolidate multiple Amazon, Walmart, or personal gift items into one box at our US warehouse for zero additional fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
