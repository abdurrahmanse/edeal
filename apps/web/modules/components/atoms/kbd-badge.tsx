"use client";
import React from "react";
import { Command } from "lucide-react";
import { cn } from "@/lib/utils";

export interface KbdBadgeProps extends React.HTMLAttributes<HTMLElement> {
  keyLabel: string;
  withCommand?: boolean;
}

export function KbdBadge({ keyLabel, withCommand = true, className, ...props }: KbdBadgeProps) {
  return (
    <kbd
      className={cn(
        "inline-flex items-center gap-1 font-mono text-[10px] glass-pill px-2 py-0.5 rounded-md font-bold text-muted-foreground border-b-2",
        className
      )}
      {...props}
    >
      {withCommand && <Command className="w-2.5 h-2.5" />}
      <span>{keyLabel}</span>
    </kbd>
  );
}
export default KbdBadge;
