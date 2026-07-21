import { styled } from "nativewind";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/text";
import db from "@/lib/db.json";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  );
}
