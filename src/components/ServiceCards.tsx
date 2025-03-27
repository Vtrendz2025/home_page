"use client";

import { Carousel } from "./ui/carousel";
export function ServiceCards() {
	const slideData = [
		{
			title: "FFCS Planner",
			button: "Check it out",
			site: "https://ffcs.vitrendz.com/",
			src: "/FFCS.jpg",
		},
		{
			title: "Student Feedback System",
			button: "Check it out",
			site: "https://feedback.vitrendz.com/",
			src: "/Feedback.jpg",
		},
		{
			title: "CGPA Calculator",
			button: "Check it out",
			site: "https://calculator.vitrendz.com/",
			src: "/CGPA.jpg",
		},
		{
			title: "Roommate Finder",
			button: "Check it out",
			site: "https://roommate.vitrendz.com/",
			src: "Roommate.jpg",
		},
		{
			title: "Resources",
			button: "Check it out",
			site: "https://resources.vitrendz.com/",
			src: "Resources.jpg",
		},
		{
			title: "Travel Mate",
			button: "Check it out",
			site: "https://travelmate.vitrendz.com/",
			src: "Travel.jpg",
		},
	];
	return (
		<div className="relative overflow-hidden w-full h-full py-20">
			<Carousel slides={slideData} />
		</div>
	);
}
