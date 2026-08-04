import { RolesHeaderBadge } from "#/components/shared/header-badge.tsx";
import { TwoButtonCta } from "#/components/shared/two-button-cta.tsx";
import { Card } from "#/components/ui/card.tsx";
import { rolesTypography } from "#/styles/roles.ts";

const HeroSectionStyles = `
	flex flex-col 
	items-center 
	bg-[radial-gradient(circle_at_50%_100%,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,transparent_60%)]
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
			<h1 className={rolesTypography.h1}>{heading}</h1>
			<p className={rolesTypography.lede}>{description}</p>
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
					<p className={rolesTypography.lede}>{testimonial.text}</p>
					<div className="text-neutral">{`— ${testimonial.author}, ${testimonial.role}`}</div>
				</Card>
			)}
		</div>
	);
}
