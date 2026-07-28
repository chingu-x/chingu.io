import { createFileRoute } from "@tanstack/react-router";
import { AnimatedChat } from "#/components/home/animated-chat.tsx";
import { Callout } from "#/components/shared/callout.tsx";
import { HomeContentSection } from "#/components/home/content-section.tsx";
import { JourneyNodesSection } from "#/components/home/journey-nodes.tsx";
import { ProjectsSection } from "#/components/home/projects.tsx";
import { HomeRoleCards } from "#/components/home/role-cards.tsx";
import { TestimonialsSection } from "#/components/home/testimonials.tsx";
import { ToolsCloudSection } from "#/components/home/tools.tsx";
import { ActionButton } from "#/components/shared/buttons/action-button.tsx";
import { GhostButton } from "#/components/shared/buttons/ghost-button.tsx";
import { pageContainerStyles } from "#/styles/containers.ts";
import { homeTypography as t } from "#/styles/home";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({ component: Home });

const heroSectionStyles = `
  flex flex-col gap-10
  text-center
  py-20
  px-6
  lg:grid lg:grid-cols-2 lg:text-left
  lg:py-30
  lg:px-15
  lg:items-center
`;

export const homeStats = {
	grid: `
        my-4
        bg-line
        self-stretch grid grid-cols-2
        lg: grid-cols-4
        gap-px
        border border-line
        rounded-md
        overflow-hidden
    `,
	cell: `
        bg-background
        p-4
        text-center
    `,
	num: `
        font-bold text-3xl
        [&>span]:text-primary
    `,
	text: `
        text-xs
        text-neutral
    `,
};

function Home() {
	return (
		<div className={pageContainerStyles}>
			<section id="hero" className={heroSectionStyles}>
				<div className="flex flex-col gap-10 lg:justify-start">
					<div className={t.h1}>
						{`Build real products`} <br />
						{`with a `}
						<span className={t.gradient}>remote team</span>.
					</div>
					<p className={t.p}>
						Seven-week sprints for designers, developers, and agile leaders.
						Industry-standard tools and processes. Real teams, real products, no
						paywall.
					</p>
					<div className="flex flex-col items-center gap-4 justify-center md:flex-row lg:justify-start">
						<ActionButton text="See how a voyage works" href="#" />
						<GhostButton text="Join the community" />
					</div>
				</div>
				<AnimatedChat />
			</section>
			<section id="stats" className="px-content-margin">
				<p className="text-neutral text-xs uppercase font-bold text-center">
					Trusted By Voyagers Around the World
				</p>
				<div className={homeStats.grid}>
					<div className={homeStats.cell}>
						<div className={homeStats.num}>
							<span>170</span>+
						</div>
						<div className={homeStats.text}>countries</div>
					</div>
					<div className={homeStats.cell}>
						<div className={homeStats.num}>
							<span>94</span>%
						</div>
						<div className={homeStats.text}>recommend Chingu</div>
					</div>
					<div className={homeStats.cell}>
						<div className={homeStats.num}>
							$<span>0</span>
						</div>
						<div className={homeStats.text}>always free to join</div>
					</div>
					<div className={homeStats.cell}>
						<div className={homeStats.num}>
							<span>2016</span>
						</div>
						<div className={homeStats.text}>building since</div>
					</div>
				</div>
			</section>
			<HomeContentSection
				id="team-roles"
				badgeText="Grow Together"
				badgeVariant="default"
				headingText="Build with a global, cross-functional team."
				ledeText="Voyagers are grouped by tier, so whether you’re applying what you’ve learned or you have years of experience, there’s a team that will support and grow with you."
			>
				<HomeRoleCards />
			</HomeContentSection>
			<HomeContentSection
				id="testimonials"
				variant="dark"
				badgeText="Voices from the cohort"
				badgeVariant="dark"
				headingText="Strangers become teammates."
				ledeText="Reviews from voyagers across roles, tiers, and continents."
			>
				<TestimonialsSection />
			</HomeContentSection>
			<HomeContentSection
				id="journey-nodes"
				badgeText="The seven weeks"
				badgeVariant="default"
				headingText="From a project brief to a live product."
				ledeText="Six connected milestones that turn a cohort brief into portfolio-ready proof of how you build with a team."
			>
				<JourneyNodesSection />
			</HomeContentSection>
			<HomeContentSection
				id="projects"
				badgeText="What Teams Ship"
				headingText="Real products by real Voyage teams."
				ledeText=""
			>
				<ProjectsSection />
			</HomeContentSection>
			<HomeContentSection
				variant="gradient"
				id="tools"
				badgeText="Tools of the Trade"
				headingText="Practice with the stack and rituals product teams actually use."
				ledeText="From frameworks and databases to Agile delivery methods, Voyagers work in the same tooling vocabulary they’ll meet on real remote teams."
			>
				<ToolsCloudSection />
			</HomeContentSection>
			<Separator />
			<Callout
				headerBadgeText="No paywall, no investors"
				title="Volunteer-run and community-funded."
				sectionLedge="We sustain ourselves on the time of members and industry pros who want to keep growing and giving back."
				actionButtonText="Read the full story"
				href="/chingu/site-redesign/community/why-its-free"
				showPricingFooter={true}
			/>
			<HomeContentSection
				id="apply"
				badgeText="Voyage 60 — Applications open"
				headingText="Ready to build something awesome?"
				ledeText="A short form and a link to something you’ve built solo. That’s it."
				className="items-center text-center"
			>
				<ActionButton text="Join the next voyage" href="/apply" />
				<p className="text-lg font-bold -mt-4 mb-12">
					Free · Volunteer-run · Worldwide since 2016
				</p>
			</HomeContentSection>
		</div>
	);
}
