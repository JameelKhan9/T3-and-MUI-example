import { type Config } from "tailwindcss"

export default {
  important: "#__next",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config
