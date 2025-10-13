import type { PropsWithChildren } from "react";
import AsideMenu from "../components/asideMenu";
import Header from "../components/header";
import TeacherHomeInfo from "../components/teacherHomeInfo";
import MenuTeacher from "../components/menuTeacher";
import HeaderMobile from "../components/headerMobile";
type props = PropsWithChildren;
export default function Layout({ children }: props) {
	return (
		<div className="h-screen overflow-hidden w-full">
			<HeaderMobile />
			<div className="flex h-full flex-1">
				<AsideMenu />
				<main className="flex  flex-col flex-3/4  ">{children}</main>
				<MenuTeacher />
			</div>
		</div>
	);
}
