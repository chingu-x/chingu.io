export type TeamMember = {
	name: string;
	image?: string;
};

export type ProjectLink = {
	label: string;
	url: string;
};

export type Project = {
	voyage: string;
	category: string;
	title: string;
	tagline: string;
	description: string;
	screenshot?: string;
	stack: string[];
	team: TeamMember[];
	links: ProjectLink[];
};

// If a team member has no image, the avatar will show the name, so put initials in there like "BS"
export const projects: Project[] = [
	{
		voyage: "56",
		category: "Healthcare",
		title: "SurgiTrack",
		screenshot: "v56-surgitrack.png",
		tagline:
			"A real-time surgery status board that keeps families connected during procedures.",
		description:
			"Role-based access for admins, surgical staff, and visitors. Live status updates surface on public waiting-room monitors. AI chatbot fields family questions in plain language.",
		stack: ["React", "Tailwind", "Node + Express", "PostgreSQL", "Gemini"],
		team: [
			{ name: "Spandan" }, // blueworld_01
			{ name: "Marissa", image: "marissa-lamothe.jpeg" }, // msrissaxo
			{ name: "Pablo" }, // dela88_
			{ name: "Angelica" }, // angie_02295
		],
		links: [
			// { label: "View live", url: "https://surgitrack.netlify.app/" },
			{
				label: "GitHub",
				url: "https://github.com/chingu-voyages/V56-tier3-team-36",
			},
		],
	},
	{
		voyage: "54",
		category: "AI tooling",
		title: "Prompto",
		screenshot: "v54-prompto.png",
		tagline:
			"A full-stack application built to generate high-quality prompts that enable more accurate communication with large language models (LLMs).",
		description:
			"Helps users interact with LLMs more efficiently by providing a Pentagram-format input form, which guides prompt construction and improves the quality of model responses.",
		stack: ["React", "Express", "Prisma", "Docker", "OAuth", "Gemini"],
		team: [
			{ name: "Aigul Y" }, // aigul2601
			{ name: "Veronika K" }, // firstnamenika
			{ name: "Trupti S", image: "trupti-shikhare.webp" }, // trupti_68923
			{ name: "Xochitl F" }, // xoch5736
			{ name: "Steffi S", image: "steffi-s.jpeg" }, // stef8007
			{ name: "Brendan S" }, // bkschatzki
			{ name: "Luis C", image: "luis-castillo.webp" }, // luiscastillokc
		],
		links: [
			{ label: "View live", url: "https://prompto37.com/" },
			{
				label: "GitHub",
				url: "https://github.com/chingu-voyages/V54-tier3-team-37",
			},
		],
	},
];
