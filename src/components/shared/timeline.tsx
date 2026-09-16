import { Badge } from "#/components/ui/badge.tsx";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "#/components/ui/card.tsx";
import type { TimelineItem as TimelineItemType } from "#/types/content/timeline.ts";

interface TimelineProps {
	items: TimelineItemType[];
	columnLayout?: "flex" | "single";
}

const baseTimelineStyles = `
	my-8
	grid
	grid-cols-1
	gap-4
`;

const timelineStyles = {
	flex: `${baseTimelineStyles} md:grid-cols-3`,
	single: baseTimelineStyles,
};

export function Timeline({ items, columnLayout = "flex" }: TimelineProps) {
	return (
		<ol className={timelineStyles[columnLayout]}>
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
