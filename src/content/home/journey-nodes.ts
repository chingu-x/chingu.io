export type JourneyNode = {
	step: number;
	week: string;
	phase: string;
	title: string;
	description: string;
	skill: string;
	x: string;
	y: string;
	ariaLabel: string;
};

export const journeyNodes: JourneyNode[] = [
	{
		step: 1,
		week: "0",
		phase: "Orientation",
		title: "Meet the team",
		description:
			"Get matched with your remote crew, confirm roles, align on expectations, and set the rituals that make seven weeks manageable.",
		skill: "Team fit",
		x: "8%",
		y: "74%",
		ariaLabel: "Week 0, orientation",
	},
	{
		step: 2,
		week: "1",
		phase: "Product plan",
		title: "Turn the brief into scope",
		description:
			"Break down the project brief, define the MVP, write the first user stories, and decide what done means.",
		skill: "MVP scope",
		x: "26%",
		y: "50%",
		ariaLabel: "Week 1, product plan",
	},
	{
		step: 3,
		week: "2",
		phase: "First slice",
		title: "Make the product tangible",
		description:
			"Stand up the repo, wire the basic architecture, open pull requests, and ship the first slice for team review.",
		skill: "Git workflow",
		x: "41%",
		y: "70%",
		ariaLabel: "Week 2, first build slice",
	},
	{
		step: 4,
		week: "3-4",
		phase: "Build rhythm",
		title: "Collaborate under constraints",
		description:
			"Run standups, review code, resolve scope tradeoffs, test assumptions, and keep momentum when the work gets messy.",
		skill: "Agile practice",
		x: "57%",
		y: "49%",
		ariaLabel: "Weeks 3 and 4, build rhythm",
	},
	{
		step: 5,
		week: "5",
		phase: "Polish",
		title: "Get it ready for users",
		description:
			"Freeze the core feature set, tighten UX details, fix priority bugs, prepare deployment, and make it presentable.",
		skill: "QA + deploy",
		x: "75%",
		y: "34%",
		ariaLabel: "Week 5, polish and deploy",
	},
	{
		step: 6,
		week: "6",
		phase: "Demo day",
		title: "Show the live product",
		description:
			"Present the build, reflect on team decisions, capture portfolio evidence, and leave with shipped work under your name.",
		skill: "Work proof",
		x: "91%",
		y: "55%",
		ariaLabel: "Week 6, demo day",
	},
];
