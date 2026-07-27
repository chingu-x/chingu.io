import { createFileRoute } from "@tanstack/react-router";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import { Cards } from "#/components/shared/cards.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { RolesHeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { TestimonialCard } from "#/components/shared/testimonial-card.tsx";
import { designerSkills } from "#/content/roles/designer-skills.ts";
import { designerTestimonial } from "#/content/roles/designer-testimonial";
import { designerTypes } from "#/content/roles/designer-types.ts";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { rolesTypography } from "#/styles/roles.ts";

export const Route = createFileRoute("/roles/designers")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<RolesHeroSection
				badgeText="For Designers"
				heading="Build a case study that proves cross-functional collaboration."
				description="Most design portfolios show solo work. Yours will show a shipped product, built with developers, a Scrum Master, and a Product Owner you actually had to negotiate with."
			/>
			<ContentSection
				id="designers-types"
				headerBadgeText="Who this is for"
				headingText="UX, UI, or Product — if you’ve designed something, you’re ready."
			>
				<Cards items={designerTypes} />
			</ContentSection>
			<ContentSection
				id="developer-skills-checklist"
				headerBadgeText="What you’ll actually learn"
				headingText="The things tutorials skip."
				variant="dark"
			>
				<Checklist items={designerSkills} />
			</ContentSection>
			<ContentSection
				id="designer-portfolio"
				headerBadgeText="Why this matters"
				headingText="A portfolio with one person’s name on it tells one story."
			>
				<div className={cn(rolesTypography.p, "py-8")}>
					Hiring managers in design know what solo work looks like. What they’re
					actually screening for — and rarely see — is evidence you can ship in
					a cross-functional team. A Chingu case study shows: the constraints
					you worked under, the people you convinced, the things you compromised
					on, and the product that went live anyway
				</div>
			</ContentSection>
			<ContentSection id="designer-testimonial">
				<TestimonialCard testimonial={designerTestimonial} />
			</ContentSection>
			<BottomCta />
		</div>
	);
}
