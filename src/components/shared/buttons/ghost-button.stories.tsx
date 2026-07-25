import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { GhostButton } from "./ghost-button.tsx";

const meta: Meta<typeof GhostButton> = {
	title: "Components/Shared/Buttons/GhostButton",
	component: GhostButton,
	args: {
		text: "Learn more",
	},
};

type Story = StoryObj<typeof GhostButton>;

export default meta;
export const Default: Story = {};
export const WithLink: Story = {
	args: {
		href: "#",
	},
};
