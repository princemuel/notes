import { createContext, useContext, useState, type ReactNode } from "react";

type FontRole = "sans" | "serif" | "mono";

const FontRoleContext = createContext<FontRole>("sans");
const FontRoleSetterContext = createContext<(r: FontRole) => void>(() => {});

export function FontThemeProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<FontRole>("sans");

  return (
    <FontRoleContext.Provider value={role}>
      <FontRoleSetterContext.Provider value={setRole}>{children}</FontRoleSetterContext.Provider>
    </FontRoleContext.Provider>
  );
}

export const useFontRole = () => useContext(FontRoleContext);
export const useSetFontRole = () => useContext(FontRoleSetterContext);
