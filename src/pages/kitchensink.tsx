import { type NextPage } from "next"
import Head from "next/head"

import { Icon } from "@iconify-icon/react"
import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	FormGroup,
} from "@mui/material"

import React from "react"

const KitchenSink: NextPage = () => {
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
		checkedF: true,
		checkedG: true,
	})

	const handleChange =
		(name: string) => (event: { target: { checked: unknown } }) => {
			setState({ ...state, [name]: event.target.checked })
		}

	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box
				component="main"
				sx={{
					p: 2,
					border: "1px dashed grey",
					my: 4,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Container maxWidth="sm">
					<Box component="section" sx={{ display: "flex", gap: "10px" }}>
						<Button variant="contained">Default</Button>
						<Button variant="contained" color="primary">
							Primary
						</Button>
						<Button variant="contained" color="secondary">
							Secondary
						</Button>
						<Button variant="contained" disabled>
							Disabled
						</Button>
						<Button
							variant="contained"
							color="primary"
							href="#contained-buttons"
						>
							Link
						</Button>
					</Box>
					<section>
						<FormGroup row>
							<FormControlLabel
								control={
									<Checkbox
										checked={state.checkedA}
										onChange={handleChange("checkedA")}
										value="checkedA"
										color="secondary"
									/>
								}
								label="Secondary"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={state.checkedB}
										onChange={handleChange("checkedB")}
										value="checkedB"
										color="primary"
									/>
								}
								label="Primary"
							/>
							<FormControlLabel
								control={<Checkbox value="checkedC" />}
								label="Uncontrolled"
							/>
							<FormControlLabel
								disabled
								control={<Checkbox value="checkedD" />}
								label="Disabled"
							/>
							<FormControlLabel
								disabled
								control={<Checkbox checked value="checkedE" />}
								label="Disabled"
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={state.checkedF}
										onChange={handleChange("checkedF")}
										value="checkedF"
										indeterminate={!state.checkedF}
									/>
								}
								label="Indeterminate"
							/>
							<FormControlLabel
								control={
									<Checkbox
										icon={<Icon icon="material-symbols:favorite-outline" />}
										checkedIcon={<Icon icon="material-symbols:favorite" />}
										value="checkedH"
										color="secondary"
									/>
								}
								label="Custom icon"
							/>
							<FormControlLabel
								control={
									<Checkbox
										icon={
											<Icon icon="material-symbols:check-box-outline-blank" />
										}
										checkedIcon={<Icon icon="material-symbols:check-box" />}
										value="checkedI"
									/>
								}
								label="Custom size"
							/>
						</FormGroup>
					</section>
				</Container>
			</Box>
		</>
	)
}

export default KitchenSink
