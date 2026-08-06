import type { ChecklistItem } from "#/types/content/checklist.ts";

export const communityGuarantees: ChecklistItem[] = [
	{
		key: "no-credit-card",
		title: "No credit card.",
		description: "Not at application. Not ever.",
	},
	{
		key: "no-premium-tier",
		title: "No premium tier.",
		description: "Every member has the same access. There is no \"Chingu Pro.\"",
	},
	{
		key: "no-upsell",
		title: "No upsell.",
		description:
			"We don't route you through a free trial to charge you later.",
	},
	{
		key: "no-sponsored-placements",
		title: "No sponsored placements.",
		description:
			"No partner bootcamps buying your email. No affiliate deals.",
	},
	{
		key: "no-selling-data",
		title: "No selling data.",
		description: "We don't sell it, share it, or license it.",
	},
	{
		key: "no-investors",
		title: "No investors.",
		description:
			"Nothing to return to shareholders. Nothing to IPO.",
	},
];
