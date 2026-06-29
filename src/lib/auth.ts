import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";

const prod = process.env.NODE_ENV === "production";

export const auth = betterAuth({
  plugins: [expo()],
  trustedOrigins: [
    "notes://",
    "notes-prod://",
    "notes-staging://",
    "notes://*",
    ...(prod ? [] : ["exp://", "exp://**", "exp://192.168.*.*:*/**"]),
  ],
  emailAndPassword: { enabled: true },
  socialProviders: {
    github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
      google: {
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
  },
});
