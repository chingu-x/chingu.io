import { cn } from "#/lib/utils.ts";
import { ActionButton } from "./buttons/action-button";
import { SecondaryActionButton } from "./buttons/secondary-action-button";

interface TwoButtonCtaProps {
	primaryText: string;
	primaryHref: string;
	primaryOpenInNewTab?: boolean;
	secondaryText?: string;
	secondaryHref?: string;
	secondaryOpenInNewTab?: boolean;
	className?: string;
}

const twoButtonCtaStyles = `
	flex flex-col 
	gap-4 
	items-center 
	mx-auto 
	md:flex-row
`;

export function TwoButtonCta({
	primaryText,
	primaryHref,
	primaryOpenInNewTab = false,
	secondaryText,
	secondaryHref,
	secondaryOpenInNewTab = false,
	className,
}: TwoButtonCtaProps) {
	return (
		<div className={cn(twoButtonCtaStyles, className)}>
			<div className="relative z-10">
				<ActionButton
					text={primaryText}
					href={primaryHref}
					openInNewTab={primaryOpenInNewTab}
				/>
			</div>
			{secondaryText && secondaryHref && (
				<SecondaryActionButton
					text={secondaryText}
					href={secondaryHref}
					openInNewTab={secondaryOpenInNewTab}
				/>
			)}
		</div>
	);
}
