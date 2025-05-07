import type { ComponentProps, PropsWithChildren } from "react";
type props = PropsWithChildren & ComponentProps<"div">;
export default function Container({ children, className, ...rest }: props) {
	return (
		<div className={`max-w-7xl w-full m-auto px-5 ${className}`} {...rest}>
			{children}
		</div>
	);
}
