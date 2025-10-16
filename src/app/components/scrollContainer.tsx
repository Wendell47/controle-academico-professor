import { ScrollArea } from "radix-ui";
import type { PropsWithChildren } from "react";

type props = PropsWithChildren & {
	orientation?: "vertical" | "horizontal" | undefined;
	classname?: string;
	paddingViewport?: true;
	pt?: string;
};
export default function ScrollContainer({
	orientation = "vertical",
	children,
	classname,
	paddingViewport,
	pt,
}: props) {
	return (
		<ScrollArea.Root className={`overflow-y-hidden flex flex-col ${classname}`}>
			<ScrollArea.Viewport
				className={`h-full w-full [&>div]:h-full ${paddingViewport ? "py-4 " : ""} ${pt && "pt-" + pt}`}
			>
				{children}
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation={orientation}>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
		</ScrollArea.Root>
	);
}
