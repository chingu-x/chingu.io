import { type Testimonial, testimonials } from "#/content/home/testimonials.ts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cardStyles = `
	group
	border hover:border-primary/40
	rounded-2xl
	px-6 py-8
	transition-[all,box-shadow,border-color]
	duration-200
	ease-[var(--ease)]
	hover:shadow-md
	hover:-translate-y-1
	flex flex-col
`;

const themeStyles = `
	text-xs
	font-semibold
	uppercase
	text-primary/60
	mb-3
`;

const quoteStyles = `
	text-base
	leading-relaxed
	mb-6
	flex-grow
	italic
`;

const authorStyles = `
	font-semibold
	text-neutral-focus
`;

const roleStyles = `
	text-sm
	text-neutral
`;

export const TestimonialsSection = () => {
	return (
		<div className="grid grid-cols-1 gap-8">
			{testimonials.map((testimonial) => (
				<TestimonialCard key={testimonial.author} testimonial={testimonial} />
			))}
		</div>
	);
};

const TestimonialCard = ({
	testimonial,
}: {
	testimonial: Testimonial;
}) => {
	return (
		<Card className={cardStyles}>
			<CardHeader className="p-0">
				<CardDescription className={themeStyles}>
					{testimonial.theme}
				</CardDescription>
				<div className={quoteStyles}>"{testimonial.quote}"</div>
			</CardHeader>
			<CardContent className="p-0">
				<CardTitle className={authorStyles}>{testimonial.author}</CardTitle>
				<p className={roleStyles}>{testimonial.role}</p>
			</CardContent>
		</Card>
	);
};
