import { ScrollArea } from "radix-ui";
import type { PropsWithChildren } from "react";

type props = PropsWithChildren & {
	orientation?: "vertical" | "horizontal" | undefined;
};
export default function ScrollContainer({
	orientation = "vertical",
	children,
}: props) {
	return (
		<ScrollArea.Root className="overflow-hidden flex flex-col">
			<ScrollArea.Viewport className="h-full w-full py-4">
				{children}
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar orientation={orientation}>
				<ScrollArea.Thumb />
			</ScrollArea.Scrollbar>
		</ScrollArea.Root>
	);
}
