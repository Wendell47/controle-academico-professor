import MiniCalendar from "@/app/components/calendar";
import Card from "@/app/components/card";
import CardClasses from "@/app/components/cardClasses";
import CardMenu from "@/app/components/cardMenu";
import Header from "@/app/components/header";
import TeacherHomeInfo from "@/app/components/teacherHomeInfo";
import "@/app/styles/animations.css";

import {
	BookUp,
	BrainCircuit,
	Calendar,
	EllipsisVertical,
	LampFloor,
	PersonStanding,
	Presentation,
	UserSearch,
} from "lucide-react";
import { Avatar, ScrollArea } from "radix-ui";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col gap-6  overflow-auto ">
			<div className="flex flex-1 max-md:flex-col px-10 gap-10 overflow-auto  justify-between">
				<div className=" flex flex-wrap gap-6  flex-3/5 [&>div]:flex-1/4 py-4 max-w-5xl min-lg:max-w-6xl mx-auto">
					<Header />
					<CardMenu
						title="Menu de turma "
						icon={<PersonStanding size={40} />}
						cardStyle="primary"
					/>
					<CardMenu
						title="Produção Intelectual "
						icon={<BrainCircuit size={40} />}
					/>
					<CardMenu
						title="Departamento de horários "
						icon={<LampFloor size={40} />}
					/>
					<CardMenu
						title="Diretoria de Instituto "
						icon={<BookUp size={40} />}
					/>
					<CardMenu
						title="Coordenação de Cursos "
						icon={<Presentation size={40} />}
					/>
					<CardMenu
						title="Coordenação de Estágios "
						icon={<UserSearch size={40} />}
					/>
					<Card className="!flex-3/4 min-h-2/6" />
				</div>

				<ScrollArea.Root className="overflow-hidden flex flex-col flex-1/3 max-md:flex-1/4 max-w-xl ">
					<ScrollArea.Viewport className="h-full w-full py-4">
						<nav className="flex justify-between  scroll-pt-16 snap-both">
							<EllipsisVertical />
						</nav>
						<nav className="px-6 py-10 flex flex-col gap-3 items-center justify-between animationContainer text-center ">
							<Avatar.Root className="flex items-center justify-center rounded-full w-18 h-18 overflow-hidden border-3 border-neutral-200 p-0.5">
								<Avatar.Image
									src="/perfil.png"
									className="w-full h-full h-fit"
								/>
								<Avatar.Fallback>MA</Avatar.Fallback>
							</Avatar.Root>
							<div>
								<h3 className="text-xl font-bold">Matheus A Das S Guerreiro</h3>
								<p className="text-md font-medium text-neutral-400">
									matheus@unip.com.br
								</p>
							</div>
						</nav>
						<div className="mt-5 flex flex-col gap-10 snap-both">
							<Card>
								<span className="font-bold text-xl inline-block mb-4">
									Eventos Próximos
								</span>
								<div className="flex  flex-wrap gap-4 [&>div]:flex-1/2">
									<div className=" flex  items-center gap-4 ">
										<div className="flex p-4 rounded-full bg-[#0d52b8]/5">
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
										<div className="flex p-4 rounded-full bg-[#0d52b8]/5">
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
										<div className="flex p-4 rounded-full bg-[#0d52b8]/5">
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
					</ScrollArea.Viewport>
					<ScrollArea.Scrollbar orientation="vertical">
						<ScrollArea.Thumb />
					</ScrollArea.Scrollbar>
				</ScrollArea.Root>
			</div>
		</div>
	);
}
