import type { ComponentProps, PropsWithChildren } from "react";

export default function Card({
	children,
	className,
	...rest
}: PropsWithChildren & ComponentProps<"div">) {
	return (
		<div
			className={`p-6   dark:border dark:border-[#2b2d30] rounded-2xl dark:bg-[#36393d] bg-white  dark:shadow-none ${className}`}
			{...rest}
		>
			{children}
		</div>
	);
}
