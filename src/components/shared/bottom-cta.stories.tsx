import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { BottomCta } from "./bottom-cta.tsx";
import { ActionButton } from "./buttons/action-button";
import { SecondaryActionButton } from "./buttons/secondary-action-button";

const meta = {
	title: "Components/Shared/BottomCta",
	component: BottomCta,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					'Closing call-to-action section. By default it renders the standard primary/secondary button pair (`TwoButtonCta`). Pass `variant="component"` along with an `ActionComponent` element to replace those buttons with any React node — a signup form, a pricing table, a custom button group. `variant` defaults to `"buttons"`, so existing usages keep working unchanged; when passing a custom component the `primary*` props must be omitted. The `secondary*` and `footerText` props are accepted in both variants.',
			},
		},
	},
	tags: ["autodocs"],
} satisfies Meta<typeof BottomCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Find your path into the Voyage.",
		lede: "See how the seven weeks work, or apply now for the next cohort.",
		primaryText: "See the Voyage",
		primaryHref: "/teams/standard-voyage",
		secondaryText: "Join the Community",
		secondaryHref: "/community/about",
	},
};

export const DeveloperRoles: Story = {
	args: {
		title: "Ready to ship code with a team?",
		lede: "Learn Git, code review, and real team collaboration in seven weeks.",
		primaryText: "Apply Now →",
		primaryHref: "/roles/developers",
		secondaryText: "Learn More",
		secondaryHref: "/about",
	},
};

export const DesignerRoles: Story = {
	args: {
		title: "Create real products, not just mockups.",
		lede: "Build a design system, defend your work, and ship designs that developers actually use.",
		primaryText: "Explore Designer Roles →",
		primaryHref: "/roles/designers",
		secondaryText: "View Projects",
		secondaryHref: "/community",
	},
};

export const WithoutSecondaryButton: Story = {
	args: {
		title: "Applications for the next Voyage are open.",
		lede: "The secondary button is optional, so a single primary action is enough.",
		primaryText: "Apply Now",
		primaryHref: "/apply",
	},
};

export const LinksOpenInNewTab: Story = {
	args: {
		title: "Read the handbook in a new tab.",
		lede: "`primaryOpenInNewTab` and `secondaryOpenInNewTab` forward the target to each link.",
		primaryText: "Read the Handbook",
		primaryHref: "https://github.com/chingu-org/handbook",
		primaryOpenInNewTab: true,
		secondaryText: "Browse Projects",
		secondaryHref: "https://github.com/chingu-org",
		secondaryOpenInNewTab: true,
	},
};

export const WithFooterText: Story = {
	args: {
		title: "Still deciding?",
		lede: "`footerText` renders a small uppercase note underneath the action.",
		primaryText: "Compare Voyages",
		primaryHref: "/teams/compare",
		secondaryText: "Join the Community",
		secondaryHref: "/community/about",
		footerText: "No fees, ever",
	},
};

export const WithActionComponent: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Pass `variant="component"` and an `ActionComponent` node to take over the action area entirely. The `primary*` props are forbidden in this variant (`?: never`).',
			},
		},
	},
	args: {
		title: "Get Voyage updates in your inbox.",
		lede: "One email a month: new cohorts, open roles, and what our alumni shipped.",
		variant: "component",
		footerText: "Unsubscribe any time",
		ActionComponent: (
			<div className="flex flex-col gap-4 items-center md:flex-row justify-center mt-4">
				<input
					type="email"
					placeholder="you@example.com"
					aria-label="Email address"
					className="px-6 py-4 rounded-full border-0 bg-background text-foreground w-full max-w-sm"
				/>
				<ActionButton text="Subscribe" href="/subscribe" />
			</div>
		),
	},
};

export const WithCustomButtonGroup: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"The action slot accepts any node, so the default button pair can be rebuilt from individual button components with different styling.",
			},
		},
	},
	args: {
		title: "Two ways to get involved.",
		lede: "Bring your skills to a team, or bring your company to sponsor one.",
		variant: "component",
		ActionComponent: (
			<div className="flex flex-col gap-4 items-center md:flex-row justify-center mt-4">
				<ActionButton text="Apply as a Chingu" href="/apply" />
				<SecondaryActionButton
					text="Sponsor a Team"
					href="/community/sponsor"
				/>
			</div>
		),
	},
};
