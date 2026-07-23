import { Header } from "@expo/html-elements";
import { Link, useFocusEffect } from "expo-router";
import { styled } from "nativewind";
import { useCallback, useRef } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { ChevronLeftSVG, FontMonospaceSVG, FontSansSerifSVG, FontSerifSVG, LogoSVG } from "@/assets/icons";
import { RadioOption } from "@/components/radio-option";
import { Text } from "@/components/text";
import { FontFamilyContext } from "@/lib/font-family-context";
import { useActiveFontTheme, useSettingsStore } from "@/lib/settings-store";

const SafeAreaView = styled(RNSafeAreaView);

const OPTIONS = [
  { value: "sans", icon: FontSansSerifSVG, title: "Sans-serif", description: "Clean and modern, easy to read" },
  { value: "serif", icon: FontSerifSVG, title: "Serif", description: "Classic and elegant for a timeless feel." },
  { value: "mono", icon: FontMonospaceSVG, title: "Monospace", description: "Code-like, great for a technical vibe." },
] as const;

export default function Screen() {
  const activeFontTheme = useActiveFontTheme();
  const { setFontThemePreview, commitFontTheme, revertFontTheme } = useSettingsStore();

  const applied = useRef(false);

  useFocusEffect(
    useCallback(() => {
      applied.current = false;
      return () => {
        if (!applied.current) revertFontTheme();
      };
    }, []),
  );

  function applyChanges() {
    applied.current = true;
    commitFontTheme();
  }

  return (
    <FontFamilyContext.Provider value={activeFontTheme}>
      <SafeAreaView className="flex-1 gap-6 bg-white px-4 dark:bg-grey-950">
        <Header className="flex-row items-center justify-between bg-grey-100 px-4 py-4">
          <LogoSVG />
        </Header>

        <View className="gap-4 px-4">
          <Link href="/settings" asChild>
            <Pressable className="flex-row items-center gap-1">
              <ChevronLeftSVG width={16} height={16} color="#45556c" />
              <Text className="text-base text-grey-600">Settings</Text>
            </Pressable>
          </Link>

          <Text weight="bold" className="text-3xl text-grey-950">
            Font Theme
          </Text>

          <Text>Choose your font theme</Text>
        </View>

        <View className="gap-4 px-4">
          {OPTIONS.map((opt) => (
            <RadioOption
              key={opt.value}
              icon={opt.icon}
              title={opt.title}
              description={opt.description}
              selected={activeFontTheme === opt.value}
              onPress={() => setFontThemePreview(opt.value)}
            />
          ))}
        </View>

        <View className="px-4">
          <Pressable onPress={applyChanges} className="bg-cobalt-600 ml-auto rounded-lg px-4 py-3 dark:bg-cobalt-500">
            <Text weight="medium" className="text-base text-white">
              Apply Changes
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </FontFamilyContext.Provider>
  );
}
