import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { SecondaryActionButton } from "./secondary-action-button";

const meta = {
	title: "Components/Shared/Buttons/SecondaryActionButton",
	component: SecondaryActionButton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof SecondaryActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "Join the Community",
		href: "/community/about",
	},
};

export const LongText: Story = {
	args: {
		text: "Learn More About Our Mission",
		href: "/about",
	},
};

export const WithCustomClass: Story = {
	args: {
		text: "Get Started",
		href: "/get-started",
		className: "text-sm px-4 py-3",
	},
};
