"use client";
import Card from "./card";
import Input from "./input";
import { useClassStore } from "../stores/useClassStores";

export default function CourseData({ name }: { name: string }) {
	const { course } = useClassStore();

	const disciplinaNomeOuCodigo = decodeURIComponent(name);

	const cursoSelecionado = course
		.flatMap((turma) => turma.cursos)
		.find((curso) =>
			curso.disciplinas?.some(
				(d) =>
					d.nome === disciplinaNomeOuCodigo ||
					d.codigo === disciplinaNomeOuCodigo,
			),
		);

	const disciplinaSelecionada = cursoSelecionado?.disciplinas.find(
		(d) =>
			d.nome === disciplinaNomeOuCodigo || d.codigo === disciplinaNomeOuCodigo,
	);

	return (
		<Card className="flex flex-wrap gap-4 max-2xl:[&>div]:flex-2/5">
			<Input
				value={"34 - MANAUS"}
				label="Campus"
				className="flex-1/6"
				inputStyle="input_tertiary"
				disabled
			/>
			<Input
				value={"NOITE"}
				label="Turno"
				className="flex-1/6"
				inputStyle="input_tertiary"
				disabled
			/>
			<Input
				value={"CC4P2"}
				label="Turma"
				className="flex-1/6"
				inputStyle="input_tertiary"
				disabled
			/>
			<Input
				value={cursoSelecionado?.nome ?? "Curso não encontrado"}
				label="Curso"
				className="flex-1/3"
				inputStyle="input_tertiary"
				disabled
			/>
			<Input
				value={
					disciplinaSelecionada
						? `${disciplinaSelecionada.nome} - ${disciplinaSelecionada.codigo}`
						: "Disciplina não encontrada"
				}
				label="Disciplina"
				className="flex-1/3"
				inputStyle="input_tertiary"
				disabled
			/>
		</Card>
	);
}
