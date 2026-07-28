import { createFileRoute } from "@tanstack/react-router";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import { Cards } from "#/components/shared/cards.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { RolesHeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { TestimonialCard } from "#/components/shared/testimonial-card.tsx";
import { agileLeaderSkills } from "#/content/roles/agile-leaders-skills.ts";
import { agileLeaderTestimonials } from "#/content/roles/agile-leaders-testimonials";
import { agileLeaderTypes } from "#/content/roles/agile-leaders-types.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import {Callout} from "#/components/shared/callout.tsx";

export const Route = createFileRoute("/roles/agile-leaders")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<RolesHeroSection
				badgeText="For Agile Leaders"
				heading="Facilitate real sprints with a real team."
				description="Certifications are checklists. A Voyage is a portfolio. You’ll run the ceremonies, remove the blockers, and build the psychological safety that makes a remote team actually ship."
				primaryButtonText="See the Voyage"
				primaryButtonHref="/teams/standard-voyage"
				secondaryButtonText="Join the Community"
				secondaryButtonHref="/community/about"
			/>
			<ContentSection
				id="agile-leaders-types"
				headerBadgeText="Who this is for"
				headingText="Scrum Masters, Product Owners, and delivery leads — practicing, not posturing."
			>
				<Cards items={agileLeaderTypes} />
			</ContentSection>
			<ContentSection
				id="agile-leaders-skills-checklist"
				headerBadgeText="What you’ll actually do"
				headingText="The ceremonies, the coaching, the consequences."
				variant="dark"
			>
				<Checklist items={agileLeaderSkills} />
			</ContentSection>
			<ContentSection
				id="agile-leaders-testimonials"
				headerBadgeText="Community voice"
				headingText="In their words."
			>
				<div className="grid gap-6">
					{agileLeaderTestimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.name}
							testimonial={testimonial}
						/>
					))}
				</div>
			</ContentSection>
			<Callout
				headerBadgeText="Psychological safety, explicitly"
				title="This isn’t a soft skill — it’s the mechanism."
				sectionLedge="Remote teams that ship are teams where disagreement is allowed, mistakes are reviewed without blame, and “I don’t know” is a sentence people can finish. Agile leaders build that environment. On a Voyage, you’ll build it in seven weeks and see what happens when you get it right."
			/>
			<BottomCta />
		</div>
	);
}
