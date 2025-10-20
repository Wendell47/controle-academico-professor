"use client";
import { ArrowLeftFromLine, Menu, Search } from "lucide-react";
import Input from "./input";
import { Button } from "./button";
import { useMenuStore } from "../stores/useMenuStore";

type props = { classname?: string };
export default function HeaderMobile({ classname }: props) {
	const { toggleMenu, closeMenu, closeMainMenu, toggleMainMenu } =
		useMenuStore();

	return (
		<div
			className={`min-lg:hidden  z-20 bg-white dark:bg-[#36393d] backdrop-blur-3xl border-b border-gray-100 dark:border-[#2b2d30] sticky top-0 ${classname}`}
		>
			<nav className=" py-4 px-4 flex gap-2 items-center justify-between w-full">
				<Button
					styleType="button_secondary"
					icon={
						<Menu
							className="dark:text-gray-500 text-gray-600"
							onClick={() => {
								toggleMainMenu();
								closeMenu();
							}}
						/>
					}
				/>

				<Input
					icon={<Search />}
					placeholder="Pesquisar"
					className="w-full"
					inputStyle="input_tertiary"
				/>
				<Button
					styleType="button_secondary"
					icon={
						<ArrowLeftFromLine
							className="dark:text-gray-500 text-gray-600"
							onClick={() => {
								toggleMenu();
								closeMainMenu();
							}}
						/>
					}
				/>
			</nav>
		</div>
	);
}
