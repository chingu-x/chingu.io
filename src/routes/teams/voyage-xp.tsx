import { createFileRoute } from "@tanstack/react-router";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import { ListCards } from "#/components/shared/cards.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { TestimonialCard } from "#/components/shared/testimonial-card.tsx";
import { voyageComparison } from "#/content/teams/voyage-xp-comparison.ts";
import { voyageMentorship } from "#/content/teams/voyage-xp-mentorship.ts";
import { voyagePrerequisites } from "#/content/teams/voyage-xp-prerequisites.ts";
import { voyageXPTestimonial } from "#/content/teams/voyage-xp-testimonial.ts";
import { pageContainerStyles } from "#/styles/containers.ts";

export const Route = createFileRoute("/teams/voyage-xp")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="Voyage XP"
				heading="Ten weeks. Mentorship. A deeper build."
				description="For alumni who've done a Voyage and want to go further: more depth, more scope, and a mentor from the industry paired to your team."
				primaryButtonText="Apply to Voyage XP"
				primaryButtonHref="/apply"
				secondaryButtonText="Start with a Standard Voyage"
				secondaryButtonHref="/teams/standard-voyage"
			/>
			<ContentSection
				id="who-this-is-for"
				headerBadgeText="Who this is for"
				headingText="Alumni ready for production-grade depth."
				lede="Voyage XP isn't an intro; it's the next step. You've done the Standard Voyage. You know the rhythm. Now you want more time to architect, more depth in the stack, and a mentor asking harder questions."
			/>
			<ContentSection
				id="whats-different"
				headerBadgeText="What's different from the Standard Voyage"
				headingText="More time. More scope. More mentorship."
				variant="dark"
			>
				<ListCards items={voyageComparison} />
			</ContentSection>
			<ContentSection
				id="mentorship"
				headerBadgeText="Mentorship, specifically"
				headingText="What your mentor does."
			>
				<Checklist items={voyageMentorship} />
			</ContentSection>
			<ContentSection
				id="prerequisites"
				headerBadgeText="Prerequisites"
				headingText="What you need before you apply."
			>
				<Checklist items={voyagePrerequisites} columnLayout="single" />
			</ContentSection>
			<ContentSection id="testimonial">
				<TestimonialCard testimonial={voyageXPTestimonial} />
			</ContentSection>
			<BottomCta
				title="Ready for the next step?"
				lede="XP cohorts run alongside Standard Voyages. Apply with your previous Voyage repo linked."
				primaryText="Apply to Voyage XP"
				primaryHref="/apply"
			/>
		</div>
	);
}
