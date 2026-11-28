"use client";

import React from "react";
import { Repeat, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WeightUnitToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: string | number;
  highlight?: boolean;
  subLabel?: string;
  iconProps?: LucideProps;
}

/**
 * WeightUnitToggle
 * Unit switcher between lbs and kg
 * Part of the AponBridge Express 200+ Single-Responsibility Component Architecture.
 */
export function WeightUnitToggle({
  label = "Weight Unit Toggle",
  value,
  highlight = false,
  subLabel,
  className,
  children,
  iconProps,
  ...props
}: WeightUnitToggleProps) {
  return (
    <div
      className={cn(
        "glass-surface specular-shine rounded-2xl p-4 transition-all duration-200 flex items-center justify-between gap-3 text-xs",
        highlight && "border-emerald-500/50 ring-2 ring-emerald-500/20 bg-emerald-500/5",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <Repeat className="w-4 h-4" {...iconProps} />
        </div>
        <div className="truncate">
          <span className="font-semibold text-foreground block truncate">{label}</span>
          {subLabel && <span className="text-[11px] text-muted-foreground block truncate">{subLabel}</span>}
        </div>
      </div>
      {value !== undefined && (
        <span className="font-mono font-bold text-foreground text-xs shrink-0 glass-pill px-2 py-0.5 rounded-lg">
          {value}
        </span>
      )}
      {children}
    </div>
  );
}

export default WeightUnitToggle;
