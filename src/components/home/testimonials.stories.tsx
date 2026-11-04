import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { testimonials } from "#/content/home/testimonials";
import { TestimonialCard, TestimonialsSection } from "./testimonials";

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
	parameters: {
		docs: {
			description: {
				story:
					"The component will be multiple rows of 3 if there's more than 3 testimonials.",
			},
		},
	},
};
