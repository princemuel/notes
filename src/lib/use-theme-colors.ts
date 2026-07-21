import { useColorScheme } from "react-native";

const palette = {
  light: {
    iconDefault: "#334155",
    iconStrong: "#020618",
    tabActive: "#4F5EF7",
    tabInactive: "#8E8E93",
    tabBarBg: "#FFFFFF",
    tabBarBorder: "#E5E5E5",
  },
  dark: {
    iconDefault: "#CAD5E2",
    iconStrong: "#F1F5F9",
    tabActive: "#7C86F9",
    tabInactive: "#7C8698",
    tabBarBg: "#020618",
    tabBarBorder: "#1D293D",
  },
} as const;

export function useThemeColors() {
  const scheme = useColorScheme();
  return palette[scheme === "dark" ? "dark" : "light"];
}
