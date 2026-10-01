import type { TimelineItem } from "#/types/content/timeline.ts";

export const applyTimeline: TimelineItem[] = [
	{
		step: 1,
		badge: "Application",
		title: "Submit your application",
		description:
			"Review the requirements. Tell us your role, your experience level.",
	},
	{
		step: 2,
		badge: "Solo Project",
		title: "Submit a Solo Project",
		description: "Share a link to something you've built solo.",
	},
	{
		step: 3,
		badge: "Voyage Signup",
		title: "Sign up for a Voyage",
		description: "Sign up for a voyage after your solo project is approved.",
	},
	{
		step: 4,
		badge: "Match",
		title: "Team match on voyage launch",
		description:
			"You'll meet your team, agree on your product, and run your first standup.",
	},
];
