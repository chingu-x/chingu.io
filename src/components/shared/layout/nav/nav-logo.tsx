import { Link, useRouter } from "@tanstack/react-router";

export function NavLogo() {
	const router = useRouter();

	return (
		<Link
			to="/"
			onClick={(e) => {
				if (router.state.location.pathname === "/") {
					e.preventDefault();
					void router.invalidate();
					window.scrollTo(0, 0);
				}
			}}
			resetScroll={true}
		>
			<div className="flex items-center py-4 cursor-pointer">
				<img src="/images/chingu-logo.svg" alt="logo" className="h-10 w-10" />
				<span className={`font-extrabold text-2xl ml-2`}>Chingu</span>
			</div>
		</Link>
	);
}
