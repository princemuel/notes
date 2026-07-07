import { ScrollView } from "@expo/ui";
import { Fragment } from "react";
import { FlatList, Text, View } from "react-native";

import db from "@/lib/db.json";

export default function Screen() {
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

                <Text>
                  {Temporal.Instant.from(item.created_at)
                    .toZonedDateTimeISO(Temporal.Now.timeZoneId())
                    .toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                </Text>
              </Fragment>
            );
          }}
        />

        <Text className="text-xl text-blue-500"></Text>
      </View>
    </ScrollView>
  );
}
