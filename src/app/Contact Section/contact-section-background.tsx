"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerServicesLinks } from "@/lib/links";
import { footerCommunityLinks } from "@/lib/links";
import { BackgroundGradientAnimation } from "../../components/ui/gradient-bg";

export function ContactSectionBackground() {
	return (
		<BackgroundGradientAnimation className="h-fit z-40">
			<footer className="h-fit mt-28 z-50">
				<div className="max-w-3xl mx-auto bg-gray-500/60 backdrop-blur-lg z-50 rounded-2xl p-8 shadow-lg ">
					<div className="flex items-center justify-around space-x-6 mb-8">
						<div className="logo-container bg-black rounded-2xl p-4 mt-4 flex items-center justify-center">
							<Image
								src="/ContactLogo.jpg"
								alt="VITrendz Logo"
								width={180}
								height={180}
								className="logo-image"
							/>
						</div>
						<div className="text-center">
							<h2 className="text-3xl font-bold text-white connect-title">
								Let&apos;s Connect
							</h2>
							<Link
								href="mailto:help@vitrendz.tech"
								className="text-2xl text-white underline"
							>
								help@vitrendz.tech
							</Link>
						</div>
					</div>
				</div>

				<div className="bg-gray-500/60 backdrop-blur-lg px-4 md:px-28 z-50 py-8 text-white absolute bottom-0 w-full">
					<div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between space-y-8 md:space-y-0">
						<div className="services-column w-full md:w-auto">
							<h3 className="text-2xl font-bold mb-4 section-title">
								Services
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
								{footerServicesLinks.map(({ name, site }) => (
									<Link
										key={site}
										href={site}
										target="_blank"
										rel="noopener noreferrer"
										className="contactSectionLinks hover:text-purple-300 transition-colors"
									>
										{name}
									</Link>
								))}
							</div>
						</div>

						<div className="community-column w-full md:w-auto">
							<h3 className="text-2xl font-bold mb-4 section-title">
								Community
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
								{footerCommunityLinks.map(({ name, site }) => (
									<Link
										key={site}
										href={site}
										target="_blank"
										rel="noopener noreferrer"
										className="contactSectionLinks cursor-pointer hover:text-purple-300 transition-colors"
									>
										{name}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</footer>
		</BackgroundGradientAnimation>
	);
}
