"use client";
import { ServiceCards } from "@/components/ServiceCards";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function ServicesSection() {
	return (
		<AuroraBackground id="ServicesSection" className="w-full pt-28 pb-10 h-fit">
			<h1 className="text-center text-5xl font-bold text-white">
				Our Services
			</h1>
			<ServiceCards />
		</AuroraBackground>
	);
}
