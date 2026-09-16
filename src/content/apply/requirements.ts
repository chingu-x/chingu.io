import type { ChecklistItem } from "#/types/content/checklist.ts";

export const requirements: ChecklistItem[] = [
	{
		key: "hours",
		title: "~10 hours a week.",
		description: "Two standups, one sync, async work around your timezone.",
	},
	{
		key: "hardware",
		title: "A laptop and reliable internet.",
		description: "That's the hardware floor.",
	},
	{
		key: "git",
		title: "Willingness to learn Git in a team context.",
		description:
			"50% of our members arrive without Git experience. We've got you.",
	},
	{
		key: "solo-project",
		title: "A solo project to share.",
		description:
			"Any scale — a tutorial app, a half-finished side project, a Figma case study. What matters is that you've tried building something.",
	},
];
