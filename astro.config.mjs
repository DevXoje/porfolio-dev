import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://devxoje.github.io/porfolio-dev/",
  base: "/porfolio-dev",
  integrations: [tailwind()],
});
