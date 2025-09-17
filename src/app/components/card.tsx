import type { ComponentProps, PropsWithChildren } from "react";

export default function Card({
	children,
	className,
	...rest
}: PropsWithChildren & ComponentProps<"div">) {
	return (
		<div
			className={`p-6   border-neutral-200 rounded-xl dark:bg-neutral-800 bg-white shadow-2xl shadow-neutral-100 ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}
