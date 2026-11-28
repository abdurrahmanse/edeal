"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/modules/core/hooks";
import { setCurrency, SupportedCurrency } from "@/modules/core/slices/currencySlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/modules/ui/dropdown-menu";
import { Button } from "@/modules/ui/button";
import { Globe } from "lucide-react";

const currencies: Array<{ code: SupportedCurrency; label: string; symbol: string; flag: string }> = [
  { code: "USD", label: "US Dollar", symbol: "$", flag: "🇺🇸" },
  { code: "BDT", label: "Bangladeshi Taka", symbol: "৳", flag: "🇧🇩" },
  { code: "GBP", label: "British Pound", symbol: "£", flag: "🇬🇧" },
  { code: "CAD", label: "Canadian Dollar", symbol: "CA$", flag: "🇨🇦" },
  { code: "EUR", label: "Euro", symbol: "€", flag: "🇪🇺" },
];

export function CurrencySelector() {
  const dispatch = useAppDispatch();
  const current = useAppSelector((state) => state.currency.currentCurrency);
  const activeCurrency = currencies.find((c) => c.code === current) || currencies[0]!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 rounded-xl gap-1.5 px-3 border-border/70 text-xs font-semibold">
          <span>{activeCurrency.flag}</span>
          <span>{activeCurrency.code}</span>
          <span className="text-muted-foreground font-normal">({activeCurrency.symbol})</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-1.5 rounded-xl">
        <div className="px-2 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Select Currency
        </div>
        {currencies.map((curr) => (
          <DropdownMenuItem
            key={curr.code}
            onClick={() => dispatch(setCurrency(curr.code))}
            className={`flex items-center justify-between rounded-lg px-2.5 py-2 cursor-pointer text-xs ${
              current === curr.code ? "bg-primary/10 text-primary font-bold" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{curr.flag}</span>
              <span>{curr.code}</span>
            </div>
            <span className="text-muted-foreground font-mono">{curr.symbol}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
