import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { HeroSection } from "./hero-section";

const meta = {
	title: "Components/Shared/HeroSection",
	component: HeroSection,
	parameters: {
		layout: "fullscreen",
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
