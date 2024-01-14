/* export const plugins = [
	require('autoprefixer'),
	postcssNesting(/* pluginOptions *),
] */
const postcssImport = require("postcss-import");
const postcssNesting = require("postcss-nesting");
const tailwindcss = require("tailwindcss");
const tailwindNesting = require("tailwindcss/nesting");

module.exports = {
  plugins: [
    postcssImport(),
    postcssNesting(),
    tailwindcss(),
    tailwindNesting(),
  ],
};
