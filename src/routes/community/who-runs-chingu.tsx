import { createFileRoute } from "@tanstack/react-router";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import { DescriptionCards } from "#/components/shared/cards.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { communityWhoTeams } from "#/content/community/who-teams.ts";
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
				description="Every Chingu Admin, technical support guide, workshop leader, and operations volunteer are alumni of our programs. We are passionate about sharing what we've learned in our careers to help our members thrive."
			/>
			<ContentSection
				id="the-alumni-return-model"
				headerBadgeText="The Alumni-return Model"
				headingText="Members become leaders, and the cycle funds the community."
			>
				<p className={cn(sharedTypography.lede, "mt-8")}>
					A typical path: a member joins a Voyage, participates in a remote team
					to build and ship a product, and shares their experience at Demo Day.
					As they build experience through Voyages they volunteer to be a
					Technical Guide for other teams. Some stay on as workshop leaders. A
					few take on operational roles — Voyage coordination, VoyageXP Mentors,
					Discord moderation, new program design. Every administration and
					support role is a volunteer.
				</p>
			</ContentSection>
			<ContentSection
				id="the-core-team"
				headerBadgeText="Leadership"
				headingText="The core team."
				variant="dark"
			>
				<DescriptionCards items={communityWhoTeams} />
				<p>
					Contact information for all program leads lives in the community
					Discord.
				</p>
			</ContentSection>
			<BottomCta
				title="Ready to apply?"
				lede="Every Voyage is run by people who did a Voyage first. It’s how Chingu stays free."
				primaryText="Join the next Voyage"
				primaryHref="/apply"
			/>
		</div>
	);
}
