import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialsSection, TestimonialCard } from "./testimonials";
import { testimonials } from "#/content/home/testimonials";

const meta = {
	title: "Components/Home/Testimonials",
	component: TestimonialsSection,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof TestimonialsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleTestimonial: Story = {
	render: () => <TestimonialCard testimonial={testimonials[0]} />,
};

export const AllTestimonials: Story = {
	args: {},
};
