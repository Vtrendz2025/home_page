"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function AboutCards() {
	return (
		<div className="max-w-7xl mx-auto px-1 lg:px-8">
			<HoverEffect items={projects} />
		</div>
	);
}
export const projects = [
	{
		title: "Our Motive",
		description:
			"At VITrendz, our mission is to level up the skills of our members! We create an environment where no one's ever 'forced' to work, but instead, everyone's pumped to dive into whatever skill sparks their interest. It's all about learning, growing, and having fun!",
	},
	{
		title: "Where to find us?",
		description:
			"VITrendz as an organization started on Instagram, and we've been growing ever since! On Instagram we have more than 27k followers. Our discord community has 2.5k+ members and we have a YouTube channel with 1.5k+ subscribers and more than 150k views.",
	},
	{
		title: "What make us apart?",
		description:
			"At VITrendz, we don't care if you're a pro or a newbie-we're all about the vibes! We're looking for people who are loyal, respectful, polite, and love being part of the team. The most important thing is? A passion for learning and of course showing love and respect for your work and teammates.",
	},
];
