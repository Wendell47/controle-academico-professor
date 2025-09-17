import type { ReactNode } from "react";
import Card from "./card";

type props = {
	title: string;
	icon: ReactNode;
	cardStyle?: "primary" | "secondary";
};
export default function CardMenu({ icon, title, cardStyle }: props) {
	return (
		<Card className={`!inline-flex items-start flex-col gap-6 justify-between`}>
			<div className={`rounded-full  text-[#0d52b8] text-2xl`}>{icon}</div>
			<span className="font-bold">{title}</span>
		</Card>
	);
}
