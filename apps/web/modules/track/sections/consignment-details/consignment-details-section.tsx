"use client";

import React from "react";
import { MapPin, Package, ShieldCheck, CheckCircle2 } from "lucide-react";

export interface ConsignmentDetailsSectionProps {
  shipment: any;
}

export function ConsignmentDetailsSection({ shipment }: ConsignmentDetailsSectionProps) {
  if (!shipment) return null;

  return (
    <div className="glass-surface specular-shine rounded-3xl p-6 space-y-4">
      <h3 className="font-bold text-base text-foreground">Consignment Summary</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Origin
          </span>
          <p className="font-semibold text-foreground">{shipment.originHub}</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-teal-500" /> Destination
          </span>
          <p className="font-semibold text-foreground">{shipment.destinationDistrict}, BD</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <Package className="w-3.5 h-3.5 text-amber-500" /> Package Weight
          </span>
          <p className="font-semibold text-foreground">{shipment.packageDetails?.weightLbs || 6.5} lbs</p>
        </div>
        <div className="space-y-1">
          <span className="text-muted-foreground flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Customs Status
          </span>
          <p className="font-semibold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Pre-Approved
          </p>
        </div>
      </div>
    </div>
  );
}
export default ConsignmentDetailsSection;
