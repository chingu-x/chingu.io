import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import {
	Cards,
	DescriptionCards,
	StatCards,
} from "#/components/shared/cards.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { differences } from "#/content/community/about-differences.ts";
import { communityValues } from "#/content/community/about-values.ts";
import { statKeysAbout, stats } from "#/content/stats.ts";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { sharedTypography } from "#/styles/shared.ts";
import type { DescriptionCard } from "#/types/content/card.ts";

export const Route = createFileRoute("/community/about")({
	component: RouteComponent,
});

export const statsCards: DescriptionCard[] = statKeysAbout.map((key) => {
	const stat = stats[key];

	return {
		title: `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`,
		description: stat.labels.community,
	};
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="About Chingu"
				heading="A place where strangers become a team, and ideas become working software."
				description="Chingu is a volunteer-run community that helps self-taught and career-changing builders close the gap between tutorials and teamwork — by actually putting them on a team."
				testimonial={{
					text: "Thank you, Chingu, for creating a space where strangers become a team and ideas become working software.",
					author: "Isaac Datch",
					role: "Software Developer",
				}}
			/>
			<ContentSection
				id="problem-we-address"
				headerBadgeText="The problem we address"
				headingText="You can code in a vacuum. You can’t ship in one."
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
				id="what-we-believe"
				headerBadgeText="What we believe"
				headingText="Six things, worth saying out loud."
				variant="dark"
			>
				<Cards items={communityValues} />
			</ContentSection>
			<ContentSection
				id="stats"
				headerBadgeText="by the numbers"
				headingText="The community, measured."
			>
				<StatCards items={statsCards} />
				<p className="font-bold text-neutral -mt-10 text-xs self-start">
					* LinkedIn testimonials from 59 unique authors, March 2025–March 2026.
					† Chingu member survey, 2026.
				</p>
			</ContentSection>
			<ContentSection
				id="how-we-are-different"
				headerBadgeText="How we're different"
				headingText="Not a bootcamp. Not a course. A practice."
			>
				<DescriptionCards items={differences} />
				<div className="text-neutral-focus -mt-8">
					Chingu is closer to an intramural league than a classroom. Show up,
					get matched, play the season, take the relationships and the shipped
					product with you.
					<Link
						to="/community/why-its-free"
						className="text-primary font-medium ml-2 inline-flex items-center gap-2"
					>
						Why it’s free <IconArrowRight size={16} stroke={3} />
					</Link>
				</div>
			</ContentSection>
			<BottomCta
				title="Want to meet the people behind this?"
				lede="The community is run almost entirely by alumni who volunteered back."
				primaryText="Meet the team"
				primaryHref="/community/who-runs-chingu"
				secondaryText="Or apply to a Voyage"
				secondaryHref="/apply"
			/>
		</div>
	);
}
