"use client";
import { AboutCards } from "@/components/AboutCards";

export function AboutSection() {
	return (
		<div
			className="bg-black text-white p-10 flex flex-col items-center aboutGradient sm:h-fit lg:h-fit"
			id="AboutSection"
		>
			<div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen">
				<div className="font-bold text-5xl pt-20 text-center">About Us</div>
				<div className="text-center text-lg mt-5 lg:max-w-3xl lg:mx-auto">
					VITrendz is a student-powered crew on a mission to make college life a
					breeze! From fun and engaging content to study hacks and interactive
					support, we&apos;ve got everything you need to ace life on campus.
					Whether you&apos;re looking to chill or crush your studies, we&apos;ve
					got your back!
				</div>
				<div>
					<AboutCards />
				</div>
			</div>
		</div>
	);
}
