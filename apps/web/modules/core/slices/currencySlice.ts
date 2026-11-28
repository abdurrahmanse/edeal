import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SupportedCurrency = "USD" | "BDT" | "GBP" | "CAD" | "EUR";

export interface CurrencyState {
  currentCurrency: SupportedCurrency;
  exchangeRates: Record<SupportedCurrency, number>; // base USD
  currencySymbols: Record<SupportedCurrency, string>;
}

const initialState: CurrencyState = {
  currentCurrency: "USD",
  exchangeRates: {
    USD: 1,
    BDT: 122.5,
    GBP: 0.79,
    CAD: 1.39,
    EUR: 0.94,
  },
  currencySymbols: {
    USD: "$",
    BDT: "৳",
    GBP: "£",
    CAD: "CA$",
    EUR: "€",
  },
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<SupportedCurrency>) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
