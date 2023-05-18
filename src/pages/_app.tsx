import { type AppType } from "next/app"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@mui/material/styles"

import { api } from "@utils/api"
import theme from "@utils/theme"

import "@styles/globals.css"
import { CssBaseline } from "@mui/material"
import Head from "next/head"

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps },
}) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<SessionProvider session={session}>
					<CssBaseline />
					<Component {...pageProps} />
				</SessionProvider>
			</ThemeProvider>
		</>
	)
}

export default api.withTRPC(MyApp)
