import { Search } from "lucide-react";
import Input from "./input";
import { Avatar } from "radix-ui";

export default function Header() {
	return (
		<div className=" dark:bg-transparent !flex-3/4 dark:border-none sticky top-0">
			<nav className=" py-4 flex items-center justify-between">
				<div>
					<h2 className="font-bold text-1xl">SISTEMA DE CONTROLE ACADÊMICO </h2>
					<span className="text-sm opacity-60">Sex,30 de Novembro de 2025</span>
				</div>

				<Input
					icon={<Search />}
					placeholder="Pesquisar"
					className="min-w-1/3 max-md:hidden"
					inputStyle="primary"
				/>
			</nav>
		</div>
	);
}
