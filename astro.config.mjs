import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'

const base = '/porfolio-dev'
export default defineConfig({
	site: 'https://devxoje.github.io/',
	base: base,
	integrations: [tailwind(), astroI18next()]
})
