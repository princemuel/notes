import { Link } from "expo-router";
import { styled } from "nativewind";
import { useMemo } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { TagSVG } from "@/assets/icons";
import { Text } from "@/components/text";
import db from "@/lib/db.json";
import { capitalize } from "@/lib/utils";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  const tags = [...new Set(db.notes.flatMap((note) => note.tags.map((tag) => tag.toLocaleLowerCase())))];
  return (
    <SafeAreaView className="flex-1 gap-6 bg-white px-4">
      <View className="flex flex-col gap-4 px-4">
        <Text weight="bold" className="text-2xl text-slate-950">
          Tags
        </Text>
      </View>

      <View className="">
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} className="flex flex-row  py-2 gap-10 border-b border-slate-200">
            <View>
              <TagSVG className="" />
            </View>
            <Text className="">{capitalize(tag)}</Text>
          </Link>
        ))}
      </View>
    </SafeAreaView>
  );
}
