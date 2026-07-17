import type { Meta, StoryObj } from "@storybook/react";
import { testimonials } from "#/content/home/testimonials";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TestimonialsSection } from "./testimonials";

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

export const AllTestimonials: Story = {
	args: {},
};

export const SingleTestimonial: Story = {
	render: () => {
		const testimonial = testimonials[0];

		return (
			<div className="w-96">
				<Card
					className={`group border-line-soft outline-none rounded-2xl px-6 transition-[all,box-shadow,border-color] duration-200 ease-[var(--ease)] hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between py-8`}
				>
					<CardHeader className="p-0">
						<div className="text-xl text-foreground font-bold mb-6">
							{testimonial.title}
						</div>
						<div className="text-neutral-focus text-sm font-medium leading-relaxed mb-6 flex-grow">
							"{testimonial.quote}"
						</div>
					</CardHeader>
					<CardContent className="p-0 self-center flex flex-col items-center">
						<img
							className="w-18 h-18 rounded-full self-center mb-4"
							src={`/images/testimonial/${testimonial.image}`}
							alt={testimonial.author}
						/>
						<div className="text-sm font-semibold text-center">
							{testimonial.author}
						</div>
						<p className="text-xs text-neutral text-center">
							{testimonial.role}
						</p>
					</CardContent>
				</Card>
			</div>
		);
	},
};
