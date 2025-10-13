import type { ComponentProps, PropsWithChildren } from "react";

export default function Card({
	children,
	className,
	...rest
}: PropsWithChildren & ComponentProps<"div">) {
	return (
		<div
			className={`p-6   dark:border dark:border-gray-800/30 rounded-2xl dark:bg-gray-800/50 bg-white shadow-2xl shadow-neutral-100 dark:shadow-none ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}
