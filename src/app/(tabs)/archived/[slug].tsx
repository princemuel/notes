import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Screen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <View>
      <Text>Signup</Text>
      <Link href="/">Go back</Link>
    </View>
  );
}
