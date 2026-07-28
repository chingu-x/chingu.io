export interface AgileLeaderType {
	title: string;
	description: string;
}

export const agileLeaderTypes: AgileLeaderType[] = [
	{
		title: "Scrum Masters",
		description:
			"Facilitate standups, sprint planning, reviews, and retros. Protect the team from scope creep. Unblock the work. Coach without managing.",
	},
	{
		title: "Product Owners",
		description:
			"Own the backlog. Write user stories. Prioritize with MoSCoW and story points. Defend scope to developers and designers who will push back.",
	},
];
