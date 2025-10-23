import { Button } from "@/app/components/button";
import Card from "@/app/components/card";
import CardMenu from "@/app/components/cardMenu";
import Header from "@/app/components/header";
import ScrollContainer from "@/app/components/scrollContainer";

import "@/app/styles/animations.css";

import {
	BookUp,
	BrainCircuit,
	ChevronLeft,
	ChevronRight,
	LampFloor,
	PersonStanding,
	Presentation,
	UserSearch,
} from "lucide-react";

export default function Home() {
	return (
		<div className="flex flex-1 flex-col gap-6  overflow-auto  px-4 max-w-5xl min-lg:max-w-6xl mx-auto max-h-[1200]">
			<Header classname="max-lg:hidden pt-10" />
			<ScrollContainer classname="flex-1 [&>div]:h-full" paddingViewport={true}>
				<div className=" flex flex-wrap gap-4  h-full flex-1 [&>a]:flex-1/4 max-xl:[&>div]:flex-[46%]">
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
					<Card className="!flex-3/4 min-h-2/6">
						<div className="mb-5 border-b border-gray-100 dark:border-[#3f444b] pb-4 flex justify-between items-center">
							<span className="font-bold text-gray-600 dark:text-gray-400">
								Avisos
							</span>
							<div className="flex gap-4 border border-gray-100 dark:border-[#3f444b] rounded-2xl p-1 [&>svg]:cursor-pointer">
								<Button
									icon={<ChevronLeft />}
									styleType="button_simple"
									className="!p-2 !text-black dark:!text-gray-500"
								/>
								<Button
									icon={<ChevronRight />}
									styleType="button_simple"
									className="!p-2 !text-black dark:!text-gray-500"
								/>
							</div>
						</div>
						<h2 className="mb-4 font-bold">BOAS-VINDAS, PROFESSOR!</h2>
						<p>
							Professor Online é a sua plataforma inovadora e centralizada para
							otimizar a gestão de notas, turmas e muito mais. Com uma interface
							intuitiva e ferramentas avançadas, você terá mais controle,
							praticidade e eficiência no acompanhamento do desempenho dos
							alunos. Simplifique sua rotina acadêmica e foque no que realmente
							importa: ensinar e inspirar!
						</p>
					</Card>
				</div>
			</ScrollContainer>
		</div>
	);
}
