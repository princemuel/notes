import { Text as RNText, type TextProps } from "react-native";

import { useFontRole } from "@/lib/font-theme";

type Weight = "regular" | "medium" | "semibold" | "bold";

type FontMap = Record<
  "sans" | "serif" | "mono",
  Record<Weight, { normal: string; italic: string }>
>;

const FONT_MAP: FontMap = {
  sans: {
    regular: { normal: "font-sans", italic: "font-sans-italic" },
    medium: { normal: "font-sans-medium", italic: "font-sans-medium-italic" },
    semibold: { normal: "font-sans-semibold", italic: "font-sans-semibold-italic" },
    bold: { normal: "font-sans-bold", italic: "font-sans-bold-italic" },
  },
  serif: {
    regular: { normal: "font-serif", italic: "font-serif-italic" },
    medium: { normal: "font-serif-medium", italic: "font-serif-medium-italic" },
    semibold: { normal: "font-serif-semibold", italic: "font-serif-semibold-italic" },
    bold: { normal: "font-serif-bold", italic: "font-serif-bold-italic" },
  },
  mono: {
    regular: { normal: "font-mono", italic: "font-mono-italic" },
    medium: { normal: "font-mono-medium", italic: "font-mono-medium-italic" },
    semibold: { normal: "font-mono-semibold", italic: "font-mono-semibold-italic" },
    bold: { normal: "font-mono-bold", italic: "font-mono-bold-italic" },
  },
};

type Props = TextProps & {
  weight?: Weight;
  italic?: boolean;
};

export function Text({ className, weight = "regular", italic = false, ...props }: Props) {
  const role = useFontRole();
  const fontClass = FONT_MAP[role][weight][italic ? "italic" : "normal"];

  return <RNText className={`${fontClass} ${className ?? ""}`} {...props} />;
}
