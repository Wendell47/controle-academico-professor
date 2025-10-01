import type { PropsWithChildren } from "react";
import AsideMenu from "../components/asideMenu";
import Header from "../components/header";
import TeacherHomeInfo from "../components/teacherHomeInfo";
type props = PropsWithChildren;
export default function Layout({ children }: props) {
	return (
		<div className="flex flex-1 ">
			<AsideMenu />
			<main className="flex flex-col flex-2  h-screen overflow-hidden">
				{children}
			</main>
		</div>
	);
}
