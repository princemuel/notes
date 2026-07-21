import { Tabs } from "expo-router";

import { tabs } from "@/constants/data";
import { useThemeColors } from "@/lib/use-theme-colors";

export default function Layout() {
  const colors = useThemeColors();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tabActive,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: { backgroundColor: colors.tabBarBg, borderTopColor: colors.tabBarBorder },
        tabBarLabelStyle: { fontFamily: "font-sans" },
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
