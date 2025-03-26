// import Image from "next/image";

import { HeroSection } from "@/app/Hero section/page";
import { AboutSection } from "./About Section/page";
import { Navbar } from "../components/navbar";
import { ServicesSection } from "./Services Section/page";

export default function Home() {
	return (
		<>
			<Navbar /> <HeroSection />
			<AboutSection />
			<ServicesSection />
		</>
	);
}
