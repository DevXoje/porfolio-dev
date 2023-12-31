import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'

// https://astro.build/config
export default defineConfig({
	site: 'https://devxoje.github.io/porfolio-dev/',
	base: '/porfolio-dev',
	integrations: [tailwind(), astroI18next()]
})
