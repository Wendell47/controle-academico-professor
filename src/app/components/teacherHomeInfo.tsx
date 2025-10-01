import Card from "./card";

export default function TeacherHomeInfo() {
	const date = new Date().toLocaleDateString("pt-BR");

	return (
		<Card className="flex !flex-4/4 max-md:flex-col justify-between items-start  border-neutral-200 ">
			<div>
				<span className="text-blue-500 mb-4 inline-block">
					Olá Professor - {date}
				</span>
				<h3 className="text-4xl font-bold">Matheus A Das S Guerreiro</h3>
			</div>
		</Card>
	);
}
