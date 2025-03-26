// import Image from "next/image";

import { HeroSection } from "@/app/Hero section/page";
import { AboutSection } from "./About Section/page";
import { Navbar } from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar /> {/* Glass bg effect leke aana hai navbar mein, already daal rakha hai but its not working */}
      <HeroSection />
      <AboutSection />
    </>
  );
}
