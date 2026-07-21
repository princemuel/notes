import { Article, Header, BR } from "@expo/html-elements";
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
    <SafeAreaView className="flex-1 gap-6 bg-white px-4 dark:bg-grey-950">
      <Header className="bg-grey-100 px-4 py-4 dark:bg-grey-800">
        <LogoSVG color={"white"} />
      </Header>

      <FlatList
        data={db.notes}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-4 pb-24"
        ListHeaderComponent={
          <Text weight="bold" className="mb-3 text-3xl text-grey-950 dark:text-white">
            All Notes
          </Text>
        }
        ItemSeparatorComponent={() => <View className="h-px bg-grey-200 dark:bg-transparent" />}
        ListEmptyComponent={
          <View className="rounded-lg border border-grey-200 bg-grey-100 p-2">
            <Text className="text-base text-grey-950 dark:text-white">You don’t have any notes yet.</Text>
            <Text className="text-base text-grey-950 dark:text-grey-200">
              Start a new note to capture your thoughts and ideas.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <Article className="flex flex-col gap-2 rounded-sm py-4">
            <Link href={`/notes/${item.id}`} asChild>
              <Pressable>
                <Text weight="semibold" className="text-lg text-grey-950 dark:text-white">
                  {item.title}
                </Text>
              </Pressable>
            </Link>

            <View className="flex flex-row gap-1">
              {item.tags.map((tag) => {
                const t = tag.toLocaleLowerCase();
                return (
                  <Link key={tag} href={`/tags/${t}`} asChild>
                    <Pressable className="rounded bg-grey-200 px-2 py-0.5 dark:bg-grey-700">
                      <Text weight="regular" className="text-sm text-grey-950 dark:text-white">
                        {tag}
                      </Text>
                    </Pressable>
                  </Link>
                );
              })}
            </View>

            <Text className="text-sm text-grey-700 dark:text-grey-200">
              {intld.format(Temporal.Instant.from(item.updated_at))}
            </Text>
          </Article>
        )}
      />

      <Link href={"/"} asChild>
        <Pressable
          className="absolute right-6 bottom-6 size-14 items-center justify-center rounded-full bg-cobalt-500 shadow-lg dark:bg-cobalt-500"
          style={{ elevation: 5 }}
        >
          <PlusSVG color="white" />
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
