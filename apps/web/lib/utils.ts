import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CurrencyCode = "USD" | "BDT" | "GBP" | "CAD" | "EUR";

interface CurrencyInfo {
  rate: number;
  symbol: string;
  prefix: boolean;
}

const defaultRates: Record<CurrencyCode, CurrencyInfo> = {
  USD: { rate: 1, symbol: "$", prefix: true },
  BDT: { rate: 122.5, symbol: "৳", prefix: false },
  GBP: { rate: 0.79, symbol: "£", prefix: true },
  CAD: { rate: 1.39, symbol: "CA$", prefix: true },
  EUR: { rate: 0.94, symbol: "€", prefix: true },
};

export function formatCurrency(amount: number, currency: CurrencyCode = "USD"): string {
  const info: CurrencyInfo = defaultRates[currency] ?? defaultRates.USD;
  const converted = amount * info.rate;
  const formatted = Math.round(converted).toLocaleString();

  return info.prefix ? `${info.symbol}${formatted}` : `${formatted} ${info.symbol}`;
}
