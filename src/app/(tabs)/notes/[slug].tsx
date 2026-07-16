import { Header } from "@expo/html-elements";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { styled } from "nativewind";
import { Pressable, View, TextInput, ScrollView } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

import { ArchiveSVG, ChevronLeftSVG, ClockSVG, DeleteSVG, LogoSVG, TagSVG } from "@/assets/icons";
import { Text } from "@/components/text";
import db from "@/lib/db.json";

const SafeAreaView = styled(RNSafeAreaView);

export default function Screen() {
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const item = db.notes.find((note) => note.id === slug);
  if (!item) return null;

  const intld = new Intl.DateTimeFormat("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <Header className="bg-slate-100 px-4 py-4">
        <LogoSVG />
      </Header>

      <ScrollView className="flex-1 px-4">
        <View className="flex-row items-center justify-between border-b border-slate-200 py-4">
          <Pressable onPress={router.back} className="flex-row items-center gap-1">
            <ChevronLeftSVG width={16} height={16} color="#45556c" />
            <Text className="text-base text-slate-600">Go Back</Text>
          </Pressable>

          <View className="flex-row items-center gap-4">
            <Pressable>
              <DeleteSVG />
            </Pressable>

            <Pressable>
              <ArchiveSVG />
            </Pressable>

            <Pressable>
              <Text className="text-base text-slate-600">Cancel</Text>
            </Pressable>

            <Pressable>
              <Text weight="regular" className="text-base text-blue-600">
                Save Note
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="border-b border-slate-200 py-3">
          <Text weight="bold" className="text-2xl text-slate-950">
            {item.title}
          </Text>

          <View className="flex w-full flex-row py-3">
            <View className="flex flex-1 flex-col gap-4">
              <View className="flex flex-row items-center gap-1">
                <TagSVG width={12} height={12} />
                <Text className="text-sm text-slate-700">Tags</Text>
              </View>

              <View className="flex flex-row items-center gap-1">
                <ClockSVG width={12} height={12} />
                <Text className="text-sm text-slate-700">Last edited</Text>
              </View>
            </View>

            <View className="flex flex-2 flex-col gap-4">
              <Text className="text-sm text-slate-700">{item.tags.join(", ")}</Text>
              <Text className="text-sm text-slate-700">{intld.format(Temporal.Instant.from(item.updated_at))}</Text>
            </View>
          </View>
        </View>

        <TextInput inputMode="text" editable autoFocus multiline autoComplete="off" />
      </ScrollView>
    </SafeAreaView>
  );
}
