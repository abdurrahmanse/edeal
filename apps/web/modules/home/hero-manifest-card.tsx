"use client";

import React from "react";
import { Plane, PackageCheck, Lock, Heart } from "lucide-react";
import { Button } from "@/modules/ui/button";
import { TrustBadge } from "@/modules/shared/trust-badge";
import { useAppDispatch, useActiveCurrency } from "@/modules/core/hooks";
import { setBookingModalOpen, setTrackingModalOpen } from "@/modules/core/slices/uiSlice";

export function HeroManifestCard() {
  const dispatch = useAppDispatch();
  const { format } = useActiveCurrency();

  return (
    <div className="glass-surface specular-shine rounded-3xl p-6 sm:p-7 space-y-5 relative">
      {/* Flight Route Banner */}
      <div className="flex items-center justify-between pb-4 border-b border-white/20 dark:border-white/5">
        <div className="text-left">
          <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Origin Hub</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-lg font-black text-foreground">JFK (New York)</span>
            <span className="text-xs">🇺🇸</span>
          </div>
        </div>

        <div className="flex flex-col items-center px-4">
          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <Plane className="w-4 h-4 animate-pulse transform rotate-90" />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground mt-0.5">Direct Air Cargo</span>
        </div>

        <div className="text-right">
          <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Destination</span>
          <div className="flex items-center gap-1.5 mt-0.5 justify-end">
            <span className="text-xs">🇧🇩</span>
            <span className="text-lg font-black text-foreground">DAC (Dhaka)</span>
          </div>
        </div>
      </div>

      {/* Package Manifest Specifications */}
      <div className="glass-surface-subtle p-4 rounded-2xl space-y-3 text-xs">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-foreground flex items-center gap-1.5">
            <PackageCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Live Manifest Preview</span>
          </span>
          <span className="glass-pill px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
            Ready for Takeoff
          </span>
        </div>

        <div className="space-y-1.5 text-muted-foreground">
          <div className="flex justify-between">
            <span>Contents:</span>
            <strong className="text-foreground">MacBook Air M2 + Centrum + Chocolates</strong>
          </div>
          <div className="flex justify-between">
            <span>Chargeable Weight:</span>
            <strong className="text-foreground font-mono">6.5 lbs (2.9 kg)</strong>
          </div>
          <div className="flex justify-between">
            <span>Customs Tariff:</span>
            <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Prepaid & Included</strong>
          </div>
          <div className="flex justify-between">
            <span>Final Doorstep Delivery:</span>
            <strong className="text-foreground">Uttara, Dhaka (with OTP)</strong>
          </div>
        </div>

        <div className="pt-2 border-t border-white/20 dark:border-white/5 flex justify-between items-center">
          <span className="font-semibold text-foreground">All-Inclusive Rate:</span>
          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
            {format(68)}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2 pt-1">
        <Button
          onClick={() => dispatch(setBookingModalOpen(true))}
          variant="gradient"
          className="w-full gap-2 font-bold shadow-md h-12 rounded-2xl"
        >
          <PackageCheck className="w-4 h-4" />
          <span>Ship This Box to Family</span>
        </Button>

        <Button
          onClick={() => dispatch(setTrackingModalOpen(true))}
          variant="ghost"
          className="w-full text-xs text-muted-foreground hover:text-foreground h-9"
        >
          Have an existing tracking code? Track here
        </Button>
      </div>

      {/* Verified Trust Footer */}
      <div className="pt-3 border-t border-white/20 dark:border-white/5 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
        <TrustBadge icon={Lock} label="Tamper-Proof Seals" iconColor="text-emerald-500" />
        <span>•</span>
        <TrustBadge icon={Heart} label="100% Care Handover" iconColor="text-red-500" />
      </div>
    </div>
  );
}
