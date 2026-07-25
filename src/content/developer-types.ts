export interface DeveloperType {
	title: string;
	description: string;
}

export const developerTypes: DeveloperType[] = [
	{
		title: "Backend Developers",
		description:
			"APIs, databases, auth, deployment pipelines. Practice system design in a real sprint, not a whiteboard interview.",
	},
	{
		title: "Frontend Developers",
		description:
			"Use HTML, Tailwind CSS, JS/Typescript and React to manage states and flows for a responsive, interactive UI.",
	},
	{
		title: "Full Stack Developers",
		description:
			"Own a feature end-to-end — from Figma handoff to live URL. Negotiate the API contract with your own backend teammate.",
	},
];
