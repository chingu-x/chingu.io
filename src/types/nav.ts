export type MenuContent = {
    title: string
    subMenu: {
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

export type NavItem = {
    label: string
    href?: string
    menuContent: MenuContent
}