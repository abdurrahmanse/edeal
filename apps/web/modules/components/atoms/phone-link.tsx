"use client";
import React from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PhoneLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  phoneNumber: string;
  displayNumber?: string;
  countryCode?: string;
}

export function PhoneLink({
  phoneNumber,
  displayNumber,
  countryCode,
  className,
  ...props
}: PhoneLinkProps) {
  const cleanPhone = phoneNumber.replace(/[^0-9+]/g, "");
  return (
    <a
      href={`tel:${cleanPhone}`}
      className={cn(
        "inline-flex items-center gap-2 glass-pill px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors",
        className
      )}
      {...props}
    >
      <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
      {countryCode && <span className="text-[10px] uppercase font-bold text-muted-foreground">{countryCode}</span>}
      <span className="font-mono">{displayNumber || phoneNumber}</span>
    </a>
  );
}
export default PhoneLink;
