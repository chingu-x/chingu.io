import {ActionButton} from "#/components/shared/action-button.tsx";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import {cva} from "class-variance-authority";
import {navItems} from "#/content/nav.ts";
import type {NavItem} from "#/types/nav.ts";
import {MenuContent} from "#/components/layout/menu-content.tsx";

const navigationMenuStyle = cva(`
    flex py-4 px-8 items-center justify-between
    max-w-(--max-content-width)
    mx-auto
    bg-(--color-nav-background)
    text-(--color-nav-text)
`)

const navigationMenuTriggerStyle = cva(`
    hover:bg-(--color-nav-item-bg-hover)
    
    data-popup-open:hover:bg-(--color-nav-item-bg-hover) 
    data-popup-open:bg-(--color-nav-item-bg-hover)
       
    data-open:hover:bg-(--color-nav-item-bg-hover)
    data-open:bg-(--color-nav-item-bg-hover)
    
    focus:bg-(--color-nav-item-bg-hover)
    cursor-pointer
`
)

export function Navbar() {
    return <div className="bg-(--color-nav-background)">
        <div className={navigationMenuStyle()}>
            <div className="flex items-center">
                <img src="/images/chingu-logo.svg" alt="logo" className="h-10 w-10"/>
                <span className="text-white font-extrabold text-2xl ml-2">Chingu</span>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((item: NavItem) => (
                        <NavigationMenuItem key={item.label}>
                            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuTrigger>
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