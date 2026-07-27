import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { BottomCta } from "./bottom-cta.tsx";

const meta = {
	title: "Components/Shared/BottomCta",
	component: BottomCta,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof BottomCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "bottom-cta",
		headingText: "Find your path into the Voyage.",
		lede: "See how the seven weeks work, or apply now for the next cohort.",
		primaryText: "See the Voyage",
		primaryHref: "/teams/standard-voyage",
		secondaryText: "Join the Community",
		secondaryHref: "/community/about",
	},
};

export const DeveloperRoles: Story = {
	args: {
		id: "developer-bottom-cta",
		headingText: "Ready to ship code with a team?",
		lede: "Learn Git, code review, and real team collaboration in seven weeks.",
		primaryText: "Apply Now →",
		primaryHref: "/roles/developers",
		secondaryText: "Learn More",
		secondaryHref: "/about",
	},
};

export const DesignerRoles: Story = {
	args: {
		id: "designer-bottom-cta",
		headingText: "Create real products, not just mockups.",
		lede: "Build a design system, defend your work, and ship designs that developers actually use.",
		primaryText: "Explore Designer Roles →",
		primaryHref: "/roles/designers",
		secondaryText: "View Projects",
		secondaryHref: "/community",
	},
};
