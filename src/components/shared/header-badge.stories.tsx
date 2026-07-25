import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { RolesHeaderBadge } from "./header-badge";

const meta = {
	title: "Components/Roles/HeaderBadge",
	component: RolesHeaderBadge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof RolesHeaderBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: "Who this is for",
	},
};

export const SectionHeader: Story = {
	args: {
		text: "What you'll actually learn",
	},
};

export const HeroHeader: Story = {
	args: {
		text: "For developers",
		variant: "hero",
		cornerSize: "full",
	},
};
