"use client";

import React from "react";
import { Badge } from "@/modules/ui/badge";
import { Progress } from "@/modules/ui/progress";
import { Plane, Radio } from "lucide-react";

export interface LiveRadarSectionProps {
  shipment: any;
}

export function LiveRadarSection({ shipment }: LiveRadarSectionProps) {
  if (!shipment) return null;

  return (
    <div className="glass-surface specular-shine rounded-3xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
            <Plane className="w-5 h-5 transform -rotate-45" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-lg text-foreground">{shipment.trackingCode}</span>
              <Badge variant="outline" className="text-emerald-600 border-emerald-500/30 text-xs">
                {shipment.currentStatus}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Route: {shipment.originHub} → {shipment.destinationDistrict} (Estimated: {shipment.estimatedDeliveryDate})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground glass-pill px-3 py-1.5 rounded-xl">
          <Radio className="w-3.5 h-3.5 text-emerald-500 animate-ping" />
          <span>Flight QR-8104 (In Transit)</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground font-medium">
          <span>US JFK Warehouse</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">Trans-Atlantic Air Corridor (65%)</span>
          <span>Dhaka Doorstep</span>
        </div>
        <Progress value={65} className="h-2 bg-muted/40" />
      </div>
    </div>
  );
}
export default LiveRadarSection;
