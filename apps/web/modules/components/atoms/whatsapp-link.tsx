"use client";
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
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
