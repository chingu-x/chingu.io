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

type PrimaryButtonProps = {
	primaryText: string;
	primaryHref: string;
	primaryOpenInNewTab?: boolean;
};

type SecondaryButtonProps = {
	secondaryText?: string;
	secondaryHref?: string;
	secondaryOpenInNewTab?: boolean;
};

type BottomCtaProps = {
	title: string;
	lede: ReactNode;
	footerText?: ReactNode;
} & (
	| ({ variant?: "buttons" } & PrimaryButtonProps)
	| {
			variant: "component";
			ActionComponent: ReactNode;
			primaryText?: never;
			primaryHref?: never;
			primaryOpenInNewTab?: never;
	  }
) &
	SecondaryButtonProps;

export function BottomCta(props: BottomCtaProps) {
	const { title, lede, footerText } = props;
	return (
		<section className={baseStyles}>
			<h2 className={titleStyles}>{title}</h2>
			<p className={cn(sharedTypography.lede, "m-w-[500px]")}>{lede}</p>
			{props.variant !== "component" ? (
				<TwoButtonCta
					primaryText={props.primaryText}
					primaryHref={props.primaryHref}
					primaryOpenInNewTab={props.primaryOpenInNewTab}
					secondaryText={props.secondaryText}
					secondaryHref={props.secondaryHref}
					secondaryOpenInNewTab={props.secondaryOpenInNewTab}
					className="mt-4"
				/>
			) : (
				<div className="mt-4">{props.ActionComponent}</div>
			)}
			{footerText && (
				<p className="text-2xs font-bold uppercase text-neutral mt-2">
					{footerText}
				</p>
			)}
		</section>
	);
}
