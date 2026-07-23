import { Header } from "@expo/html-elements";
import { Link, useFocusEffect } from "expo-router";
import { styled } from "nativewind";
import { useCallback, useRef } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { ChevronLeftSVG, LogoSVG, MoonSVG, SunSVG, SystemThemeSVG } from "@/assets/icons";
import { RadioOption } from "@/components/radio-option";
import { Text } from "@/components/text";
import { useActiveColorTheme, useSettingsStore } from "@/lib/settings-store";

const SafeAreaView = styled(RNSafeAreaView);
const OPTIONS = [
  { value: "light", icon: SunSVG, title: "Light Mode", description: "Pick a clean and classic light theme" },
  { value: "dark", icon: MoonSVG, title: "Dark Mode", description: "Select a sleek and modern dark theme" },
  { value: "system", icon: SystemThemeSVG, title: "System", description: "Adapts to your device's theme" },
] as const;

export default function Screen() {
  const activeColorTheme = useActiveColorTheme();
  const { setColorThemePreview, commitColorTheme, revertColorTheme } = useSettingsStore();

  const applied = useRef(false);

  useFocusEffect(
    useCallback(() => {
      applied.current = false;
      return () => {
        if (!applied.current) revertColorTheme();
      };
    }, []),
  );

  function applyChanges() {
    applied.current = true;
    commitColorTheme();
  }

  return (
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
          Color Theme
        </Text>

        <Text>Choose your color theme</Text>
      </View>

      <View className="gap-4 px-4">
        {OPTIONS.map((opt) => (
          <RadioOption
            key={opt.value}
            icon={opt.icon}
            title={opt.title}
            description={opt.description}
            selected={activeColorTheme === opt.value}
            onPress={() => setColorThemePreview(opt.value)}
          />
        ))}
      </View>

      <View className="px-4">
        <Pressable onPress={applyChanges} className="ml-auto rounded-lg bg-cobalt-500 px-4 py-3">
          <Text weight="medium" className="text-base text-white">
            Apply Changes
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
