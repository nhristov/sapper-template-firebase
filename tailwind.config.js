module.exports = {
	mode: "jit",
	purge: {
		content: ["./src/**/*.svelte", "./src/**/*.html"],
		defaultExtractor: (content) =>
			[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
				([_match, group, ..._rest]) => group
			),
	},
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
