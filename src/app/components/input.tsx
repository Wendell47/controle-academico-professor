import { Key, User } from "lucide-react";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import "../styles/inputsStyle.css";

type Props = ComponentProps<"input"> &
	PropsWithChildren & {
		label?: string;
		icon?: ReactNode;
		inputStyle?: "input_primary" | "input_secondary" | "input_tertiary";
	};

export const Icons = ({ type }: ComponentProps<"input">) => {
	if (type === "text") {
		return <User className="text-neutral-500" size={20} />;
	}
	if (type === "password") {
		return <Key className="text-neutral-500" size={20} />;
	}
};

export const showPassword = (type: string) => {
	if (type === "password") {
		return "text";
	}
	if (type === "text") {
		return "password";
	}
};
export default function Input({
	label,
	placeholder,
	type,
	icon,
	className,
	inputStyle = "input_primary",
	...rest
}: Props) {
	return (
		<div className={`" flex flex-col gap-1 ${className}`}>
			{label && (
				<label
					htmlFor={label}
					className="mb-2 text-sm font-bold text-[#9fa6b3] dark:text-gray-500"
				>
					{label}
				</label>
			)}
			<div className={`input_base flex-1 ${inputStyle}`}>
				<Icons type={type} />
				{icon}
				<input
					id={label}
					className="w-full"
					placeholder={placeholder}
					type={type}
					{...rest}
				/>
			</div>
		</div>
	);
}
