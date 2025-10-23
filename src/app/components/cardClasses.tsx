import { ChevronDown, ChevronRight } from "lucide-react";
import Card from "./card";
import { title } from "process";
import { Accordion } from "radix-ui";
import { AccordionTrigger, AccordionContent } from "./acordion";
import Link from "next/link";
import {
	courseProps,
	type teacherClassProps,
	useClassStore,
} from "../stores/useClassStores";

const Option = ({
	item,
	title,
}: {
	item: string;
	title: "local" | "turno";
}) => (
	<p className="  text-gray-500 dark:text-gray-300 px-3 py-1 rounded-2xl bg-neutral-100 dark:bg-[#3f444b]">
		{title}:{" "}
		<span className="font-bold text-gray-900 dark:text-white">{item}</span>
	</p>
);

export default function CardClasses() {
	const { course } = useClassStore();

	function renderDisciplinas(cursos: courseProps[]) {
		return (
			<Accordion.Root
				className="AccordionRoot"
				type="single"
				defaultValue="item-1"
				collapsible
			>
				<ul className=" text-sm">
					{cursos.map((curso, idx) => (
						<Accordion.Item
							key={curso.nome}
							className="AccordionItem"
							value={`item-${idx + 1}`}
						>
							<AccordionTrigger className="font-bold text-neutral-800 dark:text-neutral-200 flex gap-3 items-center py-4">
								{curso.nome}
							</AccordionTrigger>

							<AccordionContent className="flex-1  gap-2 flex-col">
								{curso.disciplinas.map((disciplina) => (
									<Link
										key={disciplina.codigo}
										href={`/teacher/${disciplina.nome}/frequency`}
										prefetch={true}
										className="flex flex-1 justify-between items-center gap-5 p-3 hover:bg-neutral-100 dark:hover:bg-slate-700 rounded-2xl"
									>
										<div className="flex  items-center w-full gap-5">
											<span className="text-[10px] bg-[#0d52b8] p-1 px-2 rounded-xl text-white">
												{disciplina.codigo}
											</span>
											<div className="flex-1  w-[30px] overflow-hidden">
												<p className="text-gray-800 dark:text-neutral-300 overflow-ellipsis text-nowrap overflow-hidden ">
													{disciplina.nome}
												</p>
											</div>
										</div>

										<div className="">
											<ChevronRight
												size={15}
												className="text-neutral-400 text-2xl"
											/>
										</div>
									</Link>
								))}
							</AccordionContent>
						</Accordion.Item>
					))}
				</ul>
			</Accordion.Root>
		);
	}

	return (
		<Card>
			{course.map((curso) => (
				<div key={curso.cidade} className="">
					<div className="  pb-4 flex justify-between items-center  border-b border-gray-100 dark:border-[#3f444b]">
						<p className="font-bold">Turmas</p>
						<div className="flex gap-4 text-sm">
							<Option title="local" item={curso.cidade} />
							<Option title="turno" item={curso.turno} />
						</div>
					</div>
					{renderDisciplinas(curso.cursos)}
				</div>
			))}
		</Card>
	);
}
