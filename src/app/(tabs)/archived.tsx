import { styled } from "nativewind";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { Text } from "@/components/text";
import db from "@/lib/db.json";

const SafeAreaView = styled(RNSafeAreaView);
export default function Screen() {
  const intld = useMemo(
    () =>
      new Intl.DateTimeFormat("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    [],
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        className=""
        data={db.notes.filter((note) => note.archived)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex flex-col gap-2 divide-x divide-slate-200 rounded-sm p-2">
            <Text weight="semibold" className="text-lg text-slate-950">
              {item.title}
            </Text>

            <View className="flex flex-row gap-1">
              {item.tags.map((tag) => (
                <Text
                  key={tag}
                  weight="regular"
                  className="rounded bg-slate-300 px-1 py-0.5 text-sm text-slate-950"
                >
                  {tag}
                </Text>
              ))}
            </View>

            <Text weight="regular" className="text-sm text-slate-700">
              {intld.format(new Date(item.created_at))}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
