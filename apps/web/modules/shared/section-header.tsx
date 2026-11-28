import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badgeText,
  badgeIcon: BadgeIcon,
  title,
  highlightedText,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-14",
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl",
        className
      )}
    >
      <div className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-semibold text-emerald-800 dark:text-emerald-300">
        {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
        <span>{badgeText}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.18]">
        {title}{" "}
        {highlightedText && (
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-muted-foreground/90 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
