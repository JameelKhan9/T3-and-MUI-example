import Header from "@organisms/Header"

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<Header />
			<div>{children}</div>
		</div>
	)
}
