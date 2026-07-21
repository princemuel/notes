import { Header } from "@expo/html-elements";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { styled } from "nativewind";
import { useRef, useState } from "react";
import { Pressable, View, TextInput, ScrollView, Linking } from "react-native";
import { Button, StyleSheet } from "react-native";
import {
  EnrichedMarkdownText,
  EnrichedMarkdownTextInput,
  type EnrichedMarkdownTextInputInstance,
  type StyleState,
} from "react-native-enriched-markdown";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { ArchiveSVG, ChevronLeftSVG, ClockSVG, DeleteSVG, LogoSVG, TagSVG } from "@/assets/icons";
import { Text } from "@/components/text";
import db from "@/lib/db.json";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const ref = useRef<EnrichedMarkdownTextInputInstance>(null);
  const [state, setState] = useState<StyleState | null>(null);

  const item = db.notes.find((note) => note.id === slug);
  if (!item) return null;

  const intld = new Intl.DateTimeFormat("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return (
    <SafeAreaView className="flex-1 bg-white px-4 dark:bg-grey-950">
      <Header className="bg-grey-100 px-4 py-4 dark:bg-grey-800">
        <LogoSVG color={"white"} />
      </Header>

      <ScrollView className="flex-1 px-4">
        <View className="flex-row items-center justify-between border-b border-grey-200 py-4 dark:border-grey-800">
          <Link href="/notes" asChild>
            <Pressable className="flex-row items-center gap-1">
              <ChevronLeftSVG width={14} height={14} color="#525866" />
              <Text className="text-base text-grey-600 dark:text-grey-300">Go Back</Text>
            </Pressable>
          </Link>

          <View className="flex-row items-center gap-4">
            <Pressable>
              <DeleteSVG width={16} height={16} color="#525866" />
            </Pressable>

            <Pressable>
              <ArchiveSVG width={16} height={16} color="#525866" />
            </Pressable>

            <Pressable>
              <Text className="text-base text-grey-600 dark:text-grey-300">Cancel</Text>
            </Pressable>

            <Pressable>
              <Text weight="regular" className="text-base text-cobalt-500 dark:text-cobalt-500">
                Save Note
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="gap-4 border-b border-grey-200 py-3 dark:border-grey-800">
          <Text weight="bold" className="text-3xl text-grey-950 dark:text-white">
            {item.title}
          </Text>

          <View className="flex w-full flex-col gap-3 py-3">
            <View className="flex-row items-center">
              <View className="flex w-30 flex-none flex-row items-center gap-1.5">
                <TagSVG width={14} height={14} />
                <Text className="text-base text-grey-700 dark:text-grey-300">Tags</Text>
              </View>

              <View className="min-w-0 flex-1">
                <Text className="text-base text-grey-950 dark:text-white">{item.tags.join(", ")}</Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="flex w-30 flex-none flex-row items-center gap-1.5">
                <ClockSVG width={14} height={14} />
                <Text className="text-base text-grey-700 dark:text-grey-300">Last edited</Text>
              </View>

              <View className="min-w-0 flex-1">
                <Text className="text-base text-grey-950 dark:text-grey-300">
                  {intld.format(Temporal.Instant.from(item.updated_at))}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/*<EnrichedMarkdownTextInput ref={ref} placeholder="Type here..." onChangeState={setState} style={styles.input} />*/}

        <EnrichedMarkdownText flavor="github" markdown={item.content} onLinkPress={({ url }) => Linking.openURL(url)} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { width: "100%", fontSize: 20, padding: 10, maxHeight: 200, backgroundColor: "lightgray" },
  toolbar: { flexDirection: "row", gap: 8, marginTop: 8 },
});
