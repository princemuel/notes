import { createContext, useContext } from "react";

import type { FontPreference } from "@/lib/settings-store";

export const FontFamilyContext = createContext<FontPreference | null>(null);
export const useFontFamilyContext = () => useContext(FontFamilyContext);
