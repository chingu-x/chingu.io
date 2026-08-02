import type { ReactNode } from "react";
import { listItemStyles } from "#/components/shared/checklist.tsx";
import { rolesTypography } from "#/styles/roles.ts";
import type { ComparisonCard, DescriptionCard } from "#/types/content/card.ts";
import { Card } from "@/components/ui/card";

const cardStyles = (featured?: boolean) => `
	p-6 flex gap-2
	h-full
	border
	${featured ? "border-primary/45" : "border-line"}
	relative
	overflow-hidden
	shadow-md
	hover:bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,transparent_60%)]
	transition-all
	hover:-translate-y-1
	hover:border-primary/45
	hover:border
	hover:shadow-lg
`;

const baseGridStyles = "grid grid-cols-1 md:grid-cols-2 gap-6 py-10";

interface BaseCardProps {
	title: string;
	featured?: boolean;
	children: ReactNode;
}

function BaseCard({ title, featured, children }: BaseCardProps) {
	return (
		<article>
			<Card className={cardStyles(featured)}>
				<h3 className={rolesTypography.h3}>{title}</h3>
				<div className={rolesTypography.p}>{children}</div>
			</Card>
		</article>
	);
}

interface DescriptionCardsProps {
	items: DescriptionCard[];
}

const descriptionCardGridStyles = `${baseGridStyles} lg:grid-cols-3`;

export function DescriptionCards({ items }: DescriptionCardsProps) {
	return (
		<div className={descriptionCardGridStyles}>
			{items.map((item) => (
				<BaseCard key={item.title} title={item.title}>
					<p>{item.description}</p>
				</BaseCard>
			))}
		</div>
	);
}

interface ListCardsProps {
	items: ComparisonCard[];
}

export function ListCards({ items }: ListCardsProps) {
	return (
		<div className={baseGridStyles}>
			{items.map((item) => (
				<BaseCard key={item.title} title={item.title} featured={item.featured}>
					<ul className="flex flex-col gap-2">
						{item.items.map((listItem) => (
							<li key={listItem} className={listItemStyles}>
								<span>{listItem}</span>
							</li>
						))}
					</ul>
				</BaseCard>
			))}
		</div>
	);
}

export function Cards({ items }: DescriptionCardsProps) {
	return <DescriptionCards items={items} />;
}
