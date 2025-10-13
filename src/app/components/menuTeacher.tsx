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

	return (
		<div
			className={`flex min-lg:max-w-md max-lg:px-4  flex-col gap-6 justify-center overflow-auto min-lg:pr-4 max-lg:fixed max-lg:inset-x-0 h-full max-lg:bg-[#f0f0f0] z-30 ${isOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"} transition-transform duration-300 ease-in-out `}
		>
			<ScrollContainer>
				<Card className="px-6 py-10 flex flex-col gap-3 items-center justify-between animationContainer text-center ">
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
				<div className="mt-5 flex flex-col gap-5 snap-both">
					<Card>
						<span className="font-bold text-xl inline-block mb-4">
							Eventos Próximos
						</span>
						<div className="flex  flex-wrap gap-4 [&>div]:flex-1/2">
							<div className=" flex  items-center gap-4 ">
								<div className="flex p-4 rounded-full bg-[#0d52b8]/5 dark:bg-[#0d52b8]/40">
									<Calendar />
								</div>
								<div>
									<span className="text-[#0d52b8] inline-block text-sm">
										Quin, 13 de Novembro
									</span>
									<p className=" font-bold">NP1</p>
									<p>prova presencial</p>
								</div>
							</div>

							<div className=" flex  items-center gap-4 ">
								<div className="flex p-4 rounded-full bg-[#0d52b8]/5 dark:bg-[#0d52b8]/40">
									<Calendar />
								</div>
								<div>
									<span className="text-[#0d52b8]   inline-block text-sm">
										Quin, 13 de Novembro
									</span>
									<p className="text-xl font-bold">NP1</p>
									<p>prova presencial</p>
								</div>
							</div>
							<div className="flex  items-center gap-4 ">
								<div className="flex p-4 rounded-full bg-[#0d52b8]/5 dark:bg-[#0d52b8]/40">
									<Calendar />
								</div>
								<div>
									<span className="text-[#0d52b8]   inline-block text-sm">
										Quin, 13 de Novembro
									</span>
									<p className="text-xl font-bold">NP1</p>
									<p>prova presencial</p>
								</div>
							</div>
						</div>
					</Card>
					<MiniCalendar />
					<CardClasses />
				</div>
			</ScrollContainer>
		</div>
	);
}
