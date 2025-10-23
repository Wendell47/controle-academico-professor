import { Search } from "lucide-react";
import Input from "./input";

type props = { classname?: string };
export default function Header({ classname }: props) {
	return (
		<div
			className={` dark:bg-[#2b2d30]  dark:border-none bg-[#ecf1f5]  sticky top-0 ${classname}`}
		>
			<nav className="flex items-center justify-between">
				<div>
					<h2 className="font-bold text-1xl">SISTEMA DE CONTROLE ACADÊMICO </h2>
					<span className="text-sm opacity-60">Sex,30 de Novembro de 2025</span>
				</div>

				<Input
					icon={<Search />}
					placeholder="Pesquisar"
					className="min-w-1/3 max-md:hidden transparent"
					inputStyle="input_secondary"
				/>
			</nav>
		</div>
	);
}
