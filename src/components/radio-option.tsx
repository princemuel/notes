// components/RadioOption.tsx
import { Pressable, View } from "react-native";
import { SvgProps } from "react-native-svg";
import { tv } from "tailwind-variants";

import { Text } from "./text";

type Props = {
  icon: React.FC<SvgProps>;
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
};

export function RadioOption({ icon: Icon, title, description, selected, onPress }: Props) {
  const s = option({ selected });

  return (
    <Pressable onPress={onPress} className={s.row()}>
      <View className={s.iconTile()}>
        <Icon width={18} height={18} color={"#020618"} />
      </View>

      <View className="flex-1 gap-1">
        <Text weight="medium" className="text-base text-grey-950 dark:text-white">
          {title}
        </Text>
        <Text className="text-sm text-grey-800">{description}</Text>
      </View>
      <View className={s.check()} />
    </Pressable>
  );
}

const option = tv({
  slots: {
    row: "flex-row items-center gap-3 rounded-xl border p-4",
    iconTile: "h-10 w-10 items-center justify-center rounded-lg border border-grey-200 bg-white",
    check: "h-5 w-5 items-center justify-center rounded-full border-2",
  },
  variants: {
    selected: {
      true: { row: "border-grey-200 bg-grey-100", check: "border-cobalt-600 border-4" },
      false: { row: "border-grey-200 bg-white", check: "border-grey-300" },
    },
  },
});
