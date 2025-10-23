"use client";
import { Button } from "@/app/components/button";
import Input from "@/app/components/input";
import { useClassStore } from "@/app/stores/useClassStores";

export default function frequency() {
	const tabelaHeaders = [
		"Matricula",
		"Nome do Aluno",
		"Ação",
		"Faltas",
		"Total",
	];
	const { classe, addAbsence } = useClassStore();

	return (
		<table className=" w-full text-left text-nowrap  table-auto">
			<thead className="sticky top-[-1px] bg-white dark:bg-[#36393d]">
				<tr className="  [&>th]:px-3 border-[#606469] dark:border-[#3f4348]">
					{tabelaHeaders.map((header, index) => (
						<th
							key={header}
							className={`pb-4  text-gray-600 dark:text-gray-400 font-bold ${index >= 2 ? "text-center " : ""}`}
						>
							{header}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="w-fit">
				{classe.map((aluno) => (
					<tr
						key={aluno.ra}
						className="border-b [&>td]:px-3  border-gray-100 dark:border-[#3f4348] text-gray-800 dark:text-gray-200"
					>
						<td className="py-4 ">{aluno.ra}</td>
						<td className="py-4 ">{aluno.nome}</td>
						<td className="py-4 [&_button]:mx-auto">
							<Button
								title="Adicionar Falta"
								styleType="button_alert"
								onClick={() => addAbsence(aluno.ra)}
							/>
						</td>
						<td className="py-4 ">
							<Input
								className="!w-15 mx-auto [&_input]:text-center"
								inputStyle="input_tertiary"
								value={aluno.faltas}
								readOnly
							/>
						</td>

						<td className="py-4">
							<Input
								className="!w-15 mx-auto [&_input]:text-center"
								inputStyle="input_tertiary"
								value={"7"}
								readOnly
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
