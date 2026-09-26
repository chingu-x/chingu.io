import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ActionButton } from "./buttons/action-button";
import { SecondaryActionButton } from "./buttons/secondary-action-button";
import { HeroSection } from "./hero-section";

const meta = {
	title: "Components/Shared/HeroSection",
	component: HeroSection,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					'Page-level hero with a badge, heading, description, an optional testimonial card, and an action area. By default the action area renders the standard primary/secondary button pair (`TwoButtonCta`). Pass `variant="component"` along with an `ActionComponent` element to replace those buttons with any React node — a dialog trigger, a signup form, a custom button group. `variant` defaults to `"buttons"`, so existing usages keep working unchanged; when passing a custom component the `primaryButtonText`/`primaryButtonHref` props must be omitted. Omitting every button prop renders no action area at all.',
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		badgeText: "For Developers",
		heading: "Ship code with a team. Master Git. Build for production.",
		description:
			"Whether you're backend, frontend, or full stack, you'll work the same way real teams do: pull requests, standups, retros, and a deployed product at the end.",
		primaryButtonText: "See the Voyage",
		primaryButtonHref: "/teams/standard-voyage",
		secondaryButtonText: "Join the Community",
		secondaryButtonHref: "/community/about",
	},
};

export const WithoutSecondaryButton: Story = {
	args: {
		badgeText: "For Designers",
		heading: "Build a case study that proves cross-functional collaboration.",
		description:
			"Most design portfolios show solo work. Yours will show a shipped product, built with developers, a Scrum Master, and a Product Owner you actually had to negotiate with.",
		primaryButtonText: "Get Started",
		primaryButtonHref: "/apply",
	},
};

export const WithoutButtons: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Leave the button props off entirely for an informational hero with no action area — this is what the About and Why it's free pages use.",
			},
		},
	},
	args: {
		badgeText: "About Chingu",
		heading: "A place where strangers become a team.",
		description:
			"Chingu is a volunteer-run community that helps self-taught and career-changing builders close the gap between tutorials and teamwork — by actually putting them on a team.",
	},
};

export const WithTestimonialOnly: Story = {
	args: {
		badgeText: "Success Stories",
		heading: "What Chingu Graduates Say",
		description:
			"Hear from developers who transformed their careers through real-world project experience.",
		testimonial: {
			text: "Chingu gave me hands-on experience working in a real team environment. I learned more about collaboration and Git workflows than I ever could from solo projects.",
			author: "Sarah Chen",
			role: "Full Stack Developer at TechCorp",
		},
	},
};

export const WithActionComponent: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Pass `variant="component"` and an `ActionComponent` node to take over the action area entirely — the apply page swaps its buttons for a dialog trigger. The `primaryButtonText`/`primaryButtonHref` props are forbidden in this variant (`?: never`).',
			},
		},
	},
	args: {
		badgeText: "apply",
		heading: "Join the Next Voyage.",
		description: "Seven weeks, one team, a real product. Start here.",
		variant: "component",
		ActionComponent: <ActionButton text="Apply" href="/apply" />,
	},
};

export const WithActionComponentAndTestimonial: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The custom action slot and the testimonial card are independent, so they can be combined.",
			},
		},
	},
	args: {
		badgeText: "Alumni",
		heading: "Seven weeks changed how I work.",
		description:
			"Still not sure? Read what graduates built, then start your own Voyage.",
		variant: "component",
		ActionComponent: (
			<div className="flex flex-col gap-4 items-center md:flex-row justify-center">
				<ActionButton text="See the Voyage" href="/teams/standard-voyage" />
				<SecondaryActionButton
					text="Join the Community"
					href="/community/about"
				/>
			</div>
		),
		testimonial: {
			text: "I went from watching tutorials alone to shipping a real product with a team I still work with today.",
			author: "Sarah Chen",
			role: "Full Stack Developer at TechCorp",
		},
	},
};
