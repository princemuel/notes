import { Article, Header } from "@expo/html-elements";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { FlatList, Pressable, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { LogoSVG, PlusSVG } from "@/assets/icons";
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
      <Header className="flex-row items-center justify-between bg-slate-100 px-4 py-4">
        <LogoSVG />
      </Header>

      <FlatList
        data={db.notes}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-4 pb-24"
        ListHeaderComponent={
          <Text weight="bold" className="mb-2 text-2xl text-slate-950">
            All Notes
          </Text>
        }
        ItemSeparatorComponent={() => <View className="h-px bg-slate-200" />}
        renderItem={({ item }) => (
          <Article className="flex flex-col gap-2 rounded-sm py-4">
            <Link href={`/(tabs)/notes/${item.id}`} asChild>
              <Pressable>
                <Text weight="semibold" className="text-lg text-slate-950">
                  {item.title}
                </Text>
              </Pressable>
            </Link>

            <View className="flex flex-row gap-1">
              {item.tags.map((tag) => {
                const t = tag.toLocaleLowerCase();
                return (
                  <Link key={tag} href={`/(tabs)/tags/${t}`} asChild>
                    <Pressable className="rounded bg-slate-200 px-1 py-0.5">
                      <Text weight="regular" className="text-xs text-slate-950">
                        {tag}
                      </Text>
                    </Pressable>
                  </Link>
                );
              })}
            </View>

            <Text className="text-sm text-slate-700">{intld.format(Temporal.Instant.from(item.updated_at))}</Text>
          </Article>
        )}
      />

      <Link href={"/"} asChild>
        <Pressable
          className="absolute right-6 bottom-6 size-14 items-center justify-center rounded-full bg-blue-600 shadow-lg"
          style={{ elevation: 5 }}
        >
          <PlusSVG color="white" />
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
