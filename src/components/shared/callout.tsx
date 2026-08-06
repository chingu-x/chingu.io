import type * as React from "react";
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
	rounded-3xl
`;

interface CalloutProps {
	headerBadgeText: string;
	title: string;
	sectionLedge: string;
	actionButtonText?: string;
	href?: string;
	showPricingFooter?: boolean;
	badgeClassName?: string;
}

export const CalloutFrame = ({ children }: { children: React.ReactNode }) => {
	return <Card className={calloutCardStyles}>{children}</Card>;
};

export const Callout = ({
	headerBadgeText,
	title,
	sectionLedge,
	actionButtonText,
	href,
	showPricingFooter = false,
	badgeClassName = "text-[#d8ebe2] bg-[rgba(57,71,65,0.52)]",
}: CalloutProps) => {
	return (
		<Card className={calloutCardStyles}>
			<div className="px-6 py-4">
				<HeadingBadge text={headerBadgeText} className={badgeClassName} />
				<h2 className={cn(t.leftAlign.h2, "py-5 text-left!")}>{title}</h2>
				<p
					className={cn(
						t.leftAlign.pSectionLede,
						"text-line-soft/70 pb-10 text-left!",
					)}
				>
					{sectionLedge}
				</p>
				{actionButtonText && href && (
					<ActionButton text={actionButtonText} variant="light" href={href} />
				)}
			</div>
			{showPricingFooter && (
				<div className="self-center flex flex-col items-center p-4 -space-y-4">
					<div className="text-[56px] font-extrabold text-info">$0</div>
					<div className={cn(t.pSectionLede, "text-line-soft/70")}>
						paid by voyagers, ever
					</div>
				</div>
			)}
		</Card>
	);
};
