import { Button } from "@/app/components/button";
import Card from "@/app/components/card";
import CourseData from "@/app/components/courseData";
import Input from "@/app/components/input";
import NavClass from "@/app/components/navClass";

import {
	ArrowLeft,
	ChevronLeft,
	ChevronRight,
	EllipsisVertical,
	Search,
} from "lucide-react";

import { type PropsWithChildren } from "react";

type props = PropsWithChildren & {
	params: Promise<{ classe: string }>;
};

export default async function classes({ children, params }: props) {
	const { classe } = await params;

	return (
		<>
			<div className="flex-1 flex flex-col h-full w-full  ">
				<div className="flex-1 flex flex-col h-auto w-auto overflow-hidden">
					<div className="py-4 flex gap-4 items-center justify-between sticky top-0 bg-[#ecf1f5] dark:bg-[#2B2D30] ">
						<div className="flex flex-1 overflow-hidden gap-4 items-center">
							<Button icon={<ArrowLeft />} styleType="button_simple" />
							<h2 className="text-nowrap overflow-hidden overflow-ellipsis">
								Controle de turmas /{" "}
								<span className="opacity-70">{decodeURIComponent(classe)}</span>
							</h2>
						</div>
						<Button icon={<EllipsisVertical />} styleType="button_simple" />
					</div>

					<div className="flex flex-1 h-full w-full flex-col gap-4  pb-4 overflow-y-auto">
						<CourseData name={classe} />
						<div className="flex flex-wrap gap-4 mt-4  justify-between items-center">
							<div className="flex-1/3">
								<NavClass />
							</div>

							<div className="flex  gap-4  flex-1/3">
								<Input
									icon={<Search />}
									placeholder="Pesquisar Aluno"
									className=" transparent  flex-1 "
									inputStyle="input_secondary"
								/>

								<div
									className={`p-1 flex-1 [&>button]:flex-1 [&>button]:justify-center rounded-xl bg-white dark:bg-[#36393d] flex gap-1`}
								>
									<Button styleType="button_simple" icon={<ChevronLeft />} />
									<Button styleType="button_simple" title="18/10/2025" />
									<Button styleType="button_simple" icon={<ChevronRight />} />
								</div>
							</div>
						</div>

						<Card className="flex flex-col">
							<div className="flex-1 overflow-auto w-full  max-h-[600px] ">
								{children}
							</div>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
