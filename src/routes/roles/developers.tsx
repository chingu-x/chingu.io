import { createFileRoute } from "@tanstack/react-router";
import { Cards } from "#/components/shared/cards.tsx";
import { RolesContentSection } from "#/components/shared/layout/content-section.tsx";
import { RolesHeroSection } from "#/components/shared/hero-section.tsx";
import { developerTypes } from "#/content/developer-types.ts";
import { pageContainerStylesWithPadding } from "#/styles/containers.ts";

export const Route = createFileRoute("/roles/developers")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className={pageContainerStylesWithPadding}>
			<RolesHeroSection
				badgeText="For Developers"
				heading="Ship code with a team. Master Git. Build for production."
				description="Whether you’re backend, frontend, or full stack, you’ll work the same way real teams do: pull requests, standups, retros, and a deployed product at the end."
			/>
			<RolesContentSection
				id="developer-types"
				headerBadgeText="Who this is for"
				headingText="If you can build something solo, you’re ready for a team."
			>
				<Cards items={developerTypes} />
			</RolesContentSection>
		</div>

	)
}
