import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { TwoButtonCta } from "./two-button-cta";

const meta = {
	title: "Components/Shared/TwoButtonCta",
	component: TwoButtonCta,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TwoButtonCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		primaryText: "See the Voyage",
		primaryHref: "/teams/standard-voyage",
		secondaryText: "Join the Community",
		secondaryHref: "/community/about",
	},
};

export const AlternativeButtons: Story = {
	args: {
		primaryText: "Apply Now →",
		primaryHref: "/apply",
		secondaryText: "Learn More",
		secondaryHref: "/about",
	},
};

export const LongButtonText: Story = {
	args: {
		primaryText: "Start Your Application →",
		primaryHref: "/apply",
		secondaryText: "Explore Our Program",
		secondaryHref: "/program",
	},
};
