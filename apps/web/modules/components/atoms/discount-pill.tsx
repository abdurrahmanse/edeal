"use client";
import React from "react";
import { Sparkles, Percent } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DiscountPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  couponCode?: string;
  discountPercentage?: number;
}

export function DiscountPill({
  couponCode = "APON15",
  discountPercentage = 15,
  className,
  ...props
}: DiscountPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full text-[11px] font-bold",
        className
      )}
      {...props}
    >
      <Percent className="w-3 h-3 text-amber-500" />
      <span>Use <strong className="font-mono text-foreground font-black">{couponCode}</strong> for {discountPercentage}% Off</span>
    </span>
  );
}
export default DiscountPill;
