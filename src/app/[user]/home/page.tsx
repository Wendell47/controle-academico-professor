import MiniCalendar from "@/app/components/calendar";
import Card from "@/app/components/card";
import CardClasses from "@/app/components/cardClasses";
import CardMenu from "@/app/components/cardMenu";
import Header from "@/app/components/header";
import ScrollContainer from "@/app/components/scrollContainer";
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
				<div className=" flex flex-wrap gap-6  flex-1/4 [&>div]:flex-2/4 min-2xl:[&>div]:flex-1/4 py-4 max-w-5xl min-lg:max-w-6xl mx-auto">
					<Header classname="max-lg:hidden" />
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
			</div>
		</div>
	);
}
