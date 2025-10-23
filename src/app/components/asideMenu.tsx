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
import { useMenuStore } from "../stores/useMenuStore";

export default function AsideMenu({ ...rest }: props) {
	const { mainMenu, toggleMainMenu } = useMenuStore();
	const iconSize = 24;
	const menu = [
		{
			group: "Home",
			items: [
				{
					title: "Visão Geral",
					Link: "/teacher/home",
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
			className={`p-5 bg-cover  max-lg:fixed max-lg:h-full z-10  text-white  w-auto overflow-hidden max-md:menu-mobile  bg-[#0d52b8] max-lg:w-full ${mainMenu ? "min-lg:max-w-[300] max-lg:translate-x-0" : "min-lg:max-w-[80] max-lg:-translate-x-full"} w-full transition-all duration-300 max-lg:ease-in-out`}
			{...rest}
			style={{
				backgroundImage: "url(/bg-login.webp)",
			}}
		>
			<nav className="inline-flex flex-col gap-4">
				<div className="flex items-center justify-between mb-4 max-lg:mt-20">
					{mainMenu && (
						<LinkButton link="#" className="!p-0">
							<img src="/logo-unip.svg" alt="logoUnip" width={140} />
						</LinkButton>
					)}

					<Button
						icon={<PanelLeftDashed size={20} />}
						styleType="button_transparent"
						className="max-lg:!hidden"
						onClick={() => toggleMainMenu()}
					/>
				</div>
				{menu.map((group) => (
					<div key={group.group}>
						{!mainMenu && <hr className="opacity-60 mb-4" />}
						<ul className="gap-1 flex flex-col">
							{mainMenu && <li className="opacity-70 px-2">{group.group}</li>}
							{group.items.map((item) => (
								<li key={item.title}>
									<LinkButton
										link={item.Link || "#"}
										title={item.title}
										icon={item.icon}
										className={`transition ${!mainMenu && "[&_span]:hidden [&_span]:opacity-0"}`}
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
