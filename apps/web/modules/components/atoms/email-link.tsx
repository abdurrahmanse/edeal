"use client";
import React from "react";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmailLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  email?: string;
  subject?: string;
}

export function EmailLink({
  email = "support@aponbridge.com",
  subject = "Inquiry regarding parcel shipping",
  className,
  ...props
}: EmailLinkProps) {
  return (
    <a
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      className={cn(
        "inline-flex items-center gap-2 glass-pill px-3 py-1.5 rounded-xl text-xs font-semibold text-foreground hover:text-emerald-600 transition-colors",
        className
      )}
      {...props}
    >
      <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
      <span>{email}</span>
    </a>
  );
}
export default EmailLink;
