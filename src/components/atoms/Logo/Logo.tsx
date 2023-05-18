import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import LogoLight from "public/logo-primary-gradient.svg"
import Grayscale from "public/logo-primary-grayscale.svg"
import LogoDark from "public/logo-primary-light-gradient.svg"
import ReversedOut from "public/logo-primary-reversed-out.svg"
import Solid from "public/logo-primary-solid.svg"
import Logomark from "public/logomark.svg"
import { twClassNames } from "utils/classNames"

type variant =
	| "light"
	| "dark"
	| "logomark"
	| "grayscale"
	| "reversedOut"
	| "solid"

interface LogoProps {
	className?: string
	variant: variant
	height: number
	alt?: string
	onClick?: () => void
}

const LogoVariantSources: Record<variant, StaticImageData> = {
	light: LogoLight,
	dark: LogoDark,
	logomark: Logomark,
	grayscale: Grayscale,
	reversedOut: ReversedOut,
	solid: Solid,
}

const Logo = ({
	className,
	variant = "light",
	height,
	alt,
	...props
}: LogoProps) => {
	return (
		<Link
			href="/"
			className={twClassNames(
				"focus-brand flex items-center no-underline",
				className
			)}
			{...props}
		>
			<Image
				src={LogoVariantSources[variant]}
				alt={alt ?? "Logo"}
				height={height}
				priority
			/>
		</Link>
	)
}

export default Logo
