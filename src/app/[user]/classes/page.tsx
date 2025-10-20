import { Button } from "@/app/components/button";
import Card from "@/app/components/card";
import Input from "@/app/components/input";
import ScrollContainer from "@/app/components/scrollContainer";
import {
	ArrowLeft,
	Calendar,
	ChevronLeft,
	ChevronRight,
	Ellipsis,
	EllipsisVertical,
	List,
	OptionIcon,
	Search,
	UserCheck,
	UserRoundPen,
} from "lucide-react";

const alunos = [
	{ ra: "RG02673", nome: "Lucas Andrade Ferreira" },
	{ ra: "RG02674", nome: "Marina Costa Lima" },
	{ ra: "RG02675", nome: "Thiago Ramos Nunes" },
	{ ra: "RG02676", nome: "Camila Duarte Rocha" },
	{ ra: "RG02617", nome: "Felipe Souza Martins" },
	{ ra: "RG02678", nome: "Aline Barbosa Mendes" },
	{ ra: "RG02633", nome: "Lucas Andrade Ferreira" },
	{ ra: "RG02644", nome: "Marina Costa Lima" },
	{ ra: "RG02625", nome: "Thiago Ramos Nunes" },
	{ ra: "RG02636", nome: "Camila Duarte Rocha" },
	{ ra: "RG02677", nome: "Felipe Souza Martins" },
	{ ra: "RG02688", nome: "Aline Barbosa Mendes" },
];

const classInformation = [
	{
		campus: "34 - Manaus",
		turno: "NOITE",
		turma: "CC4P2",
		curso: "15801 - CIENCIA DA COMPUTACAO",
		disciplina: "J0B3B - LINGUAGEM FORMAIS E AUTOMATOS",
	},
];
const tabelaHeaders = ["Matricula", "Nome do Aluno", "Tipo", "NP1"];

export default function classes() {
	return (
		<>
			<div className="flex-1 pb-4 h-full w-full overflow-auto ">
				<div className=" h-auto w-auto">
					<div className="py-4 flex gap-4 items-center justify-between sticky top-0">
						<div className="flex flex-1 overflow-hidden gap-4 items-center">
							<Button icon={<ArrowLeft />} styleType="button_simple" />
							<h2 className="text-nowrap overflow-hidden overflow-ellipsis">
								Controle de turmas /{" "}
								<span className="opacity-70">CIENCIA DA COMPUTACAO</span>
							</h2>
						</div>
						<Button icon={<EllipsisVertical />} styleType="button_simple" />
					</div>

					<div className="flex flex-1 h-full w-full flex-col gap-4">
						<Card className="flex flex-wrap gap-4 max-2xl:[&>div]:flex-2/5 [&>div]:flex-1 ">
							<Input
								value={"34 - MANAUS"}
								label="Campus"
								inputStyle="input_tertiary"
								disabled
							/>
							<Input
								value={"NOITE"}
								label="Turno"
								inputStyle="input_tertiary"
								disabled
							/>
							<Input
								value={"CC4P2"}
								label="Turma"
								inputStyle="input_tertiary"
								disabled
							/>
							<Input
								value={"15801 - CIENCIA DA COMPUTACAO"}
								label="Curso"
								inputStyle="input_tertiary"
								disabled
							/>
							<Input
								value={"J0B3B - LINGUAGEM FORMAIS E AUTOMATOS"}
								label="Disciplina"
								inputStyle="input_tertiary"
								disabled
							/>
						</Card>

						<div className="flex flex-wrap gap-4 mt-4  justify-between items-center">
							<div className="flex gap-1 p-1 max-md:w-full  max-md:[&>button]:flex-1 max-md:[&>button]:justify-center  rounded-2xl bg-white dark:bg-[#36393d]">
								<Button
									title="Notas e Médias"
									styleType="button_simple"
									disabled
									icon={<UserRoundPen />}
								/>
								<Button
									title="Frequência"
									styleType="button_simple"
									aria-selected
									icon={<UserCheck />}
								/>
							</div>

							<div className="flex gap-4 ">
								<Input
									icon={<Search />}
									placeholder="Pesquisar Aluno"
									className=" transparent"
									inputStyle="input_secondary"
								/>

								<div className="p-1 rounded-xl bg-white dark:bg-[#36393d] flex gap-1">
									<Button styleType="button_simple" icon={<ChevronLeft />} />
									<Button styleType="button_simple" title="18/10/2025" />
									<Button styleType="button_simple" icon={<ChevronRight />} />
								</div>
							</div>
						</div>

						<Card className="flex-1">
							<div className="overflow-auto w-full max-h-80 min-md:max-h-96 ">
								<table className=" w-full text-left text-nowrap  table-auto">
									<thead className="sticky top-0 bg-white dark:bg-[#36393d]">
										<tr className=" border-b [&>td]:pr-6 border-[#606469] dark:border-[#3f4348]">
											{tabelaHeaders.map((header) => (
												<th
													key={header}
													className="  pb-4  text-gray-600 dark:text-gray-400 font-bold"
												>
													{header}
												</th>
											))}
										</tr>
									</thead>
									<tbody className="w-fit">
										{alunos.map((aluno) => (
											<tr
												key={aluno.ra}
												className="border-b [&>td]:pr-6 border-gray-100 dark:border-[#3f4348] text-gray-800 dark:text-gray-200"
											>
												<td className="py-4 ">{aluno.ra}</td>
												<td className="py-4 ">{aluno.nome}</td>
												<td className="py-4">Presencial</td>
												<td className="py-4 ">--</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
