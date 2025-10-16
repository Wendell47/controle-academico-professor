import type { PropsWithChildren } from "react";
import AsideMenu from "../components/asideMenu";
import Header from "../components/header";
import TeacherHomeInfo from "../components/teacherHomeInfo";
import MenuTeacher from "../components/menuTeacher";
import HeaderMobile from "../components/headerMobile";
type props = PropsWithChildren;
export default function Layout({ children }: props) {
	return (
		<main className="h-screen overflow-hidden w-full grid  grid-rows-1">
			<div className="flex  max-lg:flex-col ">
				<HeaderMobile />
				<AsideMenu />
				{children}
				<MenuTeacher />
			</div>
		</main>
	);
}
