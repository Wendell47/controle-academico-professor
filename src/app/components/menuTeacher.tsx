"use client";
import MiniCalendar from "@/app/components/calendar";
import Card from "@/app/components/card";
import CardClasses from "@/app/components/cardClasses";
import ScrollContainer from "@/app/components/scrollContainer";
import "@/app/styles/animations.css";

import { Calendar, EllipsisVertical } from "lucide-react";
import { Avatar } from "radix-ui";
import { useMenuStore } from "../stores/useMenuStore";

export default function MenuTeacher() {
	const { isOpen } = useMenuStore();
	const datas = [
		{
			title: "NP1",
			description: "prova presencial",
			day: "Quinta",
			date: "13",
		},
		{
			title: "Visita Técnica",
			description: "local: Ocean",
			day: "Terça",
			date: "21",
		},
		{ title: "NP2", description: "Prova presencial", day: "Sexta", date: "31" },
	];
	return (
		<div
			className={`flex min-lg:max-w-md max-lg:px-4  flex-col gap-6 overflow-auto min-lg:pr-4 max-lg:fixed max-lg:inset-0 h-full max-lg:bg-[#ecf1f5] dark:max-lg:bg-[#2b2d30] z-10 ${isOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"} transition-transform duration-300 ease-in-out `}
		>
			<ScrollContainer paddingViewport={true}>
				<Card className="px-6 py-10 flex flex-col gap-3 items-center justify-between animationContainer text-center max-lg:mt-20">
					<nav className="flex justify-end scroll-pt-16 snap-both w-full">
						<EllipsisVertical />
					</nav>
					<Avatar.Root className="flex items-center justify-center rounded-full w-18 h-18 overflow-hidden border-3 border-neutral-200 p-0.5">
						<Avatar.Image src="/perfil.png" className="w-full h-full h-fit" />
						<Avatar.Fallback>MA</Avatar.Fallback>
					</Avatar.Root>
					<div>
						<h3 className="text-xl font-bold">Matheus A Das S Guerreiro</h3>
						<p className="text-md font-medium text-neutral-400">
							matheus@unip.com.br
						</p>
					</div>
				</Card>
				<div className="mt-5 flex flex-col gap-4 snap-both">
					<Card>
						<span className="font-bold  inline-block mb-4">
							Eventos Próximos
						</span>
						<div className="flex  flex-wrap gap-4 [&>div]:flex-1/2">
							{datas.map((item) => (
								<div
									key={item.title}
									className="flex  items-center gap-4 justify-between bg-gray-50 dark:bg-[#3f444b] hover:bg-neutral-100 dark:hover:bg-slate-700 rounded-2xl p-4"
								>
									<div className="flex items-center gap-4">
										<div className="flex dark:text-gray-500">
											<Calendar />
										</div>

										<div>
											<p className=" font-bold">{item.title}</p>
											<p className="opacity-50">{item.description}</p>
										</div>
									</div>

									<div className="text-right">
										<span className="text-[#0d52b8] inline-block text-sm font-bold">
											{item.day}
										</span>
										<p className="text-2xl font-bold">{item.date}</p>
									</div>
								</div>
							))}
						</div>
					</Card>
					<MiniCalendar />
					<CardClasses />
				</div>
			</ScrollContainer>
		</div>
	);
}
