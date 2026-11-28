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
