"use client";

import React from "react";
import { Plane, Ship, Package, Check, ShieldCheck, ArrowRight, Sparkles, Clock, MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/modules/ui/card";
import { Button } from "@/modules/ui/button";
import { Badge } from "@/modules/ui/badge";
import { useAppDispatch, useActiveCurrency } from "@/modules/core/hooks";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";
import { SectionHeader } from "@/modules/shared/section-header";

export function PricingTable() {
  const dispatch = useAppDispatch();
  const { format } = useActiveCurrency();

  const plans = [
    {
      name: "Express Priority Air",
      badge: "Most Popular for Expats",
      popular: true,
      icon: Plane,
      timeframe: "4 - 6 Business Days",
      ratePerLb: 11.5,
      description: "Direct flight cargo from JFK/Houston to Dhaka. Perfect for laptops, phones, vitamins, and urgent gifts.",
      features: [
        "Direct Qatar / Emirates / Biman cargo connection",
        "Full NBR customs clearance brokerage included",
        "Doorstep courier delivery across all 64 districts",
        "SMS OTP verified handover to family",
        "Up to $500 free insurance coverage included",
      ],
      idealFor: "Electronics, Phones, Fragile Gifts, Urgent Medicines",
    },
    {
      name: "Economy Standard Air",
      badge: "Best Value for Clothes & Food",
      popular: false,
      icon: Package,
      timeframe: "7 - 10 Business Days",
      ratePerLb: 8.5,
      description: "Consolidated air freight for everyday clothing boxes, shoes, chocolates, cosmetics, and family care packages.",
      features: [
        "Weekly consolidated cargo flights",
        "Free multi-store repacking & consolidation",
        "Legal customs duty clearance handled",
        "Doorstep delivery across all districts",
        "Live checkpoint GPS flight tracking",
      ],
      idealFor: "Clothes, Winter Sweaters, Chocolates, Cosmetics",
    },
    {
      name: "Ocean Sea Cargo",
      badge: "Heavy Luggage & Relocation",
      popular: false,
      icon: Ship,
      timeframe: "25 - 35 Days",
      ratePerLb: 4.5,
      description: "Sea container shipping for heavy boxes over 50 lbs, home appliances, kitchenware, and furniture relocations.",
      features: [
        "Chittagong Port customs clearance handled",
        "Extremely affordable rate for heavy cartons",
        "Waterproof pallet wrapping",
        "Heavy truck delivery to home in Bangladesh",
        "Volume discount for 100+ lbs shipments",
      ],
      idealFor: "Heavy Relocation Boxes, Kitchenware, Bulk Goods",
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeIcon={ShieldCheck}
          badgeText="Clear, Transparent Rates"
          title="Simple Shipping Plans with"
          highlightedText="Zero Hidden Surcharges"
          description="All prices include international air freight, export processing, Bangladesh NBR customs clearance, and final doorstep delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const PlanIcon = plan.icon;
            return (
              <Card
                key={idx}
                className={`flex flex-col justify-between rounded-3xl transition-all duration-300 relative glass-surface specular-shine ${
                  plan.popular
                    ? "border-emerald-500/60 ring-2 ring-emerald-500/20 shadow-xl"
                    : "hover:border-emerald-500/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-2xl bg-muted/80 flex items-center justify-center mb-4">
                      <PlanIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-xs">{plan.description}</CardDescription>

                    <div className="pt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-black font-mono text-foreground">
                        {format(plan.ratePerLb)}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold">/ lb</span>
                    </div>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 mt-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Transit: {plan.timeframe}</span>
                    </span>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="pt-2 border-t border-white/20 dark:border-white/5 space-y-2.5 text-xs text-muted-foreground">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-2xl glass-surface-subtle text-[11px] text-muted-foreground">
                      <strong className="text-foreground">Recommended for:</strong> {plan.idealFor}
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Button
                    onClick={() => dispatch(setBookingModalOpen(true))}
                    variant={plan.popular ? "gradient" : "outline"}
                    className="w-full gap-2 font-bold py-5 rounded-2xl"
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
