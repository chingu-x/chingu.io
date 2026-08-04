import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { pageContainerStyles } from "#/styles/containers.ts";

export const Route = createFileRoute("/community/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="Voyage XP"
				heading="Ten weeks. Mentorship. A deeper build."
				description="For alumni who've done a Voyage and want to go further: more depth, more scope, and a mentor from the industry paired to your team."
				testimonial={{
					text: "Thank you, Chingu, for creating a space where strangers become a team and ideas become working software.",
					author: "Isaac Datch",
					role: "Software Developer",
				}}
			/>
		</div>
	);
}
