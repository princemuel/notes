import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import * as cp from "node:child_process";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({ script: true }),
  kit: {
    adapter: adapter(),
    version: { name: cp.execSync("git rev-parse HEAD").toString("utf8").trim() },
    alias: { "@/*": "./src/*" },
  },
};

export default config;
