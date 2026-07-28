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
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { rolesTypography } from "#/styles/roles.ts";

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
			<BottomCta />
		</div>
	);
}
