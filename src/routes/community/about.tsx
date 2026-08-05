import { createFileRoute } from "@tanstack/react-router";
import { Cards } from "#/components/shared/cards.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { communityValues } from "#/content/community/about-values.ts";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { sharedTypography } from "#/styles/shared.ts";

export const Route = createFileRoute("/community/about")({
	component: RouteComponent,
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
		</div>
	);
}
