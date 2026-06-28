import { ScrollView } from "@expo/ui";
import { Text, View } from "react-native";

import db from "@/lib/db.json";

export default function Screen() {
  console.log(db.notes);
  return (
    <ScrollView>
      <View className="">
        <Text className="text-xl text-blue-500">React Native 🚀</Text>
      </View>
    </ScrollView>
  );
}
