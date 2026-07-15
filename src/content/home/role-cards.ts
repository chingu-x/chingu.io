import {ChartLine, Code, type LucideIcon, Palette } from "lucide-react"

export type RoleCard = {
    title: string
    description: string
    href: string
    linkText: string
    icon: {
        name: LucideIcon
        className: string
    }
}

export const roleCards: RoleCard[] = [
    {
        title: "For Developers",
        description:
            "Backend, full stack, or app. Ship code with a team. Master Git. Build for production.",
        href: "/developers",
        linkText: "Developer path",
        icon: {
            name: Code,
            className: "bg-primary/10 text-primary",
        },
    },
    {
        title: "For Designers",
        description:
            "UX or UI. Build a cross-functional case study that proves real collaboration.",
        href: "/designers",
        linkText: "Designer path",
        icon: {
            name: Palette,
            className: "bg-warning/10 text-warning",
        },
    },
    {
        title: "For Agile Leaders",
        description:
            "Product Owner or Scrum Master. Facilitate real sprints with a real team.",
        href: "/agile",
        linkText: "Agile path",
        icon: {
            name: ChartLine,
            className: "bg-success/10 text-success",
        },
    },
]