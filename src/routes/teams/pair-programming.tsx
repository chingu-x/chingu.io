import { createFileRoute } from "@tanstack/react-router";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { Timeline } from "#/components/teams/timeline.tsx";
import { pairProgrammingAudience } from "#/content/teams/pair-programming-audience.ts";
import { pairProgrammingSteps } from "#/content/teams/pair-programming-steps.ts";
import { pageContainerStyles } from "#/styles/containers.ts";

export const Route = createFileRoute("/teams/pair-programming")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="pair programming"
				heading="On-demand coding sessions with peers."
				description="Not ready to commit to a Voyage? Or already deep in one and need another pair of eyes? Book a pair session with another Chingu member, no long-term commitment required."
				primaryButtonText="Join Discord"
				primaryButtonHref=""
				secondaryButtonText="Or see the Voyage"
				secondaryButtonHref="/teams/standard-voyage"
			/>
			<ContentSection
				id="how-it-works"
				headerBadgeText="how it works"
				headingText="Three steps from idea to session."
			>
				<Timeline items={pairProgrammingSteps} columnLayout="single" />
			</ContentSection>
			<ContentSection
				id="who-its-for"
				headerBadgeText="Who it's for"
				headingText="Any member of the community."
			>
				<Checklist items={pairProgrammingAudience} columnLayout="single" />
			</ContentSection>
			<BottomCta
				title="Join Discord to get paired."
				lede="Free. No application. Open to anyone — whether or not you’re in a Voyage."
				primaryText="Join Discord"
				primaryHref=""
				footerText={
					<>
						Or{" "}
						<a href="/apply" className="text-primary">
							Apply to the next voyage
						</a>{" "}
						when you're ready for a team
					</>
				}
			/>
		</div>
	);
}
