import {Link} from "@tanstack/react-router";
import {MenuIcon} from "lucide-react";
import {NavLogo} from "#/components/layout/nav/nav-logo.tsx";
import {NavH1} from "#/components/shared/styles/nav/h1.tsx";
import { Accordion , AccordionContent, AccordionItem, AccordionTrigger } from "#/components/ui/accordion.tsx";
import {Sheet, SheetContent, SheetTrigger} from "#/components/ui/sheet.tsx";
import {navItems} from "#/content/nav.ts";
import type {NavItem} from "#/types/nav.ts";


const menuIconStyles = `
    w-8 h-8 p-1
    cursor-pointer
    border border-white/20 rounded
    hover:bg-white/10
    text-(--color-nav-text)
`

const sheetContentStyles = `
    h-screen min-h-full
    px-content-margin
    bg-background

    [&>button]:w-8
    [&>button]:h-8
    [&>button>svg]:stroke-[4.5]
    [&>button]:border
    [&>button]:border-(--color-nav-background)
    [&>button]:text-(--color-nav-text)
    [&>button]:bg-black
    [&>button]:cursor-pointer
    [&>button]:rounded
    [&>button]:hover:bg-(--color-nav-background)
    [&>button]:hover:text-(--color-nav-text)
`

const accordionTriggerStyles = `
    font-bold
    text-reg
    bg-background
    hover:no-underline
    cursor-pointer
`

const accordionContentStyles = `
    bg-background
    font-bold
    text-reg
    flex flex-col
    [&_.accordion-link]:p-3
    [&_.accordion-link:first-of-type]:mt-2
    [&_.accordion-link]:hover:bg-primary-content/30
    [&_.accordion-link]:rounded
    [&_.accordion-link]:cursor-pointer
    [&_.accordion-link_a]:no-underline
`

export function MobileNav() {
    return <div className="lg:hidden flex justify-between bg-(--color-nav-background) text-background px-content-margin">
        <NavLogo/>
        <Sheet>
            <SheetTrigger>
                <MenuIcon className={menuIconStyles}/>
            </SheetTrigger>
            <SheetContent
                side="top"
                className={sheetContentStyles}
            >
                <NavLogo />
                <Accordion className="border-x-0 rounded-none bg-background">
                    {navItems.map((item: NavItem)=>{
                        return <AccordionItem
                            className="data-open:bg-background"
                            key={item.label}
                        >
                                <AccordionTrigger
                                    className={accordionTriggerStyles}
                                >{item.label}
                                </AccordionTrigger>
                                <AccordionContent
                                    className={accordionContentStyles}
                                >
                                    <NavH1 text={item.menuContent.title}/>
                                    {item.menuContent.subMenu.map((subMenu) =>
                                        <div
                                            className="accordion-link"
                                            key={subMenu.title}
                                        >
                                            <Link to={subMenu.href}>
                                                {subMenu.title}
                                            </Link>
                                        </div>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                    })}
                </Accordion>
            </SheetContent>
        </Sheet>
    </div>
}