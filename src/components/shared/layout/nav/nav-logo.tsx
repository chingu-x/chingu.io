import { Link } from "@tanstack/react-router";

export function NavLogo() {
	return (
		<Link to="/">
			<div className="flex items-center py-4 cursor-pointer">
				<img src="/images/chingu-logo.svg" alt="logo" className="h-10 w-10" />
				<span className={`font-extrabold text-2xl ml-2`}>Chingu</span>
			</div>
		</Link>
	);
}
