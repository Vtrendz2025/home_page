import { CommunityCards } from "@/components/CommunityCards";

export function CommunitySection() {
	return (
		<div id="CommunitySection" className="h-fit p-10 pt-28 pb-20 w-full">
			<h1 className="text-center text-5xl text-white bg-black font-bold">
				Our Community
			</h1>
			{/* <CommunityTabs /> */}
			<CommunityCards />
		</div>
	);
}
