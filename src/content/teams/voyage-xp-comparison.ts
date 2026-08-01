export interface ComparisonItem {
	title: string;
	items: string[];
	featured?: boolean;
}

export const voyageComparison: ComparisonItem[] = [
	{
		title: "Standard Voyage",
		items: [
			"6 weeks",
			"~10 hours / week",
			"Peer-led team",
			"One shipped product",
			"Intro to team-based practices",
		],
	},
	{
		title: "Voyage XP",
		items: [
			"10 weeks",
			"~15 hours / week",
			"Industry mentors paired to your team",
			"One production-grade product",
			"Architecture reviews, testing strategy, deployment",
			"Resume optimization",
			"LinkedIn outreach strategies",
			"Interview strategies",
		],
		featured: true,
	},
];
