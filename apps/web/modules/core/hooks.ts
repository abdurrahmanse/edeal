import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { formatCurrency } from "@/lib/utils";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Custom Hook to format any amount into the user's active currency
 */
export function useActiveCurrency() {
  const currencyState = useAppSelector((state) => state.currency);

  const format = (amountInUSD: number) => {
    return formatCurrency(amountInUSD, currencyState.currentCurrency);
  };

  return {
    currency: currencyState.currentCurrency,
    format,
  };
}
