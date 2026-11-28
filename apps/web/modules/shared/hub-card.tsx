import React from "react";
import { MapPin, Phone, Clock, CheckCircle2, LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/modules/ui/card";
import { Badge } from "@/modules/ui/badge";
import { cn } from "@/lib/utils";

interface HubCardProps {
  flag: string;
  country: string;
  hubName: string;
  address: string;
  phone: string;
  hours: string;
  cutoff: string;
  features: string[];
  className?: string;
}

export function HubCard({
  flag,
  country,
  hubName,
  address,
  phone,
  hours,
  cutoff,
  features,
  className,
}: HubCardProps) {
  return (
    <Card className={cn("glass-surface specular-shine hover:border-emerald-500/40 rounded-3xl p-6 sm:p-7 space-y-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{flag}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {country}
          </span>
        </div>
        <Badge variant="outline" className="text-[11px] font-mono glass-pill">
          Cutoff: {cutoff}
        </Badge>
      </div>

      <div>
        <h3 className="text-lg font-bold text-foreground">{hubName}</h3>
        <p className="text-xs text-muted-foreground flex items-start gap-1.5 mt-1">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
          <span>{address}</span>
        </p>
      </div>

      <div className="space-y-1 text-xs text-muted-foreground border-y border-white/20 dark:border-white/5 py-3">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span><strong>Contact / WhatsApp:</strong> {phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span><strong>Hours:</strong> {hours}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {features.map((feat, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1 text-[11px] glass-pill px-2.5 py-1 rounded-xl text-muted-foreground font-medium"
          >
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span>{feat}</span>
          </span>
        ))}
      </div>
    </Card>
  );
}
