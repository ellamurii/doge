"use client";
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./config/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
