import { type Testimonial, testimonials } from "#/content/home/testimonials.ts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const cardStyles = `
	group
	border-line-soft
	outline-none
	rounded-2xl
	px-6
	transition-[all,box-shadow,border-color]
	duration-200
	ease-[var(--ease)]
	hover:shadow-lg
	hover:-translate-y-1
	flex flex-col
	justify-between
`;

const titleStyles = `
	text-xl
	text-foreground
	font-bold
`;

const quoteStyles = `
	text-neutral-focus
	text-sm
	font-medium
	leading-relaxed
	mb-6
	flex-grow
`;

const authorStyles = `
	text-sm
	font-semibold
`;

const roleStyles = `
	text-xs
	text-neutral
`;

export const TestimonialsSection = () => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{testimonials.map((testimonial) => (
				<TestimonialCard key={testimonial.author} testimonial={testimonial} />
			))}
		</div>
	);
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
	return (
		<Card className={cardStyles}>
			<CardHeader className="p-0">
				<CardDescription className={titleStyles}>
					{testimonial.title}
				</CardDescription>
				<div className={quoteStyles}>"{testimonial.quote}"</div>
			</CardHeader>
			<CardContent className="p-0 self-center flex flex-col">
				<img
					className="w-18 h-18 rounded-full self-center mb-4"
					src={`/images/testimonial/${testimonial.image}`}
					alt={testimonial.author}
				/>
				<CardTitle className={authorStyles}>{testimonial.author}</CardTitle>
				<p className={roleStyles}>{testimonial.role}</p>
			</CardContent>
		</Card>
	);
};
