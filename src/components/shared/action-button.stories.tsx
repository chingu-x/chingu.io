import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ActionButton } from "./action-button.tsx";

const meta: Meta<typeof ActionButton> = {
	component: ActionButton,
	args: {
		text: "Join the next voyage",
		href: "/",
	},
};

type Story = StoryObj<typeof ActionButton>;

export default meta;

export const Default: Story = {};

export const Light: Story = {
	args: {
		variant: "light",
	},
};

export const Dark: Story = {
	args: {
		variant: "dark",
	},
};
