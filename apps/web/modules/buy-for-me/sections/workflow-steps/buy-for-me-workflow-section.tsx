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
          stepNumber={1}
          icon={Link2}
          title="Submit Store Link"
          description="Find your item on Amazon, Walmart, or eBay and paste the link in the form above."
        />
        <StepCard
          stepNumber={2}
          icon={Sparkles}
          title="Transparent Quote"
          description="We send you an all-inclusive quote in USD or BDT with fair bKash / bank payment options."
        />
        <StepCard
          stepNumber={3}
          icon={CreditCard}
          title="We Purchase in USA"
          description="Our US team buys the item using verified US commercial cards with Prime fast shipping."
        />
        <StepCard
          stepNumber={4}
          icon={Box}
          title="Delivered to BD"
          description="We inspect, pack, fly, customs clear, and deliver to your family's doorstep."
        />
      </div>
    </section>
  );
}
export default BuyForMeWorkflowSection;
