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
		<ScrollArea.Root
			className={`overflow-hidden  flex  mi-w-full flex-col ${classname}`}
		>
			<ScrollArea.Viewport
				className={`h-full min-w-full  [&>div]:min-w-full  [&>div]:h-full [&>div]:!inline-table   ${paddingViewport ? "py-4 " : ""} ${pt && "pt-" + pt}`}
			>
				{children}
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation={orientation}>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
		</ScrollArea.Root>
	);
}
