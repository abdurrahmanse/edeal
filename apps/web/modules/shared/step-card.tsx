import React from "react";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  shortLabel?: string;
  details?: string;
  description?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export function StepCard({
  stepNumber,
  icon: Icon,
  title,
  shortLabel,
  details,
  description,
  isActive = false,
  onClick,
  className,
}: StepCardProps) {
  const bodyText = details || description;
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-3xl p-6 transition-all duration-300 relative glass-surface specular-shine space-y-3",
        isActive
          ? "border-emerald-500/60 ring-2 ring-emerald-500/20 shadow-lg"
          : "hover:border-emerald-500/30",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "h-10 w-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105",
            isActive
              ? "bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30"
              : "bg-muted text-muted-foreground"
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs font-mono font-bold text-muted-foreground glass-pill px-2.5 py-0.5 rounded-full">
          Step {stepNumber}
        </span>
      </div>

      <div>
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        {shortLabel && (
          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
            {shortLabel}
          </span>
        )}
      </div>

      {bodyText && <p className="text-xs text-muted-foreground/90 leading-relaxed font-normal">{bodyText}</p>}
    </div>
  );
}
