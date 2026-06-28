import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8081", // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      storagePrefix: "_notes_ba_",
      storage: SecureStore,
      cookiePrefix: "_notes_ba_",
    }),
  ],
});
