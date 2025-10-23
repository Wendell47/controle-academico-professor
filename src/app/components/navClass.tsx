"use client";
import { UserRoundPen, UserCheck } from "lucide-react";
import { LinkButton } from "./button";
import { usePathname } from "next/navigation";

export default function NavClass() {
	const pathname = usePathname();

	const links = [
		{
			title: "Notas e Médias",
			link: "notas",
			icon: <UserRoundPen />,
		},
		{
			title: "Frequência",
			link: "frequency",
			icon: <UserCheck />,
		},
	];
	return (
		<div className="flex  gap-1 p-1 max-md:w-full  [&>button]:flex-1 [&>button]:justify-center justify-center  rounded-2xl bg-white dark:bg-[#36393d]">
			{links.map((link) => (
				<LinkButton
					key={link.title}
					title={link.title}
					styleType="button_simple"
					link={link.link}
					className={`${pathname?.includes(link.link) ? "active" : ""} justify-center [&_svg]:stroke-3`}
					icon={link.icon}
				/>
			))}
		</div>
	);
}
