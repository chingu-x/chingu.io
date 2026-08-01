import type { ChecklistItem } from "#/types/content/checklist.ts";

export const developerSkills: ChecklistItem[] = [
	{
		key: "git-github-team",
		title: "Git & GitHub in a team.",
		description:
			"Feature branches, code review, merge conflicts, rebase vs. merge — the gap between solo and team Git is wide, and this is where you close it.",
	},
	{
		key: "pull-request-culture",
		title: "Pull request culture.",
		description:
			"Writing a PR that someone else can review. Reviewing a PR without being a jerk. Shipping code through the gauntlet.",
	},
	{
		key: "sprint-rhythm",
		title: "Sprint rhythm.",
		description:
			"Standups, sprint planning, retros. The cadence that keeps remote teams aligned.",
	},
	{
		key: "production-grade-practices",
		title: "Production-grade practices.",
		description:
			"Testing, CI/CD, deployment. Your code runs on the internet and your team relies on it.",
	},
	{
		key: "cross-functional-communication",
		title: "Cross-functional communication.",
		description:
			"Talking to designers about handoff. Talking to a PO about scope. The work that hiring managers actually care about.",
	},
	{
		key: "remote-collaboration",
		title: "Remote collaboration.",
		description:
			"Async-by-default. Writing things down. Respecting timezones that aren't yours.",
	},
];
