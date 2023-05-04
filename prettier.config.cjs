/** @type {import("prettier").Config} */
const config = {
	trailingComma: "es5",
	tabWidth: 2,
	useTabs: true,
	semi: false,
	bracketSpacing: true,
	overrides: [
		{
			files: ["*.yml", "*.yaml"],
			options: {
				useTabs: false,
				tabWidth: 4,
			},
		},
	],
	plugins: [require.resolve("prettier-plugin-tailwindcss")],
}

module.exports = config
