"use client";
import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./config/theme";
import { makeStore, AppStore, faveLocalStorageKey } from "../lib/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  storeRef.current?.subscribe(() =>
    localStorage.setItem(
      faveLocalStorageKey,
      JSON.stringify(storeRef.current!.getState().favorites)
    )
  );

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={themeOptions}>
        <StoreProvider store={storeRef.current}>{children}</StoreProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
