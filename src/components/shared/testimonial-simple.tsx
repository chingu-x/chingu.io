import { Card } from "#/components/ui/card.tsx";
import { cn } from "#/lib/utils.ts";
import { sharedTypography } from "#/styles/shared.ts";

export type SimpleTestimonial = {
	quote: string;
	author: string;
	voyageRole: string;
};

const TestimonialSimple = ({
	quote,
	author,
	voyageRole,
}: SimpleTestimonial) => {
	return (
		<Card className="max-w-180 px-8 py-6">
			<div
				className={cn(sharedTypography.lede, "text-base font-normal")}
			>{`"${quote}"`}</div>
			<div className="text-neutral">{`— ${author}, ${voyageRole}`}</div>
		</Card>
	);
};

export default TestimonialSimple;
