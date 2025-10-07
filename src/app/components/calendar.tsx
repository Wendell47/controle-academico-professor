"use client";
import { useState } from "react";
import Card from "./card";

const MiniCalendar = () => {
	const today = new Date();
	const [currentDate, setCurrentDate] = useState(today);

	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	// Get first day of the month (0=Sunday)
	const firstDay = new Date(year, month, 1).getDay();
	// Get number of days in current month
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	// Get number of days in previous month
	const prevMonthDays = new Date(year, month, 0).getDate();

	// Prepare days array
	const days: { day: number; current: boolean }[] = [];

	// Fill days from previous month
	for (let i = firstDay - 1; i >= 0; i--) {
		days.push({ day: prevMonthDays - i, current: false });
	}

	// Fill days from current month
	for (let i = 1; i <= daysInMonth; i++) {
		days.push({ day: i, current: true });
	}

	// Fill days from next month to complete the grid (total cells should be multiple of 7)
	const totalCells = Math.ceil(days.length / 7) * 7;
	for (let i = 1; days.length < totalCells; i++) {
		days.push({ day: i, current: false });
	}

	// Get today's day, month, year
	const todayDay = today.getDate();
	const todayMonth = today.getMonth();
	const todayYear = today.getFullYear();

	return (
		<Card className="w-full flex flex-col flex-1 font-sans ">
			<div className="text-center font-bold mb-6 text-2xl">
				{currentDate.toLocaleString("default", { month: "long" })} {year}
			</div>
			<div className="grid grid-cols-7 gap-1 flex-1">
				{["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((d, i) => (
					<div key={i} className="text-center font-bold text-gray-500 py-1">
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
							className={`h-10  flex items-center justify-center rounded-full
								${item.current ? "text-neutral-900 font-semibold" : "text-gray-400"}
								${isToday ? "bg-[#0d52b8] text-white" : ""}
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
