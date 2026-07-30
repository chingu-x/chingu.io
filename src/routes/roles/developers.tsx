import { createFileRoute } from "@tanstack/react-router";
import { Cards } from "#/components/shared/cards.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { TagCloud } from "#/components/shared/tag-cloud.tsx";
import { TestimonialCard } from "#/components/shared/testimonial-card.tsx";
import { developerSkills } from "#/content/roles/developer-skills.ts";
import { developerTestimonial } from "#/content/roles/developer-testimonial.ts";
import { developerTypes } from "#/content/roles/developer-types.ts";
import { developerWordcloud } from "#/content/roles/developer-wordcloud.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import {RolesBottomCta} from "#/components/roles/roles-bottom-cta.tsx";

export const Route = createFileRoute("/roles/developers")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="For Developers"
				heading="Ship code with a team. Master Git. Build for production."
				description="Whether you’re backend, frontend, or full stack, you’ll work the same way real teams do: pull requests, standups, retros, and a deployed product at the end."
				primaryButtonText="See the Voyage"
				primaryButtonHref="/teams/standard-voyage"
				secondaryButtonText="Join the Community"
				secondaryButtonHref="/community/about"
			/>
			<ContentSection
				id="developer-types"
				headerBadgeText="Who this is for"
				headingText="If you can build something solo, you’re ready for a team."
			>
				<Cards items={developerTypes} />
			</ContentSection>
			<ContentSection
				id="developer-skills-checklist"
				headerBadgeText="What you’ll actually learn"
				headingText="The things tutorials skip."
				variant="dark"
			>
				<Checklist items={developerSkills} />
			</ContentSection>
			<ContentSection
				id="tech-stacks"
				headerBadgeText="Common stacks"
				headingText="Real teams, real tools."
				lede="Teams self-select tech stacks. You’ll see Voyages running on every combination below — and if you want exposure to something new, you can team up around it."
			>
				<TagCloud tags={developerWordcloud} />
			</ContentSection>
			<ContentSection id="developer-testimonial">
				<TestimonialCard testimonial={developerTestimonial} />
			</ContentSection>
			<ContentSection id="bottom-cta">
				<RolesBottomCta />
			</ContentSection>
		</div>
	);
}
