import { create } from "zustand";

type Class = {
	ra: string;
	nome: string;
	np1?: number;
	np2?: number;
	faltas: number;
};
export type teacherClassProps = {
	cidade: string;
	turno: string;
	cursos: courseProps[];
};
export type courseProps = {
	nome: string;
	turma: string;
	disciplinas: { codigo: string; nome: string }[];
};
type MenuState = {
	classe: Class[];
	course: teacherClassProps[];
	addAbsence: (ra: string) => void;
};

export const useClassStore = create<MenuState>((set) => ({
	classe: [
		{
			ra: "RG02673",
			nome: "Lucas Andrade Ferreira",
			np1: 0,
			np2: 0,
			faltas: 0,
		},
		{ ra: "RG02674", nome: "Marina Costa Lima", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02675", nome: "Thiago Ramos Nunes", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02635", nome: "Camila Duarte Rocha", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02617", nome: "Felipe Souza Martins", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02678", nome: "Aline Barbosa Mendes", np1: 0, np2: 0, faltas: 0 },
		{
			ra: "RG02633",
			nome: "Lucas Andrade Ferreira",
			np1: 0,
			np2: 0,
			faltas: 0,
		},
		{ ra: "RG02644", nome: "Marina Costa Lima", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02625", nome: "Thiago Ramos Nunes", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02636", nome: "Camila Duarte Rocha", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02677", nome: "Felipe Souza Martins", np1: 0, np2: 0, faltas: 0 },
		{ ra: "RG02688", nome: "Aline Barbosa Mendes", np1: 0, np2: 0, faltas: 0 },
	],
	course: [
		{
			cidade: "Manaus",
			turno: "Noite",
			cursos: [
				{
					nome: "CIENCIA DA COMPUTACAO",
					turma: "CC4P2",
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
					turma: "TS4P1",
					disciplinas: [
						{ codigo: "2595", nome: "ANALISE DE SIST ORIENT A OBJET" },
						{ codigo: "J20C", nome: "PENS LOGICO COMPUT COM PYTHON" },
					],
				},
			],
		},
	],
	addAbsence: (ra) =>
		set((state) => ({
			classe: state.classe.map((student) =>
				student.ra === ra
					? { ...student, faltas: student.faltas + 1 }
					: student,
			),
		})),
}));
