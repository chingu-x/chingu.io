import type {NavItem} from "#/types/nav.ts";

export const navItems: NavItem[] = [
    {
        label: "Find your role",
        href: "#",
        menuContent: {
            title: "Choose your Path",
            subMenu: [
                {
                    title: "For Developers",
                    text: "Backend, full stack, or app developer. Ship code with a team. Master Git. Build for production.",
                    href: "#"
                },
                {
                    title: "For Designers",
                    text: "UX or UI designer. Create a case study that proves cross-functional collaboration.",
                    href: "#"
                },
                {
                    title: "For Agile Leaders",
                    text: "Scrum Master or Product Owner. Facilitate real sprints with a real team.",
                    href: "#"
                }
            ],
            card: {
                title: "Community Voice",
                text: "This experience was a powerful simulation of a real-world, cross-functional environment, focused on building a market-ready SaaS product.",
                initials: 'KS',
                name: "Koby Sysouvanh",
                role: "voyage alum"
            }
        }
    },
    {
        label: "Build with a team",
        href: "#",
        menuContent: {
            title: "Choose your Path",
            subMenu: [
                {
                    title: "Standard Voyage",
                    text: "7-week foundational team sprint.",
                    href: "#"
                },
                {
                    title: "Voyage XP",
                    text: "10-week advanced track with mentorship.",
                    href: "#"
                },
                {
                    title: "Pair Programming",
                    text: "On-demand coding sessions with peers.",
                    href: "#"
                }
            ],
            card: {
                title: "Community Voice",
                text: "The best kind of learning happens when you build with others.",
                initials: 'ON',
                name: "Onyekachi Nwakaihe",
                role: "Voyage alum"
            }
        }
    },
    {
        label: "The Chingu community",
        href: "#",
        menuContent: {
            title: "Grow your network",
            subMenu: [
                {
                    title: "About Chingu",
                    text: "Our story, mission, and values.",
                    href: "#"
                },
                {
                    title: "Why it's free",
                    text: "Chingu is a volunteer-run community.",
                    href: "#"
                },
                {
                    title: "Who runs Chingu?",
                    text: "Community leadership and contributors.",
                    href: "#"
                },
                {
                    title: "Community Programs",
                    text: "Weekly training, book club, topic channels, and office hours.",
                    href: "#"
                }
            ],
            card: {
                title: "Community Voice",
                text: "Thank you, Chingu, for creating a space where strangers become a team and ideas become working software.",
                initials: 'ID',
                name: "Isaac Datch",
                role: "Software developer"
            }
        }
    }
]