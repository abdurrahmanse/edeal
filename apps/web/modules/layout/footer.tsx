"use client";

import React from "react";
import Link from "next/link";
import { Plane, ShieldCheck, Heart, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Separator } from "@/modules/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-slate-950 text-slate-300 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-bold">
                <Plane className="h-5 w-5 transform -rotate-45" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">AponBridge Express</span>
                <span className="block text-xs text-emerald-400 font-medium">
                  পরবাস থেকে প্রিয়জনের কাছে নির্ভরযোগ্য পার্সেল
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              AponBridge Express is the dedicated cross-border logistics gateway engineered for expatriate Bangladeshis living in the USA, UK, Canada, and the Middle East. We guarantee 100% legal customs clearance and secure doorstep delivery across all 64 districts in Bangladesh.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" /> IATA Verified Partner
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-teal-400 font-medium">
                Bangladesh Post Approved
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Pages & Tools</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/calculator" className="hover:text-emerald-400 transition-colors">
                  Rate Calculator
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-emerald-400 transition-colors">
                  Live Radar Tracker
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/buy-for-me" className="hover:text-emerald-400 transition-colors">
                  "Buy For Me" Concierge
                </Link>
              </li>
              <li>
                <Link href="/customs-guide" className="hover:text-emerald-400 transition-colors">
                  NBR Customs Rules
                </Link>
              </li>
              <li>
                <Link href="/warehouses" className="hover:text-emerald-400 transition-colors">
                  Global Hubs & Drop-offs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About AponBridge
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hub Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Physical Hubs</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">New York (JFK Hub):</strong>
                  <br />147-39 175th St, Jamaica, NY 11434
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Houston Terminal:</strong>
                  <br />Hillcroft Ave, Houston, TX 77081
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">London Heathrow:</strong>
                  <br />Heathrow Cargo Village, TW6 3RN
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Bangladesh Delivery & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Bangladesh HQ Desk</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Dhaka Central Hub:</strong>
                  <br />Cargo Village, Hazrat Shahjalal Airport & Tejgaon I/A
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>USA: +1 (212) 555-0199</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>BD: +880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>support@aponbridge.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 AponBridge Express Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/customs-guide" className="hover:text-slate-300 transition-colors">
              Customs Policy
            </Link>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Terms & Safety
            </Link>
            <span className="flex items-center gap-1 text-emerald-400">
              Crafted with <Heart className="w-3.5 h-3.5 fill-emerald-400" /> for Global Bangladeshis
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
