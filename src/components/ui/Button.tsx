import type React from "react";
import { cn } from "../../lib/util";

const Button: React.FC<
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		variant?: string;
		image?: string;
	}
> = ({
	children,
	className,
	type = "button",
	variant,
	image = "arrow_down.svg",
	...props
}) => {
	return (
		<button
			className={cn(
				className,
				"rounded-xl cursor-pointer transition-colors",
				variant === "select"
					? "text-black border p-2 text-xl flex justify-between items-center w-full"
					: "text-primary bg-accent hover:bg-amber-950 text-xl px-6 py-4 text-center",
			)}
			type={type}
			{...props}
		>
			{children}
			{variant === "select" && <img src={`/${image}`} alt="arrow" />}
		</button>
	);
};

export default Button;
