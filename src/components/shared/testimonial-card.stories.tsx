import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { developerTestimonial } from "#/content/roles/developer-testimonial";
import { TestimonialCard } from "./testimonial-card";

const meta = {
	title: "Components/Shared/TestimonialCard",
	component: TestimonialCard,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		testimonial: developerTestimonial,
	},
};

export const WithCustomTestimonial: Story = {
	args: {
		testimonial: {
			quote: "This experience transformed my approach to collaborative development and problem-solving.",
			name: "Sarah Chen",
			role: "Full-stack Developer · Voyage alum",
			avatarFallback: "SC",
		},
	},
};

export const LongQuote: Story = {
	args: {
		testimonial: {
			quote: "The journey through this program wasn't just about learning new technical skills. It was about understanding how to communicate effectively with teammates, how to handle code reviews constructively, and how to navigate the challenges that come with real-world development workflows.",
			name: "Marcus Johnson",
			role: "Frontend Developer · Voyage alum",
			avatarFallback: "MJ",
		},
	},
};
