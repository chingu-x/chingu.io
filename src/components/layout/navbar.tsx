import {ActionButton} from "#/components/shared/action-button.tsx";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import {cva} from "class-variance-authority";
import {type NavItem, navItems} from "#/content/nav.ts";

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
    return <div className="flex py-3 px-6 items-center bg-(--color-nav-background) text-(--color-nav-text)">
        <img src="/images/chingu-logo.svg" alt="logo" className="h-10 w-10"/>
        <span className="text-white font-extrabold text-2xl ml-2">Chingu</span>
        <NavigationMenu>
            <NavigationMenuList>
                {navItems.map((item: NavItem) => (
                    <NavigationMenuItem key={item.label}>
                        <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuTrigger>
                        <NavigationMenuContent>{item.menu.card.text}</NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
        <ActionButton text="Join the next voyage" />
    </div>

}