import { ContentSection } from "#/components/home/content-section.tsx";
import { HeadingBadge } from "#/components/home/heading-badge.tsx";
import { ActionButton } from "#/components/shared/buttons/action-button.tsx";
import { cn } from "#/lib/utils.ts";
import { homeTypography as t } from "#/styles/home.ts";
import { Card } from "@/components/ui/card";

const calloutCardStyles = `
	bg-foreground 
	bg-[radial-gradient(circle,rgba(64,147,109,0.45),transparent_65%)]
	text-background
	lg:grid lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-8
	lg:px-10
`;

export const Callout = () => {
	return (
		<ContentSection id="callout">
			<Card className={calloutCardStyles}>
				<div className="px-6 py-4">
					<HeadingBadge
						text="No paywall, no investors"
						className="text-[#d8ebe2] bg-[rgba(57,71,65,0.52)]"
					/>
					<h2 className={cn(t.leftAlign.h2, "py-5 text-left!")}>Volunteer-run and community-funded.</h2>
					<p className={cn(t.leftAlign.pSectionLede, "text-line-soft/70 pb-10 text-left!")}>
						We sustain ourselves on the time of members and industry pros who
						want to keep growing and giving back.
					</p>
					<ActionButton
						text="Read the full story"
						variant="light"
						href="/chingu/site-redesign/community/why-its-free"
					/>
				</div>
				<div className="self-center flex flex-col items-center p-4 -space-y-4">
					<div className="text-[56px] font-extrabold text-info">$0</div>
					<div className={cn(t.pSectionLede, "text-line-soft/70")}>
						paid by voyagers, ever
					</div>
				</div>
			</Card>
		</ContentSection>
	);
};
