import { Badge } from "#/components/ui/badge.tsx";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "#/components/ui/card.tsx";
import type { TimelineItem as TimelineItemType } from "#/content/teams/timeline.ts";

interface TimelineProps {
	items: TimelineItemType[];
}

const timelineStyles = `
	grid
	grid-cols-1
	gap-4
	md:grid-cols-3
`;

export function Timeline({ items }: TimelineProps) {
	return (
		<ol className={timelineStyles}>
			{items.map((item) => (
				<TimelineItem key={item.badge} item={item} />
			))}
		</ol>
	);
}

// ==== Timeline Item

interface TimelineItemProps {
	item: TimelineItemType;
}

const timelineItemCardStyles = `
	h-full
	shadow-sm
	ring-0
	border
	border-line
	hover:border-primary
`;
const timelineItemMarkerStyles = `
	mb-3
	uppercase
	font-bold
	rounded-sm	
	px-2
	py-3
`;

export function TimelineItem({ item }: TimelineItemProps) {
	return (
		<li>
			<Card className={timelineItemCardStyles}>
				<CardHeader>
					<Badge
						className={timelineItemMarkerStyles}
						style={{ backgroundColor: `var(--color-step-${item.step})` }}
					>
						{item.badge}
					</Badge>
					<CardTitle className="font-extrabold text-lg -mb-2">
						{item.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-neutral-focus text-sm font-medium">
						{item.description}
					</p>
				</CardContent>
			</Card>
		</li>
	);
}
