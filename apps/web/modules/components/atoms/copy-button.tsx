"use client";
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
