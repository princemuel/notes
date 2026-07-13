import { clsx } from "clsx";
import { Tabs } from "expo-router";
import type React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { SvgProps } from "react-native-svg";

import { tabs } from "@/constants/data";

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { position: "fixed", bottom: insets.bottom, width: "100%", paddingBlock: 16 },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => <tab.icon className="text-sm" />,
          }}
        />
      ))}
    </Tabs>
  );
}

interface Props {
  focused: boolean;
  icon: React.FC<SvgProps>;
}

const TabIcon = ({ focused, icon }: Props) => {
  return (
    <View className="">
      <View className={clsx("", focused && "")}></View>
    </View>
  );
};
