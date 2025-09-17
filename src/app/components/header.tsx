import { Search } from "lucide-react";
import Input from "./input";
import { Avatar } from "radix-ui";

export default function Header() {
	return (
		<header className="bg-white border-b border-neutral-200">
			<nav className="px-6 py-4 flex items-center justify-between">
				<h2 className="font-bold">SISTEMA DE CONTROLE ACADÊMICO </h2>

				<Input
					icon={<Search />}
					placeholder="Pesquisar"
					className="min-w-1/3 max-md:hidden"
					inputStyle="secondary"
				/>

				<Avatar.Root className="flex items-center justify-center rounded-full w-10 h-10 overflow-hidden">
					<Avatar.Image src="/perfil.png" className="w-full h-full h-fit " />
					<Avatar.Fallback>MA</Avatar.Fallback>
				</Avatar.Root>
			</nav>
		</header>
	);
}
