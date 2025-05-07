import { Key, User } from "lucide-react";
import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
	label: string;
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
export default function Input({ label, placeholder, type, ...rest }: Props) {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={label} className="mb-2 text-sm font-medium text-white">
				{label}
			</label>
			<div className="flex gap-2 p-3 items-center bg-white rounded-md transition duration-300 ease-in-out focus-within:ring-blue-500/50 focus-within:ring-3">
				<Icons type={type} />
				<input
					id={label}
					className=" placeholder:text-neutral-500 text-neutral-700 border-gray-300 rounded-md w-full outline-none"
					placeholder={placeholder}
					type={type}
					{...rest}
				/>
			</div>
		</div>
	);
}
