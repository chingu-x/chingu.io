import { DesktopNav } from "#/components/layout/nav/desktop-nav.tsx";
import { MobileNav } from "#/components/layout/nav/mobile-nav.tsx";

export function Nav() {
	return (
		<div className="bg-(--color-nav-background) sticky top-0 z-50">
			<header>
				<DesktopNav />
				<MobileNav />
			</header>
		</div>
	);
}
