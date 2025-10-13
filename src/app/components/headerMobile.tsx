"use client";
import { ArrowLeftFromLine, Menu, Search } from "lucide-react";
import Input from "./input";
import { Button } from "./button";
import { useMenuStore } from "../stores/useMenuStore";

type props = { classname?: string };
export default function HeaderMobile({ classname }: props) {
	const { toggleMenu, toggleMainMenu } = useMenuStore();

	return (
		<div
			className={`min-lg:hidden dark:bg-transparent z-20 bg-white border-b border-gray-100 px-10 dark:border-none sticky top-0 ${classname}`}
		>
			<nav className=" py-4 flex items-center justify-between">
				<Button
					styleType="simple"
					icon={
						<Menu
							className="dark:text-white text-gray-600"
							onClick={() => toggleMainMenu()}
						/>
					}
				/>

				<Input
					icon={<Search />}
					placeholder="Pesquisar"
					className="w-full"
					inputStyle="primary"
				/>
				<Button
					styleType="simple"
					icon={
						<ArrowLeftFromLine
							className="dark:text-white text-gray-600"
							onClick={() => toggleMenu()}
						/>
					}
				/>
			</nav>
		</div>
	);
}
