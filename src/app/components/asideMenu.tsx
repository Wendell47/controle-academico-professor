"use client";
import {
	BookOpen,
	LayoutDashboard,
	Library,
	Notebook,
	PanelLeftDashed,
} from "lucide-react";
import { useState, type ComponentProps } from "react";
import { Button, LinkButton } from "./button";
type props = ComponentProps<"aside">;
import "@/app/styles/animations.css";
import "@/app/styles/responsive.css";

export default function AsideMenu({ ...rest }: props) {
	const [open, setOpen] = useState(true);

	const iconSize = 24;
	const menu = [
		{
			group: "Home",
			items: [
				{
					title: "Visão Geral",
					icon: <LayoutDashboard size={iconSize} className="opacity-80" />,
				},
				{
					title: "Biblioteca",
					icon: <BookOpen size={iconSize} className="opacity-80" />,
				},
			],
		},
		{
			group: "Administrativo",
			items: [
				{
					title: "Administrativo",
					icon: <Notebook size={iconSize} className="opacity-80" />,
				},
				{
					title: "Processos Administrativo",
					icon: <Library size={iconSize} className="opacity-80" />,
				},
			],
		},
		{
			group: "Outros",
			items: [
				{
					title: "Diretoria",
					icon: <LayoutDashboard size={iconSize} className="opacity-80" />,
				},
				{
					title: "Coordenação de cursos",
					icon: <BookOpen size={iconSize} className="opacity-80" />,
				},
				{
					title: "Coordenação de estágios",
					icon: <Library size={iconSize} className="opacity-80" />,
				},
				{
					title: "Processos Administrativo",
					icon: <LayoutDashboard size={iconSize} className="opacity-80" />,
				},
			],
		},
	];
	return (
		<aside
			className={`p-5 bg-cover  text-white transition-all w-auto overflow-hidden max-md:menu-mobile  bg-[#0d52b8]`}
			{...rest}
			style={{
				backgroundImage: "url(/bg-login.webp)",
				width: !open ? 300 : 80,
			}}
		>
			<nav className="inline-flex flex-col gap-4">
				<div className="flex items-center justify-between mb-4">
					{!open && (
						<LinkButton link="#" className="!p-0">
							<img src="/logo-unip.svg" alt="logoUnip" width={140} />
						</LinkButton>
					)}

					<Button
						icon={<PanelLeftDashed size={20} />}
						styleType="simple"
						onClick={() => setOpen(!open)}
					/>
				</div>
				{menu.map((group) => (
					<div key={group.group}>
						{open && <hr className="opacity-60 mb-4" />}
						<ul className="gap-1 flex flex-col">
							{!open && <li className="opacity-70 px-2">{group.group}</li>}
							{group.items.map((item) => (
								<li key={item.title}>
									<LinkButton
										link="#"
										title={item.title}
										icon={item.icon}
										className={`transition ${open && "[&_span]:hidden [&_span]:opacity-0"}`}
									/>
								</li>
							))}
						</ul>
					</div>
				))}
			</nav>
		</aside>
	);
}
