import fs from "fs";
import path from "path";

const baseDir = "/Volumes/Fullstack/Github/edeal/apps/web/modules/components";

// Ensure directories
["atoms", "molecules", "organisms", "domain"].forEach((d) => {
  const p = path.join(baseDir, d);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// Write bespoke components
const componentFiles = {};

// ATOMS
componentFiles["atoms/copy-button.tsx"] = `"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/modules/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textToCopy: string;
  label?: string;
  successMessage?: string;
}

export function CopyButton({
  textToCopy,
  label = "Copy",
  successMessage = "Copied to clipboard!",
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast.success(successMessage);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      type="button"
      variant="glass"
      size="sm"
      onClick={handleCopy}
      className={cn("h-8 gap-1.5 px-2.5 text-xs font-semibold rounded-xl", className)}
      {...props}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
      <span>{copied ? "Copied" : label}</span>
    </Button>
  );
}
export default CopyButton;
`;

componentFiles["atoms/rating-stars.tsx"] = `"use client";
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating?: number;
  maxStars?: number;
  showScore?: boolean;
}

export function RatingStars({
  rating = 5,
  maxStars = 5,
  showScore = true,
  className,
  ...props
}: RatingStarsProps) {
  return (
    <div className={cn("inline-flex items-center gap-1.5", className)} {...props}>
      <div className="flex items-center gap-0.5 text-amber-400">
        {[...Array(maxStars)].map((_, i) => (
          <Star
            key={i}
            className={cn("w-3.5 h-3.5", i < Math.floor(rating) ? "fill-amber-400" : "text-muted-foreground/30")}
          />
        ))}
      </div>
      {showScore && (
        <span className="font-mono text-xs font-bold text-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
export default RatingStars;
`;

componentFiles["atoms/phone-link.tsx"] = `"use client";
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
      href={\`tel:\${cleanPhone}\`}
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
`;

componentFiles["atoms/whatsapp-link.tsx"] = `"use client";
import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface WhatsappLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  phoneNumber?: string;
  message?: string;
  label?: string;
}

export function WhatsappLink({
  phoneNumber = "12125550199",
  message = "Hello AponBridge, I need assistance shipping to Bangladesh",
  label = "WhatsApp 24/7 Desk",
  className,
  ...props
}: WhatsappLinkProps) {
  const url = \`https://wa.me/\${phoneNumber}?text=\${encodeURIComponent(message)}\`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-emerald-600/20",
        className
      )}
      {...props}
    >
      <MessageCircle className="w-3.5 h-3.5 fill-white" />
      <span>{label}</span>
    </a>
  );
}
export default WhatsappLink;
`;

componentFiles["atoms/email-link.tsx"] = `"use client";
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
      href={\`mailto:\${email}?subject=\${encodeURIComponent(subject)}\`}
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
`;

componentFiles["atoms/barcode-graphic.tsx"] = `"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface BarcodeGraphicProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
}

export function BarcodeGraphic({ code, className, ...props }: BarcodeGraphicProps) {
  return (
    <div className={cn("glass-surface-subtle p-3 rounded-2xl flex flex-col items-center gap-1.5", className)} {...props}>
      <div className="flex items-center gap-[3px] h-9">
        {[2, 4, 1, 3, 2, 5, 1, 4, 2, 3, 1, 5, 2, 4, 1, 3, 2, 4, 1, 3, 2, 5, 2, 4].map((w, idx) => (
          <span
            key={idx}
            className="h-full bg-foreground"
            style={{ width: \`\${w}px\` }}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">
        {code}
      </span>
    </div>
  );
}
export default BarcodeGraphic;
`;

componentFiles["atoms/flag-badge.tsx"] = `"use client";
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
`;

componentFiles["atoms/live-badge.tsx"] = `"use client";
import React from "react";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LiveBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
}

export function LiveBadge({ label = "LIVE RADAR", className, ...props }: LiveBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span>{label}</span>
    </span>
  );
}
export default LiveBadge;
`;

componentFiles["atoms/discount-pill.tsx"] = `"use client";
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
`;

componentFiles["atoms/kbd-badge.tsx"] = `"use client";
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
`;

// Write the files
Object.entries(componentFiles).forEach(([relPath, content]) => {
  const fullPath = path.join(baseDir, relPath);
  fs.writeFileSync(fullPath, content, "utf-8");
});

console.log("Successfully written " + Object.keys(componentFiles).length + " bespoke atoms with genuine behavioral props!");
