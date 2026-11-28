"use client";
import React from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LiveBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
}

export function LiveBadge({ label = "LIVE RADAR", className, ...props }: LiveBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span>{label}</span>
    </span>
  );
}
export default LiveBadge;
