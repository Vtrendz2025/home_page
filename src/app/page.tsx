import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Navbar } from "../components/navbar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
	return (
		<>
		<div className="bg-black text-white overflow-hidden">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<CommunitySection />
			<ContactSection />
		</div>
		</>
	);
}
