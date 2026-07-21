import { Header } from "@expo/html-elements";
import { Link, useRouter } from "expo-router";
import { styled } from "nativewind";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { Pressable } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { FontSVG, LockSVG, LogoSVG, LogoutSVG, SunSVG } from "@/assets/icons";
import { Text } from "@/components/text";
import db from "@/lib/db.json";
import { tw } from "@/lib/utils";

const ROWS = [
  { icon: SunSVG, label: "Color Theme", href: "/settings/change-theme" as const },
  { icon: FontSVG, label: "Font Theme", href: "/settings/change-font" as const },
  { icon: LockSVG, label: "Change Password", href: "/settings/change-password" as const },
  { icon: LogoutSVG, label: "Logout", href: "/" as const },
];

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  return (
    <SafeAreaView className="flex-1 gap-6 bg-white px-4 dark:bg-slate-950">
      <Header className="flex-row items-center justify-between bg-slate-100 px-4 py-4">
        <LogoSVG />
      </Header>

      <FlatList
        data={ROWS}
        keyExtractor={(item) => item.label}
        contentContainerClassName="px-4 pb-24"
        ListHeaderComponent={
          <Text weight="bold" className="mb-3 text-2xl text-slate-950">
            Settings
          </Text>
        }
        renderItem={({ item, index }) => (
          <Link href={item.href} asChild>
            <Pressable
              className={tw([
                "flex-row items-center gap-2 py-3",
                {
                  "border-t border-slate-200 dark:border-slate-800": index === ROWS.length - 1,
                },
              ])}
            >
              <item.icon height={20} width={20} color="#334155" />
              <Text weight="medium" className="text-base text-slate-800">
                {item.label}
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}
