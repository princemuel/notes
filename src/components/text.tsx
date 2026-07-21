import { Text as RNText, type TextProps } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { useFontFamilyContext } from "@/lib/font-family-context";
import { useFontTheme } from "@/lib/settings-store";

type TextVariants = VariantProps<typeof text>;

type Props = Prettify<TextProps & TextVariants>;

export function Text({ className, weight = "regular", italic = false, ...props }: Props) {
  const committed = useFontTheme();
  const preview = useFontFamilyContext();
  const family = preview ?? committed;

  return <RNText className={text({ family, weight, italic, className })} {...props} />;
}

export const text = tv({
  base: "",
  variants: {
    family: { sans: "", serif: "", mono: "" },
    weight: { regular: "", medium: "", semibold: "", bold: "" },
    italic: { true: "", false: "" },
  },
  compoundVariants: [
    { family: "sans", weight: "regular", italic: false, class: "font-sans-regular" },
    { family: "sans", weight: "regular", italic: true, class: "font-sans-regular-italic" },
    { family: "sans", weight: "medium", italic: false, class: "font-sans-medium" },
    { family: "sans", weight: "medium", italic: true, class: "font-sans-medium-italic" },
    { family: "sans", weight: "semibold", italic: false, class: "font-sans-semibold" },
    { family: "sans", weight: "semibold", italic: true, class: "font-sans-semibold-italic" },
    { family: "sans", weight: "bold", italic: false, class: "font-sans-bold" },
    { family: "sans", weight: "bold", italic: true, class: "font-sans-bold-italic" },

    { family: "serif", weight: "regular", italic: false, class: "font-serif-regular" },
    { family: "serif", weight: "regular", italic: true, class: "font-serif-regular-italic" },
    { family: "serif", weight: "medium", italic: false, class: "font-serif-medium" },
    { family: "serif", weight: "medium", italic: true, class: "font-serif-medium-italic" },
    { family: "serif", weight: "semibold", italic: false, class: "font-serif-semibold" },
    { family: "serif", weight: "semibold", italic: true, class: "font-serif-semibold-italic" },
    { family: "serif", weight: "bold", italic: false, class: "font-serif-bold" },
    { family: "serif", weight: "bold", italic: true, class: "font-serif-bold-italic" },

    { family: "mono", weight: "regular", italic: false, class: "font-mono-regular" },
    { family: "mono", weight: "regular", italic: true, class: "font-mono-regular-italic" },
    { family: "mono", weight: "medium", italic: false, class: "font-mono-medium" },
    { family: "mono", weight: "medium", italic: true, class: "font-mono-medium-italic" },
    { family: "mono", weight: "semibold", italic: false, class: "font-mono-semibold" },
    { family: "mono", weight: "semibold", italic: true, class: "font-mono-semibold-italic" },
    { family: "mono", weight: "bold", italic: false, class: "font-mono-bold" },
    { family: "mono", weight: "bold", italic: true, class: "font-mono-bold-italic" },
  ],
});
