import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import "../styles/acordionStyle.css";
const AccordionTrigger = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
	<Accordion.Header className="AccordionHeader">
		<Accordion.Trigger
			className={`AccordionTrigger ${className}`}
			{...props}
			ref={forwardedRef}
		>
			<ChevronDownIcon className="AccordionChevron" aria-hidden />
			{children}
		</Accordion.Trigger>
	</Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
	<Accordion.Content
		className={`AccordionTrigger AccordionContent ${className}`}
		{...props}
		ref={forwardedRef}
	>
		{children}
	</Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export { AccordionTrigger, AccordionContent };
