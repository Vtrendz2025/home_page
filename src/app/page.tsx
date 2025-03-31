import { HeroSection } from "@/app/Hero section/page";
import { AboutSection } from "./About Section/page";
import { ServicesSection } from "./Services Section/page";
import { CommunitySection } from "./Community Section/page";
import { ContactSection } from "./Contact Section/page";

export default function Home() {
	return (
		<div className="bg-black text-white overflow-hidden">
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<CommunitySection />
			<ContactSection />
		</div>
	);
}
