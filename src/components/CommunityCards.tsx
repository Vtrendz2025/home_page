import { AnimatedCommunity } from "@/components/ui/animated-community-cards";

export function CommunityCards() {
	const testimonials = [
		{
			quote:
				"Where Vitrendz Began. Reels that get student life, memes hotter than Vellore summers, and content that hits harder than an 8 AM class. Insta is our playground — fun, chaotic, and 100% relatable. Follow us for the laughs, the trends, and everything that makes college bearable.",
			name: "Instagram",
			designation: "@vitrendz",
			src: "/insta.jpg",
			site: "https://www.instagram.com/vitrendz/",
		},
		{
			quote:
				"College Life, Uncut. Hostel chaos, fest vlogs, late-night food runs — it's all here. Our YouTube dives into what being a student at VIT really feels like. If you've ever said “Bro, we should totally vlog this,” we probably already did. Hit subscribe and relive the madness.",
			name: "Youtube",
			designation: "@vitrendz",
			src: "/youtube.png",
			site: "https://www.youtube.com/channel/UCmAwtdi2YTCA_ifMlx0yIDA",
		},
		{
			quote:
				"Chill, but with Goals. Yeah, we're fun — but we've got vision too. On LinkedIn, we highlight student projects, campus changemakers, collabs, and everything that adds value to your journey. It's where vibes meet ambition. Let's build cool things together.",
			name: "LinkedIn",
			designation: "@vitrendz",
			src: "/linkedIn.png",
			site: "https://www.linkedin.com/company/vitrendz/",
		},
		{
			quote:
				"The Student Group Chat, Leveled Up. Fast updates, fresh discussions, FFCS leaks (👀), and way too many messages during exam week. Telegram is where the Vitrendz fam hangs out and helps each other out. Hop in, stay plugged, and never miss a beat on campus.",
			name: "Telegram",
			designation: "@vitrendz",
			src: "/telegram.png",
			site: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXzLtndANurS0p9MC-9NCARPip0KGSBQOUiFsFgxmfTVNkAPZmI0iTs5LMPIBk0LMRXO_qI_IgwqKG/pubhtml",
		},
	];
	return <AnimatedCommunity testimonials={testimonials} />;
}
