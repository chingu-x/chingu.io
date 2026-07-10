import type {FooterSection} from "#/types/footer.ts";

export const footerSections: FooterSection[] = [
    {
        title: "Roles",
        links: [
            { label: "Developers", href: "#" },
            { label: "Designers", href: "#" },
            { label: "Agile Leaders", href: "#" },
        ],
    },
    {
        title: "Teams",
        links: [
            { label: "Standard Voyage", href: "#" },
            { label: "Voyage XP", href: "#" },
            { label: "Pair Programming", href: "#" },
        ],
    },
    {
        title: "Community",
        links: [
            { label: "About", href: "#" },
            { label: "Why it's free", href: "#" },
            { label: "Who runs Chingu?", href: "#" },
            { label: "Programs", href: "#" },
        ],
    },
]