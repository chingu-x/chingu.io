import type { ReactNode } from "react";
import { rolesTypography } from "#/styles/roles.ts";
import { Card } from "@/components/ui/card";

const cardStyles = `
	px-6 flex gap-2
	h-full
	border
	border-line
	relative
	overflow-hidden
	shadow-md
	hover:bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--primary)_12%,transparent)_0%,transparent_60%)]
	transition-all
	hover:-translate-y-1
	hover:border-primary/45
	hover:border
	hover:shadow-lg
`

interface CardProps {
	title: string;
	children: ReactNode;
}

function RolesCard({ title, children }: CardProps) {
	return (
		<article>
			<Card className={cardStyles}>
				<h3 className={rolesTypography.h3}>{title}</h3>
				<div className={rolesTypography.p}>{children}</div>
			</Card>
		</article>
	);
}

interface CardsProps {
	items: Array<{
		title: string;
		description: string;
	}>;
}

export function Cards({ items }: CardsProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
			{items.map((item) => (
				<RolesCard key={item.title} title={item.title}>
					<p>{item.description}</p>
				</RolesCard>
			))}
		</div>
	);
}
