import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { FontThemeProvider } from "@/lib/font-theme";
import "@/polyfills/temporal";

import "../global.css";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <FontThemeProvider>
        <StatusBar style="dark" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="notes/[slug]"
            options={{
              presentation: "card",
              animation: "slide_from_right",
            }}
          />
        </Stack>
      </FontThemeProvider>
    </SafeAreaProvider>
  );
}
