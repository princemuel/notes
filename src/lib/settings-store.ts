import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type ColorPreference = "light" | "dark" | "system";
export type FontPreference = "sans" | "serif" | "mono";

function toNativeScheme(pref: ColorPreference): "light" | "dark" | "unspecified" {
  return pref === "system" ? "unspecified" : pref;
}

type SettingsState = {
  colorTheme: ColorPreference;
  activeColorTheme: ColorPreference;
  setColorThemePreview: (value: ColorPreference) => void;
  commitColorTheme: () => void;
  revertColorTheme: () => void;

  fontTheme: FontPreference;
  activeFontTheme: FontPreference;
  setFontThemePreview: (value: FontPreference) => void;
  commitFontTheme: () => void;
  revertFontTheme: () => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      colorTheme: "system",
      activeColorTheme: "system",
      setColorThemePreview: (payload) => {
        set({ activeColorTheme: payload });
        Appearance.setColorScheme(toNativeScheme(payload));
      },
      commitColorTheme: () => set({ colorTheme: get().activeColorTheme }),
      revertColorTheme: () => {
        const payload = get().colorTheme;
        set({ activeColorTheme: payload });
        Appearance.setColorScheme(toNativeScheme(payload));
      },

      fontTheme: "sans",
      activeFontTheme: "sans",
      setFontThemePreview: (payload) => set({ activeFontTheme: payload }),
      commitFontTheme: () => set({ fontTheme: get().activeFontTheme }),
      revertFontTheme: () => set({ activeFontTheme: get().fontTheme }),
    }),
    {
      name: "settings-store",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ colorTheme: state.colorTheme, fontTheme: state.fontTheme }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.activeColorTheme = state.colorTheme;
        state.activeFontTheme = state.fontTheme;
      },
    },
  ),
);

export const useColorTheme = () => useSettingsStore((s) => s.colorTheme);
export const useActiveColorTheme = () => useSettingsStore((s) => s.activeColorTheme);

export const useFontTheme = () => useSettingsStore((s) => s.fontTheme);
export const useActiveFontTheme = () => useSettingsStore((s) => s.activeFontTheme);
