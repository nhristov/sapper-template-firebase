const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		require("postcss-import")(),
		require("postcss-url")(),
		require("tailwindcss")("./tailwind.config.js"),
		require("autoprefixer")(),
		!dev && require("cssnano")({ preset: "default" }),
	],
};
