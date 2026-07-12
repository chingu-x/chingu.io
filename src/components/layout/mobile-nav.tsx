import {NavLogo} from "#/components/layout/nav-logo.tsx";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon} from "lucide-react";
import {cva} from "class-variance-authority";

const menuIconStyles = cva(`
    w-8 h-8 p-1 
    cursor-pointer 
    border border-white/20 rounded
    hover:bg-white/10 
    text-(--color-nav-text)
`)

const sheetContentStyles = cva(`
    h-screen min-h-full
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
`)

export function MobileNav() {
    return <div className="lg:hidden flex justify-between bg-(--color-nav-background) px-8">
        <NavLogo />
        <Sheet>
            <SheetTrigger>
                <MenuIcon className={menuIconStyles()}/>
            </SheetTrigger>
            <SheetContent
                side="top"
                className={sheetContentStyles()}
            >
                abc
            </SheetContent>
        </Sheet>
    </div>
}