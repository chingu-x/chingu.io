import type { FooterSection } from "#/types/footer.ts";

export const footerSections: FooterSection[] = [
	{
		title: "Roles",
		links: [
			{ label: "Developers", href: "/roles/developers" },
			{ label: "Designers", href: "/roles/designers" },
			{ label: "Agile Leaders", href: "/roles/agile-leaders" },
		],
	},
	{
		title: "Teams",
		links: [
			{ label: "Standard Voyage", href: "/teams/standard-voyage" },
			{ label: "Voyage XP", href: "/teams/voyage-xp" },
			{ label: "Pair Programming", href: "/teams/pair-programming" },
		],
	},
	{
		title: "Community",
		links: [
			{ label: "About", href: "/community/about" },
			{ label: "Why it's free", href: "/community/why-its-free" },
			{ label: "Who runs Chingu?", href: "/community/who-runs-chingu" },
			{ label: "Programs", href: "/community/community-programs" },
		],
	},
];
