import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https//xojedev.github.io",
  base: "/porfolio-dev",
  integrations: [tailwind()],
});
