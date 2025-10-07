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
			<ul className=" text-sm">
				{cursos.map((curso, idx) => (
					<li key={curso.nome + idx} className="flex flex-col">
						<div className="font-bold text-neutral-800 dark:text-neutral-200 flex gap-3 items-center py-4">
							<ChevronDown />
							{curso.nome}
						</div>
						<div className="gap-4">
							<ul className="flex-1  gap-2 flex-col">
								{curso.disciplinas.map((disciplina, dIdx) => (
									<li
										key={disciplina.codigo + dIdx}
										className="flex justify-between items-center gap-5 p-3 hover:bg-neutral-100 dark:hover:bg-slate-700 rounded-2xl"
									>
										<div className="flex flex-1 items-center justify-center gap-5">
											<span className="text-[10px] bg-[#0d52b8] p-1 px-2 rounded-xl text-white">
												{disciplina.codigo}
											</span>
											<div className="flex-1">
												<p className="text-gray-800 dark:text-neutral-300 overflow-ellipsis text-nowrap overflow-hidden ">
													{disciplina.nome}
												</p>
											</div>
										</div>

										{/*
                    <div className="flex gap-5">
                      <p className="text-md text-neutral-500">
                        Média {" "}
                        <span className="text-neutral-700 text-2xl">40</span>
                      </p>
                      <p className="text-md text-neutral-500">
                        Faltas {" "}
                        <span className="text-neutral-700 text-2xl">0</span>
                      </p>
                    </div>
                  */}

										<div className="">
											<ChevronRight
												size={15}
												className="text-neutral-400 text-2xl"
											/>
										</div>
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
		<Card>
			{cursosManaus.map((curso) => (
				<div key={curso.cidade} className="text-sm">
					<div className=" border-neutral-200 pb-4 flex justify-between items-center">
						<p className="font-bold text-xl">Turmas</p>
						<div className="flex gap-4">
							<p className="  text-gray-500 px-3 py-1 rounded-2xl bg-neutral-100">
								local:{" "}
								<span className="font-bold text-gray-900">{curso.cidade}</span>
							</p>
							<p className="ml-2  text-gray-500 px-3 py-1 rounded-2xl bg-neutral-100">
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
