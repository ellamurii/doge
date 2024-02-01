"use client";
import { Theme, createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import { COLORS } from "./colors";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const themeOptions: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    background: {
      default: COLORS.bg,
      paper: "#FFFFFF",
    },
    text: {
      primary: "#121518",
    },
    divider: "#D7DCE1",
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  shape: {
    borderRadius: 4,
  },
});
