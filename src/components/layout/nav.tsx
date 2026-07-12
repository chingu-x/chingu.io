import {DesktopNav} from "#/components/layout/desktop-nav.tsx";
import {MobileNav} from "#/components/layout/mobile-nav.tsx";


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