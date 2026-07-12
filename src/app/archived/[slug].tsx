import { Link, useLocalSearchParams } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/text";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <SafeAreaView>
      <Text>Archived ${slug}</Text>
      <Link href="/">Go back</Link>
    </SafeAreaView>
  );
}
