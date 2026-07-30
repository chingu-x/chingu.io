import {createFileRoute} from '@tanstack/react-router'
import {pageContainerStyles} from "#/styles/containers.ts";
import {HeroSection} from "#/components/shared/hero-section.tsx";
import {ContentSection} from "#/components/shared/layout/content-section.tsx";
import {Timeline} from "#/components/teams/timeline.tsx";
import {voyageTimeline} from "#/content/teams/timeline.ts";
import {Cards} from "#/components/shared/cards.tsx";
import {voyageCards} from "#/content/teams/voyage-cards.ts";
import {Checklist} from "#/components/shared/checklist.tsx";
import {voyageStackList} from "#/content/teams/voyage-stack-list.ts";
import {TestimonialCard} from "#/components/shared/testimonial-card.tsx";
import {voyageTestimonial} from "#/content/teams/voyage-testimonial.ts";
import {Callout} from "#/components/shared/callout.tsx";
import {BottomCta} from "#/components/shared/bottom-cta.tsx";

export const Route = createFileRoute('/teams/standard-voyage')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className={pageContainerStyles}>
        <HeroSection
            badgeText="The standard voyage"
            heading="Seven weeks. One team. One shipped product."
            description="A remote, cross-functional team sprint. Developers, a designer, a Scrum Master and a Product Owner. Matched across timezones, building a real product you can put on your portfolio and your resume."
            primaryButtonText="Join the next Voyage"
            primaryButtonHref="/apply"/>
        <ContentSection
            id="timeline"
            headerBadgeText="The Seven-week Arc"
            headingText="From kickoff to demo day."
        >
            <Timeline items={voyageTimeline}/>
        </ContentSection>
        <ContentSection
            id="how-a-team-comes-together"
            headerBadgeText="How a team comes together"
            headingText="Cross-functional by default."
            variant="dark"
        >
            <Cards items={voyageCards}/>
        </ContentSection>
        <ContentSection
            id="tools-and-rhythm"
            headerBadgeText="Tools & rhythm"
            headingText="The same stacks real teams use."
        >
            <Checklist items={voyageStackList}/>
        </ContentSection>
        <ContentSection
            id="testimonial"
        >
            <TestimonialCard testimonial={voyageTestimonial} />
        </ContentSection>
        <ContentSection id="voyage-callout">
            <Callout
                headerBadgeText="No Git experience?"
                title="Half our members arrive the same way."
                sectionLedge="50% of surveyed members started a Voyage without Git experience. We cover branching, PRs, and merge conflicts in context — because that’s how everyone on a real team learns them. If you can build something solo, you’re ready."
            />
        </ContentSection>
        <BottomCta
            title="The next cohort opens soon."
            lede="Join the community on Discord and get the latest updates on upcoming voyages and events."
            primaryText="Join for free today"
            primaryHref="/apply"
            footerText="No credit card needed."
        />
    </div>
}
