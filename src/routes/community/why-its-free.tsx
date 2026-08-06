import { createFileRoute } from "@tanstack/react-router";
import { CalloutFrame } from "#/components/shared/callout.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { QnA } from "#/components/shared/qna.tsx";
import { communityGuarantees } from "#/content/community/free-guarantees.ts";
import { freeQnA } from "#/content/community/free-qna.ts";
import { freeSpendings } from "#/content/community/free-spendings.ts";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { sharedTypography } from "#/styles/shared.ts";

export const Route = createFileRoute("/community/why-its-free")({
	component: RouteComponent,
});

const calloutPStyles = `
	px-8 py-4 
	flex flex-col 
	gap-8 
	text-line-soft/70 
	text-base 
	font-medium
`;

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
				<p className={cn(sharedTypography.p, "-mt-6 mb-10")}>
					Everything else — curriculum, mentorship, facilitation, support,
					programming — is donated time from volunteers.
				</p>
				<CalloutFrame>
					<p className={calloutPStyles}>
						“Stuff like this (not just Chingu, but any kind of volunteer or
						low-bar-of-entry work that gets you building with other humans) is
						VITAL for building soft skills.”
					</p>
					<p className={calloutPStyles}>
						— Emily C., Web Developer and Voyage alum
					</p>
				</CalloutFrame>
			</ContentSection>
			<ContentSection
				id="common-questions"
				headerBadgeText="Common Questions"
				headingText="The trust questions, answered."
			>
				<QnA items={freeQnA} />
			</ContentSection>
		</div>
	);
}
