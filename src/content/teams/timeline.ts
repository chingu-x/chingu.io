export interface TimelineItem {
	step: number;
	week: string;
	title: string;
	description: string;
}

export const voyageTimeline: TimelineItem[] = [
	{
		step: 1,
		week: "0",
		title: "Team formation",
		description:
			"You're matched with a cross-functional team. Intros. Agree on a working rhythm across your timezones. First standup.",
	},
	{
		step: 2,
		week: "1",
		title: "Sprint planning",
		description:
			"Scope the product together. Backlog comes together. Definition of done, negotiated. The Figma starts taking shape.",
	},
	{
		step: 3,
		week: "2",
		title: "Build starts",
		description:
			"First PRs open. First design handoff. First \"wait, does your API actually return that shape?\" conversation.",
	},
	{
		step: 4,
		week: "3–4",
		title: "The messy middle",
		description:
			"Merge conflicts. Timezone juggling. Someone's feature breaks someone else's. The team either gels here or it doesn't. Usually it gels.",
	},
	{
		step: 5,
		week: "5",
		title: "Final sprint",
		description:
			"Polish, bugs, acceptance. The PO says \"ship it or cut it.\" The team ships.",
	},
	{
		step: 6,
		week: "6",
		title: "Demo day",
		description:
			"Demo to the cohort. Retrospective with your team. A live product, a repo under your name, and teammates you'll still talk to next year.",
	},
];
