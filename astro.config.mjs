import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

const base = "/porfolio-dev";
const site = "https://devxoje.github.io/";
const integrations = [tailwind(), astroI18next()];
export default defineConfig({
  site,
  base,
  integrations,
});
