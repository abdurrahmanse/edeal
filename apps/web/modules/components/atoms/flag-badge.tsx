"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface FlagBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  flag: string;
  countryName: string;
  isoCode?: string;
}

export function FlagBadge({ flag, countryName, isoCode, className, ...props }: FlagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 glass-pill px-2.5 py-1 rounded-xl text-xs font-semibold text-foreground",
        className
      )}
      {...props}
    >
      <span className="text-sm">{flag}</span>
      <span>{countryName}</span>
      {isoCode && <span className="font-mono text-[10px] text-muted-foreground uppercase">({isoCode})</span>}
    </span>
  );
}
export default FlagBadge;
