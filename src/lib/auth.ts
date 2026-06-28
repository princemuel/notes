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
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
