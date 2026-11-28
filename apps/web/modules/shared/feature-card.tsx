import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/modules/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor = "bg-muted/80",
  iconColor = "text-emerald-600 dark:text-emerald-400",
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "glass-surface specular-shine hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 group rounded-3xl p-6 sm:p-7 space-y-3",
        className
      )}
    >
      <div className={cn("h-11 w-11 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform", iconBgColor)}>
        <Icon className={cn("w-5 h-5", iconColor)} />
      </div>
      <CardTitle className="text-base sm:text-lg font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {title}
      </CardTitle>
      <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground/90">
        {description}
      </CardDescription>
    </Card>
  );
}
