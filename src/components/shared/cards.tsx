import type { ReactNode } from "react";
import { listItemStyles } from "#/components/shared/checklist.tsx";
import { cn } from "#/lib/utils.ts";
import { sharedTypography } from "#/styles/shared.ts";
import type { ComparisonCard, DescriptionCard } from "#/types/content/card.ts";
import { Card } from "@/components/ui/card";

const cardStyles = (featured?: boolean) => `
	p-6 flex gap-2
	h-full
	ring-0
	border border-line
	rounded-xl
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

const baseGridStyles = "grid gap-6 py-10 w-full";

interface BaseCardProps {
	title: string;
	featured?: boolean;
	children: ReactNode;
}

function BaseCard({ featured, children }: BaseCardProps) {
	return (
		<article>
			<Card className={cardStyles(featured)}>{children}</Card>
		</article>
	);
}

const descriptionCardsGridStyles = (cardsCount: number) =>
	cn(
		baseGridStyles,
		`
			grid-cols-1
			md:grid-cols-2
		`,
		cardsCount >= 3 && "lg:grid-cols-3",
	);

export function DescriptionCards({ items }: { items: DescriptionCard[] }) {
	return (
		<div className={descriptionCardsGridStyles(items.length)}>
			{items.map((item) => (
				<BaseCard key={item.title} title={item.title}>
					<h3 className={sharedTypography.h3}>{item.title}</h3>
					<p className={sharedTypography.p}>{item.description}</p>
				</BaseCard>
			))}
		</div>
	);
}

const listCardsGridStyles = `
	${baseGridStyles} 
	grid-cols-1
	md:grid-cols-2
`;

export function ListCards({ items }: { items: ComparisonCard[] }) {
	return (
		<div className={listCardsGridStyles}>
			{items.map((item) => (
				<BaseCard key={item.title} title={item.title} featured={item.featured}>
					<h3 className={sharedTypography.h3}>{item.title}</h3>
					<ul className={cn(sharedTypography.p, "flex flex-col gap-2")}>
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

const statCardsGridStyles = `
	${baseGridStyles}
	grid-cols-[repeat(auto-fit,minmax(170px,1fr))]
`;

export function StatCards({ items }: { items: DescriptionCard[] }) {
	return (
		<div className={statCardsGridStyles}>
			{items.map((item) => (
				<BaseCard key={item.title} title={item.title}>
					<h3 className={sharedTypography.h2LeftAlign}>{item.title}</h3>
					<p className="uppercase text-neutral font-bold text-xs">
						{item.description}
					</p>
				</BaseCard>
			))}
		</div>
	);
}

// default: description cards,
// maybe rename and refactor existing code to just use DescriptionCard
export function Cards({ items }: { items: DescriptionCard[] }) {
	return <DescriptionCards items={items} />;
}
