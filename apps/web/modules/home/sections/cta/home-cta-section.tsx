"use client";

import React from "react";
import { Button } from "@/modules/ui/button";
import { useAppDispatch } from "@/modules/core/hooks";
import { setBookingModalOpen } from "@/modules/core/slices/uiSlice";
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
            onClick={() => window.open("https://wa.me/19175550199?text=Hello%20AponBridge,%20I%20need%20assistance%20shipping%20to%20Bangladesh", "_blank")}
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
