import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { Switch } from "@/modules/ui/switch";

interface AddonTogglesProps {
  includeInsurance: boolean;
  fragileHandling: boolean;
  onInsuranceToggle: (checked: boolean) => void;
  onFragileToggle: (checked: boolean) => void;
}

export function AddonToggles({
  includeInsurance,
  fragileHandling,
  onInsuranceToggle,
  onFragileToggle,
}: AddonTogglesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
      <div className="flex items-center justify-between p-3.5 rounded-2xl glass-surface-subtle border-white/20 dark:border-white/5">
        <div className="space-y-0.5 pr-2">
          <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>100% Value Insurance</span>
          </div>
          <p className="text-[11px] text-muted-foreground">Full refund if damaged</p>
        </div>
        <Switch checked={includeInsurance} onCheckedChange={onInsuranceToggle} />
      </div>

      <div className="flex items-center justify-between p-3.5 rounded-2xl glass-surface-subtle border-white/20 dark:border-white/5">
        <div className="space-y-0.5 pr-2">
          <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Fragile Cushion Wrapping</span>
          </div>
          <p className="text-[11px] text-muted-foreground">Air bubble protection</p>
        </div>
        <Switch checked={fragileHandling} onCheckedChange={onFragileToggle} />
      </div>
    </div>
  );
}
