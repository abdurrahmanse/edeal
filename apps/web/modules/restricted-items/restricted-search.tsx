"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/modules/ui/dialog";
import { Input } from "@/modules/ui/input";
import { Badge } from "@/modules/ui/badge";
import { Search, ShieldCheck, AlertTriangle, XCircle, CheckCircle2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/modules/core/hooks";
import { setRestrictedItemsModalOpen } from "@/modules/core/slices/uiSlice";

interface ItemRule {
  name: string;
  category: string;
  status: "allowed" | "restricted" | "prohibited";
  note: string;
  rule: string;
}

const itemsDatabase: ItemRule[] = [
  {
    name: "Laptops & Notebooks (MacBook, Dell, HP)",
    category: "Electronics",
    status: "allowed",
    note: "Up to 2 units per consignment allowed legally.",
    rule: "Must be declared on AWB. Normal customs tariff applies, covered in our flat quote.",
  },
  {
    name: "Smartphones (iPhone, Samsung, Pixel)",
    category: "Electronics",
    status: "allowed",
    note: "Maximum 2 units per passenger/consignment.",
    rule: "BTRC registration can be completed with our assistance. Fully legal.",
  },
  {
    name: "Vitamins & Health Supplements",
    category: "Health",
    status: "allowed",
    note: "Personal family use quantities (Centrum, Omega-3, Calcium).",
    rule: "Must be sealed in original manufacturer packaging with valid expiry date.",
  },
  {
    name: "Chocolates, Dry Fruits, Coffee & Spices",
    category: "Food",
    status: "allowed",
    note: "Commercial shelf-stable sweets, Ferrero, Lindt, Nespresso.",
    rule: "Must be sealed. Perishable raw foods or fresh meats are strictly not allowed.",
  },
  {
    name: "Cosmetics & Perfumes (under 100ml)",
    category: "Beauty",
    status: "allowed",
    note: "Skin creams, moisturizers, non-pressurized perfumes.",
    rule: "Aerosol spray cans (deodorant pressurized cans) are restricted on passenger planes.",
  },
  {
    name: "Gold & Silver Bullion / Raw Bars",
    category: "Precious Metals",
    status: "prohibited",
    note: "Strictly prohibited in air parcel consignments by Bangladesh Bank.",
    rule: "Raw gold bullion or excessive jewelry cannot be shipped via courier.",
  },
  {
    name: "Drones & Quadcopters with Camera",
    category: "Electronics",
    status: "restricted",
    note: "Requires prior Ministry of Civil Aviation & BTRC import permit.",
    rule: "Cannot be shipped without special Ministry NOC.",
  },
  {
    name: "Prescription Narcotics & Unlicensed Drugs",
    category: "Pharmaceutical",
    status: "prohibited",
    note: "Strictly illegal under Bangladesh Narcotics Control Act.",
    rule: "Only ordinary over-the-counter vitamins are permitted.",
  },
  {
    name: "Power Banks & Loose Lithium Batteries",
    category: "Dangerous Goods",
    status: "restricted",
    note: "IATA Aviation Safety Rules prohibit standalone power banks in air cargo.",
    rule: "Batteries built INSIDE devices (like laptop inside MacBook) are 100% permitted.",
  },
];

export function RestrictedSearch() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isRestrictedItemsModalOpen);
  const [query, setQuery] = useState("");

  const filtered = itemsDatabase.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.note.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => dispatch(setRestrictedItemsModalOpen(open))}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-border bg-card">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-6 pb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              NBR Bangladesh Customs Compliance
            </span>
          </div>

          <DialogTitle className="text-2xl font-extrabold text-white">
            Customs Rules & Allowed Items Search
          </DialogTitle>
          <DialogDescription className="text-slate-300 text-xs mt-1">
            Search any product to check whether it can be legally shipped to Bangladesh and what customs conditions apply.
          </DialogDescription>

          <div className="relative mt-4">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search e.g. laptop, chocolate, vitamins, perfume, gold..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-11 bg-slate-950/70 border-slate-700 text-white placeholder:text-slate-500 text-sm focus-visible:ring-teal-500"
            />
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-border bg-card/60 hover:bg-muted/40 transition-colors space-y-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                    <span className="text-[11px] text-muted-foreground font-medium">Category: {item.category}</span>
                  </div>

                  {item.status === "allowed" && (
                    <Badge variant="success" className="gap-1 text-[11px]">
                      <CheckCircle2 className="w-3 h-3" /> 100% Allowed
                    </Badge>
                  )}
                  {item.status === "restricted" && (
                    <Badge variant="warning" className="gap-1 text-[11px]">
                      <AlertTriangle className="w-3 h-3" /> Special Conditions
                    </Badge>
                  )}
                  {item.status === "prohibited" && (
                    <Badge variant="destructive" className="gap-1 text-[11px]">
                      <XCircle className="w-3 h-3" /> Prohibited
                    </Badge>
                  )}
                </div>

                <p className="text-xs text-muted-foreground">{item.note}</p>
                <div className="text-[11px] bg-muted/80 p-2 rounded-lg text-muted-foreground font-mono">
                  <strong>Customs Rule:</strong> {item.rule}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground text-xs">
              No specific item matched "{query}". Contact our 24/7 WhatsApp concierge to check custom items.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
