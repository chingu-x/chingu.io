export type NavItem = {
    label: string
    href?: string
    menu: {
        title: string
        submenu: {
            title: string
            text: string
            href?: string
        }[]
        card: {
            title: string
            text: string
            initials: string
            name: string
            role: string
        }
    }
}
export const navItems: NavItem[] = [
    {
        label: "Find your role",
        href: "#",
        menu: {
            title: "Choose your Path",
            submenu: [
                {
                    title: "For Developers",
                    text: "Backend, full stack, or app developer. Ship code with a team. Master Git. Build for production."
                },
                {
                    title: "For Designers",
                    text: "UX or UI designer. Create a case study that proves cross-functional collaboration."
                },
                {
                    title: "For Agile Leaders",
                    text: "Scrum Master or Product Owner. Facilitate real sprints with a real team."
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
    }
]