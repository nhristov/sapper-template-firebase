const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		require("postcss-import")(),
		require("postcss-url")(),
		require("tailwindcss")("./tailwind.config.js"),
		require("autoprefixer")(),
		!dev &&
			require("@fullhuman/postcss-purgecss")({
				content: ["./src/**/*.svelte", "./src/**/*.html"],
				defaultExtractor: (content) =>
					[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
						([_match, group, ..._rest]) => group
					),
			}),
		!dev && require("cssnano")({ preset: "default" }),
	],
};
