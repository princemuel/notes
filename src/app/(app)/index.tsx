import { ScrollView } from "@expo/ui";
import { Fragment, useMemo } from "react";
import { FlatList, Text, View } from "react-native";

import db from "@/lib/db.json";

export default function Screen() {
  const intld_fmt = useMemo(
    () =>
      new Intl.DateTimeFormat("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: Temporal.Now.timeZoneId(),
      }),
    [],
  );

  return (
    <ScrollView>
      <View className="">
        <FlatList
          data={db.notes}
          renderItem={({ item }) => {
            return (
              <Fragment key={item.id}>
                <Text>{item.title}</Text>

                {item.tags.map((tag) => (
                  <Text key={tag}>{tag}</Text>
                ))}

                <Text>{intld_fmt.format(new Date(item.created_at))}</Text>
              </Fragment>
            );
          }}
        />

        <Text className="text-xl text-blue-500"></Text>
      </View>
    </ScrollView>
  );
}
