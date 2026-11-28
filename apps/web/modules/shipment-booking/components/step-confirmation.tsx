import React from "react";
import { Check, Copy, Package, Calendar, MapPin } from "lucide-react";
import { Button } from "@/modules/ui/button";

interface StepConfirmationProps {
  trackingNumber: string;
  senderEmail: string;
  estimatedDeliveryDate: string;
  pickupDropoffInstructions: string;
  copied: boolean;
  onCopy: () => void;
  onTrack: () => void;
  onClose: () => void;
}

export function StepConfirmation({
  trackingNumber,
  senderEmail,
  estimatedDeliveryDate,
  pickupDropoffInstructions,
  copied,
  onCopy,
  onTrack,
  onClose,
}: StepConfirmationProps) {
  return (
    <div className="space-y-5 text-center py-2 text-xs">
      <div className="h-16 w-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-bounce">
        <Check className="h-8 w-8 stroke-[3]" />
      </div>

      <div>
        <h3 className="text-xl font-black text-foreground">
          Parcel Booked Successfully! 🎉
        </h3>
        <p className="text-muted-foreground mt-1">
          Drop-off label and AWB consignment note emailed to {senderEmail || "your email"}.
        </p>
      </div>

      {/* Tracking Number Display Box */}
      <div className="p-4 rounded-3xl glass-surface specular-shine flex items-center justify-between">
        <div className="text-left">
          <span className="text-[10px] font-bold uppercase text-muted-foreground block tracking-wider">
            Assigned Tracking Code
          </span>
          <span className="font-mono text-xl font-black text-emerald-600 dark:text-emerald-400">
            {trackingNumber}
          </span>
        </div>
        <Button
          variant="glass"
          size="sm"
          onClick={onCopy}
          className="gap-1.5 text-xs rounded-xl"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Copy Code"}</span>
        </Button>
      </div>

      <div className="text-left space-y-2 p-4 rounded-2xl glass-surface-subtle">
        <div className="flex justify-between">
          <span className="text-muted-foreground flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Estimated Delivery:</span>
          </span>
          <strong className="text-foreground">{estimatedDeliveryDate}</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Drop-off Hub:</span>
          </span>
          <span className="text-foreground text-right">{pickupDropoffInstructions}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button onClick={onTrack} variant="gradient" className="w-full gap-2 rounded-2xl">
          <Package className="w-4 h-4" />
          <span>Open Live Radar Tracker</span>
        </Button>
        <Button onClick={onClose} variant="outline" className="w-full rounded-2xl">
          Done
        </Button>
      </div>
    </div>
  );
}
