import { CommunityTabs } from "@/components/CommunityTabs";
// import { AuroraBackground } from "@/components/ui/aurora-background";

export const CommunitySection = () => {
	return (
		<div id="CommunitySection" className="h-fit p-10 pt-28 pb-20 w-full">
			{/* <AuroraBackground
				className="h-fit p-10 pt-28 pb-20 w-full"
				
			> */}
			<h1 className="text-center text-5xl text-white bg-black font-bold -mb-20">
				Our Community
			</h1>
			<CommunityTabs />
			{/* </AuroraBackground> */}
		</div>
	);
};
