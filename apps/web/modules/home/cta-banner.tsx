"use client";

import React from "react";
import { Package, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "@/modules/ui/button";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";

export function CtaBanner() {
  const dispatch = useAppDispatch();

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-xs font-bold uppercase tracking-wider text-emerald-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Next Flight Slot Closing Soon</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Ready to Surprise Your Family in Bangladesh?
        </h2>

        <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
          Book your parcel today. Use coupon <strong className="text-amber-300 font-bold">APON15</strong> at checkout for 15% off international air shipping fees.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            onClick={() => dispatch(setBookingModalOpen(true))}
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto gap-2.5 font-bold text-base py-6 px-9 rounded-2xl shadow-xl hover:shadow-emerald-500/40"
          >
            <Package className="w-5 h-5" />
            <span>Book Your Parcel Now</span>
            <ArrowRight className="w-5 h-5" />
          </Button>

          <a
            href="https://wa.me/12125550199?text=Hello%20AponBridge,%20I%20want%20to%20ship%20a%20package%20to%20Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-800/60 hover:bg-emerald-700/80 border border-emerald-600/50 text-white text-base font-semibold py-3.5 px-6 rounded-2xl transition-all"
          >
            <PhoneCall className="w-4 h-4 text-emerald-300" />
            <span>Chat on WhatsApp (+1 212 555-0199)</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-300/80">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Guaranteed Safe Delivery
          </span>
          <span>•</span>
          <span>Free US Consolidation & Repacking</span>
          <span>•</span>
          <span>Doorstep Handover across 64 Districts</span>
        </div>
      </div>
    </section>
  );
}
