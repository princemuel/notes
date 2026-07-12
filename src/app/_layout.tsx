import { Stack } from "expo-router";

import { FontThemeProvider } from "@/lib/font-theme";
import "@/polyfills/temporal";

import "../global.css";

export default function Layout() {
  return (
    <FontThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FontThemeProvider>
  );
}
