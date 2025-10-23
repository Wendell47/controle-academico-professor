import type { PropsWithChildren } from "react";
import AsideMenu from "../components/asideMenu";

import MenuTeacher from "../components/menuTeacher";
import HeaderMobile from "../components/headerMobile";
type props = PropsWithChildren;
export default function Layout({ children }: props) {
	return (
		<main className="h-screen overflow-hidden  grid  grid-rows-1">
			<div className="flex  w-screen max-lg:flex-col ">
				<HeaderMobile />
				<AsideMenu />
				<div className="flex flex-1 flex-col  px-4 w-full h-full  overflow-hidden max-w-5xl min-lg:max-w-6xl mx-auto">
					{children}
				</div>

				<MenuTeacher />
			</div>
		</main>
	);
}
