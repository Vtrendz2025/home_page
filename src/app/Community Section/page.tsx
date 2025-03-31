import { CommunityTabs } from "@/components/CommunityTabs";
// import { AuroraBackground } from "@/components/ui/aurora-background";

export const CommunitySection = () => {
	return (
		<>
			{/* <AuroraBackground
				className="h-fit p-10 pt-28 pb-20 w-full"
				id="CommunitySection"
			> */}
				<h1 className="text-center text-5xl text-white bg-black font-bold -mb-20 mt-20">
					Our Community
				</h1>
				<CommunityTabs />
			{/* </AuroraBackground> */}
		</>
	);
};
