"use client";

import React from "react";
import { Plane, Sparkles, ArrowRight } from "lucide-react";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";

export function PromoBar() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative bg-gradient-to-r from-emerald-800 via-emerald-900 to-teal-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 shadow-inner overflow-hidden border-b border-emerald-700/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-950 font-bold px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider animate-pulse">
            <Sparkles className="w-3 h-3" /> Special
          </span>
          <span className="font-medium">
            🇺🇸 🇬🇧 🇨🇦 Direct Air Cargo to Bangladesh • Next Flight cutoff this Friday! Use coupon{" "}
            <strong className="text-amber-300 font-bold">APON15</strong> for 15% off shipping.
          </span>
        </div>

        <button
          onClick={() => dispatch(setBookingModalOpen(true))}
          className="hidden md:inline-flex items-center gap-1.5 text-white bg-emerald-700/60 hover:bg-emerald-600 px-3 py-1 rounded-full text-xs font-semibold transition-all hover:gap-2 shrink-0 border border-emerald-500/30"
        >
          Book Flight Slot <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
