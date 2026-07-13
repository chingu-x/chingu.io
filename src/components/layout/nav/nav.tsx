import {DesktopNav} from "#/components/layout/nav/desktop-nav.tsx";
import {MobileNav} from "#/components/layout/nav/mobile-nav.tsx";


export function Nav() {
    return (
        <div className="bg-(--color-nav-background)">
            <header>
                <DesktopNav />
                <MobileNav />
            </header>
        </div>
    )
}