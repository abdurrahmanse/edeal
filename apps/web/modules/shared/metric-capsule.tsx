"use client";

import React from "react";
import CountUp from "react-countup";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCapsuleProps {
  icon: LucideIcon;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  subLabel: string;
  colorClass?: string;
  className?: string;
}

export function MetricCapsule({
  icon: Icon,
  value,
  decimals = 0,
  suffix = "",
  label,
  subLabel,
  colorClass = "text-emerald-600 dark:text-emerald-400",
  className,
}: MetricCapsuleProps) {
  return (
    <div
      className={cn(
        "glass-surface specular-shine p-5 sm:p-6 rounded-3xl space-y-2 hover:scale-[1.02] transition-all text-center",
        className
      )}
    >
      <div className="h-9 w-9 mx-auto rounded-xl bg-muted/80 flex items-center justify-center mb-1">
        <Icon className={cn("w-4 h-4", colorClass)} />
      </div>
      <div className={cn("text-3xl sm:text-4xl font-black font-mono tracking-tight", colorClass)}>
        <CountUp end={value} decimals={decimals} duration={2.5} separator="," enableScrollSpy />
        {suffix}
      </div>
      <p className="text-xs sm:text-sm font-bold text-foreground">{label}</p>
      <span className="text-[11px] text-muted-foreground block">{subLabel}</span>
    </div>
  );
}
