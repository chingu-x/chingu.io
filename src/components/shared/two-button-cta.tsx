import { cn } from "#/lib/utils.ts";
import { ActionButton } from "./buttons/action-button";
import { SecondaryActionButton } from "./buttons/secondary-action-button";

interface TwoButtonCtaProps {
	primaryText: string;
	primaryHref: string;
	secondaryText: string;
	secondaryHref: string;
	className?: string;
}

const twoButtonCtaStyles = `
	flex flex-col 
	gap-4 
	items-center 
	mb-12
	mx-auto 
	md:flex-row
`;

export function TwoButtonCta({
	primaryText,
	primaryHref,
	secondaryText,
	secondaryHref,
	className,
}: TwoButtonCtaProps) {
	return (
		<div className={cn(twoButtonCtaStyles, className)}>
			<div className="relative z-10">
				<ActionButton text={primaryText} href={primaryHref} />
			</div>

			<SecondaryActionButton text={secondaryText} href={secondaryHref} />
		</div>
	);
}
