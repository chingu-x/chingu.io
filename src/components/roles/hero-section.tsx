import { RolesHeaderBadge } from "#/components/roles/header-badge.tsx";
import { ActionButton } from "#/components/shared/action-button.tsx";
import { SecondaryActionButton } from "#/components/shared/secondary-action-button.tsx";
import { rolesTypography } from "#/styles/roles.ts";

const HeroSectionStyles = `
	flex flex-col 
	items-center 
	bg-[radial-gradient(circle_at_50%_0%,rgb(var(--color-primary)/0.12)_0%,transparent_60%)]
	text-center
	gap-9
	mt-18
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
			<RolesHeaderBadge text={badgeText} cornerSize="full" variant="hero" />
			<h1 className={rolesTypography.h1}>{heading}</h1>
			<p className={rolesTypography.lede}>{description}</p>
			<div className="flex gap-4 mb-12">
				<ActionButton text="See the Voyage" href="/teams/standard-voyage" />
				<SecondaryActionButton
					text="Join the Community"
					href="/community/about"
				/>
			</div>
		</div>
	);
}
