import MiniCalendar from "@/app/components/calendar";
import Card from "@/app/components/card";
import CardClasses from "@/app/components/cardClasses";
import CardMenu from "@/app/components/cardMenu";
import TeacherHomeInfo from "@/app/components/teacherHomeInfo";
import {
	BookUp,
	BrainCircuit,
	LampFloor,
	PersonStanding,
	Presentation,
	UserSearch,
} from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col gap-6  overflow-auto px-7">
			<div className="flex flex-1 max-md:flex-col gap-6 overflow-auto [&>div]:py-6">
				<div className=" flex flex-wrap gap-6 flex-3/5 [&>div]:flex-1/4">
					<TeacherHomeInfo />
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
				<div className=" flex flex-col gap-8 flex-2/5  [&>div]:flex-1 overflow-auto">
					<Card>
						<MiniCalendar />
						<div className="mt-5">
							<span className="font-bold inline-block mb-4">
								Eventos Próximos
							</span>
							<div className="flex  gap-4 [&>div]:flex-1">
								<Card className="!bg-blue-100 !border-0">
									<span className="text-blue-400 font-bold">24/09/2025</span>
									<p className="text-xl font-bold">NP1</p>
									<p>prova presencial</p>
								</Card>
								<Card className="!bg-red-100 !border-0">
									<span className="text-red-400 font-bold">24/09/2025</span>
									<p className="text-xl font-bold">Feira Norte</p>
									<p>evento externo</p>
								</Card>
							</div>
						</div>
					</Card>
					<CardClasses />
				</div>
			</div>
		</div>
	);
}
