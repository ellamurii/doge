"use client";
import React, { ReactNode, useEffect } from "react";
import { Provider as StoreProvider } from "react-redux";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./config/theme";
import { makeStore, AppStore, faveLocalStorageKey } from "../lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { hydrate } from "@/lib/slices/favorites";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  storeRef.current?.subscribe(
    () =>
      typeof window !== "undefined" &&
      localStorage.setItem(
        faveLocalStorageKey,
        JSON.stringify(storeRef.current!.getState().favorites)
      )
  );

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={themeOptions}>
        <StoreProvider store={storeRef.current}>
          <PersistedDataInitializer>{children}</PersistedDataInitializer>
        </StoreProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

const PersistedDataInitializer = (props: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const faveLocalStorage = localStorage.getItem(faveLocalStorageKey);
      const persistedFavorites = faveLocalStorage
        ? JSON.parse(faveLocalStorage)
        : {};

      if (persistedFavorites) {
        dispatch(hydrate(persistedFavorites));
      }
    }
  }, [dispatch]);

  return props.children;
};
