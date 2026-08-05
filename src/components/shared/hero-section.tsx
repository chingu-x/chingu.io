import { RolesHeaderBadge } from "#/components/shared/header-badge.tsx";
import { TwoButtonCta } from "#/components/shared/two-button-cta.tsx";
import { Card } from "#/components/ui/card.tsx";
import { cn } from "#/lib/utils.ts";
import { sharedTypography } from "#/styles/shared.ts";

const HeroSectionStyles = `
	flex flex-col 
	items-center 
	bg-[radial-gradient(circle_at_50%_50%,color-mix(in_srgb,var(--primary)_22%,transparent)_0%,transparent_60%)]
	text-center
	gap-9
	mt-18
	px-content-margin
	pb-18
`;

type Testimonial = {
	text: string;
	author: string;
	role: string;
};

interface HeroSectionProps {
	badgeText: string;
	heading: string;
	description: string;
	primaryButtonText?: string;
	primaryButtonHref?: string;
	secondaryButtonText?: string;
	secondaryButtonHref?: string;
	testimonial?: Testimonial;
}

export function HeroSection({
	badgeText,
	heading,
	description,
	primaryButtonText,
	primaryButtonHref,
	secondaryButtonText,
	secondaryButtonHref,
	testimonial,
}: HeroSectionProps) {
	return (
		<div className={HeroSectionStyles}>
			<RolesHeaderBadge text={badgeText} cornerSize="full" variant="hero" />
			<h1 className={sharedTypography.h1}>{heading}</h1>
			<p className={sharedTypography.lede}>{description}</p>
			{primaryButtonText && primaryButtonHref && (
				<TwoButtonCta
					primaryText={primaryButtonText}
					primaryHref={primaryButtonHref}
					secondaryText={secondaryButtonText}
					secondaryHref={secondaryButtonHref}
				/>
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
