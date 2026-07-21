import { styled } from "nativewind";
import { FlatList, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/text";
import db from "@/lib/db.json";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  const intld = new Intl.DateTimeFormat("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return (
    <SafeAreaView className="flex-1 gap-6 bg-white px-4">
      <View className="flex flex-col gap-4 px-4">
        <Text weight="bold" className="text-2xl text-slate-950">
          Archived Notes
        </Text>
        <Text>All your archived notes are stored here. You can restore or delete them anytime</Text>
      </View>

      <FlatList
        className="px-4"
        data={db.notes.filter((note) => note.archived)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-col gap-2 rounded-sm border-b border-slate-200 py-4">
            <Text weight="semibold" className="text-lg text-slate-950">
              {item.title}
            </Text>

            <View className="flex flex-row gap-1">
              {item.tags.map((tag) => (
                <Text key={tag} weight="regular" className="rounded bg-slate-200 px-1 py-0.5 text-xs text-slate-950">
                  {tag}
                </Text>
              ))}
            </View>

            <Text weight="regular" className="text-sm text-slate-700">
              {intld.format(Temporal.Instant.from(item.updated_at))}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
