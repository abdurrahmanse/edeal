"use client";

import React from "react";
import { MessageCircle, Phone, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/modules/ui/button";

export function ContactConcierge() {
  return (
    <aside className="fixed bottom-6 right-6 z-40" aria-label="Customer Support">
      <a
        href="https://wa.me/12125550199?text=Hello%20AponBridge,%20I%20have%20a%20question%20about%20shipping%20a%20package%20to%20Bangladesh"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-700/40 hover:scale-105 transition-all duration-300 border-2 border-white/20"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold leading-none">24/7 Expat Concierge</span>
          <span className="text-[10px] text-emerald-100 leading-none mt-0.5">Chat on WhatsApp</span>
        </div>
      </a>
    </aside>
  );
}
