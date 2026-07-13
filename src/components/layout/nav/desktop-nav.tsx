import {ActionButton} from "#/components/shared/action-button.tsx";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "#/components/ui/navigation-menu.tsx";
import {navItems} from "#/content/nav.ts";
import type {NavItem} from "#/types/nav.ts";
import {MenuContent} from "#/components/layout/nav/menu-content.tsx";
import {NavLogo} from "#/components/layout/nav/nav-logo.tsx";

const navigationMenuStyle = `
    flex px-8 items-center justify-between
    max-w-(--max-content-width)
    mx-auto
    bg-(--color-nav-background)
    text-(--color-nav-text)
`

const navigationMenuTriggerStyle = `
    hover:bg-(--color-nav-item-bg-hover)

    data-popup-open:hover:bg-(--color-nav-item-bg-hover)
    data-popup-open:bg-(--color-nav-item-bg-hover)

    data-open:hover:bg-(--color-nav-item-bg-hover)
    data-open:bg-(--color-nav-item-bg-hover)

    focus:bg-(--color-nav-item-bg-hover)
    cursor-pointer
    text-[0.9rem]
    font-bold
`

export function DesktopNav() {
    return <div className="hidden lg:block bg-(--color-nav-background)">
        <div className={navigationMenuStyle}>
            <NavLogo/>
            <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((item: NavItem) => (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuTrigger className={navigationMenuTriggerStyle}>{item.label}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <MenuContent menuContent={item.menuContent} />
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <ActionButton text="Join the next voyage" />
        </div>
    </div>

}