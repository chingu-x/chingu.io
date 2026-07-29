import { createFileRoute } from '@tanstack/react-router'
import {pageContainerStyles} from "#/styles/containers.ts";
import {HeroSection} from "#/components/shared/hero-section.tsx";
import {ContentSection} from "#/components/shared/layout/content-section.tsx";
import {Timeline} from "#/components/teams/timeline.tsx";
import {voyageTimeline} from "#/content/teams/timeline.ts";

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
          primaryButtonHref="/apply" />
        <ContentSection
            id="timeline"
            headerBadgeText="The Seven-week Arc"
            headingText="From kickoff to demo day."
        >
            <Timeline items={voyageTimeline} />
        </ContentSection>
  </div>
}
