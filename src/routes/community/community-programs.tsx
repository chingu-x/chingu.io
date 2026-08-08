import { createFileRoute } from "@tanstack/react-router";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import { Callout } from "#/components/shared/callout.tsx";
import { Cards } from "#/components/shared/cards.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { programsBookClub } from "#/content/community/programs-book-club.ts";
import { programsChannels } from "#/content/community/programs-channels.ts";
import { programsWorkshops } from "#/content/community/programs-workshops.ts";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { sharedTypography } from "#/styles/shared.ts";

export const Route = createFileRoute("/community/community-programs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="Community Programs"
				heading="Ways to grow with Chingu beyond the Voyage."
				description="The Voyage is the core. The community is the rest — weekly training, book club, topic channels, and office hours. Most are open to anyone in the Discord, regardless of whether you’re in a cohort."
				primaryButtonText="Join the Discord"
				primaryButtonHref="#"
			/>
			<ContentSection
				id="weekly-training-sessions"
				headerBadgeText="Weekly Training Sessions"
				headingText="Topic-focused workshops, run by alumni and industry pros."
			>
				<Cards items={programsWorkshops} />
			</ContentSection>
			<ContentSection
				id="book-club"
				headerBadgeText="Book club"
				headingText="Read a hard book with people who want to discuss it.
"
			>
				<Cards items={programsBookClub} />
			</ContentSection>
			<ContentSection
				id="topic-channels"
				headerBadgeText="Topic Channels"
				headingText="The Discord is where the daily community lives."
			>
				<Checklist items={programsChannels} />
			</ContentSection>
			<ContentSection
				id="office-hours"
				headerBadgeText="Office hours & amas"
				headingText="Industry guests, live Q&A."
			>
				<p className={cn(sharedTypography.lede, "mt-8")}>
					Occasional sessions with professionals from across the industry —
					engineers, designers, hiring managers, founders. They answer
					member-submitted questions for an hour. Recordings go into the archive
					for anyone who missed it. Announced in #events; open to anyone in the
					Discord.
				</p>
			</ContentSection>
			<ContentSection id="pair-programming-callout">
				<Callout
					headerBadgeText="pair programming"
					title="The lowest-commitment way to get involved."
					sectionLedge="On-demand coding sessions with peers — drop in, pair up, build together for 60 to 90 minutes. A good first step if a full Voyage feels like too much right now."
				/>
			</ContentSection>
			<BottomCta
				title="Join the Discord to get started."
				lede="Free. Open. No application needed. Most of Chingu’s day-to-day happens here."
				primaryText="Join Discord"
				primaryHref=""
				secondaryText="Or apply to the next Voyage"
				secondaryHref="/apply"
			/>
		</div>
	);
}
