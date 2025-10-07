import type { ComponentProps, PropsWithChildren } from "react";

export default function Card({
	children,
	className,
	...rest
}: PropsWithChildren & ComponentProps<"div">) {
	return (
		<div
			className={`p-6   border-neutral-200 rounded-2xl dark:bg-[#222222] bg-white shadow-2xl shadow-neutral-100 dark:shadow-none ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}
