import { RolesHeaderBadge } from "#/components/shared/header-badge.tsx";
import { TwoButtonCta } from "#/components/shared/two-button-cta.tsx";
import { rolesTypography } from "#/styles/roles.ts";

const HeroSectionStyles = `
	flex flex-col 
	items-center 
	bg-[radial-gradient(circle_at_50%_100%,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,transparent_60%)]
	text-center
	gap-9
	mt-18
	px-content-margin
`;

interface HeroSectionProps {
	badgeText: string;
	heading: string;
	description: string;
}

export function RolesHeroSection({
	badgeText,
	heading,
	description,
}: HeroSectionProps) {
	return (
		<div className={HeroSectionStyles}>
			<RolesHeaderBadge
				text={badgeText}
				cornerSize="full"
				variant="hero"
			/>
			<h1 className={rolesTypography.h1}>{heading}</h1>
			<p className={rolesTypography.lede}>{description}</p>
			<TwoButtonCta
				primaryText="See the Voyage"
				primaryHref="/teams/standard-voyage"
				secondaryText="Join the Community"
				secondaryHref="/community/about"
			/>
		</div>
	);
}
