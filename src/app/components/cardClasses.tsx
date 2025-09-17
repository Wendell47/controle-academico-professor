import { ChevronDown, ChevronRight } from "lucide-react";
import Card from "./card";

export default function CardClasses() {
	type props = {
		cursos: {
			nome: string;
			disciplinas: {
				codigo: string;
				nome: string;
			}[];
		}[];
	};
	const cursosManaus = [
		{
			cidade: "Manaus",
			turno: "Noite",
			cursos: [
				{
					nome: "CIENCIA DA COMPUTACAO",
					disciplinas: [
						{ codigo: "J972", nome: "COMPUTACAO GRAFICA" },
						{ codigo: "J52C", nome: "ENGENHARIA DE REQUISITOS" },
						{ codigo: "J964", nome: "ENGENHARIA DE SOFTWARE" },
						{ codigo: "J53C", nome: "INTERFACE HUMANO-COMPUTADOR" },
						{ codigo: "J02B", nome: "LINGUAGENS FORMAIS E AUTOMATOS" },
					],
				},
				{
					nome: "SUP TEC EM ANALISE DESENV SISTEMAS",
					disciplinas: [
						{ codigo: "2595", nome: "ANALISE DE SIST ORIENT A OBJET" },
						{ codigo: "J20C", nome: "PENS LOGICO COMPUT COM PYTHON" },
					],
				},
			],
		},
	];

	// Helper to render cursos and disciplinas
	function renderDisciplinas(
		cursos: { nome: string; disciplinas: { codigo: string; nome: string }[] }[],
	) {
		return (
			<ul className="flex flex-col">
				{cursos.map((curso, idx) => (
					<li
						key={curso.nome + idx}
						className=" border-gray-300 flex flex-col "
					>
						<div className="font-bold text-neutral-800 flex gap-3 items-center p-4  border-neutral-200">
							<ChevronDown />
							{curso.nome}
						</div>
						<div className="flex">
							<div className="w-[2px] ml-7 h-auto rounded-full bg-blue-300" />
							<ul className=" flex-1  flex  flex-col [&>li]:flex-1/2">
								{curso.disciplinas.map((disciplina, dIdx) => (
									<li
										key={disciplina.codigo + dIdx}
										className="pl-6 flex  justify-between  gap-5 p-3  border-neutral-200 "
									>
										<div className="inline-flex items-center gap-5">
											<span className="text-xs bg-gray-200  p-2 rounded px text-gray-700">
												{disciplina.codigo}
											</span>
											<span className="text-gray-800">{disciplina.nome}</span>
										</div>

										{/**
										 <div className="flex gap-5">
										<p className="text-md text-neutral-500">
											Média{" "}
											<span className="text-neutral-700 text-2xl">40</span>
										</p>
										<p className="text-md text-neutral-500">
											Faltas{" "}
											<span className="text-neutral-700 text-2xl">0</span>
										</p>
									</div>
										 */}

										<ChevronRight className="text-neutral-400" />
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
		);
	}

	return (
		<Card className="!p-0 ">
			{cursosManaus.map((curso) => (
				<div key={curso.cidade} className="">
					<div className="border-b border-neutral-200 p-4 flex justify-between items-center">
						<p className="font-bold">Turmas</p>
						<div className="flex gap-4">
							<p className="  text-gray-500">
								local:{" "}
								<span className="font-bold text-gray-900">{curso.cidade}</span>
							</p>
							<p className="ml-2  text-gray-500">
								turno:{" "}
								<span className="font-bold text-gray-900">{curso.turno}</span>
							</p>
						</div>
					</div>
					{renderDisciplinas(curso.cursos)}
				</div>
			))}
		</Card>
	);
}
