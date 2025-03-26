// import Image from "next/image";

import { HeroSection } from "@/app/Hero section/page";
import { AboutSection } from "./About Section/page";
import { Navbar } from "../components/navbar";

export default function Home() {
	return (
		<>
			<Navbar /> <HeroSection />
			<AboutSection />
		</>
	);
}
