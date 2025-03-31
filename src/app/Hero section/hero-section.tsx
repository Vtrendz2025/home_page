import React from "react";
import { BackgroundGradientAnimation } from "../../components/ui/gradient-bg";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSectionBackground() {
	return (
		<BackgroundGradientAnimation>
			<div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none ">
				<TextGenerateEffect
					words="VITRENDZ"
					className=" text-3xl text-center md:text-4xl lg:text-8xl my-5"
					duration={0.5}
				/>
				<TextGenerateEffect
					words="Your one stop solution for All College Confusions - By Student, For
					Students!"
					className="text-md text-center md:text-xl lg:text-2xl mt-10"
					duration={1}
				/>
				<p className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-white/20 text-xl text-center md:text-2xl lg:text-4xl pt-20">
					Something not affilated to VIT.
				</p>
			</div>
		</BackgroundGradientAnimation>
	);
}
