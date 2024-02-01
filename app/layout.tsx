import "./globals.css";
import React from "react";
import Providers from "./providers";
import { Container } from "@mui/material";
import { COLORS } from "./config/colors";

export const metadata = {
  title: "Doge",
  description: "know your doges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <Container
          component="body"
          sx={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            background: COLORS.bg,
          }}
        >
          {children}
        </Container>
      </Providers>
    </html>
  );
}
