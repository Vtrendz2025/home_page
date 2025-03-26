"use client";
import { ServiceCards } from "@/components/ServiceCards";

export const ServicesSection = () => {
	return (
		<>
			<div className=" bg-gray-900 p-20 " id="ServicesSection">
				<h1 className="text-center text-5xl font-bold mt-10 text-white">
					Our Services
				</h1>
				<ServiceCards />
			</div>
		</>
	);
};
