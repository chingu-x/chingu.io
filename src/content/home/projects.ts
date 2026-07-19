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
    stack: string[];
    team: TeamMember[];
    links: ProjectLink[];
};

export const projects: Project[] = [
    {
        voyage: "56",
        category: "Healthcare",
        title: "SurgiTrack",
        tagline:
            "A real-time surgery status board that keeps families connected during procedures.",
        description:
            "Role-based access for admins, surgical staff, and visitors. Live status updates surface on public waiting-room monitors. AI chatbot fields family questions in plain language.",
        stack: ["React", "Tailwind", "Node + Express", "PostgreSQL", "Gemini"],
        team: [
            {name: "Dimitris", image: "dimitris-lymperis.jpeg"},
            {name: "Marissa", image: "marissa-lamothe.jpeg"},
            {name: "Mostafa", image: "mostafa-elmoalem.jpeg"},
            {name: "BH"},
        ],
        links: [
            {label: "View live", url: "https://surgitrack.netlify.app/"},
            {label: "GitHub", url: "https://lnkd.in/dZneHsD2"},
        ],
    },
    {
        voyage: "XP",
        category: "AI tooling",
        title: "Prompto",
        tagline:
            "An AI prompt assistant that helps users craft clearer, more effective prompts.",
        description:
            "OAuth via Google and GitHub. Multilingual support, voice dictation, and prompt history. Built end-to-end by developers, a designer, a PO, and a Scrum Master.",
        stack: ["React", "Express + Prisma", "Docker", "OAuth", "Gemini"],
        team: [
            {name: "Aigul", image: "aigul-yermagambetova.png"},
            {name: "Veronika", image: "veronika-kolesnikova.jpeg"},
            {name: "Trupti", image: "trupti-shikhare.jpeg"},
            {name: "Xochitl", image: "xochitl-farias.jpeg"},
            {name: "Steffi", image: "steffi-s.jpeg"},
            {name: "BS"},
        ],
        links: [
            {label: "View live", url: "https://prompto37.com/"},
            {label: "GitHub", url: "https://lnkd.in/ew--NYYq"},
        ],
    },
];
