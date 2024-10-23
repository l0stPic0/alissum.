import clsx from "clsx";
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "primary" | "secondary" | "filled";
}

const Button: FC<PropsWithChildren<Props>> = ({
	children,
	variant,
	className,
	...props
}) => {
	return (
		<button
			type="button"
			className={clsx(
				"transition-colors text-nowrap disabled:pointer-events-none",
				{
					"text-primary bg-primary/10 font-semibold hover:bg-primary/15 flex items-center gap-1 px-8 py-3 rounded-full":
						variant === "primary",
					"bg-secondary/10 hover:bg-secondary/15 rounded-full text-secondary-dark p-3 disabled:text-secondary-dark/50":
						variant === "secondary",
					"bg-gradient-to-r from-primary/60 to-primary px-12 py-4 text-white font-semibold rounded-full text-lg mt-9":
						variant === "filled",
				},
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
