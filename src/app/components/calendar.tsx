"use client";
import { useState } from "react";
import Card from "./card";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MiniCalendar = () => {
	const today = new Date();
	const [currentDate, setCurrentDate] = useState(today);

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	const goToPreviousMonth = () => {
		setCurrentDate(new Date(year, month - 1, 1));
	};

	const goToNextMonth = () => {
		setCurrentDate(new Date(year, month + 1, 1));
	};

	const firstDay = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const prevMonthDays = new Date(year, month, 0).getDate();

	const days: { day: number; current: boolean }[] = [];

	for (let i = firstDay - 1; i >= 0; i--) {
		days.push({ day: prevMonthDays - i, current: false });
	}

	for (let i = 1; i <= daysInMonth; i++) {
		days.push({ day: i, current: true });
	}

	const totalCells = Math.ceil(days.length / 7) * 7;
	for (let i = 1; days.length < totalCells; i++) {
		days.push({ day: i, current: false });
	}

	const todayDay = today.getDate();
	const todayMonth = today.getMonth();
	const todayYear = today.getFullYear();

	return (
		<Card className="w-full flex flex-col flex-1 font-sans">
			<div className="flex justify-between items-center mb-6 px-2">
				<Button
					onClick={goToPreviousMonth}
					styleType="button_secondary"
					icon={<ChevronLeft />}
				/>

				<div className="text-center font-bold text-xl">
					{currentDate.toLocaleString("default", { month: "long" })} {year}
				</div>
				<Button
					onClick={goToNextMonth}
					styleType="button_secondary"
					icon={<ChevronRight />}
				/>
			</div>

			<div className="grid grid-cols-7 gap-1 flex-1">
				{["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((d, i) => (
					<div key={i} className="text-center font-bold text-gray-400 py-1">
						{d}
					</div>
				))}
				{days.map((item, i) => {
					const isToday =
						item.current &&
						item.day === todayDay &&
						month === todayMonth &&
						year === todayYear;
					return (
						<div
							key={i}
							className={`h-10 flex items-center justify-center rounded-full font-semibold
                ${item.current ? "text-neutral-900 dark:text-gray-200" : "text-red-600 dark:text-red-800"}
                ${isToday ? "bg-[#0d52b8] !text-white" : ""}
              `}
						>
							{item.day}
						</div>
					);
				})}
			</div>
		</Card>
	);
};

export default MiniCalendar;
