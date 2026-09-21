import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { BottomCta } from "#/components/shared/bottom-cta.tsx";
import { ActionButton } from "#/components/shared/buttons/action-button.tsx";
import { BaseCard } from "#/components/shared/cards.tsx";
import { Checklist } from "#/components/shared/checklist.tsx";
import { HeroSection } from "#/components/shared/hero-section.tsx";
import { ContentSection } from "#/components/shared/layout/content-section.tsx";
import { Timeline } from "#/components/shared/timeline.tsx";
import { TwoButtonCta } from "#/components/shared/two-button-cta.tsx";
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "#/components/ui/dialog.tsx";
import { requirements } from "#/content/apply/requirements.ts";
import { applyTimeline } from "#/content/apply/timeline.ts";
import { whyJoin } from "#/content/apply/why-join.ts";
import { cn } from "#/lib/utils.ts";
import { pageContainerStyles } from "#/styles/containers.ts";
import { sharedTypography as t } from "#/styles/shared.ts";

const getDiscordAuthLink = createServerFn({ method: "GET" }).handler(
	async () => {
		const url = process.env.DISCORD_AUTH_URL;
		return { url };
	},
);

export const Route = createFileRoute("/apply")({
	loader: async () => {
		const { url } = await getDiscordAuthLink();
		return { discordAuthUrl: url };
	},
	component: RouteComponent,
});

function ApplyDialog() {
	const { discordAuthUrl } = Route.useLoaderData();
	return (
		<Dialog>
			<DialogTrigger
				render={(props) => <ActionButton {...props} text="Apply" />}
			/>
			<DialogContent showCloseButton>
				<div className="max-w-xl py-4 mx-2 text-center flex flex-col items-center">
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
						One thing <span className="text-primary">first</span>
					</h2>
					<p className="max-w-2xl mx-auto mt-3 text-base text-muted-foreground sm:mt-4 py-4 leading-relaxed">
						At Chingu we use Discord as our main source of communication, and
						therefore it's important that you have a Discord account before
						sending your application. We use Discord's authentication to make
						sure that this is the case and will pre-fill your application with
						your account name and ID.
					</p>
					<TwoButtonCta
						primaryText="Apply to Chingu"
						primaryHref={discordAuthUrl}
						primaryOpenInNewTab
						secondaryText="Create Discord Account"
						secondaryHref="https://discord.com/"
						secondaryOpenInNewTab
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}

function RouteComponent() {
	return (
		<div className={pageContainerStyles}>
			<HeroSection
				badgeText="apply"
				heading="Join the Next Voyage."
				description="Seven weeks, one team, a real product. Start here."
			/>
			<div className="lg:grid lg:grid-cols-2 lg:gap-8">
				<div className="max-w-175 mx-auto">
					<ContentSection
						id="apply-what-happens-next"
						headerBadgeText="What happens next"
						headingText="From form to first standup."
					>
						<p className={cn(t.lede, "md:text-center")}>
							Everything you need to know before you get started — from
							requirements and project guidelines to how Voyages work.
						</p>
						<ActionButton text="Visit the Voyage Handbook" href="#" />
						<Timeline items={applyTimeline} columnLayout="single" />
					</ContentSection>
					<ContentSection
						id="what-youll-need"
						headerBadgeText="What you'll need"
						headingText="Honest about effort, not gatekeeping about skill."
					>
						<Checklist items={requirements} columnLayout="single" />
					</ContentSection>
				</div>
				<div className="lg:sticky lg:self-start lg:top-20">
					<ContentSection id="what-youre-signing-up-for">
						<BaseCard title="What you're signing up for">
							<p className="text-primary text-xs font-bold -mb-4 uppercase">
								What you're signing up for
							</p>
							<Checklist items={whyJoin} columnLayout="single" />
							<Link
								to="/community/why-its-free"
								className="text-primary text-base font-semibold -mt-4 flex items-center gap-2"
							>
								Why is it free? <IconArrowRight stroke={3} size={16} />
							</Link>
						</BaseCard>
					</ContentSection>
				</div>
			</div>
			<BottomCta
				title="Collaborate and gain real experience"
				lede="Turn what you've learned in courses, bootcamps, & schools into the experience needed to land a job. Our 7-week remote team projects help you level-up technical & soft skills sought after by employers."
				primaryText="Apply"
				primaryHref="DISCORD_AUTH_URL"
				primaryOpenInNewTab
			/>
			<ApplyDialog />
		</div>
	);
}
