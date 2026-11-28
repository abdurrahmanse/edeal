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
import { Button } from "@/modules/ui/button";
import { Badge } from "@/modules/ui/badge";
import { Progress } from "@/modules/ui/progress";
import { Search, Plane, Package, MapPin, Calendar, Clock, RefreshCw } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/modules/core/hooks";
import { setTrackingModalOpen } from "@/modules/core/slices/uiSlice";
import { lookupTracking } from "@/modules/core/slices/shippingSlice";
import { TrackingTimeline } from "./tracking-timeline";
import { toast } from "sonner";

export function TrackingWidget() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isTrackingModalOpen);
  const activeShipment = useAppSelector((state) => state.shipping.activeShipment);

  const [inputCode, setInputCode] = useState("APN-88204-BD");
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    if (!inputCode.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }
    setSearching(true);
    setTimeout(() => {
      dispatch(lookupTracking(inputCode));
      setSearching(false);
      toast.success("Shipment data synced");
    }, 300);
  };

  const handleDemoClick = (code: string) => {
    setInputCode(code);
    dispatch(lookupTracking(code));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => dispatch(setTrackingModalOpen(open))}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-border bg-card">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white p-6 pb-5 border-b border-emerald-900/40">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Live Trans-Atlantic Cargo Radar
            </span>
          </div>

          <DialogTitle className="text-2xl font-extrabold text-white">
            Track International Shipment
          </DialogTitle>
          <DialogDescription className="text-slate-300 text-xs mt-1">
            Real-time status updates from JFK / Houston hub export, in-flight transit, to Dhaka customs and doorstep delivery.
          </DialogDescription>

          {/* Search Box */}
          <div className="flex gap-2 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Enter tracking code (e.g. APN-88204-BD)"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10 h-11 bg-slate-950/70 border-slate-700 text-white placeholder:text-slate-500 font-mono text-sm focus-visible:ring-emerald-500"
              />
            </div>
            <Button
              onClick={handleSearch}
              disabled={searching}
              variant="gradient"
              className="gap-2 px-6"
            >
              {searching ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              <span>Track</span>
            </Button>
          </div>

          {/* Quick Demo links */}
          <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
            <span>Demo Numbers:</span>
            <button
              onClick={() => handleDemoClick("APN-88204-BD")}
              className="underline hover:text-emerald-300 font-mono"
            >
              APN-88204-BD (MacBook Air to Dhaka)
            </button>
            <span>•</span>
            <button
              onClick={() => handleDemoClick("APN-55410-BD")}
              className="underline hover:text-emerald-300 font-mono"
            >
              APN-55410-BD (Houston to Sylhet)
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-5">
          {activeShipment ? (
            <div className="space-y-5">
              {/* Status Header card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono text-muted-foreground block">
                      Tracking: <strong className="text-foreground">{activeShipment.trackingNumber}</strong>
                    </span>
                    <h3 className="text-lg font-extrabold text-foreground mt-0.5">
                      {activeShipment.currentStatus}
                    </h3>
                  </div>
                  <Badge variant="success" className="self-start sm:self-auto py-1 px-3 text-xs">
                    {activeShipment.speed}
                  </Badge>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-muted-foreground font-medium">
                    <span>Progress: {activeShipment.progressPercent}%</span>
                    <span>Estimated Arrival: <strong className="text-foreground">{activeShipment.estimatedDelivery}</strong></span>
                  </div>
                  <Progress value={activeShipment.progressPercent} className="h-2" />
                </div>
              </div>

              {/* Timeline Component */}
              <TrackingTimeline shipment={activeShipment} />
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm">No shipment found with this code. Please check your tracking number.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
