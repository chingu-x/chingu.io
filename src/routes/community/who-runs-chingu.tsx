import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { sharedTypography } from "#/styles/shared.ts";

export const Route = createFileRoute("/community/who-runs-chingu")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="Who Runs Chingu"
				heading="Alumni who came back. Industry pros who show up."
				description="Almost every Voyage Guide, workshop leader, and operations volunteer was once a Chingu member. The community runs itself — that’s how it’s free, and why it works."
			/>
			<ContentSection
				id="the-alumni-return-model"
				headerBadgeText="The Alumni-return Model"
				headingText="Members become leaders, and the cycle funds the community."
			>
				<p className={cn(sharedTypography.lede, "mt-8")}>
					A typical path: someone joins as a Voyage member, ships a product,
					finishes the cohort, and comes back a few months later as a Voyage
					Guide. Some stay on as workshop leaders. A few take on operational
					roles — cohort coordination, Discord moderation, new program design.
					Every role is volunteer, and almost every volunteer is former
					membership.
				</p>
			</ContentSection>
		</div>
	);
}
