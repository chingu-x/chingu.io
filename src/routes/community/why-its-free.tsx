import { createFileRoute } from "@tanstack/react-router";
import { Checklist } from "#/components/shared/checklist.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { communityGuarantees } from "#/content/community/free-guarantees.ts";
import { freeSpendings } from "#/content/community/free-spendings.ts";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { sharedTypography } from "#/styles/shared.ts";

export const Route = createFileRoute("/community/why-its-free")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="Why it's free"
				heading="Because the people who run it were once the people who needed it."
				description="Chingu is volunteer-run. No investors. No sponsors buying your data. No premium tier. No credit card, ever. Here’s how that actually works."
			/>
			<ContentSection
				id="the-short-answer"
				headerBadgeText="The short answer"
				headingText="Alumni come back, and they bring friends."
			>
				<p className={cn(sharedTypography.lede, "mt-8")}>
					Most learning platforms teach skills. Most bootcamps teach skills
					faster. Almost nothing teaches what happens after you’ve learned
					enough — when you need to coordinate with five other people across
					three timezones to turn an idea into a live product. That gap is where
					careers get stuck. Chingu is a community-scale answer: put people on
					teams, give them a real sprint, and let the work teach them.
				</p>
			</ContentSection>
			<ContentSection
				id="what-we-dont-do"
				headerBadgeText="What we don't do"
				headingText="No asterisks. No tiers. No dark patterns."
				variant="dark"
			>
				<Checklist items={communityGuarantees} />
			</ContentSection>
			<ContentSection
				id="where-money-goes"
				headerBadgeText="Where the money that does exist goes"
				headingText="It’s a short list."
				centerItemsMd={false}
			>
				<Checklist items={freeSpendings} columnLayout="single" spacing="sm" />
				<p className={cn(sharedTypography.p, "-mt-6")}>
					Everything else — curriculum, mentorship, facilitation, support,
					programming — is donated time from volunteers.
				</p>
			</ContentSection>
		</div>
	);
}
