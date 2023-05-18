import { pink } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"
import { Roboto } from "next/font/google"
import { deepBlue, pineGreen } from "./colors"

export const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	fallback: ["Helvetica", "Arial", "sans-serif"],
})

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			light: pineGreen[700],
			main: pineGreen[800],
			dark: pineGreen[900],
		},
		secondary: {
			light: deepBlue[200],
			main: deepBlue[300],
			dark: deepBlue[400],
		},
		error: {
			light: pink[500],
			main: pink[600],
			dark: pink[700],
		},
		contrastThreshold: 4.5,
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
})

export default theme
