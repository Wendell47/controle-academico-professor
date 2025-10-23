import Link from "next/link";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import "@/app/styles/buttonsStyle.css";

type Props = ComponentProps<"button"> & {
	title?: string;
	icon?: ReactNode;
	styleType?:
		| "button_primary"
		| "button_secondary"
		| "button_simple"
		| "button_alert"
		| "button_transparent";
};
type linkProps = PropsWithChildren & {
	link: string;
	title?: string;
	icon?: ReactNode;
	styleType?: "button_primary" | "button_secondary" | "button_simple";
	className?: string;
};
const LinkButton = ({
	link,
	title,
	children,
	className,
	icon,
	styleType,
}: linkProps) => {
	return (
		<Link
			href={link}
			className={`base_button p-2 inline-flex w-full items-center  gap-4 rounded-xl ${!children ? "hover:bg-white hover:text-[#0d52b8] " : ""} hover:text-black transition-discrete ${styleType} ${className}`}
		>
			{icon}
			<span className="text-nowrap">{title}</span>
			{children}
		</Link>
	);
};

function Button({
	title,
	icon,
	styleType = "button_primary",
	className,
	...rest
}: Props) {
	return (
		<button
			className={`base_button ${styleType} ${className}`}
			type="button"
			{...rest}
		>
			{icon}
			{title}
		</button>
	);
}

export { LinkButton, Button };
