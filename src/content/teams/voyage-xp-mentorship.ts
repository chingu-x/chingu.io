export interface MentorshipItem {
	title: string;
	description: string;
}

export const voyageMentorship: MentorshipItem[] = [
	{
		title: "Architecture review",
		description:
			"Regular sessions where your team defends design decisions to someone who's shipped at scale.",
	},
	{
		title: "Code review on request",
		description:
			"Deep reviews on tricky PRs — system design, performance, security.",
	},
	{
		title: "Unblock on hard problems",
		description:
			"When your team hits a wall that search engines don't solve, your mentor is there.",
	},
	{
		title: "Career guidance",
		description:
			"Resume review, mock interviews, referrals — for members ready to job hunt.",
	},
];
