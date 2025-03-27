import { HeroSection } from "@/app/Hero section/page";
import { AboutSection } from "./About Section/page";
import { Navbar } from "../components/navbar";
import { ServicesSection } from "./Services Section/page";
import { CommunitySection } from "./Community Section/page";
import { ContactSection } from "./Contact Section/page";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<CommunitySection />
			<ContactSection />
		</>
	);
}
