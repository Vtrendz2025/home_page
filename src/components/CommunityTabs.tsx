"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";

export function CommunityTabs() {
	const tabs = [
		{
			title: "Instagram",
			value: "Instagram",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-pink-500">
					<p>Instagram</p>
					<InstaContent />
				</div>
			),
		},
		{
			title: "Youtube",
			value: "Youtube",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-pink-500">
					<p>Youtube</p>
					<YoutubeContent />
				</div>
			),
		},
		{
			title: "LinkedIn",
			value: "LinkedIn",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-pink-500">
					<p>LinkedIn</p>
					<LinkedInContent />
				</div>
			),
		},
		{
			title: "Telegram",
			value: "Telegram",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-pink-500">
					<p>Telegram</p>
					<TelegramContent />
				</div>
			),
		},
	];

	return (
		<div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
			<Tabs tabs={tabs} />
		</div>
	);
}

const InstaContent = () => {
	return (
		<Link href={"https://www.instagram.com/vitrendz/"} target="_blank">
			<Image
				src="/insta.png"
				alt="dummy image"
				width="1000"
				height="1000"
				className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
			/>
		</Link>
	);
};

const YoutubeContent = () => {
	return (
		<Link
			href={"https://www.youtube.com/channel/UCmAwtdi2YTCA_ifMlx0yIDA"}
			target="_blank"
		>
			<Image
				src="/youtube.png"
				alt="dummy image"
				width="1000"
				height="1000"
				className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
			/>
		</Link>
	);
};

const LinkedInContent = () => {
	return (
		<Link href={"https://www.linkedin.com/company/vitrendz/"} target="_blank">
			<Image
				src="/linkedIn.png"
				alt="dummy image"
				width="1000"
				height="1000"
				className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
			/>
		</Link>
	);
};

// const DiscordContent = () => {
// 	return (
// 		<Link href={"https://discord.gg/3q6Xe5s"} target="_blank">
// 			<Image
// 				src="/discord.png"
// 				alt="dummy image"
// 				width="1000"
// 				height="1000"
// 				className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
// 			/>
// 		</Link>
// 	);
// };

const TelegramContent = () => {
	return (
		<Link
			href={
				"https://docs.google.com/spreadsheets/d/e/2PACX-1vRXzLtndANurS0p9MC-9NCARPip0KGSBQOUiFsFgxmfTVNkAPZmI0iTs5LMPIBk0LMRXO_qI_IgwqKG/pubhtml"
			}
			target="_blank"
		>
			<Image
				src="/telegram.png"
				alt="dummy image"
				width="1000"
				height="1000"
				className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
			/>
		</Link>
	);
};
