import { TwoButtonCta } from "#/components/shared/two-button-cta.tsx";
import { rolesTypography } from "#/styles/roles.ts";

const baseStyles = `
    flex flex-col
    gap-4
    pt-16
    pb-10
    px-content-margin
    text-center
`;

const titleStyles = `
    text-[clamp(2.5rem,6vw,4.5rem)] 
    font-extrabold
`;

export function BottomCta() {
	return (
		<section className={baseStyles}>
			<h2 className={titleStyles}>Find your path into the Voyage.</h2>
			<p className={rolesTypography.lede}>
				See how the seven weeks work, or apply now for the next cohort.
			</p>
			<TwoButtonCta
				primaryText="See the Voyage"
				primaryHref="/teams/standard-voyage"
				secondaryText="Join the Community"
				secondaryHref="/community/about"
				className="mt-4"
			/>
		</section>
	);
}
