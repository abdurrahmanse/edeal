"use client";

import * as React from "react";
import { Provider } from "react-redux";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { store } from "./store";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster position="top-right" richColors closeButton />
      </NextThemesProvider>
    </Provider>
  );
}
