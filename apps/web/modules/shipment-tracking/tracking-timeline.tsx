"use client";

import React from "react";
import {
  Package,
  Plane,
  ShieldCheck,
  Warehouse,
  Truck,
  Home,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { ShipmentRecord, TrackingCheckpoint } from "@/modules/core/types";

interface TrackingTimelineProps {
  shipment: ShipmentRecord;
}

export function TrackingTimeline({ shipment }: TrackingTimelineProps) {
  const getIcon = (name: TrackingCheckpoint["iconName"]) => {
    switch (name) {
      case "package":
        return <Package className="w-4 h-4" />;
      case "plane":
        return <Plane className="w-4 h-4" />;
      case "shield-check":
        return <ShieldCheck className="w-4 h-4" />;
      case "warehouse":
        return <Warehouse className="w-4 h-4" />;
      case "truck":
        return <Truck className="w-4 h-4" />;
      case "home":
        return <Home className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 pt-2">
      {/* Route Badge Header */}
      <div className="p-4 rounded-2xl bg-muted/60 border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-[11px] font-semibold text-muted-foreground uppercase">Sender:</span>
          <p className="font-bold text-foreground text-sm">{shipment.senderName}</p>
          <span className="text-muted-foreground">{shipment.senderLocation}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
          <span>Flight Corridor</span>
          <Plane className="w-4 h-4 animate-pulse" />
        </div>

        <div className="sm:text-right">
          <span className="text-[11px] font-semibold text-muted-foreground uppercase">Family Recipient:</span>
          <p className="font-bold text-foreground text-sm">{shipment.recipientName}</p>
          <span className="text-muted-foreground">{shipment.recipientLocation}</span>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-border">
        {shipment.checkpoints.map((cp, idx) => {
          const isDone = cp.completed;
          const isCurrent = cp.current;

          return (
            <div key={cp.id} className="relative group">
              {/* Dot / Icon */}
              <div
                className={`absolute -left-6 sm:-left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ${
                  isCurrent
                    ? "bg-emerald-600 text-white ring-4 ring-emerald-500/30 scale-110 shadow-lg"
                    : isDone
                    ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40"
                    : "bg-muted text-muted-foreground border border-border"
                }`}
              >
                {getIcon(cp.iconName)}
              </div>

              {/* Checkpoint Content */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  isCurrent
                    ? "bg-emerald-500/5 border-emerald-500/30 shadow-sm"
                    : "bg-card/60 border-border"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <h4
                      className={`text-sm font-bold ${
                        isCurrent ? "text-emerald-700 dark:text-emerald-300" : "text-foreground"
                      }`}
                    >
                      {cp.status}
                    </h4>
                    {isCurrent && (
                      <span className="bg-emerald-500 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full animate-pulse">
                        Active Stage
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{cp.timestamp}</span>
                </div>

                <div className="text-xs text-muted-foreground font-medium mb-1.5 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>{cp.location}</span>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{cp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
