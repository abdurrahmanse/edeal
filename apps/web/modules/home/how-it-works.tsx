"use client";

import React, { useState } from "react";
import {
  Calculator,
  Warehouse,
  PlaneTakeoff,
  Home,
  Package,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/modules/ui/button";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";
import { SectionHeader } from "@/modules/shared/section-header";
import { StepCard } from "@/modules/shared/step-card";

export function HowItWorks() {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      stepNumber: 1,
      icon: Calculator,
      title: "1. Calculate & Book Online",
      shortLabel: "Instant flat rate quote",
      details:
        "Select your origin (USA, UK, Canada), destination district in Bangladesh, and package weight. Confirm in 60 seconds with our price guarantee.",
    },
    {
      stepNumber: 2,
      icon: Warehouse,
      title: "2. Drop Off or Free FedEx Pickup",
      shortLabel: "Reach our US / UK Hubs",
      details:
        "Drop your box at our New York (JFK) or Houston warehouse, or use our discounted prepaid FedEx label to send from anywhere in the United States.",
    },
    {
      stepNumber: 3,
      icon: PlaneTakeoff,
      title: "3. Direct Air Cargo & Customs",
      shortLabel: "Direct flight to Dhaka",
      details:
        "Loaded on direct air freight to Hazrat Shahjalal International Airport (DAC). Our dedicated customs brokers clear all items legally.",
    },
    {
      stepNumber: 4,
      icon: Home,
      title: "4. Doorstep Handover in BD",
      shortLabel: "Secure OTP delivery",
      details:
        "Local express riders bring the parcel straight to your family's home in any of Bangladesh's 64 districts with secure SMS OTP handover.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeIcon={PlaneTakeoff}
          badgeText="Simple 4-Step Journey"
          title="How AponBridge Delivers from"
          highlightedText="Abroad to Home"
          description="No complex paperwork, no embassy visits, and no stressful airport pickups for elderly parents. Simple, predictable and transparent."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <StepCard
              key={st.stepNumber}
              stepNumber={st.stepNumber}
              icon={st.icon}
              title={st.title}
              shortLabel={st.shortLabel}
              details={st.details}
              isActive={activeStep === st.stepNumber}
              onClick={() => setActiveStep(st.stepNumber)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={() => dispatch(setBookingModalOpen(true))}
            variant="gradient"
            size="lg"
            className="gap-2 font-bold px-8 shadow-lg hover:shadow-emerald-600/25 rounded-2xl"
          >
            <Package className="w-4 h-4" />
            <span>Start Shipping with Step 1</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
