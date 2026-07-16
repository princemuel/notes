import { clsx } from "clsx";
import { Tabs } from "expo-router";
import type React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { SvgProps } from "react-native-svg";

import { tabs } from "@/constants/data";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4F5EF7", // matches the blue FAB/accent in your mockup
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: { backgroundColor: "#FFFFFF", borderTopColor: "#E5E5E5" },
        tabBarLabelStyle: { fontFamily: "font-sans" },
        tabBarShowLabel: false,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => <tab.icon width={24} height={24} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
}
