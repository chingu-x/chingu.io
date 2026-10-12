import { Card } from "#/components/ui/card.tsx";
import { cn } from "#/lib/utils.ts";
import { sharedTypography } from "#/styles/shared.ts";

type Testimonial = {
	text: string;
	author: string;
	voyageRole: string;
};

const TestimonialSimple = ({ text, author, voyageRole }: Testimonial) => {
	return (
		<Card className="max-w-180 px-8 py-6">
			<div
				className={cn(sharedTypography.lede, "text-base font-normal")}
			>{`"${text}"`}</div>
			<div className="text-neutral">{`— ${author}, ${voyageRole}`}</div>
		</Card>
	);
};

export default TestimonialSimple;
