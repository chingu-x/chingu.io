import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { RolesHeroSection } from "./hero-section";

const meta = {
	title: "Components/Roles/HeroSection",
	component: RolesHeroSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof RolesHeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		badgeText: "For Developers",
		heading: "Ship code with a team. Master Git. Build for production.",
		description:
			"Whether you're backend, frontend, or full stack, you'll work the same way real teams do: pull requests, standups, retros, and a deployed product at the end.",
	},
};
