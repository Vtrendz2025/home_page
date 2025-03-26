import React from "react";
import { BackgroundGradientAnimation } from "../../components/ui/gradient-bg";

export function HeroSectionBackground() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none ">
        <p className=" text-3xl text-center md:text-4xl lg:text-8xl my-5">
          VITRENDZ
        </p>
        <p className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-white/20 text-xl text-center md:text-2xl lg:text-4xl mb-5">
          Something not affilated to VIT.
        </p>
        <p className="text-md text-center md:text-xl lg:text-2xl mt-10">
          Your one stop solution for All College Confusions - By Student, For
          Students!
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
