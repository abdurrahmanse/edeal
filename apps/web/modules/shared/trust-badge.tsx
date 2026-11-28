import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  iconColor?: string;
  className?: string;
}

export function TrustBadge({
  icon: Icon,
  label,
  iconColor = "text-emerald-500",
  className,
}: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
    >
      <Icon className={cn("w-4 h-4 shrink-0", iconColor)} />
      <span>{label}</span>
    </div>
  );
}
