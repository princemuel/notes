import { Text as RNText, type TextProps } from "react-native";
import { tv, VariantProps } from "tailwind-variants";

import { useFontRole } from "@/lib/font-theme";

type TextVariants = VariantProps<typeof text>;

type Props = Prettify<TextProps & TextVariants>;

export function Text({ className, weight = "regular", italic = false, ...props }: Props) {
  return <RNText className={text({ role: useFontRole(), weight, italic, className })} {...props} />;
}

export const text = tv({
  base: "",
  variants: {
    role: { sans: "", serif: "", mono: "" },
    weight: { regular: "", medium: "", semibold: "", bold: "" },
    italic: { true: "", false: "" },
  },
  compoundVariants: [
    { role: "sans", weight: "regular", italic: false, class: "font-sans" },
    { role: "sans", weight: "regular", italic: true, class: "font-sans-italic" },
    { role: "sans", weight: "medium", italic: false, class: "font-sans-medium" },
    { role: "sans", weight: "medium", italic: true, class: "font-sans-medium-italic" },
    { role: "sans", weight: "semibold", italic: false, class: "font-sans-semibold" },
    { role: "sans", weight: "semibold", italic: true, class: "font-sans-semibold-italic" },
    { role: "sans", weight: "bold", italic: false, class: "font-sans-bold" },
    { role: "sans", weight: "bold", italic: true, class: "font-sans-bold-italic" },

    { role: "serif", weight: "regular", italic: false, class: "font-serif" },
    { role: "serif", weight: "regular", italic: true, class: "font-serif-italic" },
    { role: "serif", weight: "medium", italic: false, class: "font-serif-medium" },
    { role: "serif", weight: "medium", italic: true, class: "font-serif-medium-italic" },
    { role: "serif", weight: "semibold", italic: false, class: "font-serif-semibold" },
    { role: "serif", weight: "semibold", italic: true, class: "font-serif-semibold-italic" },
    { role: "serif", weight: "bold", italic: false, class: "font-serif-bold" },
    { role: "serif", weight: "bold", italic: true, class: "font-serif-bold-italic" },

    { role: "mono", weight: "regular", italic: false, class: "font-mono" },
    { role: "mono", weight: "regular", italic: true, class: "font-mono-italic" },
    { role: "mono", weight: "medium", italic: false, class: "font-mono-medium" },
    { role: "mono", weight: "medium", italic: true, class: "font-mono-medium-italic" },
    { role: "mono", weight: "semibold", italic: false, class: "font-mono-semibold" },
    { role: "mono", weight: "semibold", italic: true, class: "font-mono-semibold-italic" },
    { role: "mono", weight: "bold", italic: false, class: "font-mono-bold" },
    { role: "mono", weight: "bold", italic: true, class: "font-mono-bold-italic" },
  ],
});
