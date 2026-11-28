import { configureStore } from "@reduxjs/toolkit";
import shippingReducer from "./slices/shippingSlice";
import currencyReducer from "./slices/currencySlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    shipping: shippingReducer,
    currency: currencyReducer,
    ui: uiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
