import type { ReactNode } from "react";
import { TwoButtonCta } from "#/components/shared/two-button-cta.tsx";
import { cn } from "#/lib/utils.ts";
import { sharedTypography } from "#/styles/shared.ts";

const baseStyles = `
    flex flex-col
    gap-4
    pt-16
    pb-12
    px-content-margin
    text-center
    bg-radial-[rgba(64,147,109,0.18),transparent_60%]
`;

const titleStyles = `
    text-[clamp(2.5rem,6vw,4.5rem)]
    font-extrabold
    text-balance
`;

interface BottomCtaProps {
	title: string;
	lede: ReactNode;
	primaryText: string;
	primaryHref: string;
	secondaryText?: string;
	secondaryHref?: string;
	footerText?: ReactNode;
}

export function BottomCta({
	title,
	lede,
	primaryText,
	primaryHref,
	secondaryText,
	secondaryHref,
	footerText,
}: BottomCtaProps) {
	return (
		<section className={baseStyles}>
			<h2 className={titleStyles}>{title}</h2>
			<p className={cn(sharedTypography.lede, "m-w-[500px]")}>{lede}</p>
			<TwoButtonCta
				primaryText={primaryText}
				primaryHref={primaryHref}
				secondaryText={secondaryText}
				secondaryHref={secondaryHref}
				className="mt-4"
			/>
			{footerText && (
				<p className="text-2xs font-bold uppercase text-neutral mt-2">
					{footerText}
				</p>
			)}
		</section>
	);
}
