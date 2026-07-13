import { Link, useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/text";
import { LogoSVG } from "@/assets/icons";
import { View } from "react-native";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <SafeAreaView className="flex-1 gap-6 bg-white px-4">
      <View className="flex flex-row items-center w-full justify-between px-4">
        <LogoSVG />
        <Link href="/(tabs)/archived">Go back</Link>
      </View>

      <Text>Archived ${slug}</Text>
      <Link href="/">Go back</Link>
    </SafeAreaView>
  );
}
