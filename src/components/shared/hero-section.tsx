import type { ReactNode } from "react";
import { RolesHeaderBadge } from "#/components/shared/header-badge.tsx";
import { TwoButtonCta } from "#/components/shared/two-button-cta.tsx";
import { Card } from "#/components/ui/card.tsx";
import { cn } from "#/lib/utils.ts";
import { sharedTypography } from "#/styles/shared.ts";

const HeroSectionStyles = `
	flex flex-col 
	items-center 
	bg-[radial-gradient(circle_at_50%_70%,color-mix(in_srgb,var(--primary)_22%,transparent)_0%,transparent_60%)]
	text-center
	gap-9
	py-18
	px-content-margin
`;

type Testimonial = {
	text: string;
	author: string;
	role: string;
};

type PrimaryButtonProps = {
	primaryButtonText?: string;
	primaryButtonHref?: string;
};

type SecondaryButtonProps = {
	secondaryButtonText?: string;
	secondaryButtonHref?: string;
};

type HeroSectionProps = {
	badgeText: string;
	heading: string;
	description: string;
	testimonial?: Testimonial;
} & (
	| ({ variant?: "buttons" } & PrimaryButtonProps & SecondaryButtonProps)
	| {
			variant: "component";
			ActionComponent: ReactNode;
			primaryButtonText?: never;
			primaryButtonHref?: never;
			secondaryButtonText?: never;
			secondaryButtonHref?: never;
	  }
);

export function HeroSection(props: HeroSectionProps) {
	const { badgeText, heading, description, testimonial } = props;
	return (
		<div className={HeroSectionStyles}>
			<RolesHeaderBadge text={badgeText} cornerSize="full" variant="hero" />
			<h1 className={sharedTypography.h1}>{heading}</h1>
			<p className={sharedTypography.lede}>{description}</p>
			{props.variant !== "component" &&
				props.primaryButtonText &&
				props.primaryButtonHref && (
					<TwoButtonCta
						primaryText={props.primaryButtonText}
						primaryHref={props.primaryButtonHref}
						secondaryText={props.secondaryButtonText}
						secondaryHref={props.secondaryButtonHref}
					/>
				)}
			{props.variant === "component" && (
				<div className="mt-4">{props.ActionComponent}</div>
			)}
			{testimonial && (
				<Card className="max-w-180 px-8 py-6">
					<div
						className={cn(sharedTypography.lede, "text-base font-normal")}
					>{`"${testimonial.text}"`}</div>
					<div className="text-neutral">{`— ${testimonial.author}, ${testimonial.role}`}</div>
				</Card>
			)}
		</div>
	);
}
