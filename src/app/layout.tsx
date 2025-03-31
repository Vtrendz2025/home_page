import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "VITrendz",
	description:
		"VITrendz, Your go-to resource hub for VIT college students featuring free academic tools like FFCS planner, CGPA calculator, and more to simplify campus life.",
	keywords:
		"VIT, VIT Vellore, FFCS planner, CGPA calculator, Resources, Hostels, Roommate, Vtrendz, VITrendz, FFCS, VIT FFCS, VIT CGPA, VIT Resources, VIT Hostels, VIT Roommate, Feedback, Student feedback",
	authors: [{ name: "VTech team" }],
	creator: "VTech Team",
	publisher: "VITrendz",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://vitrendz.in"),
	alternates: {
		canonical: "/",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
