import { Link } from "expo-router";
import { styled } from "nativewind";
import { useMemo } from "react";
import { FlatList, Pressable, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { LogoSVG, PlusSVG, TagSVG } from "@/assets/icons";
import { Text } from "@/components/text";
import db from "@/lib/db.json";
import { capitalize } from "@/lib/utils";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  const tags = [
    ...new Set(db.notes.flatMap((note) => note.tags.map((t) => t.toLocaleLowerCase()))),
  ].sort();

  return (
    <SafeAreaView className="relative flex-1 gap-6 bg-white px-4">
      <View className="flex-row items-center justify-between bg-slate-100 px-4 py-4">
        <LogoSVG />
      </View>

      <FlatList
        data={tags}
        keyExtractor={(item) => item}
        contentContainerClassName="px-4 pb-24"
        ListHeaderComponent={
          <Text weight="bold" className="mb-3 text-2xl text-slate-950">
            Tags
          </Text>
        }
        ItemSeparatorComponent={() => <View className="h-px bg-slate-200" />}
        renderItem={({ item }) => (
          <Link href={`/tags/${item}`} asChild>
            <Pressable className="flex-row items-center gap-2 py-3">
              <TagSVG />
              <Text weight="medium" className="text- text-slate-800">
                {capitalize(item)}
              </Text>
            </Pressable>
          </Link>
        )}
      />

      <Link href={"/"} asChild>
        <Pressable
          className="absolute right-5 bottom-6 size-14 items-center justify-center rounded-full bg-blue-600 shadow-lg"
          style={{ elevation: 5 }}
        >
          <PlusSVG color="white" />
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
