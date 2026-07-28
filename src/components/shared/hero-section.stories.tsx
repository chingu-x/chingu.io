import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { RolesHeroSection } from "./hero-section";

const meta = {
	title: "Components/Shared/HeroSection",
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
